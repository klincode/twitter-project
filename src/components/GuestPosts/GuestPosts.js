import React from 'react';
import { H2 } from '../Shared'
import { S } from './styled'

const GuestsPosts = () => {
  return (
    <S.Container>
      <H2>Ostatnie wiadomości</H2>
      <S.Posts>
        <S.Item>
          <S.User>adam</S.User>
          <S.Content>Jakiś tweet</S.Content>
          <S.Date>
            <span>Created : 55-55-55-</span>
            <span>Updated : 15-15-55-</span>
          </S.Date>
        </S.Item>

        <S.Item>
          <S.User>Alojzy</S.User>
          <S.Content>Jakiś tweetsd fsd f</S.Content>
          <S.Date>
            <span>Created : 55-55-55-</span>
            <span>Updated : 15-15-55-</span>
          </S.Date>
        </S.Item>

        <S.Item>
          <S.User>zuza</S.User>
          <S.Content>Jakiś tweet sdf sdf sdf </S.Content>
          <S.Date>
            <span>Created : 55-55-55-</span>
            <span>Updated : 15-15-55-</span>
          </S.Date>
        </S.Item>

        <S.Item>
          <S.User>krysia</S.User>
          <S.Content>lorem ipsu,</S.Content>
          <S.Date>
            <span>Created : 55-55-55-</span>
            <span>Updated : 15-15-55-</span>
          </S.Date>
        </S.Item>
      </S.Posts>
    </S.Container >
  );
}

export { GuestsPosts };

// {
//   "id": 501,
//   "user_id": "1",
//   "content": "Siema Cześć",
//   "created_at": "2020-07-24T12:16:31.000000Z",
//   "updated_at": "2020-07-24T12:16:31.000000Z"
// },