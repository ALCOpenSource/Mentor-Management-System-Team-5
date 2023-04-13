import React from "react";
import cx from "classnames";
import styles from "./DashboardTasksOverview.module.scss";
import PropTypes from "prop-types";

const DashboardTasksOverview = ({ data }) => {
  return (
    <div className={cx(styles.dashboardTasksOverviewContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={data?.icon} alt='icon' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.title}</h5>
          <div className={cx(styles.metaData, "flexRow")}>
            <img className={cx(styles.dateIcon)} src={data?.calendarIcon} alt='calendar-icon' />
            <span className={cx(styles.date)}>{data?.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardTasksOverview.propTypes = {
  data: PropTypes.object
};

export default DashboardTasksOverview;
