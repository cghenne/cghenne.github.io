// @flow
import React from 'react';
import './Hello.scss';

const Hello = () => {
  return (
    <div className="box hello">
      <h3>Hello</h3>
      <p>
        I am a dynamic and capable front end engineer with multiple years of
        experience in development and maintenance of websites. I also have
        experience hiring, training and mentoring teams. My preferred framework
        is React and I am currently learning about functional programming.
      </p>
    </div>
  );
};

Hello.displayName = 'Hello';

export default Hello;
