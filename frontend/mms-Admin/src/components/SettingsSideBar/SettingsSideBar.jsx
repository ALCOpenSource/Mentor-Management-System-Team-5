import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import styles from "./SettingsSideBar.module.scss";
import "./SettingsSideBarActiveMenu.scss";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as SettingsToggler } from "@/assets/icons/settings-toggler-icon.svg";

const SettingsSideBar = ({ data }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentSideBarPosition, setCurrentSideBarPosition] = useState(0);
  const [fixed, setFixed] = useState(false);

  const sidebarRef = useRef(null);

  const handleSidebarToggle = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Update the active link when the route changes
    const path = location.pathname;
    let currentPath = path.split("/")[3] || "";
    const active = data.find((link) => link.link === currentPath);
    setActiveLink(active ? active.link : "");
  }, [location.pathname, data]);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);

    let currentHeight = sidebarRef.current.getBoundingClientRect();
    setCurrentSideBarPosition(currentHeight.top);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, open]);

  const sidebarWidth = isMobile ? (open ? "100%" : "50px") : "250px";
  const sidebarHeight = open ? "100%" : "100%";

  const handleMenuClick = () => {
    if (isMobile && open) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={cx(styles.settingsSideBarContainer, "flexCol")}
      style={{
        width: sidebarWidth,
        height: sidebarHeight,
        position: open ? "fixed" : "relative",
        top: open ? currentSideBarPosition : "0",
        transition: "width 0.1s",
        overflow: isMobile && !open ? "hidden" : "auto"
      }}
    >
      {isMobile && <SettingsToggler onClick={handleSidebarToggle} />}
      <ul>
        {data?.map((item, index) => (
          <li
            onClick={() => handleMenuClick()}
            className={activeLink === item.link ? "settings-sidebar-active-menu" : ""}
            key={index}
          >
            {isMobile && !open && <span onClick={handleSidebarToggle}>{item?.icon}</span>}
            {(open || !isMobile) && (
              <Link to={`${item?.link}`} key={index}>
                {" "}
                {item?.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

SettingsSideBar.propTypes = {
  data: PropTypes.object
};

export default SettingsSideBar;
