import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="outer-div">
        <div className="logo">
          <a className="logo-link" href="#intro">
            KK
          </a>
        </div>
        <div className="right-nav">
          <a className="right-nav-link" href="#about">
            About
          </a>
          <a className="right-nav-link" href="#projects">
            Projects
          </a>
          <a className="right-nav-link" href="#blogs">
            Blogs
          </a>
        </div>
        <a className="contactMe" href="#contact">
          Contact Me
        </a>
      </div>
    </div>
  );
}
