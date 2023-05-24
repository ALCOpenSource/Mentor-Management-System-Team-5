import React from "react";
import cx from "classnames";
import styles from "./NestedFieldArray.module.scss";
import addIcon from "@/assets/icons/add-icon-thin.svg";
import removeIcon from "@/assets/icons/minus-icon-thin.svg";

import PropTypes from "prop-types";
import { useFieldArray, Controller } from "react-hook-form";
import InputField from "@/components/Input/Input";
import SelectField from "@/components/Select/Select";

const NestedFieldArray = ({ nestIndex, control, errors }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `criteria.${nestIndex}.options`,
    rules: {
      required: "Please add at least one (1) option"
    }
  });

  const fileTypesOptions = [
    { value: "pdf", label: "PDF" },
    { value: "doc", label: "DOC" },
    { value: "docx", label: "DOCX" },
    { value: "xls", label: "XLS" },
    { value: "xlsx", label: "XLSX" },
    { value: "jpg", label: "JPG" },
    { value: "jpeg", label: "JPEG" },
    { value: "png", label: "PNG" }
  ];

  return (
    <div className={cx(styles.nestedFieldsContainer, "flexCol")}>
      {fields.map((item, optionIndex) => {
        return (
          <div key={item.id} className={cx(styles.optionWrapper, "flexRow")}>
            <span className={cx(styles.numbering)}>{optionIndex + 1}.</span>
            <div className={cx(styles.option, "flexRow")}>
              <div className={cx(styles.fileNameDiv, "flexRow")}>
                <Controller
                  name={`criteria.${nestIndex}.options.${optionIndex}.fileName`}
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <InputField
                      {...field}
                      placeholder='File name'
                      type='text'
                      marginbottom='1.5rem'
                      border='transparent'
                      error={
                        errors?.criteria &&
                        errors?.criteria[nestIndex] &&
                        errors?.criteria[nestIndex]?.options &&
                        errors?.criteria[nestIndex]?.options[optionIndex]?.fileName?.message
                      }
                    />
                  )}
                />
              </div>

              <div className={cx(styles.fileTypesDiv)}>
                <Controller
                  control={control}
                  name={`criteria.${nestIndex}.options.${optionIndex}.fileType`}
                  rules={{ required: "Field is required" }}
                  render={({ field }) => (
                    <SelectField
                      {...field}
                      defaultSelect='File Type'
                      options={fileTypesOptions}
                      marginbottom='1.5rem'
                      error={
                        errors?.criteria &&
                        errors?.criteria[nestIndex] &&
                        errors?.criteria[nestIndex]?.options &&
                        errors?.criteria[nestIndex]?.options[optionIndex]?.fileType?.message
                      }
                      border='#e6e6e6'
                    />
                  )}
                />
              </div>
            </div>

            <img onClick={() => remove(optionIndex)} src={removeIcon} alt='remove-icon' />
          </div>
        );
      })}

      {errors?.criteria && errors?.criteria[nestIndex] && (
        <p className={cx(styles.rootError, "flexRow")}>{errors?.criteria[nestIndex]?.options?.root?.message}</p>
      )}

      <div
        onClick={() => {
          append();
        }}
        className={cx(styles.addMore, "flexRow-align-center")}
      >
        <img src={addIcon} alt='add-icon' />
        <span>{Array.isArray(fields) && fields.length > 0 ? "Add more fields" : "Add Field"}</span>
      </div>
    </div>
  );
};

NestedFieldArray.propTypes = {
  nestIndex: PropTypes.number,
  control: PropTypes.object,
  errors: PropTypes.object
};

export default NestedFieldArray;
