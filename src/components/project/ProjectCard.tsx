import { ProjectTool } from "../../common/types";

export type CardProps = {
  name: string;
  tools: ProjectTool[];
  link: string;
  description: string;
  features: string[];
};

export default function Card({
  name,
  tools,
  link,
  description,
  features,
}: CardProps) {
  const projectTools = tools.map((tool) => (
    <div className="project-tool">
      {tool.logo}
      <div>{tool.name}</div>
    </div>
  ));
  const projectFeatures = features.map((feature) => <li>{feature}</li>);

  return (
    <div className="card primary-container on-primary-container-text">
      <div className="project-name display-large">{name}</div>
      <div className="card-detail">
        <div className="project-tools body-small">{projectTools}</div>
        <div className="body-medium">
          <b>Live: </b>
          <a className="primary-text" href={link}>
            {link}
          </a>
        </div>
        <div className="project-description body-medium">
          <ul>
            <li>{description}</li>
            <li>
              <b>Features:</b>
              <ul>{projectFeatures}</ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
