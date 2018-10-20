'use strict';

// JSX 
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'This is a heading'
  ),
  React.createElement(
    'p',
    null,
    'This is jsx from src/app.js'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item 2wo'
    )
  )
);

var secondTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Kizito Akhilome'
  ),
  React.createElement(
    'p',
    null,
    'Age: 22'
  ),
  React.createElement(
    'p',
    null,
    'Location: Lagos'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(secondTemplate, appRoot);
