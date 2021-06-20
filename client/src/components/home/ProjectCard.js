// project card
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const handelReadMore = (e) => {
    const projects = document.querySelectorAll(".project-card__content-detail");
    const path = e.target["id"];
    projects.forEach((project) => {
      if (project["id"] === path.slice(1)) {
        project.classList.remove("hide-content");
      } else {
        project.classList.add("hide-content");
      }
    });
  };
  const handelCloseReadMore = (e) => {
    e.target.parentElement.classList.add("hide-content");
  };

  return (
    <div className="project-card mr-md">
      <div className="project-card__image">
        <img src={project.icon} alt={project.alt} />
      </div>
      <div className="project-card__text">
        <h3 className="project-card__heading">{project.heading}</h3>
        <p className="project-card__content">{project.content}</p>
        {project.link.includes("#") && (
          <div
            id={project.link}
            onClick={handelReadMore}
            className="btn btn--outline project-card__button"
          >
            Read More &rarr;
          </div>
        )}
        {!project.link.includes("#") && project.link.startsWith("/") && (
          <Link
            to={project.link}
            className="btn btn--outline project-card__button"
          >
            Read More &rarr;
          </Link>
        )}
        {project.link.startsWith("http") && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline project-card__button"
          >
            View &rarr;
          </a>
        )}
      </div>
      {project.contentDetail && (
        <div
          className="project-card__content-detail hide-content"
          id={project.link.slice(1)}
        >
          <div
            onClick={handelCloseReadMore}
            aria-label="Close detail page"
            className="project-card__content-detail__close"
          >
            &times;
          </div>
          <h3 className="project-card__heading mb-md">{project.heading}</h3>
          <p className="project-card__content">{project.contentDetail}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
