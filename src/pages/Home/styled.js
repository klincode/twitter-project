import styled from 'styled-components';
import { tweeterLogo } from "../../img/SVG";
export const S = {
  Container: styled.div`
  margin:0;
  display:flex;
  min-height:100vh;
  width:100%;
  flex-grow:1;
  `,
  LeftSide: styled.div`
  position:fixed;
  top:0;
  bottom:0;
  width: 50%;
  display:flex;
  justify-content:center;
  /* align-items:flex-start; */
  background-image:url("${tweeterLogo}");
  background-color:#71c9f7;
  background-repeat:no-repeat;
  background-size:1000px;
  background-position:40% 5%;
  @media (max-width:768px) {
      display:none;
    }
  `,
  RightSide: styled.div`
    flex-basis: 50%;
    margin-left:50%;
    background-color:#fff;
    @media (max-width:768px) {
      flex-basis: 100%;
      margin-left:0;
    }
  `,
  Content: styled.ul`
    list-style:none;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    padding:0;
    min-width:450px;
    width:80%;
    padding:10px;

    li {
      color:#fff;
      padding:20px 10px;
      font-size:1.4rem;
      letter-spacing:1px;
      font-weight:500;
      margin-left:10px;
      @media (max-width:1024px) {
      font-size:1.2rem;
    }
    }
    span {
      margin-left:20px;      

    }

.icon {
  color:red
}
  `
}