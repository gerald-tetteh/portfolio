// work tile
const WorkTile = ({ work }) => {
  return (
    <div className="work-tile">
      <div className="work-tile__image">
        <img src={work.icon} alt={work.alt} />
      </div>
      <div className="work-tile__text">
        <div className="work-tile__heading">{work.heading}</div>
        <div className="work-tile__content">{work.content}</div>
      </div>
    </div>
  );
};

export default WorkTile;
