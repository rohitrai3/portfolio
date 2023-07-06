import amazon from "../../assets/amazon-logo.png";
import Card, { CardProps } from "./card";
import whirlpool from "../../assets/whirlpool-logo.png";

export default function Experience() {
  const amazonProps: CardProps = {
    company_logo: amazon,
    job_role: "Software Development Engineer Intern",
    company_name: "Amazon Development Centre India Pvt. Ltd., Bangalore",
    duration: "09 Jan. 2023 - 23 Jun. 2023",
    job_description: [
      "Responsible for developing APIs for backend service.",
      "Desing and develope UI for calling APIs and managing backend service.",
      "Implemented access control mechanism in UI.",
    ],
  };

  const infotechProps: CardProps = {
    company_logo:
      "https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png",
    job_role: "Java Developer Trainee",
    company_name: "S O Infotech (P) LTD., Haryana",
    duration: "19 Jan. 2019 - 19 Apr. 2019",
    job_description: ["Responsible for developing a full stack project."],
  };

  const whirlpoolProps: CardProps = {
    company_logo: whirlpool,
    job_role: "Trainee, IT Department",
    company_name: "Whirlpool of India LTD., Haryana",
    duration: "18 Jun. 2018 - 18 Jul. 2018",
    job_description: [
      "Designed a dashboard to show the stats of production line.",
    ],
  };

  return (
    <div className="experience">
      <Card {...amazonProps} />
      <Card {...infotechProps} />
      <Card {...whirlpoolProps} />
    </div>
  );
}
