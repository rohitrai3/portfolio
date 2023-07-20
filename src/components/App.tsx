import About from "./about";
import Experience from "./experience";
import Home from "./home";
import Navigation, { NavigationProps } from "./navigation";
import { useState } from "react";
import Projects from "./projects/projects";
import Contact from "./contact";

function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const getActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
    }
  };

  const navigationProps: NavigationProps = {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
  };

  return (
    <div className="app-layout background on-background-text">
      <div className="app-content">{getActiveTab()}</div>
      <div className="app-navigation">
        <Navigation {...navigationProps} />
      </div>
    </div>
  );
}

export default App;
