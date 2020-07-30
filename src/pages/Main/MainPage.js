import React from 'react';
import { S } from './styled'
import { UsersList } from '../../components/UsersList'
import { UserPosts } from '../../components/UserPosts'
const MainPage = (props) => {
  console.log(props);
  return (
    <S.Container>
      <S.Posts>
        <UserPosts />
      </S.Posts>

      <S.Sidebar>
        <UsersList />
      </S.Sidebar>
    </S.Container>

  );
}

export { MainPage };