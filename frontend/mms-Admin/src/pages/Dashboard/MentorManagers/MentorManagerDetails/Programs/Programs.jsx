import React, { useState } from "react";
import cx from "classnames";
import styles from "./Programs.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/redux/Modal/ModalSlice";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import searchIcon from "@/assets/icons/search-icon.svg";
import { ReactComponent as ArchiveCardIcon } from "@/assets/icons/archive-card-icon.svg";
import { ReactComponent as CalendarIcon } from "@/assets/icons/archive-calendar-icon.svg";
import { ReactComponent as ClockIcon } from "@/assets/icons/archive-clock-icon.svg";
import { ReactComponent as TogglerIconUp } from "@/assets/icons/arrow-circle-up.svg";
import { ReactComponent as TogglerIconDown } from "@/assets/icons/arrow-circle-down.svg";
import { ReactComponent as ReportIcon } from "@/assets/icons/reports-icon.svg";
import Button from "@/components/Button/Button";
import assignSuccessImage from "@/assets/images/activate-user.svg";
import unAssignSuccessImage from "@/assets/images/deactivate-user.svg";

const Programs = () => {
  const dispatch = useDispatch();

  const [programStatus, setProgramStatus] = useState({
    status: "unassigned",
    index: null
  });

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const handleSetProgramStatus = (status, index) => {
    setProgramStatus({ status, index });

    status === "unassigned" &&
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Unassigned from program!",
            image: unAssignSuccessImage
          }
        })
      );

    status === "assigned" &&
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Assigned to program!",
            image: assignSuccessImage
          }
        })
      );
  };

  const [toggle, setToggle] = useState({
    index: null,
    toggle: false
  });

  const cardData = [
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    },
    {
      title: "Google Africa Scholarship Program",
      icon: ArchiveCardIcon,
      date: "April 15, 2023",
      time: "12:00 PM"
    }
  ];

  const handleToggle = (index) => {
    if (toggle.index === index) {
      setToggle({
        index,
        toggle: !toggle.toggle
      });
    } else {
      setToggle({
        index,
        toggle: true
      });
    }
  };

  return (
    <div className={cx(styles.mentorManagerProgramsContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <div className={cx(styles.dropdown)}>
          <select name='dropdown' id='dropdown'>
            <option value='All Programs'>All Programs</option>
            <option value='All Programs'>All Programs</option>
            <option value='All Programs'>All Programs</option>
            <option value='All Programs'>All Programs</option>
          </select>
        </div>
        <div className={cx(styles.searchDiv, "flexRow-align-center")}>
          <img src={searchIcon} alt='search-icon' />
          <input type='text' placeholder='Search for Programs' />
        </div>
      </div>
      <div className={cx(styles.body, "flexCol")}>
        <div className={cx(styles.cardContainer, "flexCol")}>
          {cardData.map((item, index) => {
            return (
              <div className={cx(styles.cardWrapper, "flexCol")} key={index}>
                <div className={cx(styles.cardHeader, "flexRow-space-between")}>
                  <div className={cx(styles.cardIcon)}>
                    <item.icon />
                  </div>
                  <div className={cx(styles.metaData, "flexCol")}>
                    <h6 className={cx(styles.metaDataTitle)}>{item.title}</h6>
                    <div className={cx(styles.dateTime, "flexRow")}>
                      <div className={cx(styles.infoWrapper, "flexRow")}>
                        <CalendarIcon />
                        <span className={cx(styles.value)}>{item?.date}</span>
                      </div>
                      <div className={cx(styles.infoWrapper, "flexRow")}>
                        <ClockIcon />
                        <span className={cx(styles.value)}>{item?.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className={cx(styles.cardToggler)}>
                    {toggle?.toggle && toggle.index === index ? (
                      <TogglerIconUp onClick={() => handleToggle(index)} />
                    ) : (
                      <TogglerIconDown onClick={() => handleToggle(index)} />
                    )}
                  </div>
                </div>

                {toggle.index === index && toggle.toggle && (
                  <>
                    <div className={cx(styles.cardBody, "flexCol")}>
                      <h6 className={cx(styles.title)}>About:</h6>
                      <p className={cx(styles.description)}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                        urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                        amet. Pellentesque
                      </p>

                      <div className={cx(styles.summaryDiv, "flexRow-space-between")}>
                        <div className={cx(styles.summary, "flexRow-align-center")}>
                          <ReportIcon />
                          <span className={cx(styles.summaryValue)}>40</span>
                          <span>Program Reports</span>
                          <span className={cx(styles.count)}>5</span>
                        </div>

                        <Button title='View' size='small' />
                      </div>
                    </div>
                    <div className={cx(styles.unAssignBtnDiv)}>
                      {programStatus.status === "assigned" && programStatus.index === index ? (
                        <Button
                          onClick={() => handleSetProgramStatus("unassigned", index)}
                          title='Unassign from Program'
                          type='secondary'
                        />
                      ) : (
                        <Button onClick={() => handleSetProgramStatus("assigned", index)} title='Assign To Program' />
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
};

export default Programs;
