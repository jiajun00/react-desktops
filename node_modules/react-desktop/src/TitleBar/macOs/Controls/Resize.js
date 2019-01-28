'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

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

var Resize = (_dec = (0, _windowFocus2.default)(), _dec(_class = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Resize, _Component);

  function Resize() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Resize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Resize.__proto__ || Object.getPrototypeOf(Resize)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeydown = function (e) {
      if (e.altKey) _this.setState({ altKey: true });
    }, _this.handleKeyup = function () {
      if (_this.state.altKey) _this.setState({ altKey: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Resize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
      document.addEventListener('keyup', this.handleKeyup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          onClick = _props.onClick,
          onMaximizeClick = _props.onMaximizeClick,
          isWindowFocused = _props.isWindowFocused,
          showIcon = _props.showIcon,
          disabled = _props.disabled,
          disableFullscreen = _props.disableFullscreen,
          props = _objectWithoutProperties(_props, ['style', 'onClick', 'onMaximizeClick', 'isWindowFocused', 'showIcon', 'disabled', 'disableFullscreen']);

      delete props.isFullscreen;

      var iconStyle = _extends({}, _2.default.resize.icon, {
        opacity: showIcon && !disabled ? 1 : 0
      });

      var componentStyle = _extends({}, _2.default.resize.button, style);
      if (!isWindowFocused && !showIcon) {
        componentStyle = _extends({}, componentStyle, _2.default.resize.unfocused);
      }
      if (disabled) {
        componentStyle = _extends({}, componentStyle, _2.default.resize.disabled);
      }

      var icon = void 0;
      if (this.props.isFullscreen && !disableFullscreen) {
        icon = window && window.devicePixelRatio > 1.5 ? _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 20 20', style: iconStyle },
          _react2.default.createElement('path', { fill: '#006400', d: 'M8.7,10H1l9,8.8v-7.5C9.3,11.2,8.7,10.7,8.7,10z' }),
          _react2.default.createElement('path', { fill: '#006400', d: 'M11.3,10H19l-9-8.8v7.5C10.7,8.8,11.3,9.3,11.3,10z' })
        ) : _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 10 10', style: iconStyle },
          _react2.default.createElement('path', { fill: '#006400', d: 'M5,10c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z' }),
          _react2.default.createElement('path', { fill: '#006400', d: 'M5,0c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z' })
        );
      } else if (this.state.altKey || disableFullscreen) {
        onClick = onMaximizeClick;
        icon = window && window.devicePixelRatio > 1.5 ? _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 20 20', style: iconStyle },
          _react2.default.createElement('polygon', { fill: '#006400', points: '17.5,9 11,9 11,2.5 9,2.5 9,9 2.5,9 2.5,11 9,11 9,17.5 11,17.5 11,11 17.5,11 ' })
        ) : _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 10 10', style: iconStyle },
          _react2.default.createElement('path', {
            fill: '#006400',
            d: 'M3.912,3.976c0.004,-0.615 0.013,-1.23 0.025,-1.844c0.004,-0.067 0.012,-0.132 0.027,-0.197c0.042,-0.17 0.127,-0.32 0.244,-0.449c0.028,-0.029 0.028,-0.029 0.057,-0.056c0.121,-0.105 0.26,-0.184 0.415,-0.225c0.09,-0.024 0.183,-0.035 0.276,-0.033c0.363,0.007 0.702,0.218 0.868,0.54c0.068,0.131 0.103,0.273 0.111,0.42c0.013,0.614 0.021,1.229 0.025,1.844c0.615,0.004 1.23,0.013 1.844,0.025c0.147,0.009 0.289,0.043 0.42,0.111c0.118,0.061 0.223,0.145 0.308,0.247c0.077,0.092 0.136,0.197 0.176,0.309c0.12,0.343 0.042,0.734 -0.202,1.003c-0.071,0.079 -0.155,0.146 -0.247,0.198c-0.14,0.08 -0.294,0.121 -0.455,0.13c-0.614,0.012 -1.229,0.021 -1.844,0.025c-0.004,0.615 -0.012,1.23 -0.025,1.844c-0.008,0.147 -0.043,0.289 -0.111,0.42c-0.061,0.118 -0.145,0.223 -0.247,0.308c-0.091,0.076 -0.197,0.136 -0.309,0.176c-0.343,0.12 -0.734,0.042 -1.003,-0.202c-0.079,-0.071 -0.146,-0.155 -0.198,-0.247c-0.08,-0.14 -0.121,-0.295 -0.13,-0.455c-0.012,-0.614 -0.021,-1.229 -0.025,-1.844c-0.615,-0.004 -1.229,-0.013 -1.844,-0.025c-0.16,-0.009 -0.314,-0.05 -0.455,-0.13c-0.08,-0.046 -0.154,-0.103 -0.219,-0.169c-0.255,-0.259 -0.349,-0.647 -0.242,-0.994c0.043,-0.141 0.118,-0.266 0.214,-0.377c0.028,-0.029 0.028,-0.029 0.056,-0.057c0.129,-0.117 0.28,-0.202 0.449,-0.244c0.065,-0.015 0.13,-0.023 0.197,-0.027c0.615,-0.012 1.229,-0.021 1.844,-0.025Z'
          })
        );
      } else {
        icon = window && window.devicePixelRatio > 1.5 ? _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 20 20', style: iconStyle },
          _react2.default.createElement('path', { fill: '#006400', d: 'M5.3,16H13L4,7v7.7C4.6,14.7,5.3,15.4,5.3,16z' }),
          _react2.default.createElement('path', { fill: '#006400', d: 'M14.7,4H7l9,9V5.3C15.4,5.3,14.7,4.6,14.7,4z' })
        ) : _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', width: '10px', height: '10px', viewBox: '0 0 10 10', style: iconStyle },
          _react2.default.createElement('path', { fill: '#006400', d: 'M2,3c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z' }),
          _react2.default.createElement('path', { fill: '#006400', d: 'M8,7c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z' })
        );
      }

      return _react2.default.createElement(
        'a',
        _extends({
          style: componentStyle,
          onClick: onClick
        }, props),
        icon
      );
    }
  }]);

  return Resize;
}(_react.Component), _class2.propTypes = {
  isFullscreen: _propTypes2.default.bool,
  showIcon: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  disableFullscreen: _propTypes2.default.bool
}, _temp2)) || _class) || _class);
exports.default = Resize;