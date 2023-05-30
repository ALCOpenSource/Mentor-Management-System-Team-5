import React from "react";
import cx from "classnames";
import styles from "./TaskListItem.module.scss";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function TaskListItem({ data }) {
  const { id } = useParams();

  return (
    <div className={cx(styles.taskListItemContainer, "flexCol", id === data?.id.toString() && styles.activeItem)}>
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
}

TaskListItem.propTypes = {
  data: PropTypes.object
};

export default TaskListItem;
