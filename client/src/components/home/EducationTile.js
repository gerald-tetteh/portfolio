// education tile
const EducationTile = ({ school }) => {
  return (
    <div className="education">
      <img src={school.icon} alt={school.alt} className="education__image" />
      <p className="education__text">{school.heading}</p>
    </div>
  );
};

export default EducationTile;
