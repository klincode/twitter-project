import styled from 'styled-components'

export const H1 = styled.h1`
font-size:1.6rem;
font-weight:500;
text-align:${props => props.center ? 'center' : null}
`