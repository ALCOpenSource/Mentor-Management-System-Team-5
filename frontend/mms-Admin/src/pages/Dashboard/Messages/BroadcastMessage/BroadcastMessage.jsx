import Button from "@/components/Button/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./BroadcastMessage.module.scss";
import DropDownList from "@/components/DropDownList/DropDownList";
import BroadcastMessageListItem from "../BroadcastMessageListItem/BroadcastMessageListItem";
import emojiIcon from "@/assets/icons/emoji-icon.svg";
import attachmentIcon from "@/assets/icons/attachment-icon.svg";

const BroadcastMessage = () => {
  const navigate = useNavigate();

  const [selectedReceipent, setSelectedReceipent] = useState("Select receipent");

  const messagesArray = [
    {
      id: 1,
      date: "09-01-23",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis aliquam laborum quas autem aspernatur quia quaerat provident nulla repellendus at in deleniti ab doloremque, velit eum? Modi, labore ut.",
      receipant: "Mentor Managers",
      time: "6:01 PM"
    },
    {
      id: 2,
      date: "30-01-23",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore quod a iste reiciendis esse reprehenderit, similique distinctio, quasi molestias recusandae quas totam cupiditate pariatur obcaecati maiores dicta. Inventore, in!",
      receipant: "Mentors",
      time: "7:40 PM"
    },
    {
      id: 3,
      date: "01-02-23",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore quod a iste reiciendis esse reprehenderit, similique distinctio, quasi molestias recusandae quas totam cupiditate pariatur obcaecati.",
      receipant: "Mentor Manager Applicants",
      time: "5:40 PM"
    },
    {
      id: 4,
      date: "05-02-23",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore quod a iste reiciendis esse reprehenderit, similique distinctio, quasi molestias recusandae quas totam cupiditate pariatur.",
      receipant: "Mentor Applicants",
      time: "3:40 PM"
    },
    {
      id: 5,
      date: "08-03-23",
      message:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum labore quod a iste reiciendis esse reprehenderit, similique distinctio, quasi molestias recusandae quas totam cupiditate pariatur obcaecati maiores dicta.",
      receipant: "All",
      time: "11:20 PM"
    }
  ];

  return (
    <div className={cx(styles.broadcastMessageContainer, "flexCol")}>
      <section className={cx(styles.heading, "flexRow-space-between")}>
        <h3 className={cx(styles.title)}>Broadcast Message</h3>
        <Button onClick={() => navigate(-1)} title='Close' />
      </section>
      <section className={cx(styles.body, "flexCol")}>
        <DropDownList
          selectedReceipent={selectedReceipent}
          setSelectedReceipent={setSelectedReceipent}
          menu={["All", "Mentor Managers", "Mentors", "Mentor Manager Applicants", "Mentor Applicants"]}
        />
        <div className={cx(styles.messagesList, "flexCol-align-center")}>
          {messagesArray.map((item, index) => (
            <BroadcastMessageListItem
              key={index}
              date={item.date}
              message={item.message}
              receipant={item.receipant}
              time={item.time}
            />
          ))}
        </div>
        <div className={cx(styles.messageBoxDiv, "flexRow")}>
          <img src={emojiIcon} alt='emoji icon' />
          <img src={attachmentIcon} alt='attachment icon' />
          <input className={cx(styles.messageInput)} type='text' placeholder='Type a message...' />
        </div>
      </section>
    </div>
  );
};

export default BroadcastMessage;
