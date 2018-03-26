// @flow
import React from 'react';
import './Hello.css';

const Hello = () => {
  return (
    <div className="box hello">
      <h3>Hello</h3>
      <p>
        I am a dynamic and capable front end engineer with many years of
        experience in development, maintenance and support of applications and
        websites. My preferred framework is ReactJS. In my free time, I am
        currently learning about functional programming and Clojure.
      </p>
    </div>
  );
};

Hello.displayName = 'Hello';

export default Hello;
