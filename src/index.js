import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans', 'Roboto']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

console.info(
  'Thanks Alissa (http://www.alissa-schlecht.com/) for allowing me to steal your design!'
);
