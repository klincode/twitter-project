import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const S = {
  Nav: styled.nav`
  position:${props => props.top ? 'absolute' : 'static'};
  top:0;
  display:flex;
  background:transparent;
  justify-content:${props => props.top ? 'flex-end' : 'center'};
  width:100%;
  padding:0 10px;
`,
  Link: styled(Link)`
  text-decoration:none;
  text-transform:uppercase;
  margin:0 10px;
  display:inline-block;
`
}