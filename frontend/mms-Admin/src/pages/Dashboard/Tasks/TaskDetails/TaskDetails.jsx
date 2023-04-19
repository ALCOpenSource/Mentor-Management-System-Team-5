import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./TaskDetails.module.scss";
import { useLocation } from "react-router-dom";
import Button from "@/components/Button/Button";
import headerIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
// import { ReactComponent as ReportIcon } from "@/assets/icons/reports-icon.svg";
import reportIcon from "@/assets/icons/task-report-icon-green.png";
import mentorsIcon from "@/assets/icons/mentor-icon-green.png";
import mentorManagersIcon from "@/assets/icons/mentor-manager-icon-green.png";
import deleteIcon from "@/assets/icons/delete-icon-red.svg";
import TaskDeleteNotificationModal from "@/components/Modals/TaskDeleteNotification/TaskDeleteNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

const TaskDetails = ({ data }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const taskId = location.pathname.split("/")[4] || "";
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const summaryDivData = [
    {
      // icon: <ReportIcon />,
      icon: mentorManagersIcon,
      value: 10,
      caption: "Mentor Managers assigned to this program",
      count: 5
    },
    {
      // icon: <ReportIcon />,
      icon: mentorsIcon,
      value: 80,
      caption: "Mentors assigned to this program",
      count: 3
    },
    {
      // icon: <ReportIcon />,
      icon: reportIcon,
      value: 40,
      caption: "Task reports",
      count: 50
    }
  ];

  console.log(taskId, 'taskid');

  return (
    <div className={cx(styles.taskDetailsContainer, "flexCol")}>
      {taskId && (
        <>
          <div className={cx(styles.header, "flexCol")}>
            <div className={cx(styles.wrapper, "flexRow-align-center")}>
              <img className={cx(styles.icon)} src={headerIcon} alt='task-icon' />
              <div className={cx(styles.mainContent, "flexCol")}>
                <h5 className={cx(styles.title)}>
                  {data?.title || `Room Library Article Written in Java ${taskId}`}
                </h5>
                <div className={cx(styles.metaData, "flexRow")}>
                  <img className={cx(styles.dateIcon)} src={calendarIcon} alt='calendar-icon' />
                  <span className={cx(styles.date)}>{data?.date || "3 days from now"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={cx(styles.body, "flexCol")}>
            <p className={cx(styles.description)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
              ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
              at maximus ante fermentum sit amet. Pellentesque
            </p>

            {summaryDivData.map((item, index) => {
              return (
                <div className={cx(styles.summaryDiv, "flexRow")} key={index}>
                  <div className={cx(styles.iconDiv, "flexRow")}>
                    <img src={item.icon} alt='icon' />
                  </div>
                  <div className={cx(styles.summary, "flexRow")}>
                    <span className={cx(styles.summaryValue)}>{item.value}</span>
                    <span className={cx(styles.caption)}>{item.caption}</span>
                    <div>
                      <span className={cx(styles.count)}>{item.count}</span>
                    </div>
                  </div>

                  <Button title='View' size='small' />
                </div>
              );
            })}
          </div>

          <div className={cx(styles.btnGroup, "flexRow")}>
            <button
              onClick={() =>
                dispatch(
                  showModal({
                    name: "taskDeleteNotification",
                    modalData: "Task Deleted Successfully"
                  })
                )
              }
              className={cx(styles.deleteBtn, "flexRow-align-center")}
            >
              <img src={deleteIcon} alt='delete-icon' /> <span>Delete</span>
            </button>
            <Button title='Edit Task' />
          </div>
        </>
      )}

      {displayModal && modalName === "taskDeleteNotification" ? (
        <TaskDeleteNotificationModal show size='md' />
      ) : null}
    </div>
  );
};

export default TaskDetails;
