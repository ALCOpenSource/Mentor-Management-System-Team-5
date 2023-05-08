import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import googleIcon from "@/assets/icons/google-icon.svg";
import InputField from "@/components/Input/Input";
import AuthSideHero from "@/components/AuthSideHero/AuthSideHero";

import { loginSchema } from "@/helpers/validation";

import { login } from "@/redux/Auth/AuthSlice";
import Button from "@/components/Button/Button";

// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state?.loading?.loginLoading);

  const signIn = async (data) => {
    const response = await dispatch(login(data));
    response?.success && navigate("/dashboard");
  };

  const resolver = yupResolver(loginSchema);

  const defaultValues = {
    email: "",
    password: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className={cx(styles.loginContainer, "row")}>
      <div className={cx(styles.leftSection, "col-md-6", "col-sm-12")}>
        <AuthSideHero />
      </div>
      <div className={cx(styles.rightSection, "flexCol", "col-md-6", "col-sm-12")}>
        <div className={cx(styles.formContainer, "flexCol-fully-centered")}>
          <div className={cx(styles.formHeader, "flexCol")}>
            <h3 className={cx(styles.formTitle)}>Welcome</h3>
            <p className={cx(styles.caption)}>Login to continue</p>
          </div>

          <div className={cx(styles.formWrapper, "flexCol")}>
            <form onSubmit={handleSubmit((data) => signIn(data))}>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label='Email'
                    placeholder=''
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
                    label='Password'
                    placeholder=''
                    type='password'
                    error={errors?.password && errors?.password?.message}
                  />
                )}
              />

              <div className={cx(styles.submitBtnDiv, "flexRow")}>
                <Button
                  onClick={handleSubmit((data) => signIn(data))}
                  loading={loading}
                  disabled={loading}
                  title='Login'
                  type='primary'
                />
              </div>

              <div className={cx(styles.forgotPasswordWrapper, "flexRow")}>
                <p onClick={handleForgotPassword}>Forgot Password?</p>
              </div>
            </form>
          </div>
          <div className={cx(styles.googleLoginDiv, "flexRow-fully-centered")}>
            <img src={googleIcon} alt='google-icon' />
            <span>Sign in with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
