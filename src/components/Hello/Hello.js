// @flow
import React from 'react';
import './Hello.scss';

const Hello = () => {
  return (
    <div className="box hello">
      <h3>Hello</h3>
      <p>
        I am a dynamic and capable JavaScript engineer with multiple years of
        experience in development and maintenance of applications. I also have
        experience hiring, training and mentoring teams. My favourite framework
        is React.
      </p>
    </div>
  );
};

Hello.displayName = 'Hello';

export default Hello;
