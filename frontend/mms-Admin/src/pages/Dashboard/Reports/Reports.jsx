import React, { useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./Reports.module.scss";
import { useNavigate, useParams, Outlet } from "react-router-dom";


import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";

import Button from "@/components/Button/Button";
import { ReactComponent as SearchIcon } from "@/assets/icons/search-icon.svg";
import { ReactComponent as SortIcon } from "@/assets/icons/sort-icon.svg";
import cardIcon from "@/assets/icons/tasks-overview-card-icon.svg";
import calendarIcon from "@/assets/icons/tasks-overview-calendar-icon.svg";
import emptySelectionIcon from "@/assets/icons/empty-selection-icon.svg";
import TaskListItem from "@/pages/Dashboard/Tasks/TaskListItem/TaskListItem";

import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import SelectionSideBar from "@/components/SelectionSideBar/SelectionSideBar";
import PersonelComponent from "@/pages/Dashboard/Tasks/PersonelComponent/PersonelComponent";
import mentorManagerImage from "@/assets/images/mentor-manager-thumbnail.svg";
import mentorImage from "@/assets/images/sample-profile-image.svg";


function Reports() {

  const navigate = useNavigate();
  const params = useParams();
  const [selectedMenuId, setSelectedMenuId] = useState(params.id);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const [openSideBar, setOpenSideBar] = useState({
    open: false,
    category: ""
  });

  const mentorsArray = [
    {
      id: 1,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 2,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 3,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 4,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 5,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 6,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 7,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 8,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 9,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    },
    {
      id: 10,
      name: "Kabiru Omo Isaka",
      designation: "Program Assistant, Andela, He/Him",
      image: mentorImage,
      positionTags: ["PROGRAM ASST.", "MENTOR-GADS"]
    }
  ];

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


  const handleOpenSideBar = (e, open, category) => {
    e.preventDefault();
    setOpenSideBar({ open, category });
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

  const getListComponents = (data) => {
    const listItems = data.map((item, index) => {
      return {
        component: <PersonelComponent key={index} data={item} />,
        id: item.id
      };
    });

    const headerComponent = (
      <FilterAndSearch
        closeSideBar={handleCloseSidebar}
        dropdownItems={[
          { name: "All", id: 1 },
          { name: "Mentors", id: 2 },
          { name: "Mentor Managers", id: 3 }
        ]}
        searchData={handleSearchInput}
        selectedFilterItem={handleSelectedFilterItem}
        showCloseIcon={true}
        inputPlaceholder="Search for mentor..."
      />
    );

    return { listItems, headerComponent };
  };

  const handleSelectedItem = (item) => {
    console.log(item);
  };


  return (
  <div className={cx(styles.reportsContainer, "flexRow")}>

    {openSideBar.open && openSideBar.category === "mentor-manager" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents([])} />
        </div>
      ) : openSideBar.open && openSideBar.category === "mentor" ? (
        <div className={cx(styles.sideBarSection)}>
          <SelectionSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorsArray)} />
        </div>
      ) : null}
      

        <div className={cx(styles.content, "flexCol")}>
          <div className={cx(styles.heading, "flexRow")}>
            <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
            <img className={cx(styles.toggler)} src={calendarIcon} alt="toggler" onClick={(e) => handleOpenSideBar(e, true, "mentor")} />
            <small className={cx(styles.togglerText)}>MENU</small>
            </div>
          <Button title='Compose Report' />
          </div>

          <div className={cx(styles.contentBody, "flexCol")}>
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
       
        </div>
    
  </div>  
  );
}

export default Reports;
