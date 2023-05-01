import React from "react";
import cx from "classnames";
import styles from "./Messages.module.scss";
import Button from "@/components/Button/Button";
import EmptyHistory from "./EmptyHistory/EmptyHistory";
import { useNavigate } from "react-router-dom";

function Messages() {
  const navigate = useNavigate();

  return (
    <div className={cx(styles.messagesContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-space-between")}>
        <h3 className={cx(styles.title)}>Chats</h3>
        <Button onClick={() => navigate("broadcast-message")} title='Send Broadcast Message' />
      </div>

      <div className={cx(styles.messagesOutlet, "flexCol")}>
        <EmptyHistory />
      </div>
    </div>
  );
}

export default Messages;
