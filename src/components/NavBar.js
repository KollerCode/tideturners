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
          <img id="icon" src={logo} width="100%" height="100px" alt="" />
        </Navbar.Brand>
      </LinkContainer>
      <Nav
        className="mr-auto navFont px-3"
        style={{ marginLeft: "auto", paddingRight: 40 }}
      >
        <LinkContainer to="/">
          <Nav.Link>
            <h3>
              <strong>Home</strong>
            </h3>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="floppy">
          <Nav.Link>
            <h3>
              <strong>Floppy and the Sleepy Planet</strong>
            </h3>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="have-you-herd">
          <Nav.Link>
            <h3>
              <strong>Have You Herd?</strong>
            </h3>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="resume">
          <Nav.Link>
            <h3>
              <strong>Merchandise</strong>
            </h3>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="resume">
          <Nav.Link>
            <h3>
              <strong>Contact</strong>
            </h3>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
