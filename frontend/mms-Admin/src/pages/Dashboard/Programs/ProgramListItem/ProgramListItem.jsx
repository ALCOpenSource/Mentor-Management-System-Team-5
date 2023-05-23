import React from "react";
import cx from "classnames";
import styles from "./ProgramListItem.module.scss";
import "./ProgramListActiveItem.scss";
import PropTypes from "prop-types";

function ProgramListItem({ data }) {
  return (
    <div className={cx(styles.programListItemContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={data?.icon} alt='icon' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.title}</h5>
          <div className={cx(styles.metaData, "flexRow")}>
            <div className={cx(styles.info, "flexRow")}>
                <data.CalendarIcon />
                <span className={cx(styles.value)}>{data?.date}</span>
            </div>
            <div className={cx(styles.info, "flexRow")}>
                <data.ClockIcon />
                <span className={cx(styles.value)}>{data?.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProgramListItem.propTypes = {
  data: PropTypes.object
};

export default ProgramListItem;
