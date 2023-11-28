import React from "react";
import { Navbar, Nav, NavbarBrand, Button } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png"


function NavBar() {
  return (
    <Navbar className="navBar">
      <LinkContainer to="/">
        <Navbar.Brand className="brand px-3">
          <img id="icon" src={logo} width="100%" height="50px" alt="" />
        </Navbar.Brand>
      </LinkContainer>
      <Nav
        className="mr-auto navFont px-3"
        style={{ marginLeft: "auto", paddingRight: 40 }}
      >
        <LinkContainer to="/">
          <Nav.Link>
            <strong>Home</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="floppy">
          <Nav.Link>
            <strong>Floppy and the Sleepy Planet</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="have-you-herd">
          <Nav.Link>
            <strong>Have You Herd?</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="resume">
          <Nav.Link>
            <strong>Merchandise</strong>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="resume">
          <Nav.Link>
            <strong>Contact</strong>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
