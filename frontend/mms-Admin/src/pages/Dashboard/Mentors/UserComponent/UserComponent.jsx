import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./UserComponent.module.scss";
import Button from "@/components/Button/Button";
import { useParams } from "react-router-dom";

function UserComponent({ data, onClick }) {
  const { id } = useParams();

  return (
    <div
      onClick={() => onClick(data)}
      className={cx(styles.userComponent, "flexRow-align-center", id === data?.id.toString() && styles.active)}
    >
      <img className={cx(styles.avatar)} src={data?.image} alt='user-image' />
      <div className={cx(styles.userInfo, "flexCol")}>
        <h5 className={cx(styles.name)}>{data?.name}</h5>
        <p className={cx(styles.date)}>Added {data?.dateAdded}</p>
      </div>
      <Button title='View' size='small' />
    </div>
  );
}

UserComponent.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default UserComponent;
