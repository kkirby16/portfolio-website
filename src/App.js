import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./app.scss";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [opacity, setOpacity] = useState("0");
  let container = useRef(null);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=kkirby16")
      .then((response) => response.json())
      .then((res) => {
        setBlogs(res);
      });
  }, []);

  useEffect(() => {
    const maxScroll = container.current.scrollHeight - window.scrollY;

    container.current.addEventListener("scroll", (e) => {
      const currentScrollPos = e.currentTarget.scrollTop;

      // console.log(maxScroll)
      if (currentScrollPos > 672 && currentScrollPos <= maxScroll) {
        setOpacity("1");
        // console.log(currentScrollPos)
      } else {
        setOpacity("0");
      }
    });
  }, [container]);

  return (
    <div className="app">
      <Navbar />
      <div
        className="segments"
        ref={(el) => {
          container.current = el;
        }}
      >
        <Introduction />
        <About />
        <Projects className="projectsComponent" />
        <Blogs blogs={blogs} />
        <Contact />
        <a
          href="#intro"
          style={{ opacity: `${opacity}`, transition: ".5s ease-in-out" }}
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            size="3x"
            style={{
              position: "fixed",
              top: "74%",
              right: "8%",
              zIndex: "2",
              color: "black",
              transition: ".024s ease-in",
            }}
            onClick={() => setOpacity(0)}
          />{" "}
        </a>
      </div>
    </div>
  );
}

export default App;
