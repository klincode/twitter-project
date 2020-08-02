import React, { useEffect, useState } from 'react';
import { H3, Button, Spinner } from '../Shared'
import { S } from './styled'
import { showMessage } from '../../helpers/showMessage'
import axios from 'axios';
import { API } from '../../API';
//      'Authorization': 'Bearer ' + token
const UsersList = () => {
  const [users, setUsersList] = useState([]);
  const [load, setLoad] = useState(true);
  const [errors, setError] = useState([]);
  const token = localStorage.getItem('jwt_token');
  useEffect(() => {
    axios({
      method: 'post',
      url: API.endPoints.usersList,
      headers: { ...API.config.headers, 'Authorization': 'Bearer ' + token },
    })
      .then((res) => {
        setUsersList(res.data);
        setLoad(false)
      })
      .catch((err) => {
        console.log(err); setError([...errors, { "server": err.toString(), "type": "error" }])
      })
  }, [])


  return (
    <S.Container>
      <S.H2>Warci obserwowania</S.H2>
      {!load ?
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
        : <Spinner />}
      {showMessage('server', errors)}
    </S.Container>
  );
}

export { UsersList };