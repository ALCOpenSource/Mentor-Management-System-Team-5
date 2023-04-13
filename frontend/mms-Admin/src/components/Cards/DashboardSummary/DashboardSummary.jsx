import React from "react";
import cx from "classnames";
import styles from "./DashboardSummary.module.scss";
import PropTypes from "prop-types";

const DashboardSummaryCard = ({ data }) => {
  return (
    <div className={cx(styles.dashboardSummaryContainer, "flexRow-space-between")}>
      <div className={cx(styles.leftSection, "flexCol")}>
        <h6 className={cx(styles.heading)}>{data.title}</h6>
        <p className={cx(styles.body, "flexRow")}>
          <span className={cx(styles.value)}>{data.value}</span>
          <span className={cx(styles.percentChange)}>{data.percentChange}</span>
        </p>
      </div>
      <img className={cx(styles.icon)} src={data.icon} alt='icon' />
    </div>
  );
};

DashboardSummaryCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default DashboardSummaryCard;
