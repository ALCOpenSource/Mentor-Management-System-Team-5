import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../../ModalContainer/ModalContainer";
import styles from "./YesOrNo.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useFieldArray, useForm, Controller } from "react-hook-form";

import { saveCriteriaToStorage, getCriteriaFromStorage } from "@/redux/Criteria/CriteriaSlice";
import addIcon from "@/assets/icons/add-icon.svg";
import removeIcon from "@/assets/icons/minus-icon.svg";
function YesOrNo({ show, size, modalName }) {
  const dispatch = useDispatch();

  const modalData = useSelector((state) => state?.modal?.modalData);
  const criteria = useSelector((state) => state?.criteria?.getCriteriaFromStorageData);

  useEffect(() => {
    dispatch(getCriteriaFromStorage());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(hideModal({ name: "yesOrNo" }));
    dispatch(getCriteriaFromStorage());
  };

  const {
    formState: { errors },
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      criteria: [{ question: "" }]
    }
  });
  const { fields, append, remove } = useFieldArray({
    name: "criteria",
    control,
    rules: {
      required: "Please add at least one (1) question"
    }
  });

  const handleCreateCriteria = (data) => {
    const newCriteria = {
      ...criteria,
      [modalData?.type]: [...criteria[modalData?.type], ...data.criteria]
    };
    dispatch(saveCriteriaToStorage(newCriteria));
    handleClose();
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>Input Yes or No Questions</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <form
            className={cx(styles.formContainer, "flexCol")}
            onSubmit={handleSubmit((data) => handleCreateCriteria(data))}
          >
            {fields.map((field, index) => {
              return (
                <section className={cx(styles.formGroup, "flexRow")} key={field.id}>
                  <Controller
                    name={`criteria.${index}.question`}
                    control={control}
                    rules={{ required: "Question is required" }}
                    render={({ field }) => (
                      <InputField
                        {...field}
                        placeholder='Enter question here'
                        type='text'
                        marginbottom='1.5rem'
                        error={
                          errors?.criteria && errors?.criteria[index] && errors?.criteria[index]?.question?.message
                        }
                      />
                    )}
                  />

                  <div className={cx(styles.deleteFormGroupDiv, "flexRow-align-right")}>
                    <img onClick={() => remove(index)} src={removeIcon} alt='minus-icon' />
                  </div>
                </section>
              );
            })}

            {errors?.criteria?.root?.message && (
              <p className={cx(styles.rootError, "flexRow")}>{errors?.criteria?.root?.message}</p>
            )}

            <div
              onClick={() => {
                append({
                  question: ""
                });
              }}
              className={cx(styles.appendDiv, "flexRow-align-center")}
            >
              <img src={addIcon} alt='add-icon' />
              <span>{errors?.criteria?.root?.message ? "Add question" : "Add another question"}</span>
            </div>

            <div className={cx(styles.btnGroup, "flexRow-space-between")}>
              <Button onClick={handleClose} title='Cancel' type='secondary' />
              <Button onClick={handleSubmit((data) => handleCreateCriteria(data))} title='Done' />
            </div>
          </form>
        </div>
      </div>
    </ModalContainer>
  );
}

YesOrNo.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default YesOrNo;
