import React, {useState} from "react";
import cx from "classnames";
import styles from "./Messages.module.scss";
import Button from "@/components/Button/Button";
import EmptyHistory from "./EmptyHistory/EmptyHistory";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import TaskListItem from "./TaskListItem/TaskListItem";
import useIsMobile from "@/hooks/useIsMobile";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import cardIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";

function Messages() {
  const navigate = useNavigate();
  const params = useParams();
  const isMobile = useIsMobile();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);
  const [openSideBar, setOpenSideBar] = useState(false);

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
    navigate(`task-details/${id}`);
  };

  return <div className={cx(styles.messagesContainer, "flexCol")}>
    <div className={cx(styles.heading, "flexRow-space-between")}>
      <h3 className={cx(styles.title)}>Chats</h3>
      <Button onClick={()=> navigate("broadcast-message")} title="Send Broadcast Message" />
    </div>

    <div className={cx(styles.messagesOutlet, "flexCol")} >
      <EmptyHistory />

    </div>
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
  </div>;
}

export default Messages;
