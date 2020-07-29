import React from 'react';
import { H3, Button } from '../Shared'
import { S } from './styled'
import user from '../../img/user.jpg'
const UsersList = () => {
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