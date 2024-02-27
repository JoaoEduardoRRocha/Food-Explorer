import React from 'react'
import "./index.scss";
import ButtonLogin from "../ButtonLogin"

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
          <p className='sign-up-container__form-container__card-title'>Faça Login</p>

          <label className='sign-up-container__form-container__label'>Email</label>
          <input
            className='sign-up-container__form-container__input'
            type="text"
            placeholder='Exemplo: exemplo@exemplo.com.br'
          />

          <label className='sign-up-container__form-container__label'>Senha</label>
          <input
            className='sign-up-container__form-container__input'
            type="text"
            placeholder='No mínimo 6 caracteres'
          />

          <ButtonLogin />

          <p className='sign-up-container__form-container__create-account'>Criar uma conta</p>
        </div>
      </div>
    </main>
  );
};

export default SignUp;