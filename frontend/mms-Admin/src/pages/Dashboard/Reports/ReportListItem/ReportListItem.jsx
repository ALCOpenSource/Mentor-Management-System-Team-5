import React, { useState, useEffect } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./ReportListItem.module.scss";
import "./ReportListActiveItem.scss";
import cardIcon from "@/assets/icons/reports-overview-card-icon.svg";
import formatDate from "@/helpers/formatDate";

function ReportListItem({ data, userProfiles }) {
  const [userFullName, setUserFullName] = useState("");

  useEffect(() => {
    let user = Array.isArray(userProfiles) && userProfiles.find((profile) => profile.id === data?.createdBy);
    setUserFullName(`${user?.firstName} ${user?.lastName}`);
  }, [userProfiles, data?.createdBy]);

  return (
    <div className={cx(styles.reportListItemContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={cardIcon} alt='icon' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.reportTitle}</h5>
          <div className={cx(styles.metaData, "flexRow-align-center")}>
            <span className={cx(styles.name)}>By {userFullName}</span>-
            <span className={cx(styles.date)}>{formatDate(data?.createdAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ReportListItem.propTypes = {
  data: PropTypes.object,
  userProfiles: PropTypes.array
};

export default ReportListItem;
