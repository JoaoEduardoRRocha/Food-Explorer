import React from 'react'
import "./index.scss";
import ButtonLogin from "../ButtonLogin"
import InputForm from "../InputForm"
import LabelForm from "../LabelForm"

const SignIn: React.FC = () => {

  return (
    <main className='sign-in-background'>
      <div className='sign-in-container'>
        <div className='sign-in-container__food-explorer'>
          <img
            className='sign-in-container__food-explorer__icon'
            src="https://64.media.tumblr.com/dd33e1531a07320c65d37b66c7f49acd/4792f286ff3dcb78-15/s100x200/88b955bac07de7ef8685950c208a793bda1afc41.pnj"
            alt=""
          />
          <p className='sign-in-container__food-explorer__name-logo'>food explorer</p>
        </div>

        <div className='sign-in-container__form-container'>
          <p className='sign-in-container__form-container__card-title'>Faça Login</p>

          <LabelForm
            labelText='Seu Nome'
          />
          <InputForm
            placeholder='Exemplo: Maria da Silva'
            backgroundColor='#001119'
            textColor='#7C7C8A'
            border="1px solid white"
          />

          <LabelForm
            labelText='Email'
          />
          <InputForm
            placeholder='Exemplo: exemplo@exemplo.com.br'
            backgroundColor='#001119'
            textColor='#7C7C8A'
            border="1px solid white"
          />

          <ButtonLogin
            buttonText="Entrar"
          />

          <p className='sign-in-container__form-container__create-account'>Criar uma conta</p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;