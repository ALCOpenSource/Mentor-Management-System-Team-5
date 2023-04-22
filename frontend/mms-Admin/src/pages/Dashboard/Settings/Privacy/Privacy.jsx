import React from "react";
import cx from "classnames";
import styles from "./Privacy.module.scss";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

function Privacy() {
  return (
    <div className={cx(styles.privacyContainer, "flexCol")}>
      <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
        <h6 className={cx(styles.infoTitle)}>Show contact info</h6>
        <div className={cx(styles.switchWrapper, "flexRow")}>
          <ToggleSwitch />
          <ToggleSwitch />
        </div>
      </div>
      <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
        <h6 className={cx(styles.infoTitle)}>Show GitHub</h6>
        <div className={cx(styles.switchWrapper, "flexRow")}>
          <ToggleSwitch />
          <ToggleSwitch />
        </div>
      </div>
      <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
        <h6 className={cx(styles.infoTitle)}>Show Instagram</h6>
        <div className={cx(styles.switchWrapper, "flexRow")}>
          <ToggleSwitch />
          <ToggleSwitch />
        </div>
      </div>
      <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
        <h6 className={cx(styles.infoTitle)}>Show Linkdein</h6>
        <div className={cx(styles.switchWrapper, "flexRow")}>
          <ToggleSwitch />
          <ToggleSwitch />
        </div>
      </div>
      <div className={cx(styles.infoWrapper, "flexRow-space-between")}>
        <h6 className={cx(styles.infoTitle)}>Show Twitter</h6>
        <div className={cx(styles.switchWrapper, "flexRow")}>
          <ToggleSwitch />
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
