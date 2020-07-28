import React from 'react';

import { Home } from '@styled-icons/boxicons-solid/Home'
import { S } from './styled'

const Navigation = ({ top }) => {
  return (
    <S.Nav top={top}>
      <ul>
        <S.Link to="/">Home</S.Link>
        <S.Link to="/login">Login</S.Link>
        <S.Link to="/signup">Sign Up</S.Link>
      </ul>
    </S.Nav>);
}

export { Navigation };