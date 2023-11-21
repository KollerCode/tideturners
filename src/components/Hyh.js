import React from "react";
import {Button, Carousel, CarouselItem, Caption, Container,} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import bg from "../assets/hyh-bg.png";
import logo from "../assets/hyh-logo.png";

function Hyh() {
    return (
      <div className="topBanner">
        <img src={logo} className="hyhLogo img-fluid"></img>
      </div>
      //   <Container className="text-center px-5 pt-5 pb-5">
      //     <Col lg="12">
      //       <h1 className="font1">Games are Fun</h1>
      //     </Col>
      //   </Container>
    );
}

export default Hyh;