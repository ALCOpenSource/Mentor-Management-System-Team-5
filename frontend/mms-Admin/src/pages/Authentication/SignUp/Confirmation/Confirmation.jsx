import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./Confirmation.module.scss";
import Button from "@/components/Button/Button";
import AuthSideHero from "@/components/AuthSideHero/AuthSideHero";
import successImage from "@/assets/images/activate-user.svg";
import failureImage from "@/assets/images/deactivate-user.svg";
import { confirmEmail } from "@/redux/Auth/AuthSlice";
import Loader from "@/components/Loader/Loader";

function Confirmation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const email = urlParams.get("email");
  const [confirmationResponse, setConfirmationResponse] = useState(null);

  const loading = useSelector((state) => state?.loading?.confirmEmailLoading);

  useEffect(() => {
    const handleConfirmation = async () => {
      const response = await dispatch(
        confirmEmail({
          emailConfirmationToken: token,
          email
        })
      );
      setConfirmationResponse(response);
    };
    handleConfirmation();
  }, [dispatch, email, token]);

  return (
    <div className={cx(styles.confirmationContainer, "row")}>
      <div className={cx(styles.leftSection, "col-md-6", "col-sm-12")}>
        <AuthSideHero />
      </div>
      <div className={cx(styles.rightSection, "flexCol", "col-md-6", "col-sm-12")}>
        {loading ? (
          <Loader />
        ) : confirmationResponse?.success ? (
          <div className={cx(styles.wrapper, "flexCol")}>
            <div className={cx(styles.imageDiv, "flexRow-fully-centered")}>
              <img src={successImage} alt='success' />
            </div>
            <h3 className={cx(styles.heading)}>Email Confirmed</h3>
            <p className={cx(styles.subHeading)}>Your email has been confirmed. You can now login to your account.</p>
            <Button title='Login' onClick={() => navigate("/login")} />
          </div>
        ) : (
          <div className={cx(styles.wrapper, "flexCol")}>
            <div className={cx(styles.imageDiv, "flexRow-fully-centered")}>
              <img src={failureImage} alt='failure' />
            </div>
            <h3 className={cx(styles.heading)}>Email Confirmation Failed</h3>
            <p className={cx(styles.subHeading)}>Your email confirmation failed. Please try again.</p>
            <Button title='Try Again' onClick={() => navigate("/sign-up-category-selector")} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
