import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./SuccessNotification.module.scss";
import Button from "@/components/Button/Button";
import { hideModal } from "@/redux/Modal/ModalSlice";
import { useNavigate } from "react-router-dom";

function SuccessNotification({ show, size, modalName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalData = useSelector((state) => state.modal.modalData);

  const handleClick = () => {
    dispatch(hideModal({ name: "successNotification" }));
    modalData?.redirectUrl && navigate(modalData?.redirectUrl);
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>{modalData?.title || modalData}</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          {modalData?.image && (
            <img className={cx(styles.successImage)} src={modalData?.image} alt='notification-image' />
          )}
          {modalData?.message && <p className={cx(styles.message)}>{modalData?.message}</p>}
        </div>

        <div className={cx(styles.modalFooter)}>
          <div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
            <Button onClick={handleClick} title='Done' />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

SuccessNotification.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default SuccessNotification;
