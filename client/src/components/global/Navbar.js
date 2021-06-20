// navbar component
import { Link } from "react-router-dom";

const Navbar = () => {
  const handelChangeBackground = () => {
    const navbarRef = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
      navbarRef.classList.add("bg-dark");
      navbarRef.classList.remove("bg-transparent");
    }
    if (window.pageYOffset === 0) {
      navbarRef.classList.remove("bg-dark");
      navbarRef.classList.add("bg-transparent");
    }
  };
  const handelClickCheckbox = () => {
    const checkbox = document.querySelector(".navbar__checkbox");
    const mobileNavigation = document.querySelector(
      ".navbar__navigation-mobile"
    );
    // checked is initial state
    if (!checkbox.checked) {
      mobileNavigation.classList.remove("invisible");
    } else {
      mobileNavigation.classList.add("invisible");
    }
  };
  window.addEventListener("scroll", handelChangeBackground);

  return (
    <nav className="navbar container">
      <Link to="/" className="navbar__brand">
        Addo Develop
      </Link>
      <ul className="navbar__navigation">
        <li className="navbar__navigation-item">
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
      <label
        onClick={handelClickCheckbox}
        htmlFor="mobile-button"
        className="navbar__mobile"
      >
        <span className="navbar__mobile-icon">&nbsp;</span>
      </label>
    </nav>
  );
};

export default Navbar;
