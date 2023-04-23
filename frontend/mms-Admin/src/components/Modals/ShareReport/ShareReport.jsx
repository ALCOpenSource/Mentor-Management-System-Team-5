import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./ShareReport.module.scss";
import modalImage from "@/assets/images/share-report-modal-image.svg";
import Button from "@/components/Button/Button";
import { hideModal } from "@/redux/Modal/ModalSlice";

function ShareReport({ show, size, modalName }) {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal.modalData);

  const handleClick = () => {
    dispatch(hideModal({ name: "taskDeleteNotification" }));
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>{modalData}</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <img className={cx(styles.modalImage)} src={modalImage} alt='modal-image' />
        </div>

        <div className={cx(styles.modalFooter)}>
          <div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
            <Button onClick={handleClick} title='Cancel' type='secondary' />
            <Button onClick={handleClick} title='Open Email App' />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

ShareReport.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default ShareReport;
