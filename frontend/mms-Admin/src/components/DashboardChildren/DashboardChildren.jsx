import React from "react";
import cx from "classnames";
import styles from "./DashboardChildren.module.scss";
import PropTypes from "prop-types";

const DashboardChildren = ({ children }) => {
  return <div className={cx(styles.dashboardChildrenContainer, "flexCol")}>{children}</div>;
};

DashboardChildren.propTypes = {
  children: PropTypes.node.isRequired
};

export default DashboardChildren;
