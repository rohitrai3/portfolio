import { Analytics } from "@vercel/analytics/react";
import Intro from "./intro";
import Education from "./education";
import Experience from "./experience";
import OpenSourceContributions from "./openSourceContributions";

function App() {
  return (
    <div className="flex flex-col">
      <Analytics />
      <Intro />
      <Education />
      <Experience />
      <OpenSourceContributions />
    </div>
  );
}

export default App;
