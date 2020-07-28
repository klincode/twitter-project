import styled, { css } from 'styled-components'

export const Button = styled.button`
/* min-width:250px; */
width:${props => props.full ? '100%' : '250px'};
margin: 15px auto;
background-color:#1da1f3;
color:#fff;
border-radius: 50px;
padding: 10px 20px;
outline: none;
border: 0;
font-size: 1.1rem;

&:hover{
  background-color:#1381c6;
  cursor: pointer;
}
${props => props.inverted &&
    css`
    font-weight:600;
    padding: 5px 20px;
    border:1px solid #339adc;
    background-color:#fff;
    color:#339adc;
    &:hover{
     background-color:#f6f6f6;
     cursor: pointer;
    }
`}
`