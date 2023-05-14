import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://www.linkedin.com/in/rohitrai03/">
          <img className="header-logo" src={linkedin} />
        </a>
        <a href="https://github.com/rohitrai3">
          <img className="header-logo" src={github} />
        </a>
      </div>
      <div className="header-right">
        <img className="header-logo" src={email} />
      </div>
    </div>
  );
}
