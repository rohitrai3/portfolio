import React from "react";
import { DotIcon } from "../common/icons";

export type NavigationProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navigation({
  activeTab,
  setActiveTab,
}: NavigationProps) {
  const isActiveTab = (tab: string): string => {
    if (activeTab === tab) return "navigation-active secondary-container";
    else return "";
  };

  return (
    <div className="navigation surface-container">
      {/* Home */}
      <div className="navigation-item" onClick={() => setActiveTab("home")}>
        <div className={`navigation-icon ${isActiveTab("home")}`}>
          {DotIcon}
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Home</p>
        </div>
      </div>
      {/* About */}
      <div className="navigation-item" onClick={() => setActiveTab("about")}>
        <div className={`navigation-icon ${isActiveTab("about")}`}>
          {DotIcon}
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
          {DotIcon}
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Experience</p>
        </div>
      </div>
      {/* Projects */}
      <div className="navigation-item" onClick={() => setActiveTab("projects")}>
        <div className={`navigation-icon ${isActiveTab("projects")}`}>
          {DotIcon}
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Projects</p>
        </div>
      </div>
      {/* Contact */}
      <div className="navigation-item" onClick={() => setActiveTab("contact")}>
        <div className={`navigation-icon ${isActiveTab("contact")}`}>
          {DotIcon}
        </div>
        <div className="navigation-label">
          <p className="on-surface-text label-medium">Contact</p>
        </div>
      </div>
    </div>
  );
}
