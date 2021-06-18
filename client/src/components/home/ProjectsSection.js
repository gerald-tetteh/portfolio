// projects section
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ sectionName, projectsList }) => {
  const handelShiftLeft = (e) => {
    const personalProjects = document.querySelector(
      `.home__projects--${sectionName} .projects__list`
    );
    personalProjects.scroll(0, personalProjects.scrollWidth);
  };
  const handelShiftRight = (e) => {
    const personalProjects = document.querySelector(
      `.home__projects--${sectionName} .projects__list`
    );
    personalProjects.scroll(personalProjects.scrollWidth, 0);
  };
  return (
    <div className="projects-section">
      <div className="container">
        <div className="projects__header-main">
          <p className="section-heading">projects</p>
          <div className="projects__nav">
            <div onClick={handelShiftLeft} className="projects__nav--right">
              &#10229;
            </div>
            <div onClick={handelShiftRight} className="projects__nav--left">
              &#10230;
            </div>
          </div>
        </div>
        <p className="section-heading-secondary p-xs pl-sm">{sectionName}</p>
      </div>
      <div className="projects__list mt-md">
        {projectsList.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
