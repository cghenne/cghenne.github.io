// @flow
import React from 'react';
import Skill from './Skill';
import { skills } from './constants';
import type { SkillT } from './constants';
import './Skills.css';

const Skills = () => {
  return (
    <div className="box skills">
      <h3>Skills</h3>
      {skills.map((skill: SkillT) => <Skill {...skill} key={skill.type} />)}
    </div>
  );
};

Skills.displayName = 'Skills';

export default Skills;
