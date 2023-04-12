import React from 'react'
import cx from 'classnames'
import styles from "./DashboardSideBar.module.scss";

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import profileIcon from "@/assets/icons/profile-icon.svg";
import dashboardIcon from "@/assets/icons/dashboard-icon.svg";
import programsIcon from "@/assets/icons/programs-icon.svg";
import tasksIcon from "@/assets/icons/tasks-icon.svg";
import reportsIcon from "@/assets/icons/reports-icon.svg";
import mentorsIcon from "@/assets/icons/mentors-icon.svg";
import mentorManagersIcon from "@/assets/icons/mentor-managers-icon.svg";
import approvalRequestsIcon from "@/assets/icons/approval-requests-icon.svg";
import certificatesIcon from "@/assets/icons/certificates-icon.svg";
import messagesIcon from "@/assets/icons/messages-icon.svg";
import discussionForumIcon from "@/assets/icons/discussion-forum-icon.svg";
import settingsIcon from "@/assets/icons/settings-icon.svg";


const DashboardSideBar = () => {

    const menuItemsArray = [
        {
            name: "Profile",
            link: "profile",
            icon: profileIcon
        },
        {
            name: "Dashboard",
            link: "",
            icon: dashboardIcon
        },
        {
            name: "Programs",
            link: "programs",
            icon: programsIcon
        },
        {
            name: "Tasks",
            link: "tasks",
            icon: tasksIcon
        },
        {
            name: "Reports",
            link: "reports",
            icon: reportsIcon
        },
        {
            name: "Mentors",
            link: "mentors",
            icon: mentorsIcon
        },
        {
            name: "Mentor Managers",
            link: "mentor-managers",
            icon: mentorManagersIcon
        },
        {
            name: "Approval Requests",
            link: "approval-requests",
            icon: approvalRequestsIcon
        },
        {
            name: "Certificates",
            link: "certificates",
            icon: certificatesIcon
        },
        {
            name: "Messages",
            link: "messages",
            icon: messagesIcon
        },
        {
            name: "Discussion Forum",
            link: "discussion-forum",
            icon: discussionForumIcon
        },
        {
            name: "Settings",
            link: "settings",
            icon: settingsIcon
        }
    ];

    return (
        <div className={cx(styles.dashboardSideBarContainer, "flexCol")}>
            <Sidebar
                collapsed={false}
                breakPoint='xl'
                className={cx(styles.sidebar)}
            >
                <div className={cx(styles.userInfoDiv, "flexCol")}>
                    <h5 className={cx(styles.name)}>Hi Kabiru</h5>
                    <p className={cx(styles.role)}>Admin</p>
                </div>

                <Menu>
                    {
                        menuItemsArray.map((item, index) => {
                            return (
                                <MenuItem icon={<img src={item.icon} />} component={<Link to={item.link} />}> {item.name}</MenuItem>
                            )
                        })
                    }
                </Menu>
            </Sidebar>
        </div>
    )
}

export default DashboardSideBar