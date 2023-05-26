import React from "react";
import cx from "classnames";
import styles from "./RecentListItem.module.scss";
import "./RecentListActiveItem.scss";
import PropTypes from "prop-types";
import Button from "@/components/Button/Button";

function RecentListItem({ data, onClick }) {
  return (
    <div onClick={() => onClick(data)} className={cx(styles.recentListItemContainer, "flexCol")}>
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={data?.icon} alt='icon' />
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title)}>{data?.title}</h5>
          <span className={cx(styles.description)}>{data?.description}</span>
        </div>
        <div className={cx(styles.btnDiv, "flexRow")}>
          <Button title='View' type='primary' size='small' />
        </div>
      </div>
    </div>
  );
}

RecentListItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
};

export default RecentListItem;