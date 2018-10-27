const { join } = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
