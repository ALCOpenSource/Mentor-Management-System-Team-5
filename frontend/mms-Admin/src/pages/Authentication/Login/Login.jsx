import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";

import InputField from "@/components/Input/Input";
import AuthSideHero from "@/components/AuthSideHero/AuthSideHero";

import { loginSchema } from "@/helpers/validation";

import { login } from "@/redux/Auth/AuthSlice";
import Button from "@/components/Button/Button";

// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
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


  // Google Login
// const [ user, setUser ] = useState([]);
// const [ profile, setProfile ] = useState([]);

// console.log(user, "google");

// const loginGoogle = useGoogleLogin({
//     onSuccess: (codeResponse) => setUser(codeResponse),
//     onError: (error) => console.log("Login Failed:", error)
// });

// useEffect(
//   () => {
//       if (user) {
//           axios
//               .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
//                   headers: {
//                       Authorization: `Bearer ${user.access_token}`,
//                       Accept: "application/json"
//                   }
//               })
//               .then((res) => {
//                   setProfile(res.data);
//               })
//               .catch((err) => console.log(err));
//       }
//   },
//   [ user ]
// );
// console.log(profile, "user profile");

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
        {/* <button onClick={() => loginGoogle()}>Sign in with Google 🚀 </button> */}
        </div>

      </div>
    </div>
  );
}

export default Login;
