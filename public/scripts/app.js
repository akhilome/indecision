'use strict';

// JSX 
var app = {
  title: 'Indecision?',
  subtitle: 'What exactly is on your mind?',
  options: []
};

var renderer = function renderer() {
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
      app.options.map(function (option, i) {
        return React.createElement(
          'li',
          { key: i },
          option
        );
      })
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: emptyOptions },
      'remove all'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  if (!e.target.option.value) return;

  app.options.push(e.target.option.value);
  e.target.option.value = '';
  renderer();
};

var emptyOptions = function emptyOptions() {
  app.options = [];
  renderer();
};

var makeDecision = function makeDecision() {
  var randDecisionIndex = Math.floor(Math.random() * app.options.length);
  alert(app.options[randDecisionIndex]);
};

var appRoot = document.getElementById('app');
renderer();
