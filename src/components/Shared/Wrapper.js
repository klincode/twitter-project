import styled from 'styled-components';

export const Wrapper = styled.div`
  margin:50px auto;
  min-width:350px;
  width:${props => props.w50 ? '50%' : '70%'};
  @media (max-width:768px) {
    width:80%;
    }
`