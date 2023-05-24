import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../../ModalContainer/ModalContainer";
import styles from "./FileInput.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import NestedArray from "./NestedFieldArray/NestedFieldArray";
import { nanoid } from "nanoid";

import { hideModal } from "@/redux/Modal/ModalSlice";
import { useFieldArray, useForm, Controller } from "react-hook-form";

import { saveCriteriaToStorage, getCriteriaFromStorage } from "@/redux/Criteria/CriteriaSlice";
import addIcon from "@/assets/icons/add-icon.svg";
import removeIcon from "@/assets/icons/minus-icon.svg";
function FileInput({ show, size, modalName }) {
  const dispatch = useDispatch();

  const modalData = useSelector((state) => state?.modal?.modalData);
  const criteria = useSelector((state) => state?.criteria?.getCriteriaFromStorageData);

  useEffect(() => {
    dispatch(getCriteriaFromStorage());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(hideModal({ name: "fileInput" }));
    dispatch(getCriteriaFromStorage());
  };

  const defaultValues = {
    criteria: modalData?.edit
      ? [criteria[modalData?.type].find((item) => item.id === modalData?.groupIndex)]
      : [
          {
            question: "",
            options: [{ fileName: "", fileType: "" }],
            id: nanoid()
          }
        ]
  };

  const {
    getValues,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    defaultValues
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "criteria",
    rules: {
      required: "Please add at least one (1) question"
    }
  });

  const handleCreateCriteria = (data) => {
    const newCriteria = {
      ...criteria,
      [modalData?.type]: modalData?.edit
        ? criteria[modalData?.type].map((item) => {
            if (item.id === modalData?.groupIndex) {
              return data.criteria[0];
            } else {
              return item;
            }
          })
        : [...criteria[modalData?.type], ...data.criteria]
    };
    dispatch(saveCriteriaToStorage(newCriteria));
    handleClose();
  };

  const handleRemoveGroup = (index) => {
    remove(index);
    let updatedValue = getValues("criteria");
    reset({ criteria: updatedValue });
  };

  return (
    <ModalContainer show={show} size={size} modalName={modalName}>
      <div className={cx(styles.modalWrapper, "flexCol")}>
        <div className={cx(styles.modalHeader, "flexCol")}>
          <h6 className={cx(styles.headerTitle)}>Input File Request</h6>
        </div>

        <div className={cx(styles.modalBody, "flexCol")}>
          <form
            className={cx(styles.formContainer, "flexCol")}
            onSubmit={handleSubmit((data) => handleCreateCriteria(data))}
          >
            <div className={cx(styles.questionContainer, "flexCol")}>
              {fields.map((item, index) => {
                return (
                  <div key={item.id} className={cx(styles.formGroup, "flexCol")}>
                    <div className={cx(styles.questionDiv, "flexRow")}>
                      <Controller
                        name={`criteria.${index}.question`}
                        control={control}
                        rules={{ required: "This field is required" }}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            placeholder='Enter request here'
                            type='text'
                            marginbottom='1.5rem'
                            error={errors?.criteria && errors?.criteria[index] && errors?.criteria[index]?.question?.message}
                          />
                        )}
                      />
                    </div>

                    <div className={cx(styles.optionsWrapper, "flexCol")}>
                      <NestedArray nestIndex={index} {...{ control, errors }} />
                    </div>

                    {!modalData?.edit && (
                      <div
                        onClick={() => handleRemoveGroup(index)}
                        className={cx(styles.deleteFormGroupDiv, "flexRow-right-centered")}
                      >
                        <img src={removeIcon} alt='minus-icon' />
                        <span>Delete request</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {errors?.criteria?.root?.message && (
              <p className={cx(styles.rootError, "flexRow")}>{errors?.criteria?.root?.message}</p>
            )}

            {!modalData?.edit && (
              <div
                onClick={() => {
                  append({ question: "", options: [{ fileName: "", fileType: "" }], id: nanoid() }),
                    {
                      shouldFocus: true
                    };
                }}
                className={cx(styles.appendDiv, "flexRow-align-center")}
              >
                <img src={addIcon} alt='add-icon' />
                <span>{errors?.criteria?.root?.message ? "Add request" : "Add another request"}</span>
              </div>
            )}

            <div className={cx(styles.btnGroup, "flexRow-space-between")}>
              <Button onClick={handleClose} title='Cancel' type='secondary' />
              {!modalData?.edit && <Button type='secondary' onClick={() => reset(defaultValues)} title='Reset' />}
              <Button onClick={handleSubmit((data) => handleCreateCriteria(data))} title='Done' />
            </div>
          </form>
        </div>
      </div>
    </ModalContainer>
  );
}

FileInput.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default FileInput;
