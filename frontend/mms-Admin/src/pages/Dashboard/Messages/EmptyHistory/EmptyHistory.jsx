import React from "react";
import styles from "./EmptyHistory.module.scss";
import cx from "classnames";
import emptyHistoryIcon from "@/assets/icons/empty-message-history-icon.svg";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

const EmptyHistory = () => {

  const navigate = useNavigate();

  return (
    <div className={cx(styles.emptyHistoryDiv, "flexCol-fully-centered")}>
    <img src={emptyHistoryIcon} alt='empty-message-history-icon' />
    <p>No Messages, Yet</p>
    <p>No messages in your chatbox, yet. Start chatting with other users</p>
    <Button title='Browse People' onClick={() => navigate("broadcast-message")} />
  </div>
  );
};

export default EmptyHistory;