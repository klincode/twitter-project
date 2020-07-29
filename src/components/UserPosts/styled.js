import styled from 'styled-components'
import { H2 } from '../Shared'
export const S = {
  Container: styled.div`
  background-color:#f4f8fb;
  `,
  Posts: styled.div`
  display:flex;
  flex-direction:column;

  `,
  Post: styled.section`
  padding:10px;
  border:1px solid #e7ecf0;
  border-bottom:0px solid #e7ecf0;
  display:flex;
  flex-wrap:wrap;
  &:last-child{
    border-bottom:1px solid #e7ecf0;
  }
  `,
  UserImg: styled.div`
  padding:10px;
  flex-basis:75px;
    img {
      min-width:50px;
      width:50px;
      border-radius:50%;
      max-width:100%;
      max-height:100%;
      object-fit:cover;
    }
    `,
  Content: styled.div`
  flex-basis:calc(100% - 75px);
  color:#767676;
  font-weight:300;
  padding-top:10px;
  header {
    display:flex;
    align-items:center;
  }
  span {
    margin-left:10px;
  }
  `,
  Text: styled.p`
  `,
  Icons: styled.div`
  display:flex;
  width:80%;
  justify-content:space-between;
  align-items:center;
  color:#6d747c;
  padding:0;
  margin:40px 0 10px 0;
  span {
    padding:5px;
  }
  `,
  H2: styled(H2)`

  background-color:#fff;
  position:sticky;
  top: 0;
  /* padding:0; */
  /* margin:18px 0 0; */
  margin-bottom:0;
  `
}