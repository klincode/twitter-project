import styled from 'styled-components'
export const Wrapper = styled.div`
  position:absolute;
  top:45%;
  left:50%;
  transform:translate(-50%,-50%);
  margin:0 auto;
  width:${props => props.w50 ? '50%' : '70%'};
  
`