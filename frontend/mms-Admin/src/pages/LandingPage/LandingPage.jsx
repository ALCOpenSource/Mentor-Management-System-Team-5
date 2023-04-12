import React from "react";
import cx from "classnames";
import styles from "./LandingPage.module.scss";
import SplashScreen from "@/components/SplashScreen/SplashScreen";

const LandingPage = () => {
  return (
    <div className={cx(styles.landingPageContainer, "flexCol")}>
      <SplashScreen />
    </div>
  );
};

export default LandingPage;
