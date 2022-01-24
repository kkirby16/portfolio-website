import "./contact.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Icon } from "@iconify/react";
import React, { useState, useRef, useEffect } from "react";
import { send } from "emailjs-com";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    send(
      "service_ejtyvdl",
      "template_bmgt6jd",
      toSend,
      "user_vIbai5hnS9y9l0PTzvjaz"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setThankYouMessage(true);
    setToSend({ from_name: "", from_email: "", message: "" });
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  return (
    <div className="contact" id="contact">
      <section class="get-in-touch">
        <h1 class="title">Contact me</h1>
        <form class="contact-form row" onSubmit={handleSubmit}>
          <div class="form-field col x-50">
            <input
              id="name"
              name="from_name"
              class="input-text js-input"
              type="text"
              placeholder="Name"
              value={toSend.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-field col x-50">
            <input
              id="email"
              name="from_email"
              class="input-text js-input"
              type="email"
              placeholder="Email"
              value={toSend.from_email}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-field col x-100">
            <input
              id="message"
              name="message"
              class="input-text js-input"
              type="text"
              placeholder="Message"
              value={toSend.message}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-field col x-100 align-center">
            <input class="submit-btn" type="submit" value="Submit" />
          </div>
          {thankYouMessage && (
            <span className="thankYouMessage">
              <CheckCircleIcon className="sentMessageIcon" /> &nbsp;&nbsp;Thank
              you, I will reply soon!
            </span>
          )}
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
