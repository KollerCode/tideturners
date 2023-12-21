import React from "react";
import { Button, Carousel, CarouselItem, Caption, Container, Row, Col, Card } from "react-bootstrap";
import logo from "../assets/logo.png";
import Games from "./Games";
import Team from "./Team";
import "animate.css";

function Home() {
  return (
    <div className="homeStyle">
      <Container className="text-center py-5 px-5">
        <Col lg="12">
          <h1 className="font1">Games are Fun</h1>
          <h2 className="font2">
            Tideturners is a studio staffed by a global team of industry
            veterans making games that make memories.
          </h2>
          <h2 className="font2">
            We strive to create a gaming environment parents can trust through
            gameplay embedded in fun through learning, exploration, and creative
            problem solving.
          </h2>
          <h2 className="font2">
            What started as a collaboration between Unreal Engine experts, soon
            led to Epic games providing a Development Grant to further advance
            the operation and grow fast enough to match pace with the traction
            it has since gained.
          </h2>
          <br></br>
          <br></br>
        </Col>
        <div class="ocean">
          <img
            class="pirateWave"
            src={logo}
            width="100px"
            height="100px"
            alt=""
          />
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </Container>
      <div className="gamesHome">
        <Games></Games>
      </div>
      <Container className="teamSection">
        <h1 className="text-center py-3">Meet the Team</h1>
        {/* <img src={Team} alt="" /> */}
        <Team></Team>
      </Container>
    </div>
  );
}

export default Home;