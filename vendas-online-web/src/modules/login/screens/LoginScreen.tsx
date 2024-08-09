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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    alert(`User: ${username} e password: ${password}`);
  };

  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2}>LOGIN</TitleLogin>
            <Input title="USUÁRIO:" margin="32px 0 0" onChange={handleUsername} value={username} />
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
