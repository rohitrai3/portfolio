import ProfilePhoto from "../../assets/rohit_rai.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-heading">
        <img className="profile-photo" src={ProfilePhoto} />
        <div className="tagline-small on-background-text">
          SOFTWARE ENGINEER
        </div>
      </div>
      <div className="home-description display-large on-background-text">
        Hi, The name's Rohit Rai
      </div>
    </div>
  );
}
