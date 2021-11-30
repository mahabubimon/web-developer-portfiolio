import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const navigation = [
    { name: "Home", to: "/home" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        bg="light"
        variant="light"
        className="p-2"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="p-0">
            Mahabubimon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto pe-0">
              {navigation.map((item) => (
                <Nav.Link
                  as={Link}
                  to={item.to}
                  key={item.name}
                  className="text-dark fs-5"
                >
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
