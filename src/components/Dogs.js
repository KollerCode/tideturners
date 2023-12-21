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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bernese from "../assets/dogs/bernese.png";
import Slider from "react-slick";
import players from "../assets/hyh-players.png"

function Dogs() {
  return (
    <Container>
      <Row className="align-items-center pb-5">
        <Col xs={12} md={8} lg={6}>
          <img className="img-fluid" src={players}></img>
        </Col>
        <Col xs={6} md={4} lg={6}>
          <h1>Meet Malloy and his pups</h1>
          <p>
            A mysterious event called the Herdpocalypse has alerted multiple
            governing bodies across the country. Dozens upon dozens of formerly
            domesticated animals are being sprung from their pens by a
            mysterious figure. Eye witness reports corroborate a mysterious
            sheep that also looks like a pirate found near every outbreak.
          </p>
          <p>
            Famed rancher Cowboy Maloy has been asked by his local government to
            get his herding dogs to contain the Herdpocalypse and finally bring
            Woolbeard to justice. HERD UP!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Dogs;