import { useEffect } from "react";
import ProfilePhoto from "../../assets/rohit_rai.jpg";
import { incrementVisitorCounter } from "../../services/database";

export default function Home() {
  const setVisitorCount = async () => {
    if (!(localStorage.getItem("isPortfolioVisited") === "true")) {
      await incrementVisitorCounter("portfolio");
      localStorage.setItem("isPortfolioVisited", "true");
    }
  };

  useEffect(() => {
    setVisitorCount();
  }, []);

  return (
    <div className="home">
      <div className="home-heading">
        <img className="profile-photo" src={ProfilePhoto} />
        <div className="title-large">SOFTWARE ENGINEER</div>
      </div>
      <div className="home-description display-large">
        Hi, The name's Rohit Rai
      </div>
    </div>
  );
}
