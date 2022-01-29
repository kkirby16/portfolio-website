import React, { useRef, useEffect } from "react";
import "./introduction.scss";
import { gsap } from "gsap";

export default function Introduction() {
  let greeting = useRef(null);
  let role = useRef(null);

  useEffect(() => {
    gsap.to(greeting, {
      duration: 1.2,
      opacity: 1,
      y: -20,
      ease: "power3",
    });
    gsap.to(role, {
      duration: 1.1,
      opacity: 1,

      y: -20,
      ease: "power3",
      delay: 0.28,
    });
  });

  return (
    <div className="introduction" id="intro">
      <div
        className="greeting"
        ref={(el) => {
          greeting = el;
        }}
      >
        Hi, I'm Kevin Kirby.
      </div>
      <div
        className="role"
        ref={(el) => {
          role = el;
        }}
      >
        Full-Stack Web Developer with a&nbsp;
        <i className="frontendWord">frontend</i>
        &nbsp;focus.
      </div>
      <div className="shapeContainer">
        <div className="circle1"></div>
        <div className="circleGridDiv">
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
          <div className="circle10"></div>
          <div className="circle11"></div>
          <div className="circle12"></div>
          <div className="circle13"></div>
        </div>

        <div className="triangle-topleft"></div>
      </div>
      <div className="designsContainer">
        <img className="design" src="taxi-715.png"></img>
      </div>
      <img src="diagonal-arrow-design.png" className="diagonalArrowDesign" />
    </div>
  );
}
