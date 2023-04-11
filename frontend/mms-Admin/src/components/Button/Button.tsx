import React from "react";
// import PropTypes from "prop-types";
import cx from "classnames";
import imageLoader from "@/assets/icons/loading.svg";
import styled from "styled-components";

interface ButtonProps {
  title: string;
  borderRadius?: string;
  textColor?: string;
  bgColor?: string;
  bordercolor?: string;
  checked?: boolean;
  checkedBtn?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hoverBg?: string;
  hoverColor?: string;
  type?: "button" | "submit" | "reset";
  }

const ButtonComponent = styled.button<ButtonProps>`
padding: 0.625rem 1.125rem;
  border: 0.5px solid;
  font-size: 1rem;
  width: fit-content;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.borderRadius};

  &:disabled {
    background-color: gray;
    color: white;
    cursor: not-allowed;
    border: none;
    pointer-events: none;
  }

input{
      margin: 0 0.375rem 0 0;
  }
  a{
      width: 100%;
  }
span{
      margin-right: 0;
      font-size: 1.25rem;
  }
&:hover{ 
  background-color: ${(props) => props.hoverBg} !important; 
  color: ${(props) => props.hoverColor} !important; 
  border: 1px solid ${(props) => props.hoverBg} !important;
}

@media all and (min-width:992px){
    padding: 0.625rem 1rem;
    font-size: 1rem;
  }
}

@media all and (min-width:1200px){
    padding: 0.625rem 1rem;
    font-size: 1rem;
  }
}
`;

const Button: React.FC<ButtonProps> = (props) => {
  
  const {
    title,
    borderRadius = "10px",
    textColor,
    bgColor,
    bordercolor,
    checked = false,
    checkedBtn = false,
    prefixIcon = null,
    suffixIcon = null,
    disabled = false,
    loading = false,
    onClick,
    hoverBg,
    hoverColor,
    type = "button"
  } = props;

  // const handleClick = (event) => {
  //   console.log(event.target.disabled, "click event")
  //   if (event.target.disabled) {
  //     console.log("hererereer")
  //     event.preventDefault();
  //   }
  // };

  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
      borderRadius={borderRadius}
      hoverBg={hoverBg}
      hoverColor={hoverColor}
      disabled={disabled}
      title={title}
      className={cx("flexRow")}
      style={{
        color: `${textColor}`,
        backgroundColor: `${bgColor}`,
        borderColor: `${bordercolor}`,
        border: bordercolor ? `1px solid ${bordercolor}` : `1px solid ${bgColor}`
      }}
    >
      {loading ? (
        <img src={imageLoader} height='24' />
      ) : (
        <>
          <span style={{ marginRight: "0.5rem" }} className={cx("flexRow")}>
            {prefixIcon && prefixIcon}
          </span>
          {checkedBtn && <input checked={checked} type='checkbox' />}
          {title}{" "}
          <span style={{ marginLeft: "0.5rem" }} className={cx("flexRow")}>
            {suffixIcon && suffixIcon}
          </span>
        </>
      )}
    </ButtonComponent>
  );
};

export default Button;
