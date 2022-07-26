// Landing Section
import flutterIcon from "../../images/flutter.svg";
import nodeIcon from "../../images/node.svg";
import pythonIcon from "../../images/python.svg";
import androidIcon from "../../images/android.svg";

const LandingSection = ({ headingRef }) => {
  return (
    <section className="home-page__section home-page__section-1">
      <div className="home-page__section-1__content">
        <div className="home-page__section-1__text">
          <h1 ref={headingRef} className="home-page__section-1__heading">
            {}
          </h1>
          <h2 className="home-page__section-1__sub-heading">
            Mobile and Web Application Developer with Skills in Electrical and
            Electronic Engineering.
          </h2>
        </div>
        <div className="home-page__section-1__bar"></div>
      </div>
      <div className="home-page__section-1__icons">
        <img
          src={flutterIcon}
          alt="Flutter icon"
          className="home-page__section-1__icon"
        />
        <img
          src={pythonIcon}
          alt="Python icon"
          className="home-page__section-1__icon"
        />
        <img
          src={nodeIcon}
          alt="Node js icon"
          className="home-page__section-1__icon"
        />
        <img
          src={androidIcon}
          alt="Android icon"
          className="home-page__section-1__icon"
        />
      </div>
    </section>
  );
};

export default LandingSection;
