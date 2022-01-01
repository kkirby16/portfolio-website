import "./contact.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <section class="get-in-touch">
        <h1 class="title">Contact me</h1>
        <form class="contact-form row">
          <div class="form-field col x-50">
            <input
              id="name"
              class="input-text js-input"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div class="form-field col x-50">
            <input
              id="email"
              class="input-text js-input"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="form-field col x-100">
            <input
              id="message"
              class="input-text js-input"
              type="text"
              placeholder="Message"
              required
            />
          </div>
          <div class="form-field col x-100 align-center">
            <input class="submit-btn" type="submit" value="Submit" />
          </div>
        </form>
      </section>
      <div className="contactLinks">
        <div className="contactIcon">
          <a href="https://github.com/kkirby16" target="_blank">
            <GitHubIcon style={{ color: "black" }} fontSize="large" />
          </a>
        </div>
        <div>
          <div className="contactIcon">
            <a href="https://www.linkedin.com/in/kevinpkirby/" target="_blank">
              <LinkedInIcon style={{ color: "black" }} fontSize="large" />
            </a>
          </div>
        </div>
        <div>
          <div className="contactIcon">
            <a href="https://www.dev.to/kkirby16" target="_blank">
              <Icon
                icon="bx:bxl-dev-to"
                color="black"
                width="36.1"
                height="36.1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
