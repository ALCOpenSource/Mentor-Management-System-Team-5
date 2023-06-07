import React from "react";
import cx from "classnames";
import styles from "./RecentListItem.module.scss";
import PropTypes from "prop-types";
import Button from "@/components/Button/Button";
import { useParams } from "react-router-dom";

function RecentListItem({ data, onClick }) {
  const { id } = useParams();

  return (
    <div
      onClick={() => onClick(data)}
      className={cx(styles.recentListItemContainer, "flexCol", id === data?.id.toString() && styles.activeItem)}
    >
      <div className={cx(styles.body, "flexRow-align-center")}>
        <div className={cx(styles.imageDiv, "flexRow-fully-centered")}>
          <img className={cx(styles.cardImage)} src={data?.cardImage} alt='icon' />
          <img className={cx(styles.icon)} src={data?.icon} alt='icon' />
        </div>
        <div className={cx(styles.mainContent, "flexCol")}>
          <h5 className={cx(styles.title, data?.type === "program" && styles.multiLine)}>{data?.name}</h5>
          {data?.description && <span className={cx(styles.description)}>{data?.description}</span>}
        </div>
        {data?.type === "program" ? (
          data?.count && <span className={cx(styles.count, "flexRow-fully-centered")}>{data?.count}</span>
        ) : (
          <div className={cx(styles.btnDiv, "flexRow")}>
            <Button title='View' type='primary' size='small' />
          </div>
        )}
      </div>
    </div>
  );
}

RecentListItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
};

export default RecentListItem;
