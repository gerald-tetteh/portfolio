// Home page
import Navbar from "../components/global/Navbar";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillsTile from "../components/home/SkillsTile";
import WorkTile from "../components/home/WorkTile";
import EducationTile from "../components/home/EducationTile";
import instagramImage from "../images/instagram.svg";
import githubImage from "../images/github.svg";
import linkedInImage from "../images/linkedin.svg";
import aboutMeImage from "../images/who-am-i.svg";
import {
  skills,
  projectsPersonal,
  schoolProjects,
  workExperience,
  education,
} from "../utilities/home_list_items";

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
            <a
              href="https://www.instagram.com/addo.t_"
              rel="noreferrer"
              target="_blank"
              className="home__icon home__icon--1"
            >
              <img src={instagramImage} alt="Instagram Icon" />
            </a>
            <a
              href="https://github.com/gerald-tetteh"
              rel="noreferrer"
              target="_blank"
              className="home__icon home__icon--2"
            >
              <img src={githubImage} alt="Github Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/gerald-addo-tetteh-a28101182/"
              rel="noreferrer"
              target="_blank"
              className="home__icon home__icon--3"
            >
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
        <section id="skills" className="home__skills">
          <div className="container">
            <p className="section-heading mb-md">what i do</p>
            <div className="home__skills__container">
              {skills.map((skill, index) => {
                return (
                  <SkillsTile
                    key={index}
                    icon={skill.icon}
                    content={skill.content}
                    heading={skill.heading}
                    alt={skill.alt}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section
          id="projects-personal"
          className="home__projects home__projects--personal"
        >
          <ProjectsSection
            projectsList={projectsPersonal}
            sectionName="personal"
          />
        </section>
        <section
          id="projects-school"
          className="home__projects home__projects--school"
        >
          <ProjectsSection projectsList={schoolProjects} sectionName="school" />
        </section>
        <section className="home__work" id="work-exp">
          <div className="container">
            <p className="section-heading mb-md">work experience</p>
            {workExperience.map((work, index) => {
              return <WorkTile key={index} work={work} />;
            })}
          </div>
        </section>
        <section className="home__education" id="education">
          <div className="container">
            <p className="section-heading mb-md">education</p>
            <div className="home__education-items">
              {education.map((school, index) => {
                return <EducationTile school={school} key={index} />;
              })}
            </div>
          </div>
        </section>
        <section className="home__chat" id="chat">
          <div className="container">
            <p className="section-heading">let's chat</p>
          </div>
          <div className="form-container mt-md">
            <form method="POST" className="form">
              <input
                type="text"
                name="name"
                id="name"
                className="form__input"
                placeholder="Name"
              />
              <label htmlFor="name" className="form__label">
                name
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="form__input"
                placeholder="Email"
              />
              <label htmlFor="email" className="form__label">
                email
              </label>

              <textarea
                name="message"
                id="message"
                rows="10"
                placeholder="Message"
                className="form__input form__input--textfield"
              ></textarea>
              <label htmlFor="message" className="form__label">
                message
              </label>

              <button type="submit" className="btn btn--fill form__button">
                submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
