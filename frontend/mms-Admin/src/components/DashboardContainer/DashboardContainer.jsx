import React, { Suspense } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./DashboardContainer.module.scss";

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DashboardChildren from "@/components/DashboardChildren/DashboardChildren";
import Loader from "@/components/Loader/Loader";

function DashboardContainer(props) {
  const { children } = props;

  return (
    <div className={cx(styles.dashboardContainer, "flexCol")}>
      <div className={cx(styles.header, "flexRow-align-center")}>
        <DashboardHeader />
      </div>
      <section className={cx(styles.body, "flexRow")}>
        <div className={cx(styles.sideBar, "flexCol")}>
          <DashboardSideBar />
        </div>
        <div className={cx(styles.children, "flexCol")}>
          <Suspense fallback={<Loader fullPage={true} />}>
            <DashboardChildren> {children} </DashboardChildren>
          </Suspense>
        </div>
      </section>
    </div>
  );
}

DashboardContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default DashboardContainer;
