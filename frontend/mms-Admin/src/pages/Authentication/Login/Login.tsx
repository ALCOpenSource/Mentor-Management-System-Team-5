import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./Login.module.scss";

import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import AuthSideHero from "@/components/AuthSideHero/AuthSideHero";

import { useForm, Controller } from "react-hook-form";
import { loginSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";

import { login } from "@/redux/Auth/AuthSlice";


type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loading = useAppSelector((state) => state?.loading?.loginLoading);

  console.log(loading, "loading");

  const signIn = async (data: FormData) => {
    const response = await dispatch(login(data));
    console.log(response, "login response");
    // if (response?.payload?.success) {
    //   dispatch(showModal({ action: "hide", type: "logIn" }));
    //   navigate("/home");
    // }
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
                    label={"Email"}
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
                    label={"Password"}
                    placeholder=''
                    type='password'
                    error={errors?.password && errors?.password?.message}
                  />
                )}
              />

              <div
                onClick={handleSubmit((data) => signIn(data))}
                className={cx(styles.submitBtnDiv, "flexRow")}
              >
                <Button
                  loading={loading}
                  disabled={loading}
                  title='Login'
                  textColor='#FFF'
                  bgColor='#035D63'
                  hoverColor='#fff'
                  hoverBg='#058b94'
                />
              </div>

              <div className={cx(styles.forgotPasswordWrapper, "flexRow")}>
                <p onClick={handleForgotPassword}>Forgot Password?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
