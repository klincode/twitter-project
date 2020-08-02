import React, { useState, useEffect } from 'react';
import { S } from './styled';
import { H3, Spinner } from '../Shared'
import { MessageRounded } from '@styled-icons/boxicons-regular/MessageRounded';
import { ArrowShuffle } from '@styled-icons/typicons/ArrowShuffle';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { ShareAlternative } from '@styled-icons/entypo/ShareAlternative';
import axios from 'axios';
import { API } from '../../API';
import { showMessage } from '../../helpers/showMessage';
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const UserPosts = () => {
  const [usersPosts, setUsersPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [errors, setError] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios({
      method: 'post',
      url: API.endPoints.latest,
      headers: API.config.headers,
      cancelToken: source.token
    })
      .then((res) => {
        setUsersPosts(res.data);
        setLoad(false)
      })
      .catch((err) => {
        setError([...errors, { "server": err.toString(), "type": "error" }])
      })

    return () => {
      source.cancel();
    };
  }, [])

  return (
    <S.Container>
      <S.H2>Główna</S.H2>
      {!load ?
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
        : <Spinner />
      }
      {showMessage('server', errors)}
    </S.Container>
  );
}

export { UserPosts };