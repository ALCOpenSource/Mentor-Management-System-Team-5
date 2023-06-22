import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./UserComponent.module.scss";
import Button from "@/components/Button/Button";
import { useParams } from "react-router-dom";
import profileImage from "@/assets/images/sample-profile-image.svg";
import formatDate from "@/helpers/formatDate";

function UserComponent({ data, onClick }) {
  const { id } = useParams();

  return (
    <div
      onClick={() => onClick(data)}
      className={cx(styles.userComponent, "flexRow-align-center", id === data?.id.toString() && styles.active)}
    >
      <img
        className={cx(styles.avatar)}
        src={data?.profileImage ? data?.profileImage : profileImage}
        alt='user-image'
      />
      <div className={cx(styles.userInfo, "flexCol")}>
        <h5 className={cx(styles.name)}>{`${data?.firstName} ${data?.lastName}`}</h5>
        <p className={cx(styles.date)}>Added {formatDate(data?.dateCreated)}</p>
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
