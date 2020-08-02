import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const S = {
  Container: styled.div`
  max-width:  1400px;
  position:relative;
  margin:0 auto;
  `,

  Nav: styled.nav`
  position:${props => props.top ? 'absolute' : 'static'};
  top:0;
  right:0;
  display:flex;
  background:transparent;
  justify-content:${props => props.top ? 'flex-end' : 'center'};
  width:100%;
  padding:0 10px;
  z-index:20;
`,

  Link: styled(Link)`
  text-decoration:none;
  text-transform:uppercase;
  margin:0 10px;
  display:inline-block;
`
}