import React, { useState } from "react";
import cx from "classnames";
import styles from "./Tasks.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import { Outlet } from "react-router-dom";
import Button from "@/components/Button/Button";

import { ReactComponent as SearchIcon } from "@/assets/icons/search-icon.svg";
import { ReactComponent as SortIcon } from "@/assets/icons/sort-icon.svg";
import cardIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";

import TaskListItem from "./TaskListItem/TaskListItem";

const Tasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname.split("/")[3] || "";

  const [showSearchInput, setShowSearchInput] = useState(false);

  const menuItemsArray = [
    {
      id: 1,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 2,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 3,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 4,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 5,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 6,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 7,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 8,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 9,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 10,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 11,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 12,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 13,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 14,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 15,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 16,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 17,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 18,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 19,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 20,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 21,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon: calendarIcon
    },
    {
      id: 22,
      title: "Room Library Article Written in Java",
      date: "3 days from now last",
      icon: cardIcon,
      calendarIcon: calendarIcon
    }
  ];

  const getMenuItems = () => {
    return menuItemsArray.map((item, index) => {
      return {
        component: <TaskListItem key={index} data={item} />,
        id: item.id
      };
    });
  };

  return (
    <div className={cx(styles.tasksContainer, "flexCol")}>
      <section className={cx(styles.heading, "flexRow-space-between")}>
        <h3 className={cx(styles.title)}>Tasks</h3>
        <div className={cx(styles.searchSortDiv, "flexRow-align-center")}>
          <SearchIcon
            className={cx(styles.searchIcon)}
            onClick={() => setShowSearchInput(!showSearchInput)}
          />
          {showSearchInput && (
            <input className={cx(styles.searchInput)} type='text' placeholder='Filter' />
          )}
          <SortIcon className={cx(styles.sortIcon)} />
        </div>
        <Button title='Create New Task' />
      </section>

      <section className={cx(styles.body, "flexRow")}>
        <div className={cx(styles.sidebarWrapper)}>
          <GenericSideBar data={getMenuItems()} />
        </div>

        <div className={cx(styles.content)}>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Tasks;
