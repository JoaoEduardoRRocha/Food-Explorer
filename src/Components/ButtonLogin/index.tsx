import React from 'react'
import "./index.scss";

interface ButtonLoginProps {
  buttonText: string; // Definindo buttonText como uma propriedade do tipo string
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ buttonText }) => {

  return (
    <button className='btn-login-container'>
      {buttonText}
    </button>
  );
};

export default ButtonLogin;