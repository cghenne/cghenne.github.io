// @flow
import React from 'react';
import Job from './Job';
import { jobs } from './constants';
import type { JobT } from './constants';
import './Experience.scss';

const Volunteering = () => {
  return (
    <div className="box volunteering">
      <h3>Volunteering</h3>
      {jobs
        .filter(job => job.volunteer)
        .map((job: JobT, index: number) => (
          <Job {...job} key={index} />
        ))}
    </div>
  );
};

Volunteering.displayName = 'Volunteering';

export default Volunteering;
