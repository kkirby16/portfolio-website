import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="segments">
        <Introduction />
        <About />
        <Projects />
        <Blogs />
        <Contact />
      </div>

      {/* intro, about, projects, blogs, contact  */}
    </div>
  );
}

export default App;
