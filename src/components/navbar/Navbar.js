import React, { useRef, useEffect } from "react";
import "./navbar.scss";
import { gsap } from "gsap";

export default function Navbar() {
  let logoLink = useRef(null);
  let about = useRef(null);
  let projects = useRef(null);
  let blogs = useRef(null);

  useEffect(() => {
    gsap.to(logoLink, {
      duration: 0.49,
      opacity: 1,
      ease: "power3",
    });
    gsap.to(about, {
      duration: 1.25,
      opacity: 1,
      delay: 0.75,
      ease: "power3",
    });
    gsap.to(projects, {
      duration: 1.25,
      opacity: 1,
      delay: 1.05,
      ease: "power3",
    });
    gsap.to(blogs, {
      duration: 1.25,
      opacity: 1,
      delay: 1.35,
      ease: "power3",
    });
  });

  return (
    <div className="navbar">
      <div className="outer-div">
        <a
          className="logo-link"
          href="#intro"
          ref={(el) => {
            logoLink = el;
          }}
        >
          KK
        </a>
        <div className="right-nav">
          <a
            className="right-nav-link"
            href="#about"
            ref={(el) => {
              about = el;
            }}
          >
            About
          </a>
          <a
            className="right-nav-link"
            href="#projects"
            ref={(el) => {
              projects = el;
            }}
          >
            Projects
          </a>
          <a
            className="right-nav-link"
            href="#blogs"
            ref={(el) => {
              blogs = el;
            }}
          >
            Blogs
          </a>
        </div>
        <a className="contactMe" href="#contact">
          Contact Me
        </a>
        <a className="contactMeMobile" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
