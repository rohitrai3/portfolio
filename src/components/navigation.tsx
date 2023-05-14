export default function Navigation() {
  return (
    <div className="navigation surface-container">
      <div className="navigation-item">
        <div className="navigation-icon secondary-container">
          <svg
            className="navigation-active navigation-dot"
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Home</p>
        </div>
      </div>
      <div className="navigation-item">
        <div className="navigation-icon">
          <svg
            className="navigation-dot"
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">About</p>
        </div>
      </div>
      <div className="navigation-item">
        <div className="navigation-icon">
          <svg
            className="navigation-dot"
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Experience</p>
        </div>
      </div>
      <div className="navigation-item">
        <div className="navigation-icon">
          <svg
            className="navigation-dot"
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Projects</p>
        </div>
      </div>
      <div className="navigation-item">
        <div className="navigation-icon">
          <svg
            className="navigation-dot"
            xmlns="http://www.w3.org/2000/svg"
            height="12px"
            viewBox="0 0 24 24"
            width="12px"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" />
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Contact</p>
        </div>
      </div>
    </div>
  );
}
