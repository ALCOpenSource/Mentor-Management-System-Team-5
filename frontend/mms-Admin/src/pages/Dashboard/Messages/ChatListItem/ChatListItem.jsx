import React from "react";
import cx from "classnames";
import styles from "./ChatListItem.module.scss";
import "./ChatListActiveItem.scss";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function ChatListItem({ data }) {
  const { id } = useParams();

  return (
    <div className={cx(styles.chatListItemContainer, "flexCol", id === data?.id.toString() && styles.active)}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.profileImage)} src={data?.profileImage} alt='profileImage' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.name)}>{data?.name}</h5>
          <span className={cx(styles.messagePreview)}>{data?.messagePreview}</span>
        </div>
        <div className={cx(styles.statsDiv, "flexCol")}>
          <span className={cx(styles.time)}>{data?.time}</span>
          <span className={cx(styles.count)}>{data?.count}</span>
        </div>
      </div>
    </div>
  );
}

ChatListItem.propTypes = {
  data: PropTypes.object
};

export default ChatListItem;
