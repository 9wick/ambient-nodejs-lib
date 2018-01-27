const path = require('path');

module.exports = {
  entry: './lib/ambient-lib.js',
  output: {
    filename: 'ambient.bundle.js',
    path: path.join(__dirname, 'public/js')
  }
};