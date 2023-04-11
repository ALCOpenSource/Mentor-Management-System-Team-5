import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import imageLoader from "@/assets/icons/loading.svg";
import styled from "styled-components";

const ButtonComponent = styled.button`

font-size: ${props => props.size === "small" ? "var(--secondaryBtnSmallFontSize)" : "var(--secondaryBtnFontSize)"};
padding: ${props => props.size === "small" ? "var(--secondaryBtnSmallPadding)" : "var(--secondaryBtnPadding)"};
border-radius: ${props => props.size === "small" ? "var(--secondaryBtnSmallBorderRadius)" : "var(--secondaryBtnBorderRadius)"};
background-color: var(--secondaryBtnBg);
color: var(--secondaryBtnTextColor);
border: 1px solid var(--secondaryBtnBorderColor);

  width: fit-content;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  outline: none;


input{
      margin: 0rem 0.375rem 0rem 0rem;
  }
  a{
      width: 100%;
  }
span{
      margin-right: 0rem;
      font-size: 1.25rem;
  }
&:hover{ 
  background-color: var(--secondaryBtnHoverBg) !important; 
  color: var(--secondaryBtnHoverTextColor) !important; 
  border: 1px solid var(--secondaryBtnHoverBorderColor) !important;
}
}
`;

const SecondaryButton = props => {

  const { title, checked, checkedBtn, prefixIcon, suffixIcon, disabled = false, loading, onClick, type, size } = props;

  return (
    <ButtonComponent size={size} type={type} onClick={onClick} disabled={disabled} className={cx("flexRow")}>
      {loading ?
        (
          <img
            src={imageLoader}
            height="24"
          />
        ) : (
          <>
            <span style={{ marginRight: "0.5rem" }} className={cx("flexRow")}>{prefixIcon && prefixIcon}</span>
            {checkedBtn && <input checked={checked} type="checkbox" />}
            {title}
            {" "}
            <span style={{ marginLeft: "0.5rem" }} className={cx("flexRow")}>{suffixIcon && suffixIcon}</span>
          </>
        )}

    </ButtonComponent>
  );
};

SecondaryButton.defaultProps = {
  title: "",
  checked: false,
  checkedBtn: false,
  prefixIcon: null,
  suffixIcon: null,
  disabled: false,
  loading: false,
  onClick: () => { },
  type: "button"
};
SecondaryButton.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  checkedBtn: PropTypes.bool,
  prefixIcon: PropTypes.element,
  suffixIcon: PropTypes.element,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default SecondaryButton;


