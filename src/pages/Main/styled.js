import styled from 'styled-components'


export const S = {
  Container: styled.main`
  margin:0 auto;
  padding:50px 0;
  max-width:1400px;
  width:100%;
  display:flex;
  @media (max-width:768px){
    flex-direction:column;
  }
  `,

  Sidebar: styled.aside`
  flex-basis:30%;
  @media (max-width:768px){
    display:flex;
    flex-basis:100%;
    /* flex-direction:row; */

  }
  `,
  Posts: styled.div`
  flex-basis:70%;
  `,


}