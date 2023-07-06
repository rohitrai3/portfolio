import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://www.linkedin.com/in/rohitrai03/">
          <img src={linkedin} />
        </a>
        <a href="https://github.com/rohitrai3">
          <img src={github} />
        </a>
      </div>
      <div className="header-right">
        <div className="header-logo">
          <img src={gmail} />
        </div>
      </div>
    </div>
  );
}
