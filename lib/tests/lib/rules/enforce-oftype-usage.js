'use strict';

var _enforceOftypeUsage = require('../../../rules/enforce-oftype-usage');

var _enforceOftypeUsage2 = _interopRequireDefault(_enforceOftypeUsage);

var _eslint = require('eslint');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tester = new _eslint.RuleTester({
  parserOptions: {
    ecmaVersion: 6
  }
});

tester.run('enforce-oftype-usage', _enforceOftypeUsage2.default, {
  valid: [_fs2.default.readFileSync('./test_data/enforce-oftype-usage/valid.js').toString()],
  invalid: [{
    code: _fs2.default.readFileSync('./test_data/enforce-oftype-usage/invalid.js').toString(),
    errors: [{ message: "This epic isn't calling 'ofType' at any point. You like infinite loops don't you?" }]
  }]
});