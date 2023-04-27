import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./BroadcastMessageListItem.module.scss";
import doubleCheckIcon from "@/assets/icons/double-check-icon.svg";

const BroadcastMessageListItem = ({ date, message, receipant, time }) => {
  return (
    <div className={cx(styles.broadcastMessageListContainer, "flexCol-align-center")}>
      <div className={cx(styles.dateDiv)}>
        <h6 className={cx(styles.dateText)}>{date}</h6>
      </div>
      <div className={cx(styles.messageDiv, "flexCol")}>
        <p>{message}</p>
        <div className={cx(styles.messageInfoDiv, "flexRow-space-between")}>
          <h6 className={cx(styles.receipentText)}>{receipant}</h6>
          <div className={cx(styles.timeAndIconDiv, "flexRow")}>
            <h6 className={cx(styles.timeText)}>{time}</h6>
            <img src={doubleCheckIcon} alt="double check icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

BroadcastMessageListItem.propTypes = {
  date: PropTypes.string,
  message: PropTypes.string,
  receipant: PropTypes.string,
  time: PropTypes.string
};

export default BroadcastMessageListItem;
