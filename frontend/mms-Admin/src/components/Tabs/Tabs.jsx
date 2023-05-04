import React, { useState } from "react";
import cx from "classnames";
import styles from "./Tabs.module.scss";
import PropTypes from "prop-types";

const Tabs = ({ data, onClick }) => {
  const [active, setActive] = useState(0);

  const handleTabClick = (item, index) => {
    onClick(item);
    setActive(index);
  };

  return (
    <div className={cx(styles.tabsContainer, "flexRow")}>
      {Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => handleTabClick(item, index)}
              className={cx(styles.tab, active === index ? styles.active : null)}
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
