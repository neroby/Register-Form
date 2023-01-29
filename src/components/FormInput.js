import React from "react";
import "./formInput.css";
import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputprops } = props;
  const handleFocuse = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        // name={props.name}
        // placeholder={props.placeholder}
        // onChange={(e) => props.setusername(e.target.value)}
        {...inputprops}
        onChange={onChange}
        onBlur={handleFocuse}
        onFocus={() =>
          inputprops.name === "confirmpassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
