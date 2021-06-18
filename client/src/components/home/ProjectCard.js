// project card
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card mr-md">
      <div className="project-card__image">
        <img src={project.icon} alt={project.alt} />
      </div>
      <div className="project-card__text">
        <h3 className="project-card__heading">{project.heading}</h3>
        <p className="project-card__content">{project.content}</p>
        {project.link === "#" && (
          <a href="#" className="btn btn--outline project-card__button">
            Read More &rarr;
          </a>
        )}
        {project.link !== "#" && (
          <Link
            to={project.link}
            className="btn btn--outline project-card__button"
          >
            Read More &rarr;
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
