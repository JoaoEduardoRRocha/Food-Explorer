import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PATH } from '../../app/path';
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import "./index.scss";
import ButtonLogin from "../../Components/ButtonLogin"
import InputForm from "../../Components/InputForm"
import LabelForm from "../../Components/LabelForm"

interface ForgotPassword {
  email: string
}

const ForgotPassword = ({ isAuthenticated } : {isAuthenticated: boolean}) => {
  const navigate = useNavigate()
  const [forgotPassword, setForgotPassword] = React.useState<ForgotPassword>({
    email: '',
  });

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/home')
    } else {
      console.log('Erro na autenticação!')
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForgotPassword((prevForgotPassword) => ({
      ...prevForgotPassword,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = () => {
    axios.post(`${PATH}/api/auth/forgot-password`, forgotPassword)
      .then(() => {
        navigate('/home')
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='forgot-password-background'>
      <div className='forgot-password-container'>
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
            name='email'
            value={forgotPassword.email}
            onChange={(e) => handleInputChange(e)}
          />

          <ButtonLogin
            buttonText="Resetar"
            onClick={() => handleSubmit()}
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