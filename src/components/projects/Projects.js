import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projectsHeader">Projects</h1>
      <div className="projectsContainer">
        <div className="project">
          <img src="assets/photo-sharer.png" alt="" className="photos" />
          <h3>Photo Sharer</h3>
        </div>
        <div className="project">
          <img src="assets/photo-sharer.png" alt="" className="photos" />
          <h3>Photo Sharer</h3>
        </div>
        <div className="project">
          <img src="assets/photo-sharer.png" alt="" className="photos" />
          <h3>Photo Sharer</h3>
        </div>
      </div>
    </div>
  );
}
