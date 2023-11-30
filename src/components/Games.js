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
import haveYouHerd from "../assets/hyhPic.png"
import floppy from "../assets/floppyPic.png"

function Games() {
  return (
    <div className="text-center px-5 pt-5 pb-5 gamesHome">
      <Row lg="12">
        <h1 className="font1">Games</h1>
        <br></br>
        <br></br>
      </Row>
      <Row className="my-5">
        <Col className="row align-items-center col-6">
          <h1 className="font1">Have You Herd?</h1>
          <img src={haveYouHerd}></img>
        </Col>
        <Col className="row align-items-center col-6">
          <h1 className="font1">Floppy and the Sleepy Planet</h1>
          <img src={floppy}></img>
        </Col>
      </Row>
    </div>
  );
}

export default Games;
