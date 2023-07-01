import About from "./about";
import Experience from "./experience/experience";
import Header from "./header";
import Home from "./home";
import Navigation, { NavigationProps } from "./navigation";
import { useState } from "react";
import Projects from "./projects/projects";

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
    }
  };

  const navigationProps: NavigationProps = {
    activeTab: activeTab,
    setActiveTab: setActiveTab,
  };

  return (
    <>
      <Header />
      {getActiveTab()}
      <Navigation {...navigationProps} />
    </>
  );
}

export default App;
