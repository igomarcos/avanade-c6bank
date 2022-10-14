import React from 'react'
import Styled from '@emotion/styled';

const Container = Styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


`;

export default function RegisterPage() {
  return (
    <Container>register</Container>
  )
}
