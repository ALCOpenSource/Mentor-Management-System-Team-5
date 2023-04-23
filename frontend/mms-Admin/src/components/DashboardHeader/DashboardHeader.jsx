import React, { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { Navbar, Nav } from "react-bootstrap";
import { useProSidebar } from "react-pro-sidebar";
import { Icon } from "@iconify/react";
import styles from "./DashboardHeader.module.scss";

import logo from "@/assets/images/logo.svg";
import messageIcon from "@/assets/icons/message-icon.svg";
import notificationIcon from "@/assets/icons/notification-icon.svg";
import profileImage from "@/assets/images/sample-profile-image.svg";
import searchIcon from "@/assets/icons/search-icon.svg";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const { toggleSidebar } = useProSidebar();

  return (
    <section className={cx(styles.dashboardHeaderContainer)}>
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

        <Navbar.Collapse className={cx(styles.navbarCollapse, "flexRow")} id='responsive-navbar-nav'>
          <Nav className={cx(styles.primaryNavigation, "flexRow-space-between")}>
            {/* <NavLink onClick={() => setExpanded(false)} className={(navData) => navData.isActive && cx(styles.active)} end to="/">Home</NavLink> */}

            <div className={cx(styles.inputDiv, "flexRow-align-center")}>
              <img className={cx(styles.searchIcon)} src={searchIcon} alt='search-icon' />
              <input type='text' placeholder='Search for anything' />
            </div>
            <div className={cx(styles.iconsDiv, "flexRow-fully-centered")}>
              <img src={messageIcon} alt='message-icon' />
              <img src={notificationIcon} alt='notification-icon' />
            </div>
            <div className={cx(styles.profileImageDiv, "flexRow-fully-centered")}>
              <img className={cx(styles.profileImage)} src={profileImage} alt='profile-image' />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default Header;
