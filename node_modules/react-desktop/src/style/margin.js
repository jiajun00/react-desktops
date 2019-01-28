'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.marginPropTypes = undefined;
exports.removeMarginProps = removeMarginProps;

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  return (0, _styleHelper2.default)(options, marginPropTypes, mapMarginStyle);
};

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../styleHelper');

var _styleHelper2 = _interopRequireDefault(_styleHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var marginPropTypes = exports.marginPropTypes = {
  margin: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginTop: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginLeft: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginRight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  marginBottom: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

function removeMarginProps(props) {
  return (0, _styleHelper.extractProps)(props, marginPropTypes)[0];
}

function mapMarginStyle(key, value) {
  return [key, (0, _styleHelper.parseDimension)(value)];
}