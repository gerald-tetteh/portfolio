// HomePage

import { useEffect } from "react";
import Sidebar from "../components/home-page/Sidebar";
import { useInView } from "react-intersection-observer";
import geraldImg from "../images/gerald.png";

const HomePage = () => {
  const observerOptions = {
    threshold: 1,
  };
  const { ref: section1, inView: s1InView } = useInView(observerOptions);
  const { ref: section2, inView: s2InView } = useInView(observerOptions);
  const { ref: section3, inView: s3InView } = useInView(observerOptions);
  useEffect(() => {}, []);
  return (
    <div className="home-page">
      <Sidebar />
      <nav className="home-page__nav">
        <ul className="home-page__nav__list">
          <li className="home-page__nav__list-item">
            <a href="#skills">skills</a>
          </li>
          <li className="home-page__nav__list-item">
            <a href="#projects">projects</a>
          </li>
          <li className="home-page__nav__list-item">
            <a href="#education">education</a>
          </li>
          <li className="home-page__nav__list-item">
            <a href="#work-experience">work experience</a>
          </li>
          <li className="home-page__nav__list-item">
            <a href="#contact">let's chat</a>
          </li>
        </ul>
      </nav>
      <main className="home-page__main">
        <section
          ref={section1}
          className="home-page__section home-page__section-1"
        >
          <img
            class="home-page__section-1__image"
            src={geraldImg}
            alt="Gerald Addo-Tetteh"
          />
        </section>
        <section
          ref={section2}
          className="home-page__section home-page__section-2"
        ></section>
        <section
          ref={section3}
          className="home-page__section home-page__section-3"
        ></section>
      </main>
    </div>
  );
};

export default HomePage;
