import React from "react";
import cx from "classnames";
import styles from "./DashboardReportsOverview.module.scss";
import PropTypes from "prop-types";

const DashboardReportsOverview = ({ data }) => {
  return (
    <div className={cx(styles.dashboardReportsOverviewContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={data?.icon} alt="icon" />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.title}</h5>
          <div className={cx(styles.metaData, "flexRow-align-center")}>
            <span className={cx(styles.name)}>By {data?.author}</span>
            {"-"}
            <span className={cx(styles.date)}>{data?.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardReportsOverview.propTypes = {
  data: PropTypes.object
};

export default DashboardReportsOverview;
