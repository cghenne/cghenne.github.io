import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

console.info(
  'Thanks Alissa (http://alissaschlecht.com/) for allowing me to steal your design!'
);
