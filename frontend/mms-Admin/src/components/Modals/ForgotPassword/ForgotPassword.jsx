import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalContainer from "../ModalContainer/ModalContainer";
import cx from "classnames";
import styles from "./ForgotPassword.module.scss";

import headerImage from "@/assets/images/reset-password-success.png";
import Button from "@/components/Button/Button";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useNavigate } from "react-router";

const ForgotPassword = ({ show, size, modalName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalData = useSelector((state) => state.modal.modalData);

  console.log(modalData, "modal data");

  const handleClick = () => {
    dispatch(hideModal({ name: "forgotPassword" }));
    // navigate("/login");
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>Forgot Password</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <p className={cx(styles.content)}>
            An email has been sent to your registered email. Follow the link to reset your password.
          </p>
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

export default ForgotPassword;
