import React from "react";
import cx from "classnames";
import styles from "./Received.module.scss";
import PropTypes from "prop-types";

const Received = ({ data }) => {
  return (
    <div className={cx(styles.receivedChatContainer, "flexRow")}>
      <div className={cx(styles.profileImageDiv)}>
        {data?.profileImage ? (
          <img src={data?.profileImage} alt='profile-image' />
        ) : (
          <span className={cx(styles.emptyImage)} />
        )}
      </div>

      <div className={cx(styles.chatBody, "flexCol")}>
        <span className={cx(styles.chatMessage)}>{data?.message}</span>
        <span className={cx(styles.chatTime)}>{data?.time}</span>
      </div>
    </div>
  );
};

Received.propTypes = {
  data: PropTypes.object
};

export default Received;
