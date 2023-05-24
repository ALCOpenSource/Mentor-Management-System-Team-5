import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./ProgramDetails.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import headerIcon from "@/assets/icons/google-filled-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import clockIcon from "@/assets/icons/clock-icon.svg";
import reportIcon from "@/assets/icons/task-report-icon-green.png";
import mentorsIcon from "@/assets/icons/mentor-icon-green.png";
import mentorManagersIcon from "@/assets/icons/mentor-manager-icon-green.png";
import deleteArchiveIcon from "@/assets/icons/clear-list-reversed.svg";
import DeleteNotificationModal from "@/components/Modals/DeleteNotification/DeleteNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

function ProgramDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const programId = params.id;
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const programDetailsData = [
    {
      // icon: <ReportIcon />,
      icon: mentorManagersIcon,
      value: 12,
      caption: "Mentor Managers assigned to this program",
      count: 2
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
      value: 35,
      caption: "Program / Reports",
      count: 3
    }
  ];

  const handleDeleteTask = () => {
    dispatch(
      showModal({
        name: "programDeleteNotification",
        modalData: {
          title: "Program Deleted Successfully",
          type: "program"
        }
      })
    );
  };

  return (
    <div className={cx(styles.programDetailsContainer, "flexCol")}>
      {programId && (
        <>
          <div className={cx(styles.header, "flexCol")}>
            <div className={cx(styles.wrapper, "flexRow-align-center")}>
              <img className={cx(styles.icon)} src={headerIcon} alt='program-icon' />
              <div className={cx(styles.mainContent, "flexCol")}>
                <h5 className={cx(styles.title)}>{"Google Africa Scholarship Program"}</h5>
                <div className={cx(styles.metaData, "flexRow")}>
                  <div className={cx(styles.info, "flexRow")}>
                    <img className={cx(styles.icon)} src={calendarIcon} alt='calendar-icon' />
                    <span className={cx(styles.value)}>Dec 12, 2022</span>
                  </div>
                  <div className={cx(styles.info, "flexRow")}>
                    <img className={cx(styles.icon)} src={clockIcon} alt='clock-icon' />
                    <span className={cx(styles.value)}>6:00pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cx(styles.body, "flexCol")}>
            <h6 className={cx(styles.subHeading)}>About:</h6>
            <p className={cx(styles.description)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
              Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
              tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque
            </p>

            {programDetailsData.map((item, index) => {
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
            <button onClick={() => handleDeleteTask()} className={cx(styles.deleteBtn, "flexRow-align-center")}>
              <img src={deleteArchiveIcon} alt='delete-archive-icon' /> <span>Delete/Archive Program</span>
            </button>
            <Button title='Edit Program' onClick={() => navigate(`/dashboard/programs/edit-program/${programId}`)} />
          </div>
        </>
      )}

      {displayModal && modalName === "programDeleteNotification" ? <DeleteNotificationModal show size='md' /> : null}
    </div>
  );
}

export default ProgramDetails;
