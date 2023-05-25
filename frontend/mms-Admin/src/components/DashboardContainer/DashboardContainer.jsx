import React, { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./DashboardContainer.module.scss";

import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardSideBar from "../DashboardSideBar/DashboardSideBar";
import DashboardChildren from "@/components/DashboardChildren/DashboardChildren";
import Loader from "@/components/Loader/Loader";
import { refreshTokenInterval } from "@/utils/auth";
import { refreshAccessToken } from "@/redux/Auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DashboardContainer(props) {
  const { children } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state?.auth?.error?.failed) || false;

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      dispatch(refreshAccessToken());
    }, refreshTokenInterval());

    if (authError) {
      clearInterval(refreshInterval);
      navigate("/login");
    }
    return () => {
      clearInterval(refreshInterval);
    };
  }, [authError, dispatch, navigate]);

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
