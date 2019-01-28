'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _windowFocus = require('../../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Minimize = (_dec = (0, _windowFocus2.default)(), _dec(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Minimize, _Component);

  function Minimize() {
    _classCallCheck(this, Minimize);

    return _possibleConstructorReturn(this, (Minimize.__proto__ || Object.getPrototypeOf(Minimize)).apply(this, arguments));
  }

  _createClass(Minimize, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          isWindowFocused = _props.isWindowFocused,
          showIcon = _props.showIcon,
          disabled = _props.disabled,
          props = _objectWithoutProperties(_props, ['style', 'isWindowFocused', 'showIcon', 'disabled']);

      delete props.isFullscreen;

      var iconStyle = _extends({}, _2.default.minimize.icon, {
        opacity: showIcon && !disabled ? 1 : 0
      });

      var componentStyle = _extends({}, _2.default.minimize.button, style);
      if (!isWindowFocused && !showIcon) {
        componentStyle = _extends({}, componentStyle, _2.default.minimize.unfocused);
      }
      if (disabled) {
        componentStyle = _extends({}, componentStyle, _2.default.minimize.disabled);
      }

      return _react2.default.createElement(
        'a',
        _extends({
          style: componentStyle
        }, props),
        window && window.devicePixelRatio > 1.5 ? _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 20 20', style: iconStyle },
          _react2.default.createElement('rect', { fill: '#995700', x: '2.4', y: '9', width: '15.1', height: '2' })
        ) : _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 10 10', style: iconStyle },
          _react2.default.createElement('path', { fill: '#995700', d: 'M8.048,4.001c0.163,0.012 0.318,0.054 0.459,0.137c0.325,0.191 0.518,0.559 0.49,0.934c-0.007,0.097 -0.028,0.192 -0.062,0.283c-0.04,0.105 -0.098,0.204 -0.171,0.29c-0.083,0.098 -0.185,0.181 -0.299,0.24c-0.131,0.069 -0.271,0.103 -0.417,0.114c-2.031,0.049 -4.065,0.049 -6.096,0c-0.163,-0.012 -0.318,-0.054 -0.459,-0.137c-0.325,-0.191 -0.518,-0.559 -0.49,-0.934c0.007,-0.097 0.028,-0.192 0.062,-0.283c0.04,-0.105 0.098,-0.204 0.171,-0.29c0.083,-0.098 0.185,-0.181 0.299,-0.24c0.131,-0.069 0.271,-0.103 0.417,-0.114c2.031,-0.049 4.065,-0.049 6.096,0Z' })
        )
      );
    }
  }]);

  return Minimize;
}(_react.Component), _class2.propTypes = {
  style: _propTypes2.default.object,
  showIcon: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
}, _temp)) || _class) || _class);
exports.default = Minimize;