// footer component
import instagramImage from "../../images/instagram.svg";
import githubImage from "../../images/github.svg";
import linkedInImage from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h1 className="footer__heading">gerald addo-tetteh</h1>
        <p className="footer__sub-heading">
          electrical engineering & application development
        </p>
      </div>
      <div className="footer__social">
        <div className="container">
          <p className="footer__social-text">Email: addodevelop@gmail.com</p>
          <div className="footer__social__icons">
            <a
              href="https://www.linkedin.com/in/gerald-addo-tetteh-a28101182/"
              rel="noreferrer"
              target="_blank"
              className="footer__icon"
            >
              <img src={linkedInImage} alt="LinkedIn Icon" />
            </a>
            <a
              href="https://github.com/gerald-tetteh"
              rel="noreferrer"
              target="_blank"
              className="footer__icon"
            >
              <img src={githubImage} alt="Github Icon" />
            </a>
            <a
              href="https://www.instagram.com/addo.t_"
              rel="noreferrer"
              target="_blank"
              className="footer__icon"
            >
              <img src={instagramImage} alt="Instagram Icon" />
            </a>
          </div>
          <p className="footer__social-text">Mobile: +233555481476</p>
        </div>
      </div>
      <div className="footer__caption">
        <p className="footer__caption-text">
          <span className="mr-xs">&copy;{new Date().getFullYear()}</span> Addo
          Develop
        </p>
      </div>
    </footer>
  );
};

export default Footer;
