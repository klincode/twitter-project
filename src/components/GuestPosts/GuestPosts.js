import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'
// import { API } from '../../API'
import { API } from '../../API'
import { H2, H3 } from '../Shared'
import { S } from './styled'

const GuestsPosts = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    axios.post(
      API.endPoints.latest,
      API.config.headers
    )
      .then((res) => {
        setData(res.data);
        setLoad(false)
      })
      .then((err) => console.log(err))
  }, [])


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
                <S.User>{user.username}</S.User>
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
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs

      />
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