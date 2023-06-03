import React, { useState, useEffect, useMemo } from "react";
import cx from "classnames";
import styles from "./DashboardSideBar.module.scss";
import "./DashboardActiveMenu.scss";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as ProfileIcon } from "@/assets/icons/profile-icon.svg";
import { ReactComponent as DashboardIcon } from "@/assets/icons/dashboard-icon.svg";
import { ReactComponent as ProgramsIcon } from "@/assets/icons/programs-icon.svg";
import { ReactComponent as TasksIcon } from "@/assets/icons/tasks-icon.svg";
import { ReactComponent as ReportsIcon } from "@/assets/icons/reports-icon.svg";
import { ReactComponent as MentorsIcon } from "@/assets/icons/mentors-icon.svg";
import { ReactComponent as MentorManagersIcon } from "@/assets/icons/mentor-managers-icon.svg";
import { ReactComponent as ApprovalRequestsIcon } from "@/assets/icons/approval-requests-icon.svg";
import { ReactComponent as CertificatesIcon } from "@/assets/icons/certificates-icon.svg";
import { ReactComponent as MessagesIcon } from "@/assets/icons/messages-icon.svg";
import { ReactComponent as DiscussionForumIcon } from "@/assets/icons/discussion-forum-icon.svg";
import { ReactComponent as SettingsIcon } from "@/assets/icons/settings-icon.svg";
import { ReactComponent as LogoutIcon } from "@/assets/icons/logout-icon.svg";
import userInfo from "@/hooks/useGetUserInfo";
import arrayToString from "@/helpers/arrayToString";
import { logout } from "@/utils/auth";
import { titleCase } from "@/helpers/textTransform";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "@/redux/Settings/SettingsSlice";
import useIsMobile from "@/hooks/useIsMobile";

function DashboardSideBar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { toggleSidebar } = useProSidebar();
  const userData = userInfo();
  const currentPage = location.pathname.split("/")[2] || "";
  const userProfile = useSelector((state) => state.settings.getProfileData);

  const menuItemsArray = useMemo(
    () => [
      {
        name: "Profile",
        link: "profile",
        icon: <ProfileIcon />
      },
      {
        name: "Dashboard",
        link: "",
        icon: <DashboardIcon />
      },
      {
        name: "Programs",
        link: "programs",
        icon: <ProgramsIcon />
      },
      {
        name: "Tasks",
        link: "tasks",
        icon: <TasksIcon />
      },
      {
        name: "Reports",
        link: "reports",
        icon: <ReportsIcon />
      },
      {
        name: "Mentors",
        link: "mentors",
        icon: <MentorsIcon />
      },
      {
        name: "Mentor Managers",
        link: "mentor-managers",
        icon: <MentorManagersIcon />
      },
      {
        name: "Approval Requests",
        link: "approval-requests",
        icon: <ApprovalRequestsIcon />
      },
      {
        name: "Certificates",
        link: "certificates",
        icon: <CertificatesIcon />
      },
      {
        name: "Messages",
        link: "messages",
        icon: <MessagesIcon />,
        count: 11
      },
      {
        name: "Discussion Forum",
        link: "discussion-forum",
        icon: <DiscussionForumIcon />
      },
      {
        name: "Settings",
        link: "settings",
        icon: <SettingsIcon />
      },
      {
        name: "Logout",
        link: "/login",
        icon: <LogoutIcon />
      }
    ],
    []
  );

  useEffect(() => {
    isMobile ? toggleSidebar(false) : toggleSidebar(true);
  }, [isMobile, toggleSidebar]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    setActiveIndex(menuItemsArray.findIndex((item) => item.link === currentPage));
  }, [currentPage, menuItemsArray]);

  const [activeIndex, setActiveIndex] = useState(menuItemsArray.findIndex((item) => item.link === currentPage));

  const handleMenuClick = (index, menuItem) => {
    if (menuItem.toLowerCase() === "logout") {
      logout();
      navigate("/login");
    }

    setActiveIndex(index);
    toggleSidebar();
  };

  return (
    <div className={cx(styles.dashboardSideBarContainer, "flexCol")}>
      <Sidebar breakPoint='xl' className={cx(styles.sidebar)}>
        <div className={cx(styles.userInfoDiv, "flexCol")}>
          <h5 className={cx(styles.name)}>
            Hi,{" "}
            {titleCase(userProfile?.firstName) || titleCase(userProfile?.lastName || titleCase(userProfile?.fullName))}
          </h5>
          <p className={cx(styles.role)}>{arrayToString(userData?.roles)}</p>
        </div>
        <Menu>
          {menuItemsArray.map((item, index) => {
            return (
              <MenuItem
                key={index}
                className={cx(activeIndex === index && "sidebar-active-menu")}
                active={activeIndex === index}
                onClick={() => handleMenuClick(index, item.name)}
                icon={item.icon}
                prefix={item.count ? <span className={cx(styles.count)}>{item.count}</span> : null}
                component={<Link to={item?.link} />}
              >
                {" "}
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default DashboardSideBar;
