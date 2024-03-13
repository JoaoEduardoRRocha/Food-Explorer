import React, { useEffect } from 'react'
import axios from 'axios';
import "./index.scss";
import InputForm from "../../Components/InputForm"
import LabelForm from "../../Components/LabelForm"
import ButtonLogin from "../../Components/ButtonLogin"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface ChangePasswordForm {
  password: string;
  passwordConfirmation: string;
}

const ChangePassword = ({ isAuthenticated } : {isAuthenticated: boolean}) => {
  const navigate = useNavigate();
  const [changePasswordForm, setChangePasswordForm] = React.useState<ChangePasswordForm>({
    password: '',
    passwordConfirmation: ''
  });

  const [jwtToken, setJwtToken] = React.useState<string>('');
  const [authorized, setAuthorized] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string | null>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangePasswordForm((prevChangePasswordForm) => ({
      ...prevChangePasswordForm,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = () => {
    if (!jwtToken) {
      console.error('Token JWT não encontrado.');
      return;
    }

    if (changePasswordForm.password !== changePasswordForm.passwordConfirmation) {
      console.error('As senhas não coincidem.')
      return;
    }

    const headers = {
      token: jwtToken
    };

    axios.post('http://localhost:3000/api/auth/update-password', { password: changePasswordForm.password }, { headers })
      .then((response) => {
        localStorage.setItem('token', jwtToken);
        navigate('/home')
      })
      .catch(error => {
        console.error('Erro ao atualizar a senha:', error);
      });
  };

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/home')
    } else {
      navigate('/login')
    }
  })

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search)
    const token = parameters.get('token')
    const email = parameters.get('email')

    const data = {
      otpToken: token,
      email
    }

    axios.post('http://localhost:3000/api/auth/otp-login', data)
      .then((response) => {
        setAuthorized(true)
        setEmail(email)
        setJwtToken(response.data.jwtToken)
      })
      .catch((err) => console.log(err))
  }, []);

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

        {authorized ?
          <div className='sign-up-container__form-container'>
            <p className='sign-up-container__form-container__card-title'>Troque sua senha</p>
            <LabelForm
              labelText='Nova senha'
            />
            <InputForm
              placeholder='No mínimo 6 caracteres'
              type='password'
              backgroundColor='#0D1D25'
              textColor='#7C7C8A'
              name='password'
              value={changePasswordForm.password}
              onChange={(e) => handleInputChange(e)}
            />

            <LabelForm
              labelText='Confirmar nova senha'
            />
            <InputForm
              placeholder='No mínimo 6 caracteres'
              type='password'
              backgroundColor='#0D1D25'
              textColor='#7C7C8A'
              name='passwordConfirmation'
              value={changePasswordForm.passwordConfirmation}
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
          </div> : <div> não autorizado </div>
        }
      </div>
    </main>
  );
};

export default ChangePassword;