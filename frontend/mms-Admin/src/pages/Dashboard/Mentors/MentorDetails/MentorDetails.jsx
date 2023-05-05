import React, { useState, useEffect, useMemo } from "react";
import cx from "classnames";
import styles from "./MentorDetails.module.scss";
import mentorImage from "@/assets/images/sample-profile-image.svg";
import GenericSideBar from "@/components/GenericSideBar/GenericSideBar";
import UserComponent from "../UserComponent/UserComponent";
import FilterAndSearch from "@/components/FilterAndSearch/FilterAndSearch";
import Button from "@/components/Button/Button";
import useIsMobile from "@/hooks/useIsMobile";
import Tabs from "@/components/Tabs/Tabs";
import { Outlet, useNavigate } from "react-router-dom";

import flagIcon from "@/assets/icons/flag-icon.svg";
import subMenuIcon from "@/assets/icons/sub-menu-icon.svg";

const MentorDetails = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const mentorsArray = useMemo(
    () => [
      {
        id: 1,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 2,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 3,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 4,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 5,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 6,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 7,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 8,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 9,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      },
      {
        id: 10,
        name: "Alison Davis",
        image: mentorImage,
        dateAdded: "May 05, 2023"
      }
    ],
    []
  );

  useEffect(() => {
    if (isMobile) {
      setOpenSideBar(false);
    } else {
      setOpenSideBar(true);
    }
    setSelectedUser(mentorsArray[0]);
  }, [isMobile, mentorsArray]);

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  const handleOpenSideBar = (e, open) => {
    e.preventDefault();
    setOpenSideBar(open);
  };

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  };

  const handleSelectedFilterItem = (item) => {
    console.log(item);
  };

  const handleCloseSidebar = () => {
    setOpenSideBar(false);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    navigate(`/dashboard/mentors/mentor-details/${user?.id}`);

    if (isMobile) {
      setOpenSideBar(false);
    }
  };

  const getListComponents = (data) => {
    const listItems =
      Array.isArray(data) &&
      data.map((item, index) => {
        return {
          component: <UserComponent onClick={handleViewUser} key={index} data={item} />,
          id: item.id
        };
      });

    const headerComponent = (
      <>
        <div className={cx(styles.headerWrapper, "flexRow-space-between")}>
          <h3 className={cx(styles.title)}>Title</h3>
          <FilterAndSearch
            closeSideBar={handleCloseSidebar}
            dropdownItems={[
              { name: "All", id: 1 },
              { name: "Mentors", id: 2 },
              { name: "Mentor Managers", id: 3 }
            ]}
            searchData={handleSearchInput}
            selectedFilterItem={handleSelectedFilterItem}
            showCloseIcon={false}
            inputPlaceholder='Search for mentor...'
          />
        </div>
      </>
    );

    return { listItems, headerComponent };
  };

  const getTabMenu = () => {
    let menuObject = {
      about: "About",
      programs: "Programs",
      tasks: "Tasks",
      certificates: "Certificates"
    };

    const tabMenu = Object.keys(menuObject).map((key) => {
      return {
        id: key,
        name: menuObject[key],
        path: key
      };
    });
    return tabMenu;
  };

  const handleTabMenuClick = (tab) => {
    navigate(tab.path);
  };

  return (
    <div className={cx(styles.mentorDetailsContainer, "flexCol")}>
      {openSideBar ? (
        <div className={cx(styles.sideBarSection)}>
          <GenericSideBar selectedMenuItem={handleSelectedItem} data={getListComponents(mentorsArray)} />
        </div>
      ) : null}

      <div className={cx(styles.outletDiv, "flexCol")}>
        <div className={cx(styles.outletHeading, "flexRow")}>
          <div className={cx(styles.profile, "flexCol")}>
            <div className={cx(styles.bioSummary, "flexRow-align-center")}>
              <img className={cx(styles.profileImage)} src={selectedUser?.image} alt='profile-image' />

              <div className={cx(styles.info, "flexRow")}>
                <div className={cx(styles.nameAndRole, "flexCol")}>
                  <p className={cx(styles.name)}>{selectedUser?.name}</p>
                  <p className={cx(styles.role)}>{selectedUser?.role || "Mentor"}</p>
                </div>

                <img className={cx(styles.flagIcon)} src={flagIcon} alt='flag' />
              </div>
            </div>
            <div className={cx(styles.btnGroup, "flexRow-align-center")}>
              <Button
                onClick={() => navigate("/dashboard/messages/chats/1")}
                title='Send Message'
                size={"small"}
                className={cx(styles.editBtn)}
              />
              <Button
                onClick={() => navigate("/dashboard/mentors")}
                type='secondary'
                title='Close'
                size={"small"}
                className={cx(styles.viewBtn)}
              />
            </div>
          </div>
          {isMobile && (
            <div className={cx(styles.togglerDiv, "flexCol-fully-centered")}>
              <img
                className={cx(styles.toggler)}
                src={subMenuIcon}
                alt='toggler'
                onClick={(e) => handleOpenSideBar(e, true)}
              />
              <small className={cx(styles.togglerText)}>All Users</small>
            </div>
          )}
        </div>

        <div className={cx(styles.outletBody, "flexCol")}>
          <div className={cx(styles.tabsWrapper, "flexRow")}>
            <Tabs data={getTabMenu()} onClick={handleTabMenuClick} />
          </div>

          <div className={cx(styles.contentWrapper)}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
