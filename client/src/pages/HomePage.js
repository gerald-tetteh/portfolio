// HomePage

import { useEffect, useRef } from "react";
import Sidebar from "../components/home-page/Sidebar";
import { useInView } from "react-intersection-observer";
import LandingSection from "../components/home-page/LandingSection";
import AboutSection from "../components/home-page/AboutSection";

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
      // headingRef.current.innerHTML = headingText;
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
      <nav id="nav" className="home-page__nav">
        <a href="#/" className="home-page__nav__close">
          &times;
        </a>
        <ul className="home-page__nav__list">
          <li className="home-page__nav__list-item">
            <a href="#about">about</a>
          </li>
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
        <LandingSection headingRef={headingRef} />
        <AboutSection aboutRef={section2} inView={s2InView} />
        <section
          ref={section3}
          className="home-page__section home-page__section-3"
        ></section>
      </main>
    </div>
  );
};

export default HomePage;
