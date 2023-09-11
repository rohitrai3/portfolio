import ProfilePhoto from "../../assets/rohit_rai.jpg";

export default function Home() {
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
