'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignmentPropTypes = undefined;
exports.removeAlignmentProps = removeAlignmentProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, alignmentPropTypes, mapAlignmentStyle);
};

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allowedValues = ['left', 'right', 'center'];

var alignmentPropTypes = exports.alignmentPropTypes = {
  horizontalAlignment: _propTypes2.default.string,
  verticalAlignment: _propTypes2.default.string
};

function removeAlignmentProps(props) {
  return (0, _styleHelper.extractProps)(props, alignmentPropTypes)[0];
}

function mapAlignmentStyle(key, value, props) {
  var finalKey = void 0,
      finalValue = void 0;
  if (allowedValues.indexOf(value) === -1) {
    console.error('Unknown value for ' + key + ': ' + value);
  } else {
    var layout = 'horizontal';
    if (props !== undefined && typeof props.layout !== 'undefined') {
      layout = props.layout;
    }
    if (key === 'horizontalAlignment' && layout === 'horizontal' || key === 'verticalAlignment' && layout === 'vertical') {
      finalKey = 'justifyContent';
      switch (value) {
        case 'center':
          finalValue = 'center';
          break;
        case 'left':
          finalValue = 'flex-start';
          break;
        case 'right':
          finalValue = 'flex-end';
          break;
      }
    } else if (key === 'verticalAlignment' && layout === 'horizontal' || key === 'horizontalAlignment' && layout === 'vertical') {
      finalKey = 'alignItems';
      switch (value) {
        case 'center':
          finalValue = 'center';
          break;
        case 'left':
          finalValue = 'flex-start';
          break;
        case 'right':
          finalValue = 'flex-end';
          break;
      }
    }
  }
  return [finalKey, finalValue];
}