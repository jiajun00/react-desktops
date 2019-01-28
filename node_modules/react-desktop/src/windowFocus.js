'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  if (options.length === 1 && typeof options[0] === 'function') return WindowFocus.apply(null, [[], options[0]]);
  return WindowFocus.bind(null, options);
};

var _monitor = require('./monitor');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WindowFocus(options, ComposedComponent) {
  return function (_Component) {
    _inherits(_class2, _Component);

    function _class2() {
      _classCallCheck(this, _class2);

      var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this));

      _this.windowFocus = function () {
        _this.setState({ isWindowFocused: true });
      };

      _this.windowBlur = function () {
        _this.setState({ isWindowFocused: false });
      };

      _this.state = {
        isWindowFocused: (0, _monitor.windowIsFocused)()
      };
      return _this;
    }

    _createClass(_class2, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window !== 'undefined') {
          window.addEventListener('focus', this.windowFocus);
          window.addEventListener('blur', this.windowBlur);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window !== 'undefined') {
          window.removeEventListener('focus', this.windowFocus);
          window.removeEventListener('blur', this.windowBlur);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, _extends({ isWindowFocused: this.state.isWindowFocused }, this.props));
      }
    }]);

    return _class2;
  }(_react.Component);
}