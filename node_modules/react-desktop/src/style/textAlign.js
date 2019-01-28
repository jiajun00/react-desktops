'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textAlignPropTypes = undefined;
exports.removeTextAlignProps = removeTextAlignProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, textAlignPropTypes, mapTextAlignStyle);
};

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allowedValues = ['left', 'right', 'center'];

var textAlignPropTypes = exports.textAlignPropTypes = {
  textAlign: _propTypes2.default.string
};

function removeTextAlignProps(props) {
  return (0, _styleHelper.extractProps)(props, textAlignPropTypes)[0];
}

function mapTextAlignStyle(key, value) {
  var finalKey = void 0,
      finalValue = void 0;
  if (allowedValues.indexOf(value) === -1) {
    console.error('Unknown value for ' + key + ': ' + value);
  } else {
    finalKey = 'textAlign';
    finalValue = value;
  }
  return [finalKey, finalValue];
}