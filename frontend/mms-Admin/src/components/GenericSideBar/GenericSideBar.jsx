import React, { useState, useEffect, useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./GenericSideBar.module.scss";
import useIsMobile from "@/hooks/useIsMobile";
import Loader from "@/components/Loader/Loader";

function GenericSideBar({ data, selectedMenuItem, closeGenericSideBar, loading }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(true);
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

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
      {data?.headerComponent && <div className={cx(styles.genericSideBarHeader)}>{data?.headerComponent}</div>}
      {loading ? (
        <Loader />
      ) : Array.isArray(data?.listItems) && data?.listItems.length > 0 ? (
        <ul>
          {Array.isArray(data?.listItems) &&
            data?.listItems.map((item, index) => (
              <li key={index} onClick={() => handleMenuClick(item?.id)}>
                {item?.component}
              </li>
            ))}
        </ul>
      ) : (
        <div className={cx(styles.noDataDiv, "flexRow-fully-centered")}>
          <h6 className={cx(styles.noDataText)}>No data available</h6>
        </div>
      )}
    </div>
  );
}

GenericSideBar.propTypes = {
  data: PropTypes.object,
  selectedMenuItem: PropTypes.func,
  closeGenericSideBar: PropTypes.func,
  loading: PropTypes.bool
};

export default GenericSideBar;
