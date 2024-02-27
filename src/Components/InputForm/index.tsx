import React from 'react'
import "./index.scss";

interface FieldLoginProps {
  placeholder: string;
  type: string;
  backgroundColor?: string;
  textColor?: string;
  border?: string;

}

const FieldLogin: React.FC<FieldLoginProps> = ({ placeholder, type, backgroundColor, textColor, border }) => {
  return (
    <input
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: border
      }}
      className='input-login-container'
      placeholder={placeholder}
      type={type}
    >
    </input>
  );
};

export default FieldLogin;