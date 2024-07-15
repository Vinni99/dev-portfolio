import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const navItems = [
  { text: 'Home', href: '#home' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' }
];

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
      <Container className="nav-content">
        <Navbar.Brand href="#home">Vinni-Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {navItems.map((item) => (
              <Nav.Link key={item.text} href={item.href}>{item.text}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;