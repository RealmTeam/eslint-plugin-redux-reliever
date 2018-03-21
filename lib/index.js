'use strict';

var _espree = require('espree');

var _espree2 = _interopRequireDefault(_espree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  ecmaVersion: 6,
  ecmaFeatures: {
    jsx: true
  }
};

var code = ['class X {', '   someEpic(action$) {', '       return action$', '   }', '}'];

console.log(JSON.stringify(_espree2.default.parse(code.join('\n'), config), null, 2));