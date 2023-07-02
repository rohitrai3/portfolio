export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-heading headline-medium on-background-text">
          I have got just what you need.
          <br />
          Lets Talk.
        </div>
        <div className="contact-item title-large on-background-text">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          +918826791481
        </div>
        <div className="contact-item title-large on-background-text">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          rohitraijob@gmail.com
        </div>
        <div className="contact-item title-large on-background-text">
          <svg
            className="contact-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
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
