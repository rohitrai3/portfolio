import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-items">
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/rohitrai03/">
            <img src={linkedin} />
          </a>
          <div className="headline-large">
            <a
              className="on-background-text"
              href="https://www.linkedin.com/in/rohitrai03/"
            >
              rohitrai03
            </a>
          </div>
        </div>
        <div className="contact-item">
          <img src={gmail} />
          <div className="headline-large on-background-text">rohitraijob</div>
        </div>
        <div className="contact-item">
          <a href="https://github.com/rohitrai3">
            <img src={github} />
          </a>
          <div className="headline-large">
            <a
              className="on-background-text"
              href="https://github.com/rohitrai3"
            >
              rohitrai3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
