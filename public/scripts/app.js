'use strict';

// JSX 
var template = React.createElement(
  'p',
  null,
  'This is jsx from src/app.js'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
