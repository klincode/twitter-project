import styled from 'styled-components';

export const Form = styled.form`
padding:15px;
width:100%;
display:flex;
flex-direction:${props => props.row ? 'row' : 'column'}
`