'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundPropTypes = undefined;
exports.removeBackgroundProps = removeBackgroundProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, backgroundPropTypes);
};

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backgroundPropTypes = exports.backgroundPropTypes = {
  background: _propTypes2.default.string
};

function removeBackgroundProps(props) {
  return (0, _styleHelper.extractProps)(props, backgroundPropTypes)[0];
}