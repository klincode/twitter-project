import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const SpinnerLoader = styled.div`
  display:flex;
  margin-top:30%;
  justify-content:center;
  align-items:center;
  z-index:20;
  `
export const Spinner = () => {
  return (
    <SpinnerLoader>
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </SpinnerLoader>
  )
}
