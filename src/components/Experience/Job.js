// @flow
import React from 'react';
import type { JobT } from './constants';
import './Experience.css';

type Props = JobT;

const Job = ({
  start_date,
  end_date,
  position,
  company,
  location,
  description,
  tech_stack
}: Props) => {
  return (
    <div className="job">
      <div className="dates">
        {start_date} - {end_date ? end_date : 'Present'}
      </div>
      <div className="details">
        <h4>{position}</h4>
        <h5>{`${company}, ${location}`}</h5>

        {description && <p>{description}</p>}
        {tech_stack && (
          <p>
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
