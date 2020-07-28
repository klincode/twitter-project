import styled from 'styled-components'

export const S = {
  Container: styled.div`
  background-color:#f4f8fb;
  border-radius:10px
  `,
  Users: styled.div`
  display:flex;
  flex-direction:column;
  `,
  User: styled.div`
  display:flex;
  width:100%;
  padding:10px 10px 10px 0;
  border-bottom:1px solid #e7ecf0;
  &:last-child {
    border-bottom:0px;
  }
  &:first-child {
    border-top:1px solid #e7ecf0;
  }
  `,
  UserInfo: styled.div`
  padding: 0 10px;
  flex-basis:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  div {
    flex-basis:30%;
  }
  `,
  UserImg: styled.div`
  img {
    min-width:50px;
    width:50px;
    border-radius:50%;
    max-width:100%;
    max-height:100%;
    object-fit:cover;
  }
  `,
  UserLogin: styled.div`
  padding:0 10px;
  `,

}