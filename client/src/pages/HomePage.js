// HomePage

import { useEffect, useRef } from "react";
import Sidebar from "../components/home-page/Sidebar";
import { useInView } from "react-intersection-observer";
import flutterIcon from "../images/flutter.svg";
import nodeIcon from "../images/node.svg";
import pythonIcon from "../images/python.svg";
import androidIcon from "../images/android.svg";

const HomePage = () => {
  const observerOptions = {
    threshold: 1,
  };
  const headingRef = useRef();
  const { ref: section2, inView: s2InView } = useInView(observerOptions);
  const { ref: section3, inView: s3InView } = useInView(observerOptions);
  const headingText = "GERALD ADDO-TETTEH";
  let headingAnimationIdx = 0;
  let headingTextInterval;
  const createHeadingSpan = () => {
    while (headingAnimationIdx !== headingText.length) {
      let text = headingText[headingAnimationIdx];
      if (text === " ") {
        text = "&nbsp;";
      }
      const element = `<span>${text}</span>`;
      headingRef.current.innerHTML += element;
      headingAnimationIdx++;
    }
  };
  const handleTitleAnimation = () => {
    if (headingAnimationIdx === headingText.length) {
      return clearInterval(headingTextInterval);
    }
    headingRef.current.children[headingAnimationIdx].classList.add(
      "animate-letter"
    );
    headingAnimationIdx++;
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    createHeadingSpan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    headingAnimationIdx = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    headingTextInterval = setInterval(handleTitleAnimation, 90);
  }, []);
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
        <section className="home-page__section home-page__section-1">
          <div className="home-page__section-1__content">
            <div className="home-page__section-1__text">
              <h1 ref={headingRef} className="home-page__section-1__heading">
                {}
              </h1>
              <h2 className="home-page__section-1__sub-heading">
                Mobile and Web Application Developer with Skills in Electrical
                and Electronic Engineering.
              </h2>
            </div>
            <div className="home-page__section-1__bar"></div>
          </div>
          <div className="home-page__section-1__icons">
            <img
              src={flutterIcon}
              alt="Flutter icon"
              className="home-page__section-1__icon"
            />
            <img
              src={pythonIcon}
              alt="Python icon"
              className="home-page__section-1__icon"
            />
            <img
              src={nodeIcon}
              alt="Node js icon"
              className="home-page__section-1__icon"
            />
            <img
              src={androidIcon}
              alt="Android icon"
              className="home-page__section-1__icon"
            />
          </div>
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
