import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  StatusBar, 
  Header, 
  Logo, 
  HeaderImage, 
  LoginEntry, 
  LoginInput, 
  SubmitButton, 
  TextSubmitButton,
  LoginOptions,
  ForgotPassword,
  FirstAccess,
  Footer, 
  Separator,
  LeftSeparator,
  SeparatorText,
  RightSeparator,
  LoginAlternatives,
  Google,
  LogoGoogle,
  TitleGoogle,
  Microsoft,
  LogoMicrosoft,
  TitleMicrosoft
} from './styles';

const Signin = () => {
  return(
    <Container>
        <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' />
        <Header>
          <Logo source={require('../../assets/+Livros.png')}></Logo>
          <HeaderImage source={require('../../assets/girl_img.jpg')}></HeaderImage>
        </Header>
        <LoginEntry>
          <LoginInput  placeholder='Insira seu login'/>
          <SubmitButton>
            <TextSubmitButton>Entrar</TextSubmitButton>
          </SubmitButton>
          <LoginOptions>
            <ForgotPassword>Esqueci meu login</ForgotPassword>
            <FirstAccess>Primeiro acesso</FirstAccess>
          </LoginOptions>
        </LoginEntry>
        <Footer>
          <Separator>
            <LeftSeparator/>
            <SeparatorText>ou</SeparatorText>
            <RightSeparator/>
          </Separator>
          <LoginAlternatives>
            <Google>
              <LogoGoogle source={require('../../assets/Google_Logo.png')} />
              <TitleGoogle>Google</TitleGoogle>
            </Google>
            <Microsoft>
              <LogoMicrosoft source={require('../../assets/logo_microsoft.png')} />
              <TitleMicrosoft>Microsoft</TitleMicrosoft>
            </Microsoft>
          </LoginAlternatives>
        </Footer>
    </Container>
  );
}

export default Signin;