import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./AddUser.module.scss";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import { showModal, hideModal } from "@/redux/Modal/ModalSlice";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUserSchema } from "@/helpers/validation";

function AddUser({ show, size, modalName }) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const modalData = useSelector((state) => state.modal.modalData);

  console.log(modalData, "modal data");

  const defaultValues = {
    email: ""
  };

  const resolver = yupResolver(addUserSchema);

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleCloseModal = () => {
    dispatch(hideModal({ name: "addUser" }));
  };

  const handleAddUser = (data) => {
    console.log(data);
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "Add Mentor",
          message: `An invitation has been sent to ${data.email}
          successfully`
        }
      })
    );
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <form className={cx(styles.formWrapper, "flexCol")} onSubmit={handleSubmit((data) => handleAddUser(data))}>
          <div className={cx(styles.modalHeader, "flexCol")}>
            <h6 className={cx(styles.headerTitle)}>{modalData?.title}</h6>
          </div>

          <div className={cx(styles.modalBody, "flexCol")}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder='Enter Email'
                  type='text'
                  error={errors?.email && errors?.email?.message}
                />
              )}
            />
          </div>

          <div className={cx(styles.modalFooter)}>
            <div className={cx(styles.btnDiv, "flexRow-fully-centered")}>
              <Button onClick={() => handleCloseModal()} title='Cancel' type='secondary' />
              <Button
                // loading={loading}
                // disabled={loading}
                onClick={handleSubmit((data) => handleAddUser(data))}
                title='Send'
              />
            </div>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
}

AddUser.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default AddUser;
