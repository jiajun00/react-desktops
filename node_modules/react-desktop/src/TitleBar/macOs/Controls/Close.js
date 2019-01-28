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

var Close = (_dec = (0, _windowFocus2.default)(), _dec(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Close, _Component);

  function Close() {
    _classCallCheck(this, Close);

    return _possibleConstructorReturn(this, (Close.__proto__ || Object.getPrototypeOf(Close)).apply(this, arguments));
  }

  _createClass(Close, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          isWindowFocused = _props.isWindowFocused,
          showIcon = _props.showIcon,
          disabled = _props.disabled,
          props = _objectWithoutProperties(_props, ['style', 'isWindowFocused', 'showIcon', 'disabled']);

      delete props.isFullscreen;

      var iconStyle = _extends({}, _2.default.close.icon, {
        opacity: showIcon && !disabled ? 1 : 0
      });

      var componentStyle = _extends({}, _2.default.close.button, style);
      if (!isWindowFocused && !showIcon) {
        componentStyle = _extends({}, componentStyle, _2.default.close.unfocused);
      }
      if (disabled) {
        componentStyle = _extends({}, componentStyle, _2.default.close.disabled);
      }

      return _react2.default.createElement(
        'a',
        _extends({
          style: componentStyle
        }, props),
        window && window.devicePixelRatio > 1.5 ? _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 20 20', style: iconStyle },
          _react2.default.createElement('polygon', { fill: '#4d0000', points: '15.9,5.2 14.8,4.1 10,8.9 5.2,4.1 4.1,5.2 8.9,10 4.1,14.8 5.2,15.9 10,11.1 14.8,15.9 15.9,14.8 11.1,10 ' })
        ) : _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 10 10', style: iconStyle },
          _react2.default.createElement('path', { fill: '#4d0000', d: 'M5,3.552c0.438,-0.432 0.878,-0.861 1.322,-1.287c0.049,-0.044 0.101,-0.085 0.158,-0.119c0.149,-0.091 0.316,-0.137 0.49,-0.146c0.04,0 0.04,0 0.08,0.001c0.16,0.011 0.314,0.054 0.453,0.135c0.08,0.046 0.154,0.104 0.218,0.171c0.252,0.262 0.342,0.65 0.232,0.996c-0.045,0.141 -0.121,0.265 -0.218,0.375c-0.426,0.444 -0.855,0.884 -1.287,1.322c0.432,0.438 0.861,0.878 1.287,1.322c0.097,0.11 0.173,0.234 0.218,0.375c0.04,0.126 0.055,0.26 0.043,0.392c-0.011,0.119 -0.043,0.236 -0.094,0.344c-0.158,0.327 -0.49,0.548 -0.852,0.566c-0.106,0.005 -0.213,-0.007 -0.315,-0.035c-0.156,-0.043 -0.293,-0.123 -0.413,-0.229c-0.444,-0.426 -0.884,-0.855 -1.322,-1.287c-0.438,0.432 -0.878,0.861 -1.322,1.287c-0.11,0.097 -0.234,0.173 -0.375,0.218c-0.126,0.04 -0.26,0.055 -0.392,0.043c-0.119,-0.011 -0.236,-0.043 -0.344,-0.094c-0.327,-0.158 -0.548,-0.49 -0.566,-0.852c-0.005,-0.106 0.007,-0.213 0.035,-0.315c0.043,-0.156 0.123,-0.293 0.229,-0.413c0.426,-0.444 0.855,-0.884 1.287,-1.322c-0.432,-0.438 -0.861,-0.878 -1.287,-1.322c-0.106,-0.12 -0.186,-0.257 -0.229,-0.413c-0.025,-0.089 -0.037,-0.182 -0.036,-0.275c0.004,-0.363 0.211,-0.704 0.532,-0.874c0.13,-0.069 0.272,-0.105 0.418,-0.115c0.04,-0.001 0.04,-0.001 0.08,-0.001c0.174,0.009 0.341,0.055 0.49,0.146c0.057,0.034 0.109,0.075 0.158,0.119c0.444,0.426 0.884,0.855 1.322,1.287Z' })
        )
      );
    }
  }]);

  return Close;
}(_react.Component), _class2.propTypes = {
  style: _propTypes2.default.object,
  showIcon: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
}, _temp)) || _class) || _class);
exports.default = Close;