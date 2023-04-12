import React, { useState, useEffect, forwardRef, Ref } from "react";
import { FormGroup } from "./StyledInput";
import eyeIcon from "@/assets/icons/eye.svg";
import searchIcon from "@/assets/icons/search-icon.svg";
import PropTypes from "prop-types";

const Input = forwardRef(
  (
    {
      label,
      placeholder,
      required,
      type = "text",
      onChange,
      error,
      icon,
      marginbottom,
      border,
      ...props
    },
    ref
  ) => {
    const [inputType, setInputType] = useState(type);
    const [isActive, setIsActive] = useState(false);

    const handleTextChange = (e) => {
      e.target.value !== "" ? setIsActive(true) : setIsActive(false);
    };

    const handleLabelClick = (e) => {
      e.preventDefault();

      const element = e.target;
      const inputElement = element.previousSibling;
      const inputValue = inputElement?.nodeValue;

      inputValue !== "" ? inputElement.focus() : setIsActive(false);
    };

    const handleVisibility = () => {
      if (inputType === "password") {
        return setInputType("text");
      }
      return setInputType("password");
    };

    useEffect(() => {
      props.value !== "" && setIsActive(true);
    }, [props.value]);

    return (
      <FormGroup
        marginbottom={marginbottom || "2rem"}
        border={border || "#CCCCCC"}
        required={required}
      >
        <div className='input-container'>
          {icon && <img src={searchIcon} alt='search icon' />}
          <input
            type={inputType}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            onBlur={handleTextChange}
            {...props}
            autoComplete='new-password'
            ref={ref}
          />
          <label onClick={(e) => handleLabelClick(e)} className={isActive ? "Active" : ""}>
            {label}
          </label>
          {type === "password" && (
            <img src={eyeIcon} alt='eye-icon' className='eye-icon' onClick={handleVisibility} />
          )}
        </div>
        {error ? <span className='error'>{error}</span> : ""}
      </FormGroup>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  icon: PropTypes.bool,
  marginbottom: PropTypes.string,
  border: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Input;
