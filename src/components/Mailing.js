import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import iHFHT from "../assets/iHFHT.png";
import MailchimpForm from "./MailchimpForm";

function Mailing() {
    return (
      <Container>
        <Row className="align-items-center">
          <Col>
                    <h1>Join the Herd</h1>
                    <MailchimpForm></MailchimpForm>
            <form
              action="MAILTO:your@email.com"
              method="post"
              enctype="text/plain"
            >
              <Row className="align-items-center">
                <Col xl={8} xs={12} md={12}>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required placeholder="Sign me up for updates!"></input>
                </Col>
                <Col xl={4} xs={12} sm={12}>
                  <input type="submit" value="Submit"></input>
                </Col>
              </Row>
            </form>
          </Col>
          <Col>
            <img className="img-fluid" src={iHFHT}></img>
          </Col>
        </Row>
      </Container>
    );
}

export default Mailing