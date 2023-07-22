import GmailLogo from "../../assets/gmail_logo.png";
import { GitHubLogo, LinkedInLogo } from "../../common/icons";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-items">
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/rohitrai03/">{LinkedInLogo}</a>
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
          <img src={GmailLogo} />
          <div className="headline-large on-background-text">rohitraijob</div>
        </div>
        <div className="contact-item">
          <a href="https://github.com/rohitrai3">{GitHubLogo}</a>
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
