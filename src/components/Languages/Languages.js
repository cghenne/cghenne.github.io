// @flow
import React from 'react';
import { languages } from './constants';
import type { LanguageT } from './constants';
import Language from './Language';
import './Languages.scss';

const Languages = () => {
  return (
    <div className="box languages">
      <h3>Languages</h3>
      <ul>
        {languages.map((language: LanguageT) => (
          <Language {...language} key={language.type} />
        ))}
      </ul>
    </div>
  );
};

Languages.displayName = 'Languages';

export default Languages;
