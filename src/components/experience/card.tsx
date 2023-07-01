export type CardProps = {
  company_logo: string;
  job_role: string;
  company_name: string;
  duration: string;
  job_description: string[];
};

export default function Card({
  company_logo,
  job_role,
  company_name,
  duration,
  job_description,
}: CardProps) {
  return (
    <div className="card surface-container-low shadow">
      <img className="company-logo" src={company_logo} />
      <div className="job-title body-large on-surface-text">{job_role}</div>
      <div className="job-subtitle body-medium on-surface-variant-text">
        <div>{company_name}</div>
        <div>{duration}</div>
      </div>
      <ul className="job-description body-medium on-surface-variant-text">
        {job_description.map((description) => (
          <li>{description}</li>
        ))}
      </ul>
    </div>
  );
}
