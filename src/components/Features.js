import React from "react";
import {
  Button,
  Carousel,
  CarouselItem,
  Caption,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import players from "../assets/hyh-players.png";

function Features() {
  return (
    <Container>
      <Row className="align-items-center pb-5">
        <Col xs={12} md={8} lg={6}>
          <img className="img-fluid" src={players}></img>
        </Col>
        <Col xs={6} md={4} lg={6}>
          <h1>Pet the dog</h1>
          <p>
            A mysterious event called the Herdpocalypse has alerted multiple
            governing bodies across the country. Dozens upon dozens of formerly
            domesticated animals are being sprung from their pens by a
            mysterious figure. Eye witness reports corroborate a mysterious
            sheep that also looks like a pirate found near every outbreak.
          </p>
        </Col>
      </Row>
      <Row className="align-items-center pb-5">
        <Col xs={6} md={4} lg={6}>
          <h1>Dress the Dog</h1>
          <p>
            A mysterious event called the Herdpocalypse has alerted multiple
            governing bodies across the country. Dozens upon dozens of formerly
            domesticated animals are being sprung from their pens by a
            mysterious figure. Eye witness reports corroborate a mysterious
            sheep that also looks like a pirate found near every outbreak.
          </p>
        </Col>
        <Col xs={12} md={8} lg={6}>
          <img className="img-fluid" src={players}></img>
        </Col>
      </Row>
      <Row className="align-items-center pb-5">
        <Col xs={12} md={8} lg={6}>
          <img className="img-fluid" src={players}></img>
        </Col>
        <Col xs={6} md={4} lg={6}>
          <h1>Multiplayer</h1>
          <p>
            A mysterious event called the Herdpocalypse has alerted multiple
            governing bodies across the country. Dozens upon dozens of formerly
            domesticated animals are being sprung from their pens by a
            mysterious figure. Eye witness reports corroborate a mysterious
            sheep that also looks like a pirate found near every outbreak.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
