import React from 'react';
import { Navigation } from '../Navigation';
import { S } from './styled';

const Footer = ({ logOut, isLoggedIn }) => {
  return (
    <>
      <S.Footer>
        <Navigation logOut={logOut} isLoggedIn={isLoggedIn} />
      </S.Footer>
    </>
  );
}

export { Footer };