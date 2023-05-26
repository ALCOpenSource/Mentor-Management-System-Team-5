import React from "react";
import cx from "classnames";
import styles from "./NestedFieldArray.module.scss";
import addIcon from "@/assets/icons/add-icon-thin.svg";
import removeIcon from "@/assets/icons/minus-icon-thin.svg";

import PropTypes from "prop-types";
import { useFieldArray, Controller } from "react-hook-form";
import InputField from "@/components/Input/Input";

const NestedFieldArray = ({ nestIndex, control, errors }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `criteria.${nestIndex}.options`,
    rules: {
      required: "Please add at least one (1) option"
    }
  });

  return (
    <div className={cx(styles.nestedFieldsContainer, "flexCol")}>
      {fields.map((item, optionIndex) => {
        return (
          <div key={item.id} className={cx(styles.optionWrapper, "flexRow")}>
            <div className={cx(styles.option)}>
              <Controller
                name={`criteria.${nestIndex}.options.${optionIndex}.option`}
                control={control}
                rules={{ required: "Option is required" }}
                render={({ field }) => (
                  <InputField
                    {...field}
                    placeholder='Enter option here'
                    type='text'
                    marginbottom='0rem'
                    border='none'
                    error={errors?.criteria &&
                      errors?.criteria[nestIndex] &&
                      errors?.criteria[nestIndex]?.options &&
                      errors?.criteria[nestIndex]?.options[optionIndex]?.option?.message}
                  />
                )}
              />
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
        <span>{Array.isArray(fields) && fields.length > 0 ? "Add more options" : "Add Option"}</span>
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
