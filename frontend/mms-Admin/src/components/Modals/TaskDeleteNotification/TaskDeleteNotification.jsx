import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalContainer from "../ModalContainer/ModalContainer";
import cx from "classnames";
import styles from "./TaskDeleteNotification.module.scss";

import successImage from "@/assets/images/task-delete-success.png";

import Button from "@/components/Button/Button";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useNavigate } from "react-router";

const TaskDeleteNotification = ({ show, size, modalName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalData = useSelector((state) => state.modal.modalData);

  console.log(modalData, "modal data");

  const handleClick = () => {
    dispatch(hideModal({ name: "taskDeleteNotification" }));
    // navigate("/login");
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>{modalData}</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <img className={cx(styles.successImage)} src={successImage} alt='notification-image' />
        </div>

        <div className={cx(styles.modalFooter)}>
          <div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
            <Button onClick={handleClick} title='Done' />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default TaskDeleteNotification;
