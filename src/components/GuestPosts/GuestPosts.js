import React from 'react';
import { H2 } from '../Shared';
import { S } from './styled';

const GuestsPosts = ({ data }) => {
  return (
    <S.Container>
      <H2>Ostatnie wiadomości</H2>
      <S.Posts>
        {
          data.map((item, index) => {
            const { user, content, created_at, updated_at } = item;
            let created = new Date(created_at).toLocaleString();
            let updated = updated_at ? 'updated: ' + new Date(updated_at).toLocaleString() : '';
            return (
              <S.Item key={index}>
                <S.User>
                  <S.UserImg>
                    <img src={user.avatar_url} alt={user.username} />
                  </S.UserImg>
                  {user.username}
                </S.User>

                <S.Content>{content}</S.Content>
                <S.Date>
                  <span>created: {created}</span>
                  <span>{updated}</span>
                </S.Date>
              </S.Item>
            )
          })
        }
      </S.Posts>
    </S.Container >
  );
}

export { GuestsPosts };