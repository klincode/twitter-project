import styled from 'styled-components'


export const S = {
  ModalFront: styled.div`
  position:absolute;
  top:50%;
  left:50%;
  width:50%;
  height:60%;
  transform:translate(-50%,-50%);
  background-color:#f4f8fb;
  z-index:20;
  border-radius:10px;
  box-shadow:0 0 10px -2px #333;
  
  `,
  ModalBack: styled.div`
  position:fixed;
  top:0;
  left:0;
  background-color:rgba(29,161,243,0.88);
  width:100%;
  height:100vh;
  z-index:10;

  `,


}