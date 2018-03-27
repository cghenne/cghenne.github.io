// @flow
import React from 'react';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import SayHello from './components/SayHello/SayHello';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Languages from './components/Languages/Languages';
import Interests from './components/Interests/Interests';
import References from './components/References/References';
import Divider from './components/Divider/Divider';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hello />
      <SayHello showPrivateDetails={process.env.NODE_ENV !== 'production'} />
      <Experience />
      <Skills />
      <Education />
      <Languages />
      <Interests />
      <References />
      <Divider />
    </div>
  );
};

App.displayName = 'App';

export default App;
