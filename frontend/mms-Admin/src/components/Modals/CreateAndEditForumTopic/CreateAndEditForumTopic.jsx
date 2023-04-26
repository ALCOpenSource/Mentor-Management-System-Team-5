import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./CreateAndEditForumTopic.module.scss";
import Button from "@/components/Button/Button";
import { hideModal, showModal } from "@/redux/Modal/ModalSlice";
import closeIcon from "@/assets/icons/close-icon.svg";
import InputField from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import attachmentIcon from "@/assets/icons/attachment-icon-green.svg";
import smileyIcon from "@/assets/icons/smiley-icon.svg";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAndEditForumTopicSchema } from "@/helpers/validation";

function CreateAndEditForumTopic({ show, size, modalName }) {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal.modalData);

  const handleCloseModal = () => {
    dispatch(hideModal({ name: "successNotification" }));
  };

  const resolver = yupResolver(createAndEditForumTopicSchema);

  const defaultValues = {
    title: "",
    body: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const createPost = (data) => {
    console.log(data);
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "Post Created Successfully"
        }
      })
    );
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexRow-space-between")}>
          <h6 className={cx(styles.headerTitle)}>{modalData?.title}</h6>
          <img onClick={() => handleCloseModal()} src={closeIcon} alt='close-icon' />
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <div className={cx(styles.formWrapper, "flexCol")}>
            <form onSubmit={handleSubmit((data) => createPost(data))}>
              <Controller
                name='title'
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    label='Enter a title'
                    placeholder=''
                    type='text'
                    error={errors?.title && errors?.title?.message}
                  />
                )}
              />

              <div className={cx(styles.textAreaWrapper, "flexCol")}>
                <Controller
                  name='body'
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      placeholder='Start typing...'
                      label=''
                      borderColor='none'
                      marginbottom='0'
                      minHeight='150px'
                      error={errors?.body && errors?.body?.message}
                    />
                  )}
                />

                <div className={cx(styles.attachmentsDiv, "flexRow-align-center")}>
                  <img src={attachmentIcon} alt='attachment-icon' />
                  <img src={smileyIcon} alt='smiley-icon' />
                </div>
              </div>

              <div className={cx(styles.submitBtnDiv, "flexRow-right-centered")}>
                <Button
                  onClick={handleSubmit((data) => createPost(data))}
                  // loading={loading}
                  // disabled={loading}
                  title='Post to forum'
                  type='primary'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

CreateAndEditForumTopic.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default CreateAndEditForumTopic;
