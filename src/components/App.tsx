import { Analytics } from "@vercel/analytics/react";
import Intro from "./intro";
import Education from "./education";
import Experience from "./experience";
import OpenSourceContributions from "./openSourceContributions";
import Events from "./events";
import Projects from "./projects";
import Skills from "./skills";
import Socials from "./socials";
import References from "./references";

function App() {
  return (
    <div className="flex flex-col">
      <Analytics />
      <Intro />
      <Education />
      <Experience />
      <OpenSourceContributions />
      <Events />
      <Projects />
      <Skills />
      <Socials />
      <References />
    </div>
  );
}

export default App;
