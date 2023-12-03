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

function Dogs() {
  return (
  <Container>
    <Row>
      <div class="col-md-4 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img src="" alt="team member" class="img-responsive"></img>
          </div>
          <div class="content row align-content-center">
            <h3 class="title">Alfonso Crespo</h3>
            <span class="post">Creative Director</span>
            <p>
              Remi has been working for 15 years in production ranging in AAA at
              various studios (Liquid development/Microsoft) as well as work for
              independent and being a company owner outsourcing for both games and
              film. Such roles I have filled are technical artist/World artist,
              level designer and producer.
            </p>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="#" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-sm-6">
        <div class="our-team active">
          <div class="pic">
            <img src="" alt="team member" class="img-responsive"></img>
          </div>
          <div class="content row align-content-center">
            <h3 class="title">Bennie Herdy</h3>
            <span class="post">Art Director</span>
            <p>
              Bennie is the creative visionary of our team who leads the
              development and visualization of our projects, setting the artistic
              direction and ensuring conceptual integrity.
            </p>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="#" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="our-team">
          <div class="pic">
            <img src="" alt="team member" class="img-responsive"></img>
          </div>
          <div class="content row align-content-center">
            <h3 class="title">Jose Montanez</h3>
            <span class="post">Production Manager</span>
            <p>
              16 years of project management expertise in the dynamic video game
              industry, my focus has primarily revolved around AAA titles as the
              Production Manager for Liquid Development a Keywords Studio. During
              my career, I have displayed proficiency in multiple areas, including
              level design and systems design.
            </p>
            <ul class="social">
              <li>
                <a href="#" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="#" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" class="fa fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Row>
  </Container>
  );
}

export default Dogs;