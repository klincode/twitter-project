import React from 'react';
import { LoginForm } from '../../components/LoginForm'
import { H2, H1, ReactLink, Wrapper, Logo } from '../../components/Shared'
import { S } from '../../components/LoginPopup/styled'
const LoginPage = ({ setToken }) => {
  return (
    <Wrapper w50>
      <Logo />
      <H1 center>Zaloguj się do Twittera</H1>
      <LoginForm setToken={setToken} />
      <ReactLink to="/signup" >Zarejestruj się, aby korzystać z Twittera</ReactLink>
    </Wrapper>
  );
}

export { LoginPage };