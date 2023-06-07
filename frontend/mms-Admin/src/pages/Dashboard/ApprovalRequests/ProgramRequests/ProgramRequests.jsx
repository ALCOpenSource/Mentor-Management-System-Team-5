import React from "react";
import cx from "classnames";
import styles from "./ProgramRequests.module.scss";
import { useSelector } from "react-redux";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { ReactComponent as ProgramIcon } from "@/assets/images/program-avatar.svg";

const ProgramRequests = () => {
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const cardData = [
    {
      name: "Google Africa Scholarship Program",
      count: 500,
      icon: ProgramIcon
    },
    {
      name: "Google Africa Scholarship Program",
      icon: ProgramIcon
    },
    {
      name: "Google Africa Scholarship Program",
      count: 15,
      icon: ProgramIcon
    },
    {
      name: "Google Africa Scholarship Program",
      count: 25,
      icon: ProgramIcon
    },
    {
      name: "Google Africa Scholarship Program",
      count: 8,
      icon: ProgramIcon
    },
    {
      name: "Google Africa Scholarship Program",
      icon: ProgramIcon
    },
    {
      name: "Google Africa Scholarship Program",
      count: 5,
      icon: ProgramIcon
    },
    {
      name: "Google Africa Scholarship Program",
      count: 5,
      icon: ProgramIcon
    }
  ];

  return (
    <div className={cx(styles.programRequestsContainer, "flexCol")}>
      <div className={cx(styles.body, "flexCol")}>
        <div className={cx(styles.cardContainer, "flexCol")}>
          {cardData.map((item, index) => {
            return (
              <div className={cx(styles.cardWrapper, "flexRow")} key={index}>
                <div className={cx(styles.cardIcon)}>
                  <item.icon />
                </div>
                <h6 className={cx(styles.name)}>{item?.name}</h6>
                {item?.count && <span className={cx(styles.count, "flexRow-fully-centered")}>{item?.count}</span>}
              </div>
            );
          })}
        </div>
      </div>
      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
};

export default ProgramRequests;
