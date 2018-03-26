// @flow
import React from 'react';
import './Skills.css';

type Props = {
  label: string,
  list: Array<string>
};

const Skill = ({ label, list }: Props) => {
  return (
    <div className="skill">
      <h4>{label}</h4>
      <ul>
        {list.map((item: string, index: number) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

Skill.displayName = 'Skill';

export default Skill;
