'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.widthPropTypes = undefined;
exports.removeWidthProps = removeWidthProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, widthPropTypes, mapWidthStyle, mapWidthStyles);
};

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var widthPropTypes = exports.widthPropTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

function removeWidthProps(props) {
  return (0, _styleHelper.extractProps)(props, widthPropTypes)[0];
}

function mapWidthStyle(key, value) {
  return [key, (0, _styleHelper.parseDimension)(value)];
}

function mapWidthStyles(styles) {
  if (styles.width) {
    if (styles.flex) {
      delete styles.flex;
    } else if (styles.flexGrow) {
      delete styles.flexGrow;
    }
  }
  return styles;
}