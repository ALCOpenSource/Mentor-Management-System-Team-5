import React, { useState } from "react";
import cx from "classnames";
import styles from "./Notifications.module.scss";

import Pagination from "@/components/Pagination/Pagination";
import BorderlessDropDownList from "@/components/BorderlessDropDownList/BorderlessDropDownList";
import NotificationsListItem from "./NotificationsListItem/NotificationsListItem";
import Button from "@/components/Button/Button";
import {ReactComponent as CheckmarkIcon} from "@/assets/icons/checkmark-circled.svg";
import Lex from "@/assets/images/lex.svg";
import Peculiar from "@/assets/images/peculiar.svg";
import Baba from "@/assets/images/baba.svg";





function Notifications() {
  const dropdownArray = ["All", "All"]; 
  const [selected, setSelected] = useState("All");

  const notificationsArray = [
    {
      id: 1,
      name: "Lex Murphy",
      action: "requested approval Gads certificate by",
      avatar: Lex,
      date: "Today at 5:42pm",
      certificate_owner: "Roseline Anapuna",
      status: true
    },
    {
      id: 2,
      name: "Peculiar C. Umeh",
      action: "commented on",
      avatar: Peculiar,
      date: "Today at 5:42pm",
      post: "How to Archive a Program on MMS",
      status: false
    },
    {
      id: 3,
      name: "Baba C. Mammah",
      action: "created",
      avatar: Baba,
      date: "Today at 5:42pm",
      post: "All Mentor Manager Task Report",
      status: false
    }
  ];
 
  const handleMarkAllAsRead = () => {
    
  }

  const handleSelected = (itemSelected) => {
    setSelected(itemSelected);

  }

  return (
    <div className={cx(styles.NotificationsContainer, "flexCol")}>
      <section className={cx(styles.heading)}>
        <div className={cx(styles.titleWrapper, "flexRow")}>
          <h3 className={cx(styles.title)}>Notifications</h3>
        </div>
        <div className={cx(styles.controlsWrapper, "flexRow-space-between")}>
          <div className={cx(styles.dropdownWrapper, "flexRow-left-centered")}>
            <BorderlessDropDownList 
              menu = {dropdownArray} 
              selectedRecipient={selected}
              setSelectedRecipient={handleSelected}
            />
          </div>
          <div className={cx(styles.paginationWrapper, "flexRow-right-centered")}>
            <Button onClick={handleMarkAllAsRead()} title='Mark all as read' type='secondary' size='small' suffixIcon={<CheckmarkIcon />}  />
            <Pagination />
          </div>     
        </div>
      </section>
      <section className={cx(styles.body, "flexRow")}>
        <div className={cx(styles.content, "flexCol")}>
        {notificationsArray.map((item, index) => {
              return (
                <NotificationsListItem key={index} data={item} /> 
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default Notifications;
