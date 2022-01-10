import "./about.scss";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <div className="about" id="about">
      <h2 className="aboutHeader">About</h2>
      <p className="about-description">
        Full-stack software developer with a background in sales and SaaS sales
        development. An adept analyst and communicator who continually aims to
        improve the user experience. Bringing 2+ years of SaaS sales development
        experience and a deep understanding of the software development life
        cycle, possesses ability to interface with external customers and
        prospects as well as internally with technical and non-technical
        stake-holders. Seeking frontend or full-stack development roles that
        focus on delivering valuable experiences to users, customers and
        stake-holders.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="skills">
        <h2>Skills</h2>
        <div>
          <ul>
            <Icon icon="bx:bxl-react" width="43" height="43" />{" "}
            <Icon icon="bx:bxl-redux" width="43" height="43" />
            <Icon icon="cib:javascript" width="43" height="43" />
            <Icon icon="fa-brands:css3-alt" width="43" height="43" />
            <Icon icon="cib:sass-alt" width="43" height="43" />
            <Icon icon="cib:html5-shield" width="43" height="43" />
            <Icon icon="cib:ruby" width="43" height="43" />
            <Icon icon="simple-icons:rubyonrails" width="57" height="57" />
            <Icon icon="cib:postgresql" width="43" height="43" />
            <Icon icon="simple-icons:sqlite" width="43" height="43" />
            <Icon icon="file-icons:sinatra" width="43" height="43" />
            <Icon icon="logos:heroku" width="43" height="43" />
            <Icon icon="file-icons:netlify" width="43" height="43" />
            <Icon icon="cib:git" width="43" height="43" />
            <Icon icon="el:wordpress" width="43" height="43" />
          </ul>
        </div>
      </div>
    </div>
  );
}
