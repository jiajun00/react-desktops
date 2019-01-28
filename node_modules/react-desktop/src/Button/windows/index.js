'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _windows = require('../../style/color/windows');

var _windows2 = require('../../style/theme/windows');

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _color = require('../../color');

var _windows3 = require('./styles/windows10');

var _windows4 = _interopRequireDefault(_windows3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_dec = (0, _hidden2.default)(), _dec2 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          type = _props.type,
          children = _props.children,
          color = _props.color,
          push = _props.push,
          onClick = _props.onClick,
          props = _objectWithoutProperties(_props, ['style', 'type', 'children', 'color', 'push', 'onClick']);

      var componentStyle = _extends({}, _windows4.default.button, style);

      if (color) {
        color = color === true ? this.context.color : color;
        _windows4.default.colorButton = _extends({}, _windows4.default.colorButton, {
          borderColor: color,
          backgroundColor: color,
          ':hover': _extends({}, _windows4.default.colorButton[':hover'], {
            borderColor: (0, _color.darkenColor)(color, .35)
          }),

          ':active': _extends({}, _windows4.default.colorButton[':active'], {
            borderColor: (0, _color.darkenColor)(color, .35),
            backgroundColor: (0, _color.darkenColor)(color, .35)
          })
        });
        componentStyle = _extends({}, componentStyle, _windows4.default.colorButton);
      }

      if (push) {
        componentStyle[':active'] = _extends({}, componentStyle[':active'], _windows4.default.pushTransform);
      }

      return _react2.default.createElement(
        'button',
        _extends({
          ref: 'element',
          type: type || 'button',
          onClick: onClick,
          style: componentStyle
        }, props),
        children
      );
    }
  }]);

  return Button;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _windows.colorPropTypes, _windows2.themePropTypes, {
  type: _propTypes2.default.string,
  push: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
}), _class2.contextTypes = _extends({}, _windows.colorContextTypes), _temp)) || _class) || _class) || _class);
exports.default = Button;