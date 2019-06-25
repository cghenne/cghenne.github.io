// @flow
import React from 'react';
import type { SchoolT } from './constants';
import './Education.scss';

type Props = SchoolT;

const School = ({ graduation_year, school, location, description }: Props) => {
  return (
    <div className="school">
      <div className="year">{graduation_year}</div>
      <div className="details">
        <h4>{school}</h4>
        <h5>{location}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

School.displayName = 'School';

export default School;
