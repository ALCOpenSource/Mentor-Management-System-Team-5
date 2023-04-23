import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Support.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import attachmentIcon from "@/assets/icons/attachment-icon.svg";

import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

import { settingsSupportSchema } from "@/helpers/validation";

function Support() {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state?.loading?.saveSettingsLoading);
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const resolver = yupResolver(settingsSupportSchema);

  const defaultValues = {
    name: "",
    email: "",
    title: "",
    body: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const sendMessage = (data) => {
    console.log(data);
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "Message sent successfully"
        }
      })
    );
  };

  return (
    <div className={cx(styles.supportContainer, "flexCol")}>
      <div className={cx(styles.heading)}>
        <h6 className={cx(styles.title)}>How can we help you?</h6>
      </div>

      <div className={cx(styles.body)}>
        <div className={cx(styles.formWrapper, "flexCol")}>
          <form onSubmit={handleSubmit((data) => sendMessage(data))}>
            <Controller
              name='name'
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label='Name'
                  placeholder=''
                  type='text'
                  error={errors?.name && errors?.name?.message}
                />
              )}
            />
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
              name='title'
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label='Title'
                  placeholder=''
                  type='text'
                  error={errors?.title && errors?.title?.message}
                />
              )}
            />

            <Controller
              name='body'
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder='Body'
                  label=''
                  minHeight='150px'
                  error={errors?.body && errors?.body?.message}
                />
              )}
            />

            <div className={cx(styles.submitBtnDiv, "flexRow-space-between")}>
              <div className={cx(styles.attachmentDiv)}>
                <img src={attachmentIcon} alt='attachment-icon' />
              </div>

              <Button
                onClick={handleSubmit((data) => sendMessage(data))}
                // loading={loading}
                // disabled={loading}
                title='Send'
                type='primary'
              />
            </div>
          </form>
        </div>
      </div>

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='md' /> : null}
    </div>
  );
}

export default Support;
