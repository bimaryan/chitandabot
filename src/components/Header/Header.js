import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>ChitandaBot Discord</Navbar.Brand>
      <Nav>
        <LinkContainer to="/commands">
          <Nav.Link>Commands</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/settings">
          <Nav.Link>Settings</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default Header;
