import call from "../assets/call-icon.svg";
import email from "../assets/email-icon.svg";
import location from "../assets/location-icon.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-heading headline-medium">
          I have got just what you need.
          <br />
          Lets Talk.
        </div>
        <div className="contact-item title-large">
          <img src={call} />
          +918826791481
        </div>
        <div className="contact-item title-large">
          <img src={email} />
          rohitraijob@gmail.com
        </div>
        <div className="contact-item title-large">
          <img src={location} />
          New Delhi, India
        </div>
        <div className="contact-field body-small on-surface-variant-text surface-container-highest">
          <div>Name</div>
          <input
            className="body-large on-surface-variant-text surface-container-highest"
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        <div className="contact-field body-small on-surface-variant-text surface-container-highest">
          <div>Email</div>
          <input
            className="body-large on-surface-variant-text surface-container-highest"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="contact-field body-small on-surface-variant-text surface-container-highest">
          <div>Subject</div>
          <input
            className="body-large on-surface-variant-text surface-container-highest"
            type="text"
            placeholder="Enter your email's subject"
          />
        </div>
        <div className="contact-field body-small on-surface-variant-text surface-container-highest">
          <div>Message</div>
          <input
            className="body-large on-surface-variant-text surface-container-highest"
            type="text"
            placeholder="Enter your email's body"
          />
        </div>
        <button className="contact-submit primary on-primary-text label-large">
          Submit
        </button>
      </div>
    </div>
  );
}
