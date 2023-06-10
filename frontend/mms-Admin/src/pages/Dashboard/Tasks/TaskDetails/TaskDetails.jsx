import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./TaskDetails.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import headerIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import reportIcon from "@/assets/icons/task-report-icon-green.png";
import mentorsIcon from "@/assets/icons/mentor-icon-green.png";
import mentorManagersIcon from "@/assets/icons/mentor-manager-icon-green.png";
import deleteIcon from "@/assets/icons/delete-icon-red.svg";
import DeleteNotificationModal from "@/components/Modals/DeleteNotification/DeleteNotification";
import { showModal } from "@/redux/Modal/ModalSlice";
import { getTaskDetails, deleteTask, getAllTasks } from "@/redux/Tasks/TasksSlice";
import { formatDistanceToNow } from "date-fns";
import { capitalizeFirstWord } from "@/helpers/textTransform";

function TaskDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const taskId = params.id;

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);
  const taskDetails = useSelector((state) => state.tasks.getTaskDetailsData);
  const errorDetails = useSelector((state) => state.tasks.error);
  const deleteTaskLoading = useSelector((state) => state.loading.deleteTaskLoading);

  useEffect(() => {
    dispatch(getTaskDetails(taskId));
  }, [dispatch, taskId]);

  const summaryDivData = [
    {
      icon: mentorManagersIcon,
      value: taskDetails?.mentorManagers?.length,
      caption: "Mentor Managers assigned to this task"
    },
    {
      icon: mentorsIcon,
      value: taskDetails?.mentors?.length,
      caption: "Mentors assigned to this task"
    },
    {
      icon: reportIcon,
      value: taskDetails?.reports?.length,
      caption: "Task / Reports",
      count: taskDetails?.reports?.length
    }
  ];

  const handleDeleteTask = async () => {
    let response = await dispatch(deleteTask(taskId));
    if (response.success) {
      dispatch(
        showModal({
          name: "taskDeleteNotification",
          modalData: {
            title: "Task Deleted Successfully",
            type: "task",
            redirectUrl: "/dashboard/tasks"
          }
        })
      );
      dispatch(getAllTasks());
    }
  };

  return (
    <div className={cx(styles.taskDetailsContainer, "flexCol")}>
      {taskDetails?.id ? (
        <>
          <div className={cx(styles.header, "flexCol")}>
            <div className={cx(styles.wrapper, "flexRow-align-center")}>
              <img className={cx(styles.icon)} src={headerIcon} alt='task-icon' />
              <div className={cx(styles.mainContent, "flexCol")}>
                <h5 className={cx(styles.title)}>{taskDetails?.title}</h5>
                <div className={cx(styles.metaData, "flexRow")}>
                  <img className={cx(styles.dateIcon)} src={calendarIcon} alt='calendar-icon' />
                  <span className={cx(styles.date)}>
                    {" "}
                    {taskDetails?.createdAt &&
                      capitalizeFirstWord(formatDistanceToNow(new Date(taskDetails?.createdAt), { addSuffix: true }))}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={cx(styles.body, "flexCol")}>
            <p className={cx(styles.description)}>{taskDetails?.description}</p>

            {summaryDivData.map((item, index) => {
              return (
                <div className={cx(styles.summaryDiv, "flexRow")} key={index}>
                  <div className={cx(styles.iconDiv, "flexRow")}>
                    <img src={item.icon} alt='icon' />
                  </div>
                  <div className={cx(styles.summary, "flexRow")}>
                    <span className={cx(styles.summaryValue)}>{item.value}</span>
                    <span className={cx(styles.caption)}>{item.caption}</span>
                    {item?.caption.toLowerCase().includes("report") && (
                      <div>
                        <span className={cx(styles.count)}>{item.count}</span>
                      </div>
                    )}
                  </div>

                  <Button title='View' size='small' />
                </div>
              );
            })}
          </div>

          <div className={cx(styles.btnGroup, "flexRow-align-center")}>
            {deleteTaskLoading ? (
              <span>Deleting...</span>
            ) : (
              <button
                disabled={deleteTaskLoading}
                onClick={() => handleDeleteTask()}
                className={cx(styles.deleteBtn, "flexRow-align-center")}
              >
                <img src={deleteIcon} alt='delete-icon' /> <span>Delete</span>
              </button>
            )}
            <Button title='Edit Task' onClick={() => navigate(`/dashboard/tasks/edit-task/${taskId}`)} />
          </div>
        </>
      ) : (
        <div className={cx(styles.emptySelectionContainer, "flexCol-fully-centered")}>
          <p className={cx(styles.emptySelectionDescription)}>{errorDetails?.message}</p>
        </div>
      )}

      {displayModal && modalName === "taskDeleteNotification" ? <DeleteNotificationModal show size='md' /> : null}
    </div>
  );
}

export default TaskDetails;
