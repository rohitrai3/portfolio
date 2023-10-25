import { Analytics } from "@vercel/analytics/react";
import Intro from "./intro";
import Education from "./education";
import Experience from "./experience";

function App() {
  return (
    <>
      <Analytics />
      <Intro />
      <Education />
      <Experience />
    </>
  );
}

export default App;
