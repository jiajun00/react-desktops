'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paddingPropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.removePaddingProps = removePaddingProps;
exports.removeDuplicatePaddingProps = removeDuplicatePaddingProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, paddingPropTypes, mapPaddingStyle);
};

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paddingPropTypes = exports.paddingPropTypes = {
  padding: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingTop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingLeft: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingRight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paddingBottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

function removePaddingProps(props) {
  return (0, _styleHelper.extractProps)(props, paddingPropTypes)[0];
}

function removeDuplicatePaddingProps(styles, props) {
  if (props !== undefined && typeof props.style !== 'undefined') {
    styles = _extends({}, styles);
    if (props.style.padding) {
      delete styles.paddingBottom;
      delete styles.paddingLeft;
      delete styles.paddingRight;
      delete styles.paddingTop;
      return styles;
    } else if (props.style.paddingBottom || props.style.paddingLeft || props.style.paddingRight || props.style.paddingTop) {
      delete styles.padding;
      return styles;
    }
  }
  return styles;
}

function mapPaddingStyle(key, value) {
  return [key, (0, _styleHelper.parseDimension)(value)];
}