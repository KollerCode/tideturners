import React from "react";
import {Button, Carousel, CarouselItem, Caption, Container,} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import bg from "../assets/hyh-bg.png";
import logo from "../assets/hyh-logo.png";
import mg from "../assets/hyh-mg.png"
import fg from "../assets/hyh-fg.png";
import trailer from "../assets/trailer.png"
import available from "../assets/available.png"
import btn from "../assets/steam-btn.png"


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
        <video
          width="750"
          height="500"
          controls
          className="hyhVideo col-lg-6 col-12"
        >
          <source
            src="https://video.wixstatic.com/video/91bad7_9867b5cbe7034c91ab083bc4ca820be3/480p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Section 3 */}
      <div className="section3">
        <div>
          <img className="px-5 py-5 row col-3 img-fluid" src={available}></img>
        <a href="facebook.com" target="_blank">
          <img className="steamBtn img-fluid" src={btn}></img>
        </a>
        </div>
      </div>
    </div>
  ); 
  
}

export default Hyh;