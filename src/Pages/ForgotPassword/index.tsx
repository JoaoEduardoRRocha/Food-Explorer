import React from 'react'
import "./index.scss";
import ButtonLogin from "../../Components/ButtonLogin"
import InputForm from "../../Components/InputForm"
import LabelForm from "../../Components/LabelForm"
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {

  return (
    <main className='forgot-password-background'>
      <div className='forgot-password-container'>
        <div className='forgot-password-container__food-explorer'>
          <img
            className='forgot-password-container__food-explorer__icon'
            src="https://64.media.tumblr.com/dd33e1531a07320c65d37b66c7f49acd/4792f286ff3dcb78-15/s100x200/88b955bac07de7ef8685950c208a793bda1afc41.pnj"
            alt=""
          />
          <p className='forgot-password-container__food-explorer__name-logo'>food explorer</p>
        </div>

        <div className='forgot-password-container__form-container'>
          <p className='forgot-password-container__form-container__card-title'>Recuperar Senha</p>

          <LabelForm
            labelText='Email'
          />
          <InputForm
            placeholder='Exemplo: email@email.com.br'
            type='email'
            backgroundColor='#001119'
            textColor='#7C7C8A'
            border="1px solid white"
          />

          <ButtonLogin
            buttonText="Resetar"
          />

          <Link
            className='link-style'
            to="/sign-up">
            <p className='forgot-password-container__form-container__create-account'>Criar uma conta</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;