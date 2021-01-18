import React from "react";

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="input-group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`label ${value && "shrink"}`}>{label}</label>
    ) : null}
    {otherProps.errors.length > 0 && (
      <span className="error">{otherProps.errors}</span>
    )}
  </div>
);

export default FormInput;
