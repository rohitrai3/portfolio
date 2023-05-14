import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://www.linkedin.com/in/rohitrai03/">
          <div className="header-logo">
            <img src={linkedin} />
          </div>
        </a>
        <a href="https://github.com/rohitrai3">
          <div className="header-logo">
            <img src={github} />
          </div>
        </a>
      </div>
      <div className="header-right">
        <div className="header-logo">
          <img src={email} />
        </div>
      </div>
    </div>
  );
}
