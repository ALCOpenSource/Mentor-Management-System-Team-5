import React, { forwardRef } from "react";
import { FormGroup, StyledTextArea } from "./StyledTextArea";
import PropTypes from "prop-types";

const TextArea = forwardRef(
  ({ label, placeholder, required, onChange, error, marginbottom, minHeight, ...props }) => {
    return (
      <FormGroup marginbottom={marginbottom || "2rem"} required={required}>
        <label>{label}</label>
        <StyledTextArea
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          minHeight={minHeight}
          {...props}
        />
        {error ? <p className='error'>{error}</p> : ""}
      </FormGroup>
    );
  }
);

TextArea.displayName = "TextArea";

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  marginbottom: PropTypes.string,
  minHeight: PropTypes.string,
  error: PropTypes.string
};

export default TextArea;
