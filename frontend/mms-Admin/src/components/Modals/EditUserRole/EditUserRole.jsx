import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./EditUserRole.module.scss";
import Button from "@/components/Button/Button";
import { hideModal, showModal } from "@/redux/Modal/ModalSlice";
import successImage from "@/assets/images/activate-user.svg";

import { useForm } from "react-hook-form";
import { editUserRoleSchema } from "@/helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";

function EditUserRole({ show, size, modalName }) {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state?.modal?.modalData);

  const handleClose = () => {
    dispatch(hideModal({ name: "editUserRole" }));
  };

  const rolesArray = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Mentor" },
    { id: 3, name: "Mentor Manager" }
  ];

  const handleSelect = (e) => {
    console.log(e.target.value, "selected");
    setValue("role", e.target.value, { shouldValidate: true, shouldDirty: true });
  };

  const resolver = yupResolver(editUserRoleSchema);

  const defaultValues = {
    role: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleEditUserRole = (data) => {
    console.log(data);
    dispatch(
      showModal({
        name: "successNotification",
        modalData: {
          title: "User Role Edited Successfully",
          image: successImage
        }
      })
    );
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>{modalData?.title}</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <form
            className={cx(styles.formElement, "flexCol")}
            onSubmit={handleSubmit((data) => handleEditUserRole(data))}
          >
            {rolesArray.map((role) => (
              <div key={role?.id} className={cx(styles.radioDiv, "flexRow-align-center")}>
                <input
                  {...register("role")}
                  type='radio'
                  name='role'
                  id={role.id}
                  value={role?.name}
                  onChange={(e) => handleSelect(e)}
                />
                <label className={cx(styles.radioLabel)} htmlFor={role.id}>
                  {role.name}
                </label>
              </div>
            ))}
            <div className={cx(styles.errorDiv)}>{errors?.role?.message}</div>

            <div className={cx(styles.btnGroup, "flexRow-fully-centered")}>
              <Button onClick={handleClose} title='Cancel' type='secondary' />
              <Button onClick={handleSubmit((data) => handleEditUserRole(data))} title='Save' />
            </div>
          </form>
        </div>
      </div>
    </ModalContainer>
  );
}

EditUserRole.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default EditUserRole;
