import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./DashboardSummary.module.scss";

function DashboardSummaryCard({ data, onClick }) {
  return (
    <div onClick={onClick} className={cx(styles.dashboardSummaryContainer, "flexRow-space-between")}>
      <div className={cx(styles.leftSection, "flexCol")}>
        <h6 className={cx(styles.heading)}>{data.title}</h6>
        <p className={cx(styles.body, "flexRow")}>
          <span className={cx(styles.value)}>{data.value}</span>
          <span className={cx(styles.percentChange)}>{data.percentChange}</span>
        </p>
      </div>
      {/* <img className={cx(styles.icon)} src={data.icon} alt='icon' /> */}
      <data.icon className={cx(styles.icon)} alt='icon' />
    </div>
  );
}

DashboardSummaryCard.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default DashboardSummaryCard;
