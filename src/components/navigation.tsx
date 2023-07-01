import React from "react";

export type NavigationProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navigation({
  activeTab,
  setActiveTab,
}: NavigationProps) {
  const isActiveTab = (tab: string): string => {
    if (activeTab === tab) return "navigation-active";
    else return "";
  };

  return (
    <div className="navigation surface-container">
      {/* Home */}
      <div className="navigation-item" onClick={() => setActiveTab("home")}>
        <div className={`navigation-icon ${isActiveTab("home")}`}>
          <svg
            className={`navigation-dot ${isActiveTab("home")}`}
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
      {/* About */}
      <div className="navigation-item" onClick={() => setActiveTab("about")}>
        <div className={`navigation-icon ${isActiveTab("about")}`}>
          <svg
            className={`navigation-dot ${isActiveTab("about")}`}
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
      {/* Experience */}
      <div
        className="navigation-item"
        onClick={() => setActiveTab("experience")}
      >
        <div className={`navigation-icon ${isActiveTab("experience")}`}>
          <svg
            className={`navigation-dot ${isActiveTab("experience")}`}
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
      {/* Projects */}
      <div className="navigation-item" onClick={() => setActiveTab("projects")}>
        <div className={`navigation-icon ${isActiveTab("projects")}`}>
          <svg
            className={`navigation-dot ${isActiveTab("projects")}`}
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
      {/* Contact */}
      <div className="navigation-item" onClick={() => setActiveTab("contact")}>
        <div className={`navigation-icon ${isActiveTab("contact")}`}>
          <svg
            className={`navigation-dot ${isActiveTab("contact")}`}
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
