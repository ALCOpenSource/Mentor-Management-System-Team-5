import React, { useState, useEffect, forwardRef, Ref } from "react";
import { FormGroup } from "./StyledInput";
import eyeIcon from "@/assets/icons/eye.svg";
import searchIcon from "@/assets/icons/search-icon.svg";

interface InputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: boolean;
  marginbottom?: string;
  border?: string;
  value?: string | number;
}

const Input = forwardRef(
  (
    {
      label,
      placeholder,
      required,
      type = "text",
      onChange,
      onBlur,
      error,
      icon,
      marginbottom,
      border,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputType, setInputType] = useState<string>(type);
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      e.target.value !== "" ? setIsActive(true) : setIsActive(false);      
    };

    const handleLabelClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>): void => {
      e.preventDefault();

      const element = e.target as Element;
      const inputElement = element.previousSibling as HTMLInputElement; 
      const inputValue = inputElement?.nodeValue;

      inputValue !== "" ? inputElement.focus() : setIsActive(false);
  
    };
    
    const handleVisibility = (): void => {
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


export default Input;
