import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projectsHeader">Projects</h1>
      <div className="projectsContainer">
        <div className="project">
          <h2>Photo Sharer</h2>
          <img src="assets/photo-sharer.png" alt="" className="photos" />
          <h3>React / Redux / Rails / Thunk / Active Storage / Custom CSS</h3>
        </div>
        <div className="project">
          <h2>Song Sharer</h2>
          <img src="assets/photo-sharer.png" alt="" className="photos" />
          <h3>JavaScript / Rails API backend / AJAX / OOJS / Custom CSS</h3>
        </div>
        <div className="project">
          <h2>Nail the Trail</h2>
          <img src="assets/nail-the-trail.png" alt="" className="photos" />
          <h3>Rails / Custom CSS / Omniauth login and normal login</h3>
        </div>
      </div>
    </div>
  );
}
