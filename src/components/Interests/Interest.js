// @flow
import React from 'react';
import './Interests.css';

type Props = {
  label: string,
  level: string
};

const Interest = ({ label, level }: Props) => {
  return (
    <li>
      <span className="bold">{label}</span>: {level}
    </li>
  );
};

Interest.displayName = 'Interest';

export default Interest;
