const { join } = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
