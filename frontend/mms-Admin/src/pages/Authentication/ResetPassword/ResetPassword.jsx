import React from "react";
import { useSelector, useDispatch } from "react-redux";

import cx from "classnames";
import styles from "./ResetPassword.module.scss";

import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import AuthSideHero from "@/components/AuthSideHero/AuthSideHero";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";

import { useForm, Controller } from "react-hook-form";
import { resetPasswordSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword } from "@/redux/Auth/AuthSlice";
import { showModal } from "@/redux/Modal/ModalSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state?.loading?.resetPasswordLoading);
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const email = urlParams.get("email");

  const handleResetPassword = async (data) => {
    const response = await dispatch(
      resetPassword({
        Password: data.password,
        ConfirmPassword: data.confirmPassword,
        token,
        email
      })
    );

    response?.success &&
      dispatch(showModal({ name: "successNotification", modalData: "Password Reset Successful" }));
    reset();
  };

  const resolver = yupResolver(resetPasswordSchema);

  const defaultValues = {
    password: "",
    confirmPassword: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({ defaultValues, resolver, mode: "all" });

  return (
    <div className={cx(styles.resetPasswordContainer, "row")}>
      <div className={cx(styles.leftSection, "col-md-6", "col-sm-12")}>
        <AuthSideHero />
      </div>
      <div className={cx(styles.rightSection, "flexCol", "col-md-6", "col-sm-12")}>
        <div className={cx(styles.formContainer, "flexCol-fully-centered")}>
          <div className={cx(styles.formHeader, "flexCol")}>
            <h3 className={cx(styles.formTitle)}>Set new password</h3>
          </div>

          <div className={cx(styles.formWrapper, "flexCol")}>
            <form onSubmit={handleSubmit((data) => handleResetPassword(data))}>
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

              <Controller
                name='confirmPassword'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label={"Must match your new password"}
                    placeholder=''
                    type='password'
                    error={errors?.confirmPassword && errors?.confirmPassword?.message}
                  />
                )}
              />

              <p className={cx(styles.caption)}>
                *Your new password must be different from previously used password.
              </p>

              <div className={cx(styles.submitBtnDiv, "flexRow")}>
                <Button
                  onClick={handleSubmit((data) => handleResetPassword(data))}
                  loading={loading}
                  disabled={loading}
                  title='Reset Password'
                  type='primary'
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {displayModal && modalName === "successNotification" ? (
        <SuccessNotificationModal show size='md' />
      ) : null}
    </div>
  );
};

export default ResetPassword;
