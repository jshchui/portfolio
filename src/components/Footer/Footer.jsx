import "./Footer.scss";
import { Link } from "react-router";
import Resume from "./../../assets/resume.pdf";

export const Footer = ({ toggleProject, hostName }) => {
  return (
    <div className="footer">
      <div className="footer__content">
        <Link to={`/${hostName}`} onClick={(e) => toggleProject("contact", e)}>
          <h2>ABOUT</h2>
        </Link>
        <h2>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </h2>
        <h2>JSHCHUI@GMAIL.COM</h2>
      </div>
    </div>
  );
};
