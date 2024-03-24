import React from 'react'
import "./index.scss";

interface FieldLoginProps {
  placeholder: string
  name: string
  value: string
  type: string
  backgroundColor?: string
  textColor?: string
  border?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FieldLogin: React.FC<FieldLoginProps> = ({ placeholder, name, value, type, backgroundColor, textColor, border, onChange }) => {
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
      name={name}
      value={value}
      onChange={onChange}
    >
    </input>
  );
};

export default FieldLogin;

