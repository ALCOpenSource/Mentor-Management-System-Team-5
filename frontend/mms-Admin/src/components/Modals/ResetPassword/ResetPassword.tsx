import React from "react";
import { useAppDispatch } from "@/hooks/useReduxHooks";

import ModalContainer from "../ModalContainer/ModalContainer";
import cx from "classnames";
import styles from "./ResetPassword.module.scss";

import headerImage from "@/assets/images/reset-password-success.png";
import Button from "@/components/Button/Button";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useNavigate } from "react-router";

interface ResetPasswordProps {
show: boolean;
size?: "sm" | "lg" | "xl" | "md";
modalName?: string;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ show, size, modalName }) => {
  const dispatch = useAppDispatch();
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
            <Button
              onClick={handleClick}
              title='Done'
              textColor='#FFF'
              bgColor='#058b94'
              hoverColor='#fff'
              hoverBg='#035D63'
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ResetPassword;
