import styled from 'styled-components';
import { tweeterLogo } from "../../img/SVG";
export const S = {
  Container: styled.div`
  margin:0;
  display:flex;
  /* min-height:95vh; */
  height:100vh;
  width:100%;
  flex-grow:1;
  `,
  LeftSide: styled.div`
  flex-basis: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-image:url("${tweeterLogo}");
  background-color:#71c9f7;
  background-repeat:no-repeat;
  background-size:1000px;
  background-position:40% 40%;
  
  `,
  RightSide: styled.div`
    flex-basis: 50%;
    background-color:#fff;
  `,
  Content: styled.ul`
  list-style:none;
    margin:0;
    padding:0;

    li {
      color:#fff;
      padding:20px;
      font-size:1.4rem;
      letter-spacing:1px;
      font-weight:500;
      margin-left:10px;
    }
    span {
      margin-left:20px;      
      /* background-color:red; */
    }

.icon {
  color:red
}
  `
}