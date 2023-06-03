import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cx from "classnames";
import { Navbar, Nav } from "react-bootstrap";
import { useProSidebar } from "react-pro-sidebar";
import { Icon } from "@iconify/react";
import styles from "./DashboardHeader.module.scss";

import logo from "@/assets/images/logo.svg";
import messageIcon from "@/assets/icons/message-icon.svg";
import notificationIcon from "@/assets/icons/notification-icon.svg";
import searchIcon from "@/assets/icons/search-icon.svg";

import { initialsCase } from "@/helpers/textTransform";
import { useSelector } from "react-redux";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const { toggleSidebar } = useProSidebar();
  const navigate = useNavigate();

  const userProfile = useSelector((state) => state.settings.getProfileData);

  const handleMenuClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    setExpanded(false);
  };

  return (
    <section className={cx(styles.dashboardHeaderContainer, "flexRow-fully-centered")}>
      <Navbar expanded={expanded} expand='lg' className={cx(styles.navbarContainer, "flexRow")}>
        <div className={cx(styles.sideBarToggler)}>
          <Icon onClick={() => toggleSidebar()} icon='bi:layout-text-sidebar-reverse' color='#fff' width={24} />
        </div>

        <Navbar.Brand className={cx(styles.logoDiv, "flexRow")}>
          <Link to='/dashboard'>
            <img className={cx(styles.logo)} src={logo} alt='logo' />
          </Link>
          <Link to='/dashboard'>
            <p className={cx(styles.caption)}>Mentor&apos;s Managers System</p>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className={cx(styles.navbarToggler)}
          aria-controls='responsive-navbar-nav'
        />
        {/* <Navbar.Toggle className={cx(styles.navbarToggler)}>
          <div
            onClick={() => navigate("/dashboard/settings")}
            className={cx(styles.profileImageDiv, "flexRow-fully-centered")}
          >
            {userProfile?.profilePicture ? (
              <img className={cx(styles.profileImage)} src={userProfile?.profilePicture} alt='profile-image' />
            ) : (
              <span className={cx(styles.profileImageText)}>{initialsCase(userProfile?.firstName)}</span>
            )}
          </div>
        </Navbar.Toggle> */}

        <Navbar.Collapse className={cx(styles.navbarCollapse, "flexRow")} id='responsive-navbar-nav'>
          <Nav className={cx(styles.primaryNavigation, "flexRow-space-between")}>
            <div className={cx(styles.inputDiv, "flexRow-align-center")}>
              <img className={cx(styles.searchIcon)} src={searchIcon} alt='search-icon' />
              <input type='text' placeholder='Search for anything' />
            </div>
            <div className={cx(styles.iconsDiv, "flexRow-fully-centered")}>
              <div className={cx(styles.container, "flexRow-align-center")}>
                <span className={cx(styles.count)}>11</span>
                <img onClick={(e) => handleMenuClick(e, "/dashboard/messages")} src={messageIcon} alt='message-icon' />
              </div>
              <div className={cx(styles.container, "flexRow-align-center")}>
                <span className={cx(styles.count)}>11</span>
                <img src={notificationIcon} alt='notification-icon' />
              </div>
            </div>
            <div
              onClick={(e) => handleMenuClick(e, "/dashboard/settings")}
              className={cx(styles.profileImageDiv, "flexRow-fully-centered")}
            >
              {userProfile?.profilePicture ? (
                <img className={cx(styles.profileImage)} src={userProfile?.profilePicture} alt='profile-image' />
              ) : (
                <span className={cx(styles.profileImageText)}>{initialsCase(userProfile?.firstName)}</span>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default Header;
