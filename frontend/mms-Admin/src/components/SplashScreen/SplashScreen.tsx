import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import cx from "classnames";
import styles from "./SplashScreen.module.scss";
import logo from "@/assets/images/logo.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <div className={cx(styles.splashScreenContainer, "flexCol-fully-centered")}>
      <img className={cx(styles.pageLogo)} src={logo} alt='logo' />
      <h6 className={cx(styles.tagLine)}>Mentor Management System</h6>
    </div>
  );
};

export default SplashScreen;
