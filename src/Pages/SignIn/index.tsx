import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { setToken, getUser } from '../../app/auth-helper';
import { User } from '../../Models/user';
import { PATH } from '../../app/path';

import axios from 'axios';
import "./index.scss";
import ButtonLogin from "../../Components/ButtonLogin"
import InputForm from "../../Components/InputForm"
import LabelForm from "../../Components/LabelForm"

interface LoginForm {
  email: string,
  password: string
}

const SignIn = ({ isAuthenticated, isAdmin }: { isAuthenticated: boolean, isAdmin: boolean }) => {

  const navigate = useNavigate()

  const [loginForm, setLoginForm] = React.useState<LoginForm>({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (isAdmin) {
        navigate('home-admin')
      } else {
        navigate('/home')
      }
    }
  }, []);

  const handleSubmit = () => {
    axios.post(`${PATH}/api/auth/login`, loginForm)
      .then(async response => {
        setToken(response.data.token)
        const user: User = await getUser()
        if (user.role === 'admin') {
          navigate('/home-admin')
          window.location.reload();
        } else {
          navigate('/home')
          window.location.reload();
        }
      })
      .catch((err) => console.log(err))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <main className='sign-in-background'>
      <div className='sign-in-container'>
        <div className='sign-in-container__form-container'>
          <p className='sign-in-container__form-container__card-title'>Faça Login</p>

          <LabelForm
            labelText='Email'
          />
          <InputForm
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type='email'
            backgroundColor='#001119'
            textColor='#7C7C8A'
            border="1px solid white"
            name='email'
            value={loginForm.email}
            onChange={(e) => handleInputChange(e)}
          />

          <LabelForm
            labelText='Senha'
          />
          <InputForm
            placeholder='No mínimo 6 caracteres'
            type='password'
            backgroundColor='#001119'
            textColor='#7C7C8A'
            border="1px solid white"
            name='password'
            value={loginForm.password}
            onChange={(e) => handleInputChange(e)}
          />

          <ButtonLogin
            buttonText="Entrar"
            onClick={() => handleSubmit()}
          />

          <div className='Link'>
            <Link
              className='link-style'
              to="/sign-up">
              <p className='sign-in-container__form-container__create-account'>Criar uma conta</p>
            </Link>

            <Link
              className='link-style'
              to="/forgot-password">
              <p className='sign-in-container__form-container__forgot-account'>Esqueci a senha</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;