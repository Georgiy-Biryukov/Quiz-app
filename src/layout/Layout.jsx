import React from 'react'
import { Header } from '../components/Header'
import { Main, Wrapper, Container } from './Layout.styled'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </Wrapper>
  )
}
