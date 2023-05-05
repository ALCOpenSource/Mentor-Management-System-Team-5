import React from "react";
import cx from "classnames";
import styles from "./Tabs.module.scss";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Tabs = ({ data, onClick }) => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  let subMenuPath = data.find((item) => item?.path === path)?.path || data[0]?.path;

  const handleTabClick = (item) => {
    onClick(item);
  };

  return (
    <div className={cx(styles.tabsContainer, "flexRow")}>
      {Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => handleTabClick(item, index)}
              className={cx(styles.tab, subMenuPath === item?.path ? styles.active : null)}
            >
              {item?.name}
            </span>
          );
        })}
    </div>
  );
};

Tabs.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
  active: PropTypes.bool
};

export default Tabs;
