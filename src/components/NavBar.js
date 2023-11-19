import React from "react";
import { Navbar, Nav, NavbarBrand, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


function NavBar() {
  return (
    <Navbar className="navBar">
      <LinkContainer to="/">
        <Navbar.Brand className="brand">
          <img
            id="icon"
            // src={NK}
            width="100"
            height="100"
            class="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand> 
      </LinkContainer>
      <Nav className="mr-auto" style={{ marginLeft: "auto", paddingRight: 40 }}>
        <LinkContainer to="/">
          <Nav.Link>
            <strong>Home</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="about-me">
          <Nav.Link>
            <strong>About Me</strong>
          </Nav.Link>
        </LinkContainer>
        <Button>
        <LinkContainer to="resume">
          <Nav.Link>
            <strong>Resume</strong>
          </Nav.Link>
        </LinkContainer> 
        </Button>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
