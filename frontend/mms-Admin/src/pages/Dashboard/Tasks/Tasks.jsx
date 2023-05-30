import React, { useState, useEffect } from "react";
import cx from "classnames";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import styles from "./Tasks.module.scss";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import Button from "@/components/Button/Button";
import cardIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import backIcon from "@/assets/icons/back-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import TaskListItem from "./TaskListItem/TaskListItem";
import useIsMobile from "@/hooks/useIsMobile";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
function Tasks() {
  const navigate = useNavigate();
  const params = useParams();
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    isMobile ? setOpenSideBar(false) : setOpenSideBar(true);
  }, [isMobile]);

  const [collapseInput, setCollapseInput] = useState(true);
  const [closeSelectElement, setCloseSelectElement] = useState(false);

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

  const handleCloseSearchInput = (e) => {
    console.log(e, "handle close input");
    setCollapseInput(true);
  };

  const handleCloseSelectElement = (e) => {
    console.log(e, "handle close select");
    setCloseSelectElement(true);
  };

  const getSideBarData = () => {
    let listItems = menuItemsArray.map((item, index) => {
      return {
        component: <TaskListItem key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = (
      <div className={cx(styles.sideBarHeader, "flexRow-align-center")}>
        <div
          style={{ display: !isMobile && !collapseInput ? "none" : "flex" }}
          className={cx(styles.titleDiv, "flexRow-align-center")}
        >
          {isMobile && (
            <img
              onClick={() => setOpenSideBar(!openSideBar)}
              src={backIcon}
              className={cx(styles.backIcon)}
              alt='close-icon'
            />
          )}
          {collapseInput && <h3 className={cx(styles.title)}>Tasks</h3>}
        </div>
        <div className={cx(styles.searchWrapper)}>
          <Search
            inputPlaceholder='Search for tasks...'
            onChange={handleSearchInput}
            collapseInput={collapseInput}
            setCollapseInput={setCollapseInput}
            closeSelectElement={handleCloseSelectElement}
          />
        </div>
        <Filter
          dropdownItems={[
            { name: "All", id: 1 },
            { name: "Completed", id: 2 },
            { name: "In-progress", id: 3 }
          ]}
          selectedFilterItem={handleSelectedFilterItem}
          closeSearchInput={handleCloseSearchInput}
          closeSelectElement={closeSelectElement}
          setCloseSelectElement={setCloseSelectElement}
        />
      </div>
    );

    return { listItems, headerComponent };
  };

  const handleSearchInput = (data) => {
    console.log(data);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleSelectedMenuItem = (id) => {
    setSelectedMenuId(id);
    navigate(`task-details/${id}`);
  };

  return (
    <div className={cx(styles.tasksContainer, "flexRow")}>
      {openSideBar && (
        <div className={cx(styles.sidebarWrapper)}>
          <GenericSideBar
            data={getSideBarData()}
            selectedMenuItem={handleSelectedMenuItem}
            closeGenericSideBar={() => setOpenSideBar(false)}
          />
        </div>
      )}

      <section className={cx(styles.mainBody, "flexCol")}>
        <section className={cx(styles.heading, "flexRow-space-between")}>
          <div className={cx(styles.titleAndToggler, "flexRow")}>
            <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
              <img
                className={cx(styles.toggler)}
                src={subMenuIcon}
                alt='toggler'
                onClick={() => setOpenSideBar(!openSideBar)}
              />
              <small className={cx(styles.togglerText)}>MENU</small>
            </div>
            <h3 className={cx(styles.title)}>Tasks</h3>
          </div>
          <Button title='Create New Task' onClick={() => navigate("create-task")} />
        </section>

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
