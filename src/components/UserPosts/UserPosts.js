import React, { useState, useEffect } from 'react';
import { S } from './styled';
import { H3 } from '../Shared'
import { MessageRounded } from '@styled-icons/boxicons-regular/MessageRounded';
import { ArrowShuffle } from '@styled-icons/typicons/ArrowShuffle';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { ShareAlternative } from '@styled-icons/entypo/ShareAlternative';
import axios from 'axios';
import { API } from '../../API'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const UserPosts = () => {
  const [usersPosts, setUsersPosts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios({
      method: 'post',
      url: API.endPoints.latest,
      headers: API.config.headers,
    })
      .then((res) => {
        console.log(res.data);
        setUsersPosts(res.data);
        setLoad(false)
      })
      //todo: dodać wyświetlanie błędów
      .then((err) => console.log('blad:' + err))
  }, [])



  return (
    <S.Container>
      <S.H2>Główna</S.H2>
      <S.Posts>
        {
          usersPosts.map((item, index) => {
            const { content, created_at, id, user: { username, email, avatar_url } } = item;
            const created = new Date(created_at).getDate() + ' ' + months[new Date(created_at).getMonth()]
            return (
              <S.Post key={id}>
                <S.UserImg><img src={avatar_url} alt={username} /></S.UserImg>
                <S.Content>
                  <header>
                    <H3>{username}</H3>
                    <span>{email}</span>
                    <span>{created}</span>
                  </header>
                  <S.Text>{content}</S.Text>
                  <S.Icons>
                    <span><MessageRounded size="20" />1</span>
                    <span><ArrowShuffle size="20" />6</span>
                    <span><Heart size="20" />10</span>
                    <span><ShareAlternative size="20" /></span>
                  </S.Icons>
                </S.Content>
              </S.Post>
            )
          })
        }
      </S.Posts>
    </S.Container>
  );
}

export { UserPosts };