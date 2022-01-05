import "./projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon } from "@iconify/react";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projectsHeader">Projects</h1>
      <div className="projectsContainer">
        <div className="project">
          <h2>
            Photo Sharer{" "}
            <a
              href="https://github.com/kkirby16/photo-sharer-frontend"
              target="_blank"
            >
              <GitHubIcon style={{ color: "black" }} fontSize="medium" />
            </a>
          </h2>
          <div className="imageContainer">
            <img src="assets/photo-sharer.png" alt="" className="photos" />
            <h4>Description about the project</h4>
          </div>
          <h3>
            React <span>/</span> Redux <span>/</span> Rails <span>/</span> Thunk{" "}
            <span>/</span> Active Storage <span>/</span> Custom CSS
          </h3>
        </div>
        <div className="project">
          <h2>
            Song Sharer{" "}
            <a
              href="https://github.com/kkirby16/song_sharer_frontend"
              target="_blank"
            >
              <GitHubIcon style={{ color: "black" }} fontSize="medium" />
            </a>
          </h2>
          <img src="assets/photo-sharer.png" alt="" className="photos" />
          <h3>
            JavaScript <span>/</span> Rails API backend <span>/</span> AJAX{" "}
            <span>/</span> OOJS <span>/</span> Custom CSS
          </h3>
        </div>
        <div className="project">
          <h2>
            Nail the Trail{" "}
            <a
              href="https://github.com/kkirby16/Nail-The-Trail"
              target="_blank"
            >
              <GitHubIcon style={{ color: "black" }} fontSize="medium" />
            </a>
          </h2>
          <img src="assets/nail-the-trail.png" alt="" className="photos" />
          <h3>
            Rails <span>/</span> Custom CSS <span>/</span> Omniauth login and
            normal login
          </h3>
        </div>
      </div>
    </div>
  );
}
