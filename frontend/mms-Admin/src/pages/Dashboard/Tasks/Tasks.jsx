import React, { useState } from "react";
import cx from "classnames";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import styles from "./Tasks.module.scss";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";

import Button from "@/components/Button/Button";

import { ReactComponent as SearchIcon } from "@/assets/icons/search-icon.svg";
import { ReactComponent as SortIcon } from "@/assets/icons/sort-icon.svg";
import cardIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";

import TaskListItem from "./TaskListItem/TaskListItem";

function Tasks() {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);

  const [showSearchInput, setShowSearchInput] = useState(false);

  const menuItemsArray = [
    {
      id: 1,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 2,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 3,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 4,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 5,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 6,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 7,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 8,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 9,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 10,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 11,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 12,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 13,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 14,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 15,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 16,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 17,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 18,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 19,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 20,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 21,
      title: "Room Library Article Written in Java",
      date: "3 days from now",
      icon: cardIcon,
      calendarIcon
    },
    {
      id: 22,
      title: "Room Library Article Written in Java",
      date: "3 days from now last",
      icon: cardIcon,
      calendarIcon
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

  const handleSelectedMenuItem = (id) => {
    setSelectedMenuId(id);
    navigate(`task-details/${id}`);
  };

  return (
    <div className={cx(styles.tasksContainer, "flexCol")}>
      <section className={cx(styles.heading, "flexRow-space-between")}>
        <h3 className={cx(styles.title)}>Tasks</h3>
        <div className={cx(styles.searchSortDiv, "flexRow-align-center")}>
          <SearchIcon className={cx(styles.searchIcon)} onClick={() => setShowSearchInput(!showSearchInput)} />
          {showSearchInput && <input className={cx(styles.searchInput)} type='text' placeholder='Search for tasks' />}
          <SortIcon className={cx(styles.sortIcon)} />
        </div>
        <Button title='Create New Task' onClick={() => navigate("create-task")} />
      </section>

      <section className={cx(styles.mainBody, "flexRow")}>
        <div className={cx(styles.sidebarWrapper)}>
          <GenericSideBar
            data={getMenuItems()}
            selectedMenuItem={handleSelectedMenuItem}
            activeMenuItemClass='active-task-item'
          />
        </div>

        <div className={cx(styles.content)}>
          {selectedMenuId ? (
            <Outlet />
          ) : (
            <div className={cx(styles.emptySelectionDiv, "flexCol-fully-centered")}>
              <img src={emptySelectionIcon} alt='empty-selection-icon' />
              <p>No item selected yet </p>
              <p>Select an item from the list to view task details</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Tasks;
