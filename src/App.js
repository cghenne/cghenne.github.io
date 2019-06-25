// @flow
import React, { useState } from 'react';
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
import PrintDivider from './components/PrintDivider/PrintDivider';
import './styles/_reset.scss';
import './App.scss';

const App = () => {
  const [isPrintMode, setIsPrintMode] = useState(false);

  // this only works in Chrome
  // but I'm the only one using this features so I've decided it was enough support
  window.onbeforeprint = () => setIsPrintMode(true);
  window.onafterprint = () => setIsPrintMode(false);

  return (
    <div className="container">
      <Header />
      <Hello />
      <SayHello showPrivateDetails={isPrintMode} />
      <Experience />
      <Skills />
      <Education />
      <Languages />
      <Interests />
      <References />
      <Divider />
      {isPrintMode && <PrintDivider />}
    </div>
  );
};

App.displayName = 'App';

export default App;
