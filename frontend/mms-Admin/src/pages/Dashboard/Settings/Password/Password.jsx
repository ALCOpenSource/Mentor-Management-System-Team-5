import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./Password.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";

import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

import { useForm, Controller } from "react-hook-form";
import { settingsPasswordSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";

const Password = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state?.loading?.saveSettingsLoading);
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const resolver = yupResolver(settingsPasswordSchema);

  const defaultValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleForgotPassword = () => {
    // navigate("/forgot-password");
  };

  return (
    <div className={cx(styles.passwordContainer, "flexCol")}>
      <div className={cx(styles.wrapper, styles.currentPasswordDiv)}>
        <div className={cx(styles.leftSection, styles.titleDiv)}>
          <h6 className={cx(styles.title)}>Current password</h6>
        </div>
        <div className={cx(styles.rightSection, styles.currentPasswordDetails)}>
          <Controller
            name='currentPassword'
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label={"Your current Password"}
                placeholder=''
                type='password'
                error={errors?.currentPassword && errors?.currentPassword?.message}
              />
            )}
          />
        </div>
      </div>

      <div className={cx(styles.wrapper, styles.newPasswordDiv)}>
        <div className={cx(styles.leftSection, styles.titleDiv)}>
          <h6 className={cx(styles.title)}>New password</h6>
        </div>
        <div className={cx(styles.rightSection, styles.newPasswordDetails)}>
          <Controller
            name='newPassword'
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label={"Must be at least 8 characters"}
                placeholder=''
                type='password'
                error={errors?.newPassword && errors?.newPassword?.message}
              />
            )}
          />
        </div>
      </div>

      <div className={cx(styles.wrapper, styles.confirmPasswordDiv)}>
        <div className={cx(styles.leftSection, styles.titleDiv)}>
          <h6 className={cx(styles.title)}>Confirm new password</h6>
        </div>
        <div className={cx(styles.rightSection, styles.confirmPasswordDetails)}>
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
        </div>
      </div>

      <div className={cx(styles.btnDiv, "flexRow-right-centered")}>
        <Button
          onClick={() =>
            dispatch(
              showModal({ name: "successNotification", modalData: "Password Changed Successfully" })
            )
          }
          title='Save new password'
        />
      </div>

      <div className={cx(styles.forgotPasswordWrapper, "flexRow")}>
        <p onClick={handleForgotPassword}>Forgot Password?</p>
      </div>

      {displayModal && modalName === "successNotification" ? (
        <SuccessNotificationModal show size='md' />
      ) : null}
    </div>
  );
};

export default Password;
