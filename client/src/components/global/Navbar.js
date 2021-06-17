// navbar component
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link to="#" className="navbar__brand">
        Addo Develop
      </Link>
      <ul className="navbar__navigation">
        <li className="navbar__navigation-item active">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar__navigation-item dropdown" id="projects-dropdown">
          <a href="#projects-dropdown">Projects</a>
          <ul className="dropdown__menu">
            <li className="dropdown__menu-item">
              <a href="#projects-personal">Personal</a>
            </li>
            <li className="dropdown__menu-item">
              <a href="#projects-school">School</a>
            </li>
          </ul>
        </li>
        <li className="navbar__navigation-item">
          <a href="#education">Education</a>
        </li>
        <li className="navbar__navigation-item">
          <a href="#work-exp">Work Experience</a>
        </li>
        <li className="navbar__navigation-item">
          <a href="#chat" className="btn btn--outline">
            let's chat
          </a>
        </li>
      </ul>
      <input
        type="checkbox"
        id="mobile-button"
        className="navbar__checkbox"
        hidden
      />
      <label htmlFor="mobile-button" className="navbar__mobile">
        <span className="navbar__mobile-icon">&nbsp;</span>
      </label>
    </nav>
  );
};

export default Navbar;
