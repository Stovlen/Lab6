import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">PZ</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/favourites">Favourites</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
