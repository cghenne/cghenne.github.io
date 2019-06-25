// @flow
import React from 'react';
import './Languages.scss';

type Props = {
  label: string,
  level: string
};

const Language = ({ label, level }: Props) => {
  return (
    <li>
      <span className="bold">{label}</span>: {level}
    </li>
  );
};

Language.displayName = 'Language';

export default Language;
