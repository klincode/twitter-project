import React from 'react';
import { SignupForm } from '../../components/SignupForm'
import { Wrapper, Logo, H1 } from '../../components/Shared'
const SignupPage = () => {
  return (
    <Wrapper w50>
      <Logo />
      <H1 center>Utwórz konto</H1>
      <SignupForm />
    </Wrapper>
  );
}

export { SignupPage };