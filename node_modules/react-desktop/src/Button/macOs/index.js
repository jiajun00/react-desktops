'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _fontSize = require('../../style/fontSize');

var _fontSize2 = _interopRequireDefault(_fontSize);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_dec = (0, _windowFocus2.default)(), _dec2 = (0, _padding2.default)(), _dec3 = (0, _margin2.default)(), _dec4 = (0, _hidden2.default)(), _dec5 = (0, _fontSize2.default)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyUp = function (e) {
      if (e.keyCode === 13) {
        if (_this.props.onEnter && !_this.props.disabled) _this.props.onEnter(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window && this.props.onEnter) {
        window.addEventListener('keyup', this.handleKeyUp);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (window && this.props.onEnter) {
        window.removeEventListener('keyup', this.handleKeyUp);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          type = _props.type,
          children = _props.children,
          color = _props.color,
          onClick = _props.onClick,
          isWindowFocused = _props.isWindowFocused,
          disabled = _props.disabled,
          props = _objectWithoutProperties(_props, ['style', 'type', 'children', 'color', 'onClick', 'isWindowFocused', 'disabled']);

      delete props.onEnter;

      var componentStyle = _extends({}, _2.default.button);
      if (!disabled && color === 'blue' && isWindowFocused) {
        componentStyle = _extends({}, componentStyle, _2.default.blue);
      } else if (disabled) {
        componentStyle = _extends({}, componentStyle, { opacity: '.5' });
      }

      componentStyle = _extends({}, componentStyle, style);

      return _react2.default.createElement(
        'button',
        _extends({
          ref: 'element',
          type: type || 'button',
          onClick: onClick,
          style: (0, _padding.removeDuplicatePaddingProps)(componentStyle, this.props),
          disabled: disabled
        }, props),
        children
      );
    }
  }]);

  return Button;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _fontSize.fontSizePropTypes, _padding.paddingPropTypes, _margin.marginPropTypes, {
  type: _propTypes2.default.string,
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  onClick: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
}), _temp2)) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = Button;