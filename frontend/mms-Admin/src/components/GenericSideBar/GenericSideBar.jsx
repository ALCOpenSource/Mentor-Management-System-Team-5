import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import styles from "./GenericSideBar.module.scss";
import "./GenericSideBarActiveMenu.scss";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as SettingsToggler } from "@/assets/icons/settings-toggler-icon.svg";
import searchIcon from "@/assets/icons/settings-toggler-icon.svg";

const GenericSideBar = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentSideBarPosition, setCurrentSideBarPosition] = useState(0);
  const [fixed, setFixed] = useState(false);

  console.log(data, "data");

  const sidebarRef = useRef(null);

  const handleSidebarToggle = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // useEffect(() => {
  //   // Update the active link when the route changes
  //   const path = location.pathname;
  //   let currentPath = path.split("/")[3] || "";
  //   const active = data.find((link) => link.link === currentPath);
  //   setActiveLink(active ? active.link : "");
  // }, [location.pathname, data]);

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

  const handleMenuClick = (itemId) => {
    if (isMobile && open) {
      navigate(`${itemId}`);
      setOpen(false);
    } else if (isMobile && !open) {
      setOpen(true);
    } else {
      navigate(`${itemId}`);
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={cx(styles.genericSideBarContainer, "flexCol")}
      style={{
        width: sidebarWidth,
        height: sidebarHeight,
        position: open ? "fixed" : "relative",
        top: open ? currentSideBarPosition : "0",
        transition: "width 0s",
        overflowX: isMobile && !open ? "hidden" : "auto",
        whiteSpace: open ? "normal" : "nowrap"
      }}
    >
      {/* {isMobile && <SettingsToggler onClick={handleSidebarToggle} />} */}
      {isMobile && (
        <img
          style={{
            padding: open ? "0 0 0 1rem" : "0 0 0 0.5rem"
          }}
          className={cx(styles.toggler)}
          onClick={handleSidebarToggle}
          src={searchIcon}
          alt='toggler'
        />
      )}
      <ul
        style={{
          padding: open ? "0 1rem" : "0"
        }}
      >
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => handleMenuClick(item.id)}
            className={activeLink === item.link ? "general-sidebar-active-menu" : ""}
          >
            {item?.component}
          </li>
        ))}
      </ul>
    </div>
  );
};

GenericSideBar.propTypes = {
  data: PropTypes.object
};

export default GenericSideBar;
