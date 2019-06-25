// @flow
import React from 'react';
import Job from './Job';
import { jobs } from './constants';
import type { JobT } from './constants';
import './Experience.scss';

const Experience = () => {
  return (
    <div className="box experience">
      <h3>Experience</h3>
      {jobs.map((job: JobT, index: number) => (
        <Job {...job} key={index} />
      ))}
    </div>
  );
};

Experience.displayName = 'Experience';

export default Experience;
