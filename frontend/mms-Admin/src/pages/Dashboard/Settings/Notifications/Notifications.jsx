import React from "react";
import cx from "classnames";
import styles from "./Notifications.module.scss";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

const Notifications = () => {
  return (
    <div className={cx(styles.notificationsContainer, "flexCol")}>
      <div className={cx(styles.wrapper, "flexCol")}>
        <h6 className={cx(styles.heading)}>General Notifications</h6>
        <div className={cx(styles.toggleHeadersWrapper, "flexRow-right-centered")}>
          <h6 className={cx(styles.title)}>Email</h6>
          <h6 className={cx(styles.title)}>In-app</h6>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>All Notifications</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Programs</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Tasks</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Approval Requests</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Reports</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
      </div>

      <div className={cx(styles.wrapper, "flexCol")}>
        <h6 className={cx(styles.heading)}>Discussion Notifications</h6>
        <div className={cx(styles.toggleHeadersWrapper, "flexRow-right-centered")}>
          <h6 className={cx(styles.title)}>Email</h6>
          <h6 className={cx(styles.title)}>In-app</h6>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Comments on my post</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Posts</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Comments</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Mentions</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
        <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
          <h6 className={cx(styles.infoTitle)}>Direct Messages</h6>
          <div className={cx(styles.switchWrapper, "flexRow")}>
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
