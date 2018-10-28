import React from 'react';
import ReactDOM from 'react-dom';

const temp = React.createElement('p', {}, 'testing it');

ReactDOM.render(temp, document.getElementById('app'));
