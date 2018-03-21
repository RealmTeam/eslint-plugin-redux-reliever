'use strict';

var _espree = require('espree');

var _espree2 = _interopRequireDefault(_espree);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  ecmaVersion: 7,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

var code = _fs2.default.readFileSync('./test_data/enforce-oftype-usage/invalid.js').toString();
try {
  console.log(JSON.stringify(_espree2.default.parse(code, config), null, 2)); // eslint-disable-line no-console
} catch (err) {
  console.error(err.toString()); // eslint-disable-line no-console
}