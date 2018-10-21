'use strict';

// JSX 

var app = {
  title: 'Indecision?',
  subtitle: 'What exactly is on your mind?',
  options: ['one']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title.toLowerCase()
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length ? 'Here are your options' : 'No Options'
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

var count = 0;
function addOne() {
  count++;
  renderCounterApp();
}

function minusOne() {
  count--;
  renderCounterApp();
}

function reset() {
  count = 0;
  renderCounterApp();
}

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var secondTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(secondTemplate, appRoot);
};

renderCounterApp();
