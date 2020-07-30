import styled from 'styled-components'
import { H2 } from '../Shared'
export const S = {
  Container: styled.div`
  background-color:#f4f8fb;
  border-radius:10px;
  border-top-left-radius:0;
  border-bottom-left-radius:0;
  `,
  Users: styled.div`
  display:flex;
  flex-direction:column;
  @media (max-width:768px){
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
  }
  `,
  User: styled.div`
  display:flex;
  width:100%;
  padding:10px 10px 10px 0;
  border-bottom:1px solid #e7ecf0;
  @media (max-width:768px){
    flex-direction:row;
    flex-basis:25%;
    flex-shrink:1
  }
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
  flex-grow:1;
  display:flex;
  justify-content:space-between;
  align-items:center;
  `,
  UserImg: styled.div`
  width:50px;

  img {
    min-width:50px;
    width:50px;
    border-radius:50%;
    max-width:80%;
    max-height:100%;
    object-fit:cover;
  }
  `,
  UserLogin: styled.div`
  padding:0 10px;
  `,
  H2: styled(H2)`
  border-left:0;
  border-right:0;
  
  `
}