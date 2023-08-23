import "./about.scss";
import { Icon } from "@iconify/react";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  useEffect(() => {
    gsap.to(aboutHeader, {
      duration: 1.2,
      opacity: 1,
      y: -20,
      ease: "power3",
      scrollTrigger: {
        trigger: ".about",
      },
    });
    // gsap.to(role, {
    //   duration: 1.1,
    //   opacity: 1,

    //   y: -20,
    //   ease: "power3",
    //   delay: 0.28,
    // });
  }, []);

  let aboutHeader = useRef(null);
  let aboutDescription = useRef(null);

  return (
    <div className="about" id="about">
      <h2
        className="aboutHeader"
        ref={(el) => {
          aboutHeader = el;
        }}
      >
        About
      </h2>
      <li className="about-description">
        Full-stack software developer with experience as a Software Developer at
        Infosys performing problem solving with Java, Spring, Angular, and CSS,
        and a background in SaaS sales development.
      </li>
      <li className="about-description">
        An adept analyst and communicator who continually aims to improve the
        user experience. Bringing experience as an Associate Software Developer
        at Infosys and 2+ years of SaaS sales development experience, possesses
        ability to interface with external customers and prospects as well as
        internally in an Agile software development environment.
      </li>
      <li className="about-description">
        Seeking frontend or full-stack development roles that focus on
        delivering valuable experiences to users.
      </li>
      <br />
      <br />
      <br />
      <br />
      <div className="skills">
        <h2 className="skillsHeader">Skills</h2>
        <ul>
          <li>
            <Icon
              icon="bx:bxl-react"
              width="49"
              height="49"
              className="floating1"
            />{" "}
          </li>
          <li>
            <Icon
              icon="bx:bxl-redux"
              width="48"
              height="48"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="cib:javascript"
              width="42"
              height="42"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="cib:angular"
              width="42"
              height="42"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="cib:ruby"
              width="42"
              height="42"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="simple-icons:rubyonrails"
              width="64"
              height="64"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="devicon-plain:java-wordmark"
              width="62"
              height="62"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="devicon-plain:spring-wordmark"
              width="61"
              height="61"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="simple-icons:springboot"
              width="59"
              height="59"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="bxl:typescript"
              color="black"
              width="56"
              height="56"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="fa-brands:css3-alt"
              width="43"
              height="43"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="cib:sass-alt"
              width="44"
              height="44"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="devicon-plain:bootstrap-wordmark"
              width="47"
              height="47"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="cib:html5-shield"
              width="43"
              height="43"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="eos-icons:api"
              color="black"
              width="48"
              height="48"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="devicon:junit-wordmark"
              color="black"
              width="47"
              height="47"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="cib:postgresql"
              width="43"
              height="43"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="simple-icons:sqlite"
              width="43"
              height="43"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="carbon:sql"
              color="black"
              width="47"
              height="47"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="file-icons:sinatra"
              width="44"
              height="44"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="cib:heroku"
              color="black"
              width="43"
              height="43"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="file-icons:netlify"
              width="43"
              height="43"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="simple-icons:amazons3"
              color="black"
              width="43"
              height="43"
              className="floating2"
            />
          </li>
          <li>
            <Icon icon="cib:git" width="43" height="43" className="floating3" />
          </li>
          <li>
            <Icon
              icon="el:wordpress"
              width="43"
              height="43"
              className="floating1"
            />
          </li>
          <li>
            <Icon
              icon="akar-icons:vscode-fill"
              color="black"
              width="43"
              height="43"
              className="floating2"
            />
          </li>
          <li>
            <Icon
              icon="logos:eclipse"
              color="black"
              width="58"
              height="58"
              className="floating3"
            />
          </li>
          <li>
            <Icon
              icon="akar-icons:github-fill"
              color="black"
              width="43"
              height="43"
              className="floating1"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
