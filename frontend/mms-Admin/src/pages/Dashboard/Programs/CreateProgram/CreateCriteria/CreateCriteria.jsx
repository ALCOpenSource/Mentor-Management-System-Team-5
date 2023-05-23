import React from "react";
import cx from "classnames";
import styles from "./CreateCriteria.module.scss";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icons/back-icon.svg";

const CreateCriteria = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img onClick={() => navigate(-1)} src={backIcon} className={cx(styles.backIcon)} alt='close-icon' />
      CreateCriteria
    </div>
  );
};

export default CreateCriteria;
