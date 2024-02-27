import React from 'react'
import "./index.scss";
import ButtonLogin from "../../Components/ButtonLogin"
import InputForm from "../../Components/InputForm"
import LabelForm from "../../Components/LabelForm"

const SignUp: React.FC = () => {

  return (
    <main className='sign-up-background'>
      <div className='sign-up-container'>
        <div className='sign-up-container__food-explorer'>
          <img
            className='sign-up-container__food-explorer__icon'
            src="https://64.media.tumblr.com/dd33e1531a07320c65d37b66c7f49acd/4792f286ff3dcb78-15/s100x200/88b955bac07de7ef8685950c208a793bda1afc41.pnj"
            alt=""
          />
          <p className='sign-up-container__food-explorer__name-logo'>food explorer</p>
        </div>

        <div className='sign-up-container__form-container'>
          <p className='sign-up-container__form-container__card-title'>Crie sua conta</p>

          <LabelForm
            labelText='Seu Nome'
          />
          <InputForm
            placeholder='Exemplo: Maria da Silva'
            type='name'
            backgroundColor='#0D1D25'
            textColor='#7C7C8A'
          />

          <LabelForm
            labelText='Email'
          />
          <InputForm
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type='email'
            backgroundColor='#0D1D25'
            textColor='#7C7C8A'
          />

          <LabelForm
            labelText='Senha'
          />
          <InputForm
            placeholder='No mínimo 6 caracteres'
            type='password'
            backgroundColor='#0D1D25'
            textColor='#7C7C8A'
          />

          <ButtonLogin
            buttonText="Criar Conta"
          />

          <p className='sign-up-container__form-container__create-account'>Já tenho uma conta</p>
        </div>
      </div>
    </main>
  );
};

export default SignUp;