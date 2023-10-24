import { Analytics } from "@vercel/analytics/react";
import Intro from "./intro";
import Education from "./education";

function App() {
  return (
    <>
      <Analytics />
      <Intro />
      <Education />
    </>
  );
}

export default App;
