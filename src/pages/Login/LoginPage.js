import React from 'react';
import { LoginForm } from '../../components/LoginForm'
import { H1, ReactLink, Wrapper, Logo } from '../../components/Shared'

const LoginPage = ({ setToken, setLoggedIn, setLoginPopupVisible }) => {
  return (
    <Wrapper w50>
      <Logo />
      <H1 center>Zaloguj się do Twittera</H1>
      <LoginForm setToken={setToken} setLoggedIn={setLoggedIn} setLoginPopupVisible={setLoginPopupVisible} />
      <ReactLink to="/signup" >Zarejestruj się, aby korzystać z Twittera</ReactLink>
    </Wrapper>
  );
}

export { LoginPage };