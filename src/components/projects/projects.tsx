import Card, { CardProps } from "./card";

export default function Projects() {
  const photoshareProps: CardProps = {
    logo: "https://raw.githubusercontent.com/rohitrai3/resources/main/images/photo-share-text.png",
    name: "Photo Share",
    tools: "ReactJS, NextJS, Firebase, Vercel",
    description: [
      "Built an app where users can share photos with everyone and like and comment on photos.",
    ],
  };

  const erpProps: CardProps = {
    logo: "https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png",
    name: "College ERP System",
    tools: "HTML, CSS, JavaScript, J2EE, Oracle Database",
    description: [
      "Built a website for interaction between students and teachers.",
    ],
  };

  return (
    <div className="projects">
      <div className="projects-content">
        <Card {...photoshareProps} />
        <Card {...erpProps} />
      </div>
    </div>
  );
}
