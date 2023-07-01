export type CardProps = {
  logo: string;
  name: string;
  tools: string;
  description: string[];
};

export default function Card({ logo, name, tools, description }: CardProps) {
  return (
    <div className="card surface-container-low shadow">
      <img className="project-logo" src={logo} />
      <div className="project-name body-large on-surface-text">{name}</div>
      <div className="project-tools body-medium on-surface-variant-text">
        {tools}
      </div>
      <ul className="project-description body-medium on-surface-variant-text">
        {description.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
    </div>
  );
}
