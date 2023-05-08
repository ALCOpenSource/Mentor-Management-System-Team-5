import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styles from "./GenericSideBar.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

function GenericSideBar({ data, selectedMenuItem, activeMenuItemClass, closeGenericSideBar }) {
  const params = useParams();
  const [activeLink, setActiveLink] = useState("");
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(true);
  const currentId = params?.id;
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const active = data?.listItems.find((menuItem) => menuItem.id.toString() === currentId);
    setActiveLink(active ? active.id : "");
  }, [currentId, data]);

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

  const sidebarWidth = isMobile ? "100%" : "300px";

  const handleMenuClick = (itemId) => {
    if (isMobile && open) {
      selectedMenuItem(itemId);
      closeGenericSideBar();
    } else {
      selectedMenuItem(itemId);
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={cx(styles.genericSideBarContainer, "flexCol")}
      style={{
        width: sidebarWidth,
        position: isMobile ? "absolute" : "relative",
        transition: "width 0s"
      }}
    >
      {data?.headerComponent && (
        <div className={cx(styles.genericSideBarHeader, "flexCol")}>{data?.headerComponent}</div>
      )}
      <ul>
        {data?.listItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleMenuClick(item.id)}
            className={activeLink.toString() === item.id.toString() ? activeMenuItemClass : ""}
          >
            {item?.component}
          </li>
        ))}
      </ul>
    </div>
  );
}

GenericSideBar.propTypes = {
  data: PropTypes.array,
  selectedMenuItem: PropTypes.func,
  activeMenuItemClass: PropTypes.string,
  closeGenericSideBar: PropTypes.func
};

export default GenericSideBar;
