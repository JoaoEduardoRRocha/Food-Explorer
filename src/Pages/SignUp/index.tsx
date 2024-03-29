import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../app/path';

import axios from 'axios';
import "./index.scss";
import ButtonLogin from "../../Components/ButtonLogin"
import InputForm from "../../Components/InputForm"
import LabelForm from "../../Components/LabelForm"

interface SignUpForm {
  name: string,
  email: string,
  password: string
}

const SignUp = ({ isAuthenticated }: { isAuthenticated: boolean }) => {

  const navigate = useNavigate()

  const [signUp, setSignUp] = React.useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home')
    } else {
      console.log('Erro na autenticação!')
    }
  })

  const handleSubmit = () => {
    axios.post(`${PATH}/api/auth/signup`, signUp)
      .then(() => {
        navigate('/login')
      })
      .catch((err) => console.log(err))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUp((prevSignUp) => ({
      ...prevSignUp,
      [e.target.name]: e.target.value
    }));
  }


  return (
    <main className='sign-up-background'>
      <div className='sign-up-container'>
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
            name='name'
            value={signUp.name}
            onChange={(e) => handleInputChange(e)}
          />

          <LabelForm
            labelText='Email'
          />
          <InputForm
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type='email'
            backgroundColor='#0D1D25'
            textColor='#7C7C8A'
            name='email'
            value={signUp.email}
            onChange={(e) => handleInputChange(e)}
          />

          <LabelForm
            labelText='Senha'
          />
          <InputForm
            placeholder='No mínimo 6 caracteres'
            type='password'
            backgroundColor='#0D1D25'
            textColor='#7C7C8A'
            name='password'
            value={signUp.password}
            onChange={(e) => handleInputChange(e)}
          />

          <ButtonLogin
            buttonText="Criar conta"
            onClick={() => handleSubmit()}
          />

          <Link
            className="link-style"
            to='/login'>
            <p className='sign-up-container__form-container__create-account'>Já tenho uma conta</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUp;