import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./SignUp.module.scss";
import googleIcon from "@/assets/icons/google-icon.svg";
import InputField from "@/components/Input/Input";
import AuthSideHero from "@/components/AuthSideHero/AuthSideHero";

import { signUpSchema } from "@/helpers/validation";

import { signUp } from "@/redux/Auth/AuthSlice";
import Button from "@/components/Button/Button";
import { showModal } from "@/redux/Modal/ModalSlice";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
// import { useGoogleSignUp } from "@react-oauth/google";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state?.loading?.signUpLoading);
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const handleSignUp = async (data) => {
    const response = await dispatch(signUp(data));

    if (response?.success) {
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Registration successful",
            redirectUrl: "/login",
            message: `A verification mail has been sent to your
          registered email, please click the link to
          confirm your account.`
          }
        })
      );
      reset();
    }
  };

  const resolver = yupResolver(signUpSchema);

  const defaultValues = {
    name: "",
    email: "",
    password: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({ defaultValues, resolver, mode: "all" });

  return (
    <div className={cx(styles.signUpContainer, "row")}>
      <div className={cx(styles.leftSection, "col-md-6", "col-sm-12")}>
        <AuthSideHero />
      </div>
      <div className={cx(styles.rightSection, "flexCol", "col-md-6", "col-sm-12")}>
        <div className={cx(styles.formContainer, "flexCol-fully-centered")}>
          <div className={cx(styles.formHeader, "flexCol")}>
            <h3 className={cx(styles.formTitle)}>Join the team!</h3>
            <p className={cx(styles.caption)}>Fill the form below</p>
          </div>
          <div className={cx(styles.formWrapper, "flexCol")}>
            <form onSubmit={handleSubmit((data) => handleSignUp(data))}>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <InputField {...field} placeholder='Name' type='text' error={errors?.name && errors?.name?.message} />
                )}
              />

              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    placeholder='Email'
                    type='email'
                    error={errors?.email && errors?.email?.message}
                  />
                )}
              />

              <Controller
                name='password'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    placeholder='Password'
                    type='password'
                    error={errors?.password && errors?.password?.message}
                  />
                )}
              />

              <div className={cx(styles.submitBtnDiv, "flexRow")}>
                <Button
                  onClick={handleSubmit((data) => handleSignUp(data))}
                  loading={loading}
                  disabled={loading}
                  title='Register'
                  type='primary'
                />
              </div>
            </form>
          </div>
          <div className={cx(styles.googleSignUpDiv, "flexRow-fully-centered")}>
            <img src={googleIcon} alt='google-icon' />
            <span>Signup with Google</span>
          </div>

          <div className={cx(styles.signInDiv, "flexRow-fully-centered")}>
            <p className={cx(styles.caption)}>
              Already a User? <span onClick={() => navigate("/login")}>Signin</span>
            </p>
          </div>
        </div>
      </div>
      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
}

export default SignUp;
