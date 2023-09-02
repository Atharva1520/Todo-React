
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-10">
      <Container>
        <Navbar.Brand href="/">{props.heading}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.defaultProps = {
    heading: "Bhej de bhai"
}

Header.prototype = {
    heading : "String"
}
