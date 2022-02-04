import React from "react";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dev.to/api/articles?username=kkirby16")
      .then((response) => response.json())
      .then((res) => {
        setBlogs(res);
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="segments">
        <Introduction />
        <About />
        <Projects className="projectsComponent" />
        <Blogs blogs={blogs} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
