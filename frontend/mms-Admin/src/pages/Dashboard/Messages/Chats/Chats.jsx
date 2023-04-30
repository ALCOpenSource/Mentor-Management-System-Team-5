import React, {useState, useEffect} from "react";
import styles from "./Chats.module.scss";
import cx from "classnames";
import Button from "@/components/Button/Button";
import { useNavigate, useParams, Outlet } from "react-router-dom";

import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import useIsMobile from "@/hooks/useIsMobile";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import cardIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import TaskListItem from "@/pages/Dashboard/Tasks/TaskListItem/TaskListItem";
import { ReactComponent as SearchIcon } from "@/assets/icons/search-icon.svg";
import { ReactComponent as SortIcon } from "@/assets/icons/sort-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";


const Chats = () => {

  const navigate = useNavigate();
  const params = useParams();
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    isMobile ? setOpenSideBar(false) : setOpenSideBar(true);
  }, [isMobile]);

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
    let listItems = menuItemsArray.map((item, index) => {
      return {
        component: <TaskListItem key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = !isMobile && (
      <FilterAndSearch
        closeSideBar={handleCloseSidebar}
        dropdownItems={[
          { name: "All", id: 1 },
          { name: "Completed", id: 2 },
          { name: "In-progress", id: 3 }
        ]}
        searchData={handleSearchInput}
        selectedFilterItem={handleSelectedFilterItem}
        showCloseIcon={false}
        inputPlaceholder='Search for tasks...'
        showDropdown={true}
        showFilterToggler={true}
        reversed={true}
      />
    );

    return { listItems, headerComponent };
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleCloseSidebar = () => {
    setOpenSideBar({ open: false, category: "" });
  };

  const handleSelectedMenuItem = (id) => {
    setSelectedMenuId(id);
    navigate(`${id}`);
  };

  return (
    <div className={cx(styles.chatsContainer, "flexCol")} >
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
        <div className={cx(styles.searchSortDiv, "flexRow-align-center")}>
          <SearchIcon className={cx(styles.searchIcon)} onClick={() => setShowSearchInput(!showSearchInput)} />
          {showSearchInput && <input className={cx(styles.searchInput)} type='text' placeholder='Search for tasks' />}
          <SortIcon className={cx(styles.sortIcon)} />
        </div>
        <Button title='Create New Task' onClick={() => navigate("create-task")} />
      </section>

        <section className={cx(styles.mainBody, "flexRow")}>
        {openSideBar && (
          <div className={cx(styles.sidebarWrapper)}>
            <GenericSideBar
              data={getMenuItems()}
              selectedMenuItem={handleSelectedMenuItem}
              activeMenuItemClass='active-task-item'
              closeGenericSideBar={() => setOpenSideBar(false)}
            />
          </div>
        )}

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
};

export default Chats;