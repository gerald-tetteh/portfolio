// Home page
import Navbar from "../components/global/Navbar";
import instagramImage from "../images/instagram.svg";
import githubImage from "../images/github.svg";
import linkedInImage from "../images/linkedin.svg";
import aboutMeImage from "../images/who-am-i.svg";

const Home = () => {
  window.addEventListener("click", (_) => {
    if (window.location.href.includes("#projects-dropdown")) {
      window.location.href = window.location.href.replace(
        "#projects-dropdown",
        "#"
      );
    }
  });
  return (
    <div className="home">
      <header className="home__header">
        <Navbar />
        <div className="home__text-container">
          <p className="home__text-pre">Hello, I'm</p>
          <h1 className="home__heading">Gerald Addo-Tetteh</h1>
          <p className="home__text-sub">
            Web Developer & Flutter Developer & Electrical Engineering Student
          </p>
          <div className="home__icons">
            <a href="#" target="_blank" className="home__icon home__icon--1">
              <img src={instagramImage} alt="Instagram Icon" />
            </a>
            <a href="#" target="_blank" className="home__icon home__icon--2">
              <img src={githubImage} alt="Github Icon" />
            </a>
            <a href="#" target="_blank" className="home__icon home__icon--3">
              <img src={linkedInImage} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>
      </header>
      <main className="home__main">
        <section className="home__about-me">
          <div className="about-me__col-1">
            <img
              src={aboutMeImage}
              alt="About Me"
              className="about-me__image"
            />
          </div>
          <div className="about-me__col-2">
            <p className="section-heading mt-md mb-sm">About me</p>
            <h2 className="about-me__heading mb-xs">Who am I ?</h2>
            <p className="about-me__text">
              Technology has always been a fascination. This spurred an interest
              in <span className="color-gold">engineering</span> and{" "}
              <span className="color-purple">programming</span>.
            </p>
            <p className="about-me__text">
              I am familiar with the programming languages:{" "}
              <span className="color-gold">Python</span>,{" "}
              <span className="color-green">Javascript</span>,{" "}
              <span className="color-blue">Dart</span> and{" "}
              <span className="color-brown">C</span>.
            </p>
            <p className="about-me__text">
              I am studying{" "}
              <span className="color-orange">electrical engineering</span> at
              Ashesi University, and I also build websites and{" "}
              <span className="color-green-pale">android applications</span>.
              Some of my work is below.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
