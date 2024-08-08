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
  return (
    <div>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2}>LOGIN</TitleLogin>
            <Input title="USUÁRIO:" />
            <Input title="SENHA:" />
            <Button type="primary" margin="60px 0 0 16px">
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
