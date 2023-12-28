import "./projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon } from "@iconify/react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@material-ui/core/Fade";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projectsHeader">
        Projects <span class="arrow">&#10230;</span>
      </h1>
      <div className="projectsContainer">
        <div className="project">
          <div className="project-info">
            <h2 class="project-info-flex-item">Photo Sharer </h2>
            <a
              href="https://github.com/kkirby16/photo-sharer-frontend"
              target="_blank"
              class="project-info-flex-item"
            >
              <Tooltip
                title="GitHub"
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
                popperprops={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, 20],
                      },
                    },
                  ],
                }}
              >
                <GitHubIcon
                  style={{ color: "black" }}
                  fontSize="medium"
                  aria-label="github"
                  className="githubIcon"
                />
              </Tooltip>
            </a>
            <a
              href="https://photo-sharer-kkirby16.netlify.app/"
              className="project-info-flex-item live-site-link"
              target="_blank"
            >
              <Tooltip
                title="Live Site"
                placement="top"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
              >
                <h3 class="live-site-text">Live</h3>
              </Tooltip>
            </a>{" "}
            <a href="https://youtu.be/cJb1p153Y-0" target="_blank">
              <Tooltip
                title="Demo Video"
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
              >
                <YouTubeIcon
                  style={{ color: "black" }}
                  className="youtubeIcon project-info-flex-item"
                />
              </Tooltip>
            </a>
          </div>
          <div className="imageContainer">
            <img src="photo-sharer.png" alt="" className="photos" />
            <h4>
              Final Project at Flatiron School. React app with similarities to
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
              <Tooltip
                title="GitHub"
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
              >
                <GitHubIcon
                  style={{ color: "black" }}
                  fontSize="medium"
                  className="githubIcon"
                />
              </Tooltip>
            </a>
            {/* <h3 class="project-info-flex-item live-site-text">Live</h3>{" "} */}
            <a href="https://youtu.be/WlAL8AUhsrk" target="_blank">
              <Tooltip
                title="Demo Video"
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
              >
                <YouTubeIcon
                  style={{ color: "black" }}
                  className="youtubeIcon project-info-flex-item"
                />
              </Tooltip>
            </a>
          </div>
          <div className="imageContainer">
            <img src="song-sharer.png" alt="" className="photos" />
            <h4>
              JavaScript app built at Flatiron School. Allows you to see shared
              songs, like/unlike them, and post your favorite songs.{" "}
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
              <Tooltip
                title="GitHub"
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
              >
                <GitHubIcon
                  style={{ color: "black" }}
                  fontSize="medium"
                  className="githubIcon"
                />
              </Tooltip>
            </a>
            <a
              href="https://nail-the-trail.herokuapp.com/"
              className="project-info-flex-item live-site-link"
              target="_blank"
            >
              <Tooltip
                title="Live Site"
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
              >
                <h3 class="live-site-text">Live</h3>
              </Tooltip>
            </a>{" "}
            <a
              href="https://www.youtube.com/watch?v=2kKjG923AMg"
              target="_blank"
            >
              <Tooltip
                title="Demo Video"
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 0 }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "#0d0d0d",
                      color: "white",
                    },
                  },
                }}
              >
                <YouTubeIcon
                  style={{ color: "black" }}
                  className="youtubeIcon project-info-flex-item"
                />
              </Tooltip>
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
            Omniauth login and normal login
          </h3>
        </div>
      </div>
    </div>
  );
}
