import React from 'react';
import { S } from './styled';

const Navigation = ({ top, logOut, isLoggedIn }) => {
  return (
    <S.Container >
      <S.Nav top={top}>
        <ul>
          {!isLoggedIn ? <S.Link to="/">Home</S.Link> : <S.Link to="/main">Home</S.Link>}
          {!isLoggedIn ? <S.Link to="/login">Login</S.Link> : null}
          <S.Link to="/signup">Sign Up</S.Link>
          {isLoggedIn ? <S.Link to="/" onClick={logOut}>Logout</S.Link> : null}
        </ul>
      </S.Nav>
    </S.Container >
  );
}

export { Navigation };