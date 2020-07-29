import styled, { css } from 'styled-components'

export const Alert = styled.div`
  width:100%;
  max-width:100%;
  font-size:0.7rem;
  text-align:${props => props.center ? 'center' : 'left'};
  letter-spacing:1px;

  ${props => props.error &&
    css`
       color:#d40000;
      `
  }
  `
