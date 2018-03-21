'use strict';

var _enforceOftypeUsage = require('./rules/enforce-oftype-usage');

var _enforceOftypeUsage2 = _interopRequireDefault(_enforceOftypeUsage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  rules: {
    'enforce-oftype-usage': _enforceOftypeUsage2.default
  }
};