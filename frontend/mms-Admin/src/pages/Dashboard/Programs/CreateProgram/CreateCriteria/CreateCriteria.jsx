import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./CreateCriteria.module.scss";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icons/back-icon.svg";
import Button from "@/components/Button/Button";
import InputField from "@/components/Input/Input";
import SelectField from "@/components/Select/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProgramCriteriaSchema } from "@/helpers/validation";
import { showModal } from "@/redux/Modal/ModalSlice";
import SuccessNotificationModal from "@/components/Modals/SuccessNotification/SuccessNotification";
import CriteriaTypesModal from "@/components/Modals/CriteriaTypes/CriteriaTypes";
import SingleInputModal from "@/components/Modals/CriteriaTypes/SingleInput/SingleInput";
import MultipleInputModal from "@/components/Modals/CriteriaTypes/MultipleInput/MultipleInput";
import YesOrNoModal from "@/components/Modals/CriteriaTypes/YesOrNo/YesOrNo";
import MultiChoiceModal from "@/components/Modals/CriteriaTypes/MultiChoice/MultiChoice";
import FileInputModal from "@/components/Modals/CriteriaTypes/FileInput/FileInput";
import { getCriteriaFromStorage } from "@/redux/Criteria/CriteriaSlice";
import editIcon from "@/assets/icons/edit-icon-thin.svg";
import deleteIcon from "@/assets/icons/minus-icon-thin.svg";

// import successImage from "@/assets/images/default-success-notification-image.png";

const CreateCriteria = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const criteriaData = useSelector((state) => state?.criteria?.getCriteriaFromStorageData);

  console.log(criteriaData, "criteriaData");

  const [displayInstructions, setDisplayInstructions] = useState(true);
  const [disableBtn, setDisableBtn] = useState({
    createCriteria: true,
    addCriteria: true
  });

  const displayModal = useSelector((state) => state.modal.show);
  const modalName = useSelector((state) => state.modal.modalName);

  useEffect(() => {
    dispatch(getCriteriaFromStorage());
  }, [dispatch]);

  const handleDisplayInstructions = () => {
    setDisplayInstructions(false);
    setDisableBtn({ ...disableBtn, addCriteria: false });
  };

  const resolver = yupResolver(createProgramCriteriaSchema);

  const defaultValues = {
    title: "",
    details: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleCreateCriteria = (data) => {
    console.log(data, "form data");
    // dispatch(
    //   showModal({
    //     name: "successNotification",
    //     modalData: {
    //       title: "Criteria Created Successfully!",
    //       image: successImage
    //     }
    //   })
    // );
  };

  const displayCriteriaTypes = (e) => {
    e.preventDefault();

    dispatch(
      showModal({
        name: "criteriaTypes",
        modalData: {
          title: "Select Input Type"
        }
      })
    );
  };

  const getSingleInputContents = (item) => {
    return (
      Array.isArray(item) &&
      item.map((input) => {
        return (
          <div className={cx(styles.singleInputWrapper, "flexCol")} key={input?.id}>
            <InputField type='text' value={input.question} readOnly marginbottom={"0.5rem"} />
            <div className={cx(styles.btnGroup, "flexRow-right-centered")}>
              <img src={editIcon} alt='edit-icon' />
              <img src={deleteIcon} alt='delete-icon' />
            </div>
          </div>
        );
      })
    );
  };

  const getMultipleInputContents = (item) => {
    return (
      Array.isArray(item) &&
      item.map((input) => {
        return (
          <div className={cx(styles.multipleInputWrapper, "flexCol")} key={input?.id}>
            <p className={cx(styles.title)}>{input.question}</p>
            <InputField type='text' value={`${input.numberOfInputs} Inputs`} readOnly marginbottom={"0.5rem"} />
            <div className={cx(styles.btnGroup, "flexRow-right-centered")}>
              <img src={editIcon} alt='edit-icon' />
              <img src={deleteIcon} alt='delete-icon' />
            </div>
          </div>
        );
      })
    );
  };

  const getYesOrNoContents = (item) => {
    return (
      Array.isArray(item) &&
      item.map((input) => {
        return (
          <div className={cx(styles.yesOrNoWrapper, "flexCol")} key={input?.id}>
            <p className={cx(styles.title)}>{input.question}</p>
            <div className={cx(styles.radioBtnGroup, "flexRow")}>
              <div className={cx(styles.group, "flexRow")}>
                <input type='radio' name='yes' id='yes' />
                <label htmlFor='yes'>Yes</label>
              </div>
              <div className={cx(styles.group, "flexRow")}>
                <input type='radio' name='no' id='no' />
                <label htmlFor='no'>No</label>
              </div>
            </div>
            <div className={cx(styles.btnGroup, "flexRow-right-centered")}>
              <img src={editIcon} alt='edit-icon' />
              <img src={deleteIcon} alt='delete-icon' />
            </div>
          </div>
        );
      })
    );
  };

  const handleDisplayContents = (item, category) => {
    console.log(item, "item");
    console.log(category, "category");
    switch (category) {
      case "singleInput":
        return getSingleInputContents(item);
      case "multipleInput":
        return getMultipleInputContents(item);
      case "yesOrNo":
        return getYesOrNoContents(item);
      case "multiChoice":
        return getMultiChoiceContents(item);
      case "fileInput":
        return getFileInputContents(item);
      default:
        return null;
    }
  };

  return (
    <div className={cx(styles.createCriteriaContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-align-center")}>
        <img onClick={() => navigate(-1)} src={backIcon} className={cx(styles.backIcon)} alt='close-icon' />
        <h3 className={cx(styles.title)}>Criteria Setup</h3>
      </div>
      <div className={cx(styles.body, "flexCol")}>
        {displayInstructions ? (
          <div className={cx(styles.instructions, "flexCol")}>
            <p>
              To be accepted as a mentor or a mentor manager, an applicant must provide relevant information and
              documents regarding their past experience(s). The criteria setup lets you create input fields for these
              information.
            </p>
            <Button onClick={() => handleDisplayInstructions()} title='Ok' type='primary' size='small' />
          </div>
        ) : (
          <form
            className={cx(styles.formContainer, "flexCol")}
            onSubmit={handleSubmit((data) => handleCreateCriteria(data))}
          >
            <div className={cx(styles.formBody, "flexCol")}>
              <div className={cx(styles.contentWrapper, "flexCol")}>
                {criteriaData &&
                  Object.keys(criteriaData) &&
                  Object.keys(criteriaData).map((category) => {
                    return handleDisplayContents(criteriaData[category], category);
                  })}
              </div>
              <div className={cx(styles.addCriteriaBtnDiv, "flexRow")}>
                <Button
                  onClick={(e) => displayCriteriaTypes(e)}
                  title='Add Criteria'
                  type='primary'
                  size='small'
                  disabled={disableBtn.addCriteria}
                />
              </div>
              <div className={cx(styles.submitBtnDiv, "flexRow")}>
                <Button
                  onClick={handleSubmit((data) => handleCreateCriteria(data))}
                  // loading={loading}
                  title='Create Criteria'
                  type='primary'
                  disabled={disableBtn.createCriteria}
                />
              </div>
            </div>
          </form>
        )}
      </div>

      {displayModal && modalName === "successNotification" ? <SuccessNotificationModal show size='lg' /> : null}
      {displayModal && modalName === "criteriaTypes" ? <CriteriaTypesModal show size='lg' /> : null}
      {displayModal && modalName === "singleInput" ? <SingleInputModal show size='lg' /> : null}
      {displayModal && modalName === "multipleInput" ? <MultipleInputModal show size='lg' /> : null}
      {displayModal && modalName === "yesOrNo" ? <YesOrNoModal show size='lg' /> : null}
      {displayModal && modalName === "multiChoice" ? <MultiChoiceModal show size='lg' /> : null}
      {displayModal && modalName === "fileInput" ? <FileInputModal show size='lg' /> : null}
    </div>
  );
};

export default CreateCriteria;
