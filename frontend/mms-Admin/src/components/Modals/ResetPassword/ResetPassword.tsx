import React from "react";
import { useDispatch } from "react-redux";
import ModalContainer from "../ModalContainer/ModalContainer";
import cx from "classNames";
import styles from "./ResetPassword.module.scss";

import headerImage from "@/assets/images/reset-password-success.png";
import Button from "@/components/Button/Button";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useNavigate } from "react-router";

const PasswordReset = ({ show, size }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(hideModal({ name: "resetPassword" }));
    navigate("/login");
  };

  return (
    <ModalContainer show={show} size={size}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>Password Reset Successful</h6>
          <img className={cx(styles.headerImage)} src={headerImage} alt='header-image' />
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
            <Button
              onClick={handleClick}
              title='Done'
              textColor='#FFF'
              bgColor='#035D63'
              hoverColor='#fff'
              hoverBg='#058b94'
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default PasswordReset;
