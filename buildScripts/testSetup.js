//Register babel to transpile before our test run
require('babel-register')();

require.extensions['.css'] = function() {};
