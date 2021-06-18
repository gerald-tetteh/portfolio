// skills tile
const SkillsTile = ({ icon, heading, content, alt }) => {
  return (
    <div className="skills-tile">
      <img src={icon} alt={alt} className="skills-tile__icon" />
      <p className="skills-tile__heading">{heading}</p>
      <p className="skills-tile__content">{content}</p>
    </div>
  );
};

export default SkillsTile;
