import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styled from "styled-components";
import imageLoader from "@/assets/icons/loading.svg";

const ButtonComponent = styled.button`
  font-size: ${(props) => (props.size === "small" ? "0.75rem" : "0.875rem")};
  font-family: ${(props) => (props.size === "small" ? "var(--regular)" : "var(--semiBold)")};
  padding: ${(props) => (props.size === "small" ? "0.5rem 0.5rem" : "0.75rem 1rem")};
  border-radius: ${(props) => (props.size === "small" ? "5px" : "10px")};
  background-color: ${(props) => (props.type === "primary" ? "var(--primaryBtnBg)" : "var(--secondaryBtnBg)")};
  color: ${(props) => (props.type === "primary" ? "var(--primaryBtnTextColor)" : "var(--secondaryBtnTextColor)")};
  border: 1px solid
    ${(props) => (props.type === "primary" ? "var(--primaryBtnBorderColor)" : "var(--secondaryBtnBorderColor)")};
  width: fit-content;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  outline: none;
  height: fit-content;
  line-height: 1rem;

  input {
    margin: 0 0.375rem 0 0;
  }
  a {
    width: 100%;
  }
  span {
    margin-right: 0;
    font-size: 1.25rem;
  }
  &:hover {
    background-color: ${(props) =>
      props.type === "primary" ? "var(--primaryBtnHoverBg)" : "var(--secondaryBtnHoverBg)"};
    color: ${(props) =>
      props.type === "primary" ? "var(--primaryBtnHoverTextColor)" : "var(--secondaryBtnHoverTextColor)"};
    border: 1px solid
      ${(props) =>
        props.type === "primary" ? "var(--primaryBtnHoverBorderColor)" : "var(--secondaryBtnHoverBorderColor)"};
  }

  @media all and (min-width: 992px) {
    font-size: ${(props) => (props.size === "small" ? "0.875rem" : "1rem")};
    padding: ${(props) => (props.size === "small" ? "0.5rem 0.5rem" : "1rem 1.5rem")};
  }
`;

function Button(props) {
  const { title, checked, checkedBtn, prefixIcon, suffixIcon, disabled = false, loading, onClick, type, size } = props;

  return (
    <ButtonComponent size={size} type={type} onClick={onClick} disabled={disabled} className={cx("flexRow")}>
      {loading ? (
        <img src={imageLoader} height='16' width='60' />
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
}

Button.defaultProps = {
  title: "",
  checked: false,
  checkedBtn: false,
  prefixIcon: null,
  suffixIcon: null,
  disabled: false,
  loading: false,
  onClick: () => {},
  type: "primary",
  size: "big"
};
Button.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  checkedBtn: PropTypes.bool,
  prefixIcon: PropTypes.element,
  suffixIcon: PropTypes.element,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string
};

export default Button;
