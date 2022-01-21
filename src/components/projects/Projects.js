import "./projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon } from "@iconify/react";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projectsHeader">Projects</h1>
      <div className="projectsContainer">
        <div className="project">
          <div className="project-info">
            <h2 class="project-info-flex-item">Photo Sharer </h2>
            <a
              href="https://github.com/kkirby16/photo-sharer-frontend"
              target="_blank"
              class="project-info-flex-item"
            >
              <GitHubIcon
                style={{ color: "black" }}
                fontSize="medium"
                className="githubIcon"
              />
            </a>
            <a
              href="https://photo-sharer-kkirby16.netlify.app/"
              className="project-info-flex-item live-site-link"
              target="_blank"
            >
              <h3 class="live-site-text">Live</h3>
            </a>{" "}
            <a href="https://youtu.be/cJb1p153Y-0" target="_blank">
              <YouTubeIcon
                style={{ color: "black" }}
                className="youtubeIcon project-info-flex-item"
              />
            </a>
          </div>
          <div className="imageContainer">
            <img src="photo-sharer.png" alt="" className="photos" />
            <h4>
              Final Project at Flatiron School. App with similarities to
              Instagram that allows users to post photos and interact.
            </h4>
          </div>
          <h3>
            React <span>/</span> Redux <span>/</span> Rails <span>/</span>{" "}
            PostgreSQL <span>/</span> Active Storage <span>/</span> Custom CSS
          </h3>
        </div>
        <div className="project">
          <div className="project-info">
            <h2 class="project-info-flex-item">Song Sharer </h2>
            <a
              href="https://github.com/kkirby16/song_sharer_frontend"
              target="_blank"
              class="project-info-flex-item"
            >
              <GitHubIcon
                style={{ color: "black" }}
                fontSize="medium"
                className="githubIcon"
              />
            </a>
            {/* <h3 class="project-info-flex-item live-site-text">Live</h3>{" "} */}
            <a href="https://youtu.be/WlAL8AUhsrk" target="_blank">
              <YouTubeIcon
                style={{ color: "black" }}
                className="youtubeIcon project-info-flex-item"
              />
            </a>
          </div>
          <div className="imageContainer">
            <img src="song-sharer.png" alt="" className="photos" />
            <h4>
              JavaScript app built at Flatiron School. Allows you to see shared
              songs and post your favorite songs.{" "}
            </h4>
          </div>
          <h3>
            JavaScript <span>/</span> Rails API backend <span>/</span>{" "}
            PostgreSQL <span>/</span> AJAX <span>/</span> Custom CSS
          </h3>
        </div>
        <div className="project">
          <div className="project-info">
            <h2 class="project-info-flex-item">Nail the Trail </h2>
            <a
              href="https://github.com/kkirby16/Nail-The-Trail"
              target="_blank"
              class="project-info-flex-item"
            >
              <GitHubIcon
                style={{ color: "black" }}
                fontSize="medium"
                className="githubIcon"
              />
            </a>
            {/* <h3 class="project-info-flex-item live-site-text">Live</h3>{" "} */}
            <a
              href="https://www.youtube.com/watch?v=2kKjG923AMg"
              target="_blank"
            >
              <YouTubeIcon
                style={{ color: "black" }}
                className="youtubeIcon project-info-flex-item"
              />
            </a>
          </div>
          <div className="imageContainer">
            <img src="nail-the-trail.png" alt="" className="photos" />
            <h4>
              Rails MVC CMS app that helps users find the right hike and review
              hikes.
            </h4>
          </div>
          <h3>
            Rails <span>/</span> SQLite <span>/</span> Custom CSS <span>/</span>{" "}
            Omniauth Login and normal login
          </h3>
        </div>
      </div>
    </div>
  );
}
