export type ExperienceCardProps = {
  company_logo: string;
  job_role: string;
  company_name: string;
  duration: string;
  job_description: string[];
};

export default function ExperienceCard({
  company_logo,
  job_role,
  company_name,
  duration,
  job_description,
}: ExperienceCardProps) {
  return (
    <div className="card primary-container on-primary-container-text">
      <img className="company-logo" src={company_logo} />
      <div className="card-detail">
        <div className="job-title body-large">{job_role}</div>
        <div className="job-subtitle body-medium on-surface-variant-text">
          <div className="job-company-name">{company_name}</div>
          <div className="job-duration">{duration}</div>
        </div>
        <ul className="body-medium on-surface-variant-text">
          {job_description.map((description) => (
            <li>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
