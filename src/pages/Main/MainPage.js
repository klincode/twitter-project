import React from 'react';
import { S } from './styled';
import { UsersList } from '../../components/UsersList';
import { UserPosts } from '../../components/UserPosts';

const MainPage = ({ token }) => {
  return (
    <S.Container>
      <S.Posts>
        <UserPosts token={token} />
      </S.Posts>

      <S.Sidebar>
        <UsersList token={token} />
      </S.Sidebar>
    </S.Container>

  );
}

export { MainPage };