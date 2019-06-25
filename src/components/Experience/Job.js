// @flow
import React from 'react';
import type { JobT } from './constants';
import './Experience.scss';

type Props = JobT;

const Job = ({
  start_date,
  end_date,
  position,
  company,
  location,
  description,
  achievements,
  tech_stack,
  print_margin
}: Props) => {
  return (
    <div className={`job${print_margin ? ' print-margin' : ''}`}>
      <div className="dates">
        {start_date} - {end_date ? end_date : 'Present'}
      </div>
      <div className="details">
        <h4>{position}</h4>
        <h5>
          {company} - {location}
        </h5>

        {description && <p className="description">{description}</p>}
        {achievements && achievements.length > 0 && (
          <ul className="achievements">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
        {tech_stack && (
          <p className="tech-stack">
            <span className="bold">Tech stack: </span>
            {tech_stack}
          </p>
        )}
      </div>
    </div>
  );
};

Job.displayName = 'Job';

export default Job;
