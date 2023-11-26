import React from "react";
import {Button, Carousel, CarouselItem, Caption, Container,} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import bg from "../assets/hyh-bg.png";
import logo from "../assets/hyh-logo.png";
import mg from "../assets/hyh-mg.png"
import fg from "../assets/hyh-fg.png";
import Games from "./Games"


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
  
  return (
    <div className="">
      <img src={bg} className="topBanner img-fluid"></img>
      <img src={logo} className="hyhLogo img-fluid"></img>
      <img src={mg} className="topBannerMid reveal"></img>
      {/* <img src={fg} className="topBannerMid reveal"></img> */}
      <Games></Games>
    </div>
    
  ); 
  
}

export default Hyh;