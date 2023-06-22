import React from "react";
import cx from "classnames";
import styles from "./ProgramListItem.module.scss";
import "./ProgramListActiveItem.scss";
import PropTypes from "prop-types";
import { ReactComponent as ClockIcon } from "@/assets/icons/clock-icon.svg";
import { ReactComponent as CalendarIcon } from "@/assets/icons/tasks-overview-calendar-icon.svg";
import programsIcon from "@/assets/images/program-avatar.svg";
import formatDate from "@/helpers/formatDate";

function ProgramListItem({ data }) {
  return (
    <div className={cx(styles.programListItemContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img
          className={cx(styles.icon)}
          src={data?.programmePicture ? data?.programmePicture : programsIcon}
          alt='icon'
        />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.name}</h5>
          <div className={cx(styles.metaData, "flexRow")}>
            <div className={cx(styles.info, "flexRow")}>
              <CalendarIcon />
              <span className={cx(styles.value)}>{formatDate(data?.createdAt)}</span>
            </div>
            <div className={cx(styles.info, "flexRow")}>
              <ClockIcon />
              <span className={cx(styles.value)}>
                {new Date(data?.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
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
