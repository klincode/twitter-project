import React, { useEffect, useState } from 'react';
import { API } from '../../API';
import { H3, Button } from '../Shared'
import { S } from './styled'
import user from '../../img/user.jpg'
import axios from 'axios';
const UsersList = () => {
  const [users, setUsersList] = useState([]);
  const [load, setLoad] = useState(true);
  // console.log('=======================1=============');
  // console.log(localStorage.getItem('jwt_token'));
  // // console.log('====================================');

  useEffect(() => {
    axios({
      method: 'post',
      url: API.endPoints.usersList,
      headers: API.config.headers,
    })
      .then((res) => {
        console.log(res);
        setUsersList(res.data);
        setLoad(false)
      })
      //todo: dodać wyświetlanie błędów
      .then((err) => console.log('blad:' + err))
    // setTimeout(() => setLoginPopupVisible(true), 1000)
  }, [])


  return (
    <S.Container>
      <S.H2>Warci obserwowania</S.H2>
      <S.Users>
        {users.map((item, index) => {
          const { avatar_url, created_at, email, id, updated_at, username } = item;
          return (
            <S.User key={index}>
              <S.UserInfo>
                <S.UserImg><img src={avatar_url} alt="" /></S.UserImg>
                <S.UserLogin>
                  <H3>{username}  ...</H3>
                  <span>{email}</span>
                </S.UserLogin>
                <div><Button full inverted>Obserwuj</Button></div>
              </S.UserInfo>
            </S.User>
          )
        })}

      </S.Users>
    </S.Container>
  );
}

export { UsersList };