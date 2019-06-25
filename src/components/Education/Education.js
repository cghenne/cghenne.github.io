// @flow
import React from 'react';
import { education } from './constants';
import type { SchoolT } from './constants';
import School from './School';
import './Education.scss';

const Education = () => {
  return (
    <div className="box education">
      <h3>Education</h3>
      {education.map((school: SchoolT, index: number) => (
        <School {...school} key={index} />
      ))}
    </div>
  );
};

Education.displayName = 'Education';

export default Education;
