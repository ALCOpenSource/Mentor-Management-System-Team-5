import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import imageLoader from "@/assets/icons/loading.svg";
import styled from "styled-components";

const ButtonComponent = styled.button`
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

const Button = (props) => {
  const {
    title,
    borderRadius,
    textColor,
    bgColor,
    bordercolor,
    checked,
    checkedBtn,
    prefixIcon,
    suffixIcon,
    disabled = false,
    loading,
    onClick,
    hoverBg,
    hoverColor,
    type
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

Button.defaultProps = {
  borderRadius: "10px",
  title: "",
  textColor: "",
  bgColor: "",
  bordercolor: "",
  checked: false,
  checkedBtn: false,
  prefixIcon: null,
  suffixIcon: null,
  disabled: false,
  loading: false,
  hoverBg: "",
  hoverColor: "",
  type: "button"
};
Button.propTypes = {
  borderRadius: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  bordercolor: PropTypes.string,
  checked: PropTypes.bool,
  checkedBtn: PropTypes.bool,
  prefixIcon: PropTypes.element,
  suffixIcon: PropTypes.element,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  hoverBg: PropTypes.string,
  hoverColor: PropTypes.string,
  type: PropTypes.string
};

export default Button;
