// @flow
import React from 'react';
import { generateHTMLDots } from './helpers';
import './PrintDivider.css';

const DOTS_FIRST_PAGE = 97;
const DOTS_SECOND_PAGE = 109;

const PrintDivider = () => {
  return (
    <div className="print-divider">
      <div
        className="print-divider-page-1"
        dangerouslySetInnerHTML={generateHTMLDots(DOTS_FIRST_PAGE)}
      />
      <svg height="27" width="20">
        <polygon points="0,0 20,0 10,13" className="triangle-down" />
      </svg>
      <div className="continued">Continued</div>
      <div className="name-repeat">
        <span className="secondary">Cathleen</span> Ghenne
      </div>
      <div className="title-repeat">Experience</div>
      <svg height="34" width="20" className="triangle">
        <polygon points="10,21 20,34 0,34" className="triangle-up" />
      </svg>
      <div
        className="print-divider-page-2"
        dangerouslySetInnerHTML={generateHTMLDots(DOTS_SECOND_PAGE)}
      />
    </div>
  );
};

PrintDivider.displayName = 'PrintDivider';

export default PrintDivider;
