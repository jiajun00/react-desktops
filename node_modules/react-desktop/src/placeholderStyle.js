'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function generateUniqueId() {
  return Math.floor(Math.random() * 10000 + 1) + '-' + +Math.floor(Math.random() * 10000 + 1) + '-' + +Math.floor(Math.random() * 10000 + 1) + '-' + +Math.floor(Math.random() * 10000 + 1) + '-' + +Math.floor(Math.random() * 10000 + 1) + '-' + +Math.floor(Math.random() * 10000 + 1) + '-' + +Math.floor(Math.random() * 10000 + 1) + '-' + Math.floor(Math.random() * 100000000000000);
}

function mapRules(selector, style) {
  var styles = { 0: style };
  if (style[':hover']) {
    styles = _extends({}, styles, { ':hover': style[':hover'] });
    delete styles[0][':hover'];
  }

  if (style[':active']) {
    styles = _extends({}, styles, { ':active': style[':active'] });
    delete styles[0][':active'];
  }

  if (style[':focus']) {
    styles = _extends({}, styles, { ':focus': style[':focus'] });
    delete styles[0][':focus'];
  }

  var rules = {};

  for (var prop in styles) {
    if (styles.hasOwnProperty(prop)) {
      rules[selector + ' input' + (prop !== '0' ? prop : '') + '::-webkit-input-placeholder'] = styles[prop];
      rules[selector + ' input' + (prop !== '0' ? prop : '') + '::-moz-placeholder'] = styles[prop];
      rules[selector + ' input' + (prop !== '0' ? prop : '') + ':-ms-input-placeholder'] = styles[prop];
      rules[selector + ' input' + (prop !== '0' ? prop : '') + ':placeholder'] = styles[prop];
    }
  }

  return rules;
}

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this._id = generateUniqueId();
    return _this;
  }

  _createClass(_default, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          placeholderStyle = _props.placeholderStyle,
          props = _objectWithoutProperties(_props, ['children', 'placeholderStyle']);

      return _react2.default.createElement(
        'div',
        _extends({ 'data-reactdesktopid': this._id }, props),
        children,
        _react2.default.createElement(_radium.Style, { rules: mapRules('[data-reactdesktopid="' + this._id + '"]', placeholderStyle) })
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;