import styled from 'styled-components'

export const S = {
  Container: styled.div`
  background-color:#f4f8fb;
  border-radius:10px;
  margin:50px 20px;
  `,
  Posts: styled.div`
  display:flex;
  flex-direction:column;
  `,
  Item: styled.div`
  padding:10px 10px 10px 0;
  border-bottom:1px solid #e7ecf0;
  &:last-child {
    border-bottom:0px;
  }
  &:first-child {
    border-top:1px solid #e7ecf0;
  }
  `,
  User: styled.div`
  font-weight:600;
  text-transform:capitalize;
  padding-left:15px;
  display:flex;
  flex-direction:row;
  align-items:center;
  `,
  UserImg: styled.div`
  padding:10px;
  flex-basis:45px;
    img {
      min-width:40px;
      width:40px;
      border-radius:50%;
      max-width:100%;
      max-height:100%;
      object-fit:cover;
    }
    `,
  Content: styled.div`
  color:#767676;
  font-weight:300;
  padding-top:10px;
  padding-left:15px;
  `,
  Date: styled.div`
  padding-top:10px;
    font-size:0.7rem;
    color:#767676;
      padding-left:15px;
    span {
      font-weight:500;
      margin-right:10px;
    }
    `

}