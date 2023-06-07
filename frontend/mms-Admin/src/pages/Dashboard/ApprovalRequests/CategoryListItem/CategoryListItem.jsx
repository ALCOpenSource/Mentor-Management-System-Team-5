import React from "react";
import cx from "classnames";
import styles from "./CategoryListItem.module.scss";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function CategoryListItem({ data, onClick }) {
  const location = useLocation().pathname.split("/")[3] || "mentor-manager-requests";
  return (
    <div
      onClick={() => onClick(data)}
      className={cx(styles.categoryListItemContainer, "flexCol", data?.path.includes(location) && styles.active)}
    >
      <div className={cx(styles.body, "flexRow-align-center")}>
        <img className={cx(styles.icon)} src={data?.icon} alt='icon' />
        <h5 className={cx(styles.title)}>{data?.title}</h5>
        <span className={cx(styles.count)}>{data?.count}</span>
      </div>
    </div>
  );
}

CategoryListItem.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
};

export default CategoryListItem;
