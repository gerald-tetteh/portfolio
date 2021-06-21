// no route page
import icon from "../images/who-am-i.svg";
import { Link } from "react-router-dom";

const NoRoute = () => {
  return (
    <div className="no-route">
      <div className="no-route__content">
        <div className="no-route__image-container">
          <img src={icon} alt="Man icon" className="no-route__image" />
        </div>
        <div className="no-route__text-box">
          <p className="no-route__heading">404</p>
          <p className="no-route__sub-heading">Nothing to see here...</p>
          <Link to="/" className="btn btn--fill no-route__button">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoRoute;
