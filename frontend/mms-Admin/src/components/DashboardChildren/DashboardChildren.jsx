import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./DashboardChildren.module.scss";

function DashboardChildren({ children }) {
  return <div className={cx(styles.dashboardChildrenContainer, "flexCol")}>{children}</div>;
}

DashboardChildren.propTypes = {
  children: PropTypes.node.isRequired
};

export default DashboardChildren;
