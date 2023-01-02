import React from 'react';
import { StyledHeader, Nav, Logo } from './styles/Header.style';
import { Container } from './styles/Container.style';


function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='.images/logo.svg' alt=''/>
          <h1>Flight Finder App</h1>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header