import axios from 'axios';
import { useState } from 'react';

import Button from '../../shared/buttons/default/Button';
import Input from '../../shared/inputs/default/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert('fez login ' + result.data.accessToken);
        return result.data;
      })
      .catch((error) => {
        alert('Usuário ou senha inválido!');
      });
  };

  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2}>LOGIN</TitleLogin>
            <Input title="USUÁRIO:" margin="32px 0 0" onChange={handleEmail} value={email} />
            <Input title="SENHA:" margin="32px 0 0" onChange={handlePassword} value={password} />
            <Button type="primary" margin="60px 0 0 16px" onClick={handleLogin}>
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
        <BackgroundImage src="./background.jpg" />
      </ContainerLoginScreen>
    </div>
  );
};

export default LoginScreen;
