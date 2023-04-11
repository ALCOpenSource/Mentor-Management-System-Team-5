import React from "react";
import { useDispatch } from "react-redux";

import ModalContainer from "../ModalContainer/ModalContainer";
import cx from "classnames";
import styles from "./ResetPassword.module.scss";

import headerImage from "@/assets/images/reset-password-success.png";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useNavigate } from "react-router";


const ResetPassword = ({ show, size, modalName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(hideModal({ name: "resetPassword" }));
    navigate("/login");
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>Password Reset Successful</h6>
          <img className={cx(styles.headerImage)} src={headerImage} alt='header-image' />
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
            <PrimaryButton
              onClick={handleClick}
              title='Done'
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ResetPassword;
