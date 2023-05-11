import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Support.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import attachmentIcon from "@/assets/icons/attachment-icon.svg";
import { useDropzone } from "react-dropzone";

import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import { showModal } from "@/redux/Modal/ModalSlice";

import { settingsSupportSchema } from "@/helpers/validation";
import { sendSupportMessage } from "@/redux/Settings/SettingsSlice";
import successImage from "@/assets/images/default-success-notification-image.png";

function Support() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.loading?.sendSupportMessageLoading);
  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  const resolver = yupResolver(settingsSupportSchema);

  const defaultValues = {
    name: "",
    email: "",
    title: "",
    body: "",
    attachment: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({ defaultValues, resolver, mode: "all" });

  const sendMessage = async (data) => {
    const payload = { ...data, attachment: uploadedFile.dataUrl };

    const response = await dispatch(sendSupportMessage(payload));

    if (response?.success) {
      dispatch(
        showModal({
          name: "successNotification",
          modalData: {
            title: "Message sent successfully",
            image: successImage
          }
        })
      );
      reset();
      setUploadedFile({
        file: "",
        dataUrl: ""
      });
    }
  };

  const [uploadedFile, setUploadedFile] = useState({
    file: "",
    dataUrl: ""
  });

  const onDrop = useCallback((acceptedFiles) => {
    let file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedFile({ file: file, dataUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps } = useDropzone({ onDrop, accept: "*" });

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
              name='title'
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  placeholder='Title'
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
                  minHeight='150px'
                  error={errors?.body && errors?.body?.message}
                />
              )}
            />

            <div className={cx(styles.attachmentDiv, "flexRow-left-centered")}>
              <img {...getRootProps()} src={attachmentIcon} alt='attachment-icon' />
              <span className={cx(styles.fileName)}>{uploadedFile?.file?.name}</span>
            </div>

            <div className={cx(styles.submitBtnDiv, "flexRow-right-centered")}>
              <Button
                onClick={handleSubmit((data) => sendMessage(data))}
                loading={loading}
                disabled={loading}
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
