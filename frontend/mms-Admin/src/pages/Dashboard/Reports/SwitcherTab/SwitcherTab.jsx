import React from "react";
import cx from "classnames";
import styles from "./SwitcherTab.module.scss";
import PropTypes from "prop-types";

const SwitcherTab = ({ data, selectedTab, activeTab }) => {
  return (
    <div className={cx(styles.switcherTab, "flexRow")}>
      {data.map((item) => (
        <span
          className={activeTab === item.key ? cx(styles.activeTab, styles.tab) : cx(styles.tab)}
          onClick={() => selectedTab(item)}
          key={item.key}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
};

SwitcherTab.propTypes = {
  data: PropTypes.array.isRequired,
  selectedTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string
};

SwitcherTab.defaultProps = {
  activeTab: ""
};

export default SwitcherTab;
