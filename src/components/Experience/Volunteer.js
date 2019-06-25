// @flow
import React from 'react';
import Job from './Job';
import { jobs } from './constants';
import type { JobT } from './constants';
import './Experience.scss';

const Experience = () => {
  return (
    <div className="box volunteer">
      <h3>Volunteering</h3>
      {jobs
        .filter(job => job.volunteer)
        .map((job: JobT, index: number) => (
          <Job {...job} key={index} />
        ))}
    </div>
  );
};

Experience.displayName = 'Experience';

export default Experience;
