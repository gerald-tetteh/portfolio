// Sidebar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className="home-page__sidebar">
      <div className="home-page__sidebar__text">
        <p className="short-name">AD</p>
      </div>
      <ul className="home-page__sidebar__links">
        <li className="home-page__sidebar__link">
          <a
            href="https://github.com/gerald-tetteh"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="home-page__sidebar__link">
          <a
            href="https://www.linkedin.com/in/gerald-addo-tetteh"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="home-page__sidebar__link">
          <a
            href="https://www.instagram.com/addo.t_"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="home-page__sidebar__link">
          <a href="/cv">
            <FontAwesomeIcon icon={faFile} />
          </a>
        </li>
        <li className="home-page__sidebar__link home-page__sidebar__link--bars">
          <a href="#nav">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
