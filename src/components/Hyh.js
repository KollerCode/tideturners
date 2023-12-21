import React from "react";
import {Button, Carousel, CarouselItem, Caption, Container, Row, Col,} from "react-bootstrap";
import NavBar from "./NavBar";
import bg from "../assets/hyh-bg.png";
import logo from "../assets/hyh-logo.png";
import mg from "../assets/hyh-mg.png"
import fg from "../assets/hyh-fg.png";
import trailer from "../assets/trailer.png"
import available from "../assets/available.png"
import btn from "../assets/steam-btn.png"
import iHFHT from "../assets/iHFHT.png"
import Dogs from "./Dogs";
import YoutubeEmbed from "./YoutubeEmbed";
import Gameplay from "./Gameplay";

function Hyh() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal()

  function foreground() {
    var actions = document.querySelectorAll(".foreground");
    for (var i = 0; i < actions.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = actions[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        actions[i].classList.add("active");
      } else {
        actions[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", foreground);
  foreground();
  
  return (
    <div className="">
      {/* section 1 */}
      <div className="section-1 row">
        <img src={bg} className="topBanner img-fluid"></img>
        <img src={logo} className="hyhLogo img-fluid"></img>
        <img src={mg} className="topBannerMid reveal"></img>
        <img src={fg} className="foreground"></img>
      </div>
      {/* Section 2 */}
      <div className="section2 row justify-content-center pb-5">
        <div className="row justify-content-center pt-5 col-12">
          <img src={trailer} className="labels row img-fluid"></img>
        </div>
        <YoutubeEmbed embedId="j0GSacly9Sk?autoplay=1&loop=1&autopause=0&muted=1" />
      </div>
      {/* Section 3 */}
      <Row className="section3 align-content-between">
        <Col>
          <img className="col-6 img-fluid" src={available}></img>
        </Col>
        <Col>
          <a
            href="https://store.steampowered.com/app/2209340/Have_You_Herd/"
            target="_blank"
            className="img-fluid"
          >
            <img className="steamBtn img-fluid" src={btn}></img>
          </a>
        </Col>
        <Col>
          <img className="img-fluid" src={iHFHT}></img>
        </Col>
      </Row>
      {/* Section 4 */}
      <div className="section4 align-content-between">
        <Row className="justify-content-center py-5 col-12">
          <img src={trailer} className="labels row img-fluid"></img>
        </Row>
        <Dogs></Dogs>
      </div>
      {/* Section 5 */}
      <div className="section4 align-content-between">
        <Row className="justify-content-center py-5 col-12">
          <img src={trailer} className="labels row img-fluid"></img>
        </Row>
        <Gameplay></Gameplay>
      </div>
    </div>
  ); 
  
}

export default Hyh;