'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _windowFocus = require('../../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _windows = require('../../../style/theme/windows');

var _windows2 = require('../../../style/background/windows');

var _color = require('../../../color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  button: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '46px',
    height: '100%',
    lineHeight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    ':hover': {
      transition: 'background-color 0.1s',
      backgroundColor: '#e81123'
    },

    ':active': {
      backgroundColor: '#f1707a'
    }
  },

  icon: {
    width: '10px',
    height: '10px'
  }
};

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
          props = _objectWithoutProperties(_props, ['style', 'isWindowFocused']);

      var svgFill = '#000000';
      if (!isWindowFocused && this.context.theme !== 'dark') {
        svgFill = 'rgba(0, 0, 0, .4)';
      }

      var componentStyle = _extends({}, styles.button, style);
      if (this.context.theme === 'dark' || this.context.background && (0, _color.isDarkColor)(this.context.background)) {
        svgFill = '#ffffff';
        componentStyle = _extends({}, componentStyle, styles.buttonColorBackground);
      }

      if ((0, _radium.getState)(this.state, null, ':active')) {
        svgFill = '#000000';
      } else if ((0, _radium.getState)(this.state, null, ':hover')) {
        svgFill = '#ffffff';
      }

      return _react2.default.createElement(
        'a',
        _extends({
          title: 'Close',
          style: componentStyle
        }, props),
        _react2.default.createElement(
          'svg',
          { x: '0px', y: '0px', viewBox: '0 0 10.2 10.2', style: styles.icon },
          _react2.default.createElement('polygon', {
            fill: svgFill,
            points: '10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 '
          })
        )
      );
    }
  }]);

  return Close;
}(_react.Component), _class2.contextTypes = _extends({}, _windows.themeContextTypes, _windows2.backgroundContextTypes), _temp)) || _class) || _class);
exports.default = Close;