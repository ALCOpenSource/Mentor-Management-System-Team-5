import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import cx from "classnames";
import ModalContainer from "../ModalContainer/ModalContainer";
import styles from "./CriteriaTypes.module.scss";
import Button from "@/components/Button/Button";
import { hideModal, showModal } from "@/redux/Modal/ModalSlice";
import { saveCriteriaToStorage, getCriteriaFromStorage } from "@/redux/Criteria/CriteriaSlice";

function CriteriaTypes({ show, size, modalName }) {
  const dispatch = useDispatch();

  const modalData = useSelector((state) => state?.modal?.modalData);
  const criteria = useSelector((state) => state?.criteria?.getCriteriaFromStorageData);

  useEffect(() => {
    dispatch(getCriteriaFromStorage());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(hideModal({ name: "criteriaTypes" }));
  };

  const inputTypesArray = [
    { key: "singleInput", value: "Single Input" },
    { key: "multipleInput", value: "Multiple Input" },
    { key: "yesOrNo", value: "Yes/No" },
    { key: "fileInput", value: "File Input" },
    { key: "multiChoice", value: "Multi Choice" }
  ];

  const handleSelect = async (data) => {
    criteria
      ? await dispatch(
          saveCriteriaToStorage({
            ...criteria,
            [data?.key]: Array.isArray(criteria[data?.key]) ? [...criteria[data?.key]] : []
          })
        )
      : await dispatch(
          saveCriteriaToStorage({
            [data?.key]: []
          })
        );

    dispatch(
      showModal({
        name: data?.key,
        modalData: {
          type: data?.key
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
          <div className={cx(styles.wrapper, "flexCol")}>
            {inputTypesArray.map((type) => (
              <p onClick={() => handleSelect(type)} key={type?.key} className={cx(styles.inputType)}>
                {type?.value}
              </p>
            ))}
          </div>

          <div className={cx(styles.btnGroup, "flexRow-align-left")}>
            <Button onClick={handleClose} title='Cancel' type='secondary' />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

CriteriaTypes.propTypes = {
  show: PropTypes.bool,
  size: PropTypes.string,
  modalName: PropTypes.string
};

export default CriteriaTypes;
