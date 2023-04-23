import React, { useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./SelectionSideBar.module.scss";
import useIsMobile from "@/hooks/useIsMobile";

function SelectionSideBar({ data, selectedMenuItem }) {
  const isMobile = useIsMobile();
  const sidebarRef = useRef(null);

  // const handleClickOutside = (event) => {
  //     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
  //         setOpen(false);
  //     }
  // };

  // useEffect(() => {
  //     if (isMobile && open) {
  //         document.body.style.overflow = "hidden";
  //         document.addEventListener("mousedown", handleClickOutside);
  //     } else {
  //         document.body.style.overflow = "auto";
  //         document.removeEventListener("mousedown", handleClickOutside);
  //     }

  //     return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //     };
  // }, [isMobile, open]);

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
          <li key={index} onClick={() => handleMenuClick(item.id)}>
            {item?.component}
          </li>
        ))}
      </ul>
    </div>
  );
}

SelectionSideBar.propTypes = {
  data: PropTypes.object,
  selectedMenuItem: PropTypes.func
};

export default SelectionSideBar;
