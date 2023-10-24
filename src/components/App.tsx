import { Analytics } from "@vercel/analytics/react";
import Intro from "./intro";

function App() {
  return (
    <>
      <Analytics />
      <Intro />
    </>
  );
}

export default App;
