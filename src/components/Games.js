import React from "react";
import {
  Button,
  Carousel,
  CarouselItem,
  Caption,
  Container,
} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/logo.png";

function Games() {
  return (
    <Container className="text-center px-5 pt-5 pb-5">
      <Row lg="12">
        <h1 className="font1">Games</h1>
        <br></br>
        <br></br>
      </Row>
      <Row>
        <Col className="row align-items-center">
          <h1 className="font1">Have You Herd?</h1>
          <video></video>
        </Col>
        <Col>
          <h1 className="font1">Floppy and the Sleepy Planet</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Games;
