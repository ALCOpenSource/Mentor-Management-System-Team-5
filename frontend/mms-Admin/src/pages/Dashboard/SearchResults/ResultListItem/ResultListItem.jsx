import React from 'react';
import cx from "classnames";
import styles from "./ResultListItem.module.scss";
import PropTypes from "prop-types";

function ResultListItem({data}) {
  return (
    <div className={cx(styles.cardWrapper, "flexCol")}>
        <div className={cx(styles.cardHeader, "flexRow-space-between")}>
            <div className={cx(styles.cardIcon)}>
                <data.icon />
            </div>
            <div className={cx(styles.metaData, "flexCol")}>
                <h6 className={cx(styles.metaDataTitle)}>{data.title}</h6>
                <div className={cx(styles.dateTime, "flexRow")}>
                    {data.CalendarIcon && 
                    <div className={cx(styles.infoWrapper, "flexRow")}>
                        <data.CalendarIcon />
                        <span className={cx(styles.value)}>{data?.date}</span>
                    </div>}
                    {data.ClockIcon && 
                    <div className={cx(styles.infoWrapper, "flexRow")}>
                        <data.ClockIcon />
                        <span className={cx(styles.value)}>{data?.time}</span>
                    </div>}
                </div>
            </div>
            <div className={cx(styles.cardStatus)}>
                In {data.source}
            </div>
        </div>
    </div>
  )
}

ResultListItem.propTypes = {
    data: PropTypes.object
};
export default ResultListItem