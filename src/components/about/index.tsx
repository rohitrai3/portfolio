import ProfilePhoto from "../../assets/rohit_rai.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about-profile-photo-container">
        <img className="profile-photo" src={ProfilePhoto} />
      </div>
      <div className="about-description title-large">
        I’m interested in computers. While my primary focus is in Software
        development, I do like to understand all aspects of it.
      </div>
      <div className="about-heading headline-medium">
        Here is a little background
      </div>
      <div className="about-timeline-heading title-medium">2023</div>
      <div className="about-timeline-body title-large">
        <ul>
          <li>
            6 months internship at Amazon as Software Development Engineer
            Intern.
          </li>
          <li>
            M.Tech (CSE) from Netaji Subhas University of Technology with 8.0
            CGPA.
          </li>
        </ul>
      </div>
      <div className="about-timeline-heading title-medium">2022</div>
      <div className="about-timeline-body title-large">
        <ul>
          <li>
            Teaching Assistant during M.Tech (CSE) at Netaji Subhas University
            of Technology.
          </li>
        </ul>
      </div>
      <div className="about-timeline-heading title-medium">2019</div>
      <div className="about-timeline-body title-large">
        <ul>
          <li>
            B.Tech (IT) from B. S. Anangpuria Institute of technology and
            Mangement with 70.44%.
          </li>
        </ul>
      </div>
    </div>
  );
}
