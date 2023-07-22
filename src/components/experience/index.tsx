import AmazonLogo from "../../assets/amazon_logo.png";
import NSUTLogo from "../../assets/nsut_logo.png";
import InfotechLogo from "../../assets/infotech_logo.jpg";
import whirlpool from "../../assets/whirlpool_logo.png";
import ExperienceCard, { ExperienceCardProps } from "./ExperienceCard";

export default function Experience() {
  const amazonProps: ExperienceCardProps = {
    company_logo: AmazonLogo,
    job_role: "Software Development Engineer Intern",
    company_name: "Amazon Development Centre India Pvt. Ltd., Bengaluru, India",
    duration: "Jan. 2023 - Jun. 2023",
    job_description: [
      "Project title: Self Service tool for A/B Testing.",
      "Responsible for developing APIs for interacting with backend service.",
      "Design and developed UI and connected it with backend APIs.",
      "Integrated User Authentication and implemented Role based access control for resource access in UI.",
      "Tools used: React, Redux, AWS (DynamoDB, Amplify, CloudFormation, CloudFront, Route 53, Cognito, Certificate Manager, Secrets Manager).",
    ],
  };

  const nsutProps: ExperienceCardProps = {
    company_logo: NSUTLogo,
    job_role: "Teaching Assistant + Class Representative",
    company_name: "Netaji Subhas University of Technology, New Delhi, India",
    duration: "Aug. 2021 - Dec. 2022",
    job_description: [
      "Conducting weekly labs and evaluating assignments.",
      "Managed communication between students and faculties.",
    ],
  };

  const infotechProps: ExperienceCardProps = {
    company_logo: InfotechLogo,
    job_role: "Java Developer Trainee",
    company_name: "S O Infotech (P) LTD., Haryana",
    duration: "Jan. 2019 - Apr. 2019",
    job_description: [
      "Project title: College ERP System.",
      "Design and Developed the front-end and back-end.",
      "Tools used: Java Server Pages, Oracle Database.",
    ],
  };

  const whirlpool2018Props: ExperienceCardProps = {
    company_logo: whirlpool,
    job_role: "Trainee, IT Department",
    company_name: "Whirlpool of India LTD., Haryana, India",
    duration: "Jun. 2018 - Jul. 2018",
    job_description: [
      "Designed a dashboard to show the stats of production line.",
    ],
  };

  const whirlpool2017Props: ExperienceCardProps = {
    company_logo: whirlpool,
    job_role: "Trainee, IT Department",
    company_name: "Whirlpool of India LTD., Haryana, India",
    duration: "Jun. 2017 - Jul. 2017",
    job_description: ["Managed Excel sheets of production line."],
  };

  return (
    <div className="experience">
      <ExperienceCard {...amazonProps} />
      <ExperienceCard {...nsutProps} />
      <ExperienceCard {...infotechProps} />
      <ExperienceCard {...whirlpool2018Props} />
      <ExperienceCard {...whirlpool2017Props} />
    </div>
  );
}
