import { Space, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Link } = Typography;

export const ContainerLoginScreen = styled.div`
  width: 100;
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img`
  width: 250px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  padding: 22px;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 492px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TitleLogin = styled(Title)`
  color: #eb511c !important;
`;
