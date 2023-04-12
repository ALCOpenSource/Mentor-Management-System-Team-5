import React from "react";
import cx from "classnames";
import styles from "./DashboardChildren.module.scss";

const DashboardChildren = ({ children }) => {
  return <div className={cx(styles.dashboardChildrenContainer, "flexCol")}>{children}</div>;
};

export default DashboardChildren;
