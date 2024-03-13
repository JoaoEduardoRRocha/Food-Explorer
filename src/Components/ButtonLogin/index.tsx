import React from 'react'
import "./index.scss";

interface ButtonLoginProps {
  buttonText: string;
  onClick: () => void;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ buttonText, onClick }) => {
  return (
    <button 
      className='btn-login-container'
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ButtonLogin;