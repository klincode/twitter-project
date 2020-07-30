import React, { useEffect, useState } from 'react';
import { API } from '../../API';
import { H3, Button } from '../Shared'
import { S } from './styled'
import user from '../../img/user.jpg'
import axios from 'axios';
const UsersList = () => {
  const [users, setUsersList] = useState([]);
  const [load, setLoad] = useState(true);
  console.log('=======================1=============');
  console.log(localStorage.getItem('jwt_token'));
  // console.log('====================================');
  const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
  }
  console.log('header')
  console.log(header)
  useEffect(() => {
    axios.post(
      API.endPoints.usersList,
      header
    )

      .then((res) => {
        console.log(res);

        // setUsersList(res.data);
        // setLoad(false)
      })
      //todo: dodać wyświetlanie błędów
      .then((err) => console.log('blad:' + err))
    // setTimeout(() => setLoginPopupVisible(true), 1000)
  }, [])

  return (
    <S.Container>
      <S.H2>Warci obserwowania</S.H2>
      <S.Users>
        <S.User>
          <S.UserInfo>
            <S.UserImg><img src={user} alt="" /></S.UserImg>
            <S.UserLogin>
              <H3>Adam  ...</H3>
              <span>@user123</span>
            </S.UserLogin>
            <div><Button full inverted>Obserwuj</Button></div>
          </S.UserInfo>
        </S.User>

        <S.User>
          <S.UserInfo>
            <S.UserImg><img src={user} alt="" /></S.UserImg>
            <S.UserLogin>
              <H3>Adam  ...</H3>
              <span>@user123</span>
            </S.UserLogin>
            <div><Button full inverted>Obserwuj</Button></div>
          </S.UserInfo>
        </S.User>

        <S.User>
          <S.UserInfo>
            <S.UserImg><img src={user} alt="" /></S.UserImg>
            <S.UserLogin>
              <H3>Adam  ...</H3>
              <span>@user123</span>
            </S.UserLogin>
            <div><Button full inverted>Obserwuj</Button></div>
          </S.UserInfo>
        </S.User>

        <S.User>
          <S.UserInfo>
            <S.UserImg><img src={user} alt="" /></S.UserImg>
            <S.UserLogin>
              <H3>Adam  ...</H3>
              <span>@user123</span>
            </S.UserLogin>
            <div><Button full inverted>Obserwuj</Button></div>
          </S.UserInfo>
        </S.User>

        <S.User>
          <S.UserInfo>
            <S.UserImg><img src={user} alt="" /></S.UserImg>
            <S.UserLogin>
              <H3>Adam  ...</H3>
              <span>@user123</span>
            </S.UserLogin>
            <div><Button full inverted>Obserwuj</Button></div>
          </S.UserInfo>
        </S.User>
      </S.Users>
    </S.Container>
  );
}

export { UsersList };