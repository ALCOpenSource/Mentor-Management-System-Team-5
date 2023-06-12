import React, { useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./SelectionSideBar.module.scss";
import useIsMobile from "@/hooks/useIsMobile";
import { useParams } from "react-router-dom";

function SelectionSideBar({ data, selectedMenuItem, activeClassName }) {
  const isMobile = useIsMobile();
  const sidebarRef = useRef(null);
  const params = useParams();
  const currentId = params?.id;

  const sidebarWidth = isMobile ? "100%" : "300px";

  const handleMenuClick = (itemId) => {
    selectedMenuItem(itemId);
  };

  return (
    <div
      ref={sidebarRef}
      className={cx(styles.selectionSideBarContainer, "flexCol")}
      style={{
        width: sidebarWidth,
        position: isMobile ? "absolute" : "relative",
        transition: "width 0s"
      }}
    >
      <div className={cx(styles.selectionSideBarHeader, "flexCol")}>{data?.headerComponent}</div>

      <ul>
        {data.listItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleMenuClick(item?.id)}
            className={currentId === item.id.toString() ? activeClassName : ""}
          >
            {item?.component}
          </li>
        ))}
      </ul>
    </div>
  );
}

SelectionSideBar.propTypes = {
  data: PropTypes.object,
  selectedMenuItem: PropTypes.func,
  activeClassName: PropTypes.string
};

export default SelectionSideBar;
