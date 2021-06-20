// mobile nav component
const MobileNav = () => {
  const handelItemClick = (e) => {
    if (e.target.localName === "a") {
      const mobileNav = document.querySelector(".navbar__navigation-mobile");
      const checkbox = document.querySelector(".navbar__checkbox");
      mobileNav.classList.add("invisible");
      checkbox.checked = false;
    }
  };

  return (
    <div className="navbar__navigation-mobile invisible">
      <ul onClick={handelItemClick} className="navbar__navigation-mobile__list">
        <li className="navbar__navigation-mobile__item">
          <a href="#skills">Skills</a>
        </li>
        <li
          className="navbar__navigation-mobile__item dropdown"
          id="projects-dropdown"
        >
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
        <li className="navbar__navigation-mobile__item">
          <a href="#education">Education</a>
        </li>
        <li className="navbar__navigation-mobile__item">
          <a href="#work-exp">Work Experience</a>
        </li>
        <li className="navbar__navigation-mobile__item">
          <a href="#chat" className="btn btn--outline">
            let's chat
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
