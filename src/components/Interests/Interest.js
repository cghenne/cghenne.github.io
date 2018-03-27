// @flow
import React from 'react';
import './Interests.css';

type Props = {
  label: string,
  description: string
};

const Interest = ({ label, description }: Props) => {
  return (
    <li>
      <span className="bold">{label}</span>: {description}
    </li>
  );
};

Interest.displayName = 'Interest';

export default Interest;
