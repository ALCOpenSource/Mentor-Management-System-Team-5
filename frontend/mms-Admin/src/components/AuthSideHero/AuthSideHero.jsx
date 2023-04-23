import React from "react";
import { useNavigate } from "react-router";
import cx from "classnames";
import styles from "./AuthSideHero.module.scss";
import logo from "@/assets/images/logo.svg";

function AuthSideHero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className={cx(styles.authSideHeroContainer, "flexCol-fully-centered")}>
      <img onClick={handleClick} className={cx(styles.pageLogo)} src={logo} alt='logo' />
      <h6 onClick={handleClick} className={cx(styles.tagLine)}>
        Mentor Management System
      </h6>
    </div>
  );
}

export default AuthSideHero;
