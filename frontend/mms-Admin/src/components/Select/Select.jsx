import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Select.scss";
import loadingIcon from "@/assets/icons/loading.gif";

const Select = forwardRef(
  ({
    options,
    defaultSelect,
    name,
    onChange,
    value,
    label,
    error,
    border,
    marginbottom,
    loading,
    required
  }) => {
    return (
      <div className="select-container" style={{ marginBottom: marginbottom }}>
        <div
          className="select-wrapper"
          style={{ border: `1px solid ${border ? border : "#022B69"}` }}
        >
          <div className="flexRow-space-between">
            <label className="select-label">{label}</label>
            {loading && <img className="select-loading-icon" src={loadingIcon} alt="icon" />}
          </div>
          <select required={required} name={name} onChange={onChange} value={value}>
            <option value="">{defaultSelect}</option>
            {options.map((option, index) => (
              <option value={option.value} key={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <span className="select-error">{error}</span>
      </div>
    );
  }
);

Select.displayName = "Select";

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  defaultSelect: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  border: PropTypes.string,
  marginbottom: PropTypes.string,
  loading: PropTypes.bool
};

Select.defaultProps = {
  options: [],
  defaultSelect: "Select",
  name: "",
  onChange: () => {},
  value: "",
  error: "",
  required: false,
  label: "Select",
  border: "#022B69",
  marginbottom: "2rem",
  loading: false
};

export default Select;
