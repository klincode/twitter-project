import React from 'react';
import { S } from './styled'
import { H2, H1, ReactLink, Wrapper, Logo } from '../Shared'
import { LoginForm } from '../LoginForm'


const LoginPopup = ({ setLoggedIn, setToken, setLoginPopupVisible }) => {
  return (
    <>
      <S.ModalBack>
        <S.ModalFront>
          <Wrapper>
            <Logo />
            <H1 center>Zaloguj się do Twittera</H1>
            <LoginForm setToken={setToken} setLoggedIn={setLoggedIn} setLoginPopupVisible={setLoginPopupVisible} />
            <ReactLink to="/signup" >Zarejestruj się, aby korzystać z Twittera</ReactLink>
          </Wrapper>
        </S.ModalFront>
      </S.ModalBack>
    </>
  );
}

export { LoginPopup };