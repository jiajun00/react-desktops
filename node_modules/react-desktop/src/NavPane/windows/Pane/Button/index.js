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

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _color = require('../../../../color');

var _windows = require('../../../../style/color/windows');

var _windows2 = require('../../../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  svg: {
    ':hover': {},
    ':active': {}
  }
};

var Button = (_dec = (0, _windows.ColorContext)(), _dec2 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var fill = this.context.theme === 'dark' ? '#ffffff' : '#000000';

      if ((0, _radium.getState)(this.state, null, ':active')) {
        fill = (0, _color.transparentize)(this.context.color, .1);
      } else if ((0, _radium.getState)(this.state, null, ':hover')) {
        fill = (0, _color.transparentize)(this.context.color, .2);
      }

      return _react2.default.createElement(
        'svg',
        {
          x: '0px', y: '0px', viewBox: '0 0 20 12.5',
          onClick: this.props.onClick,
          style: _extends({}, styles.svg, this.props.style)
        },
        _react2.default.createElement('path', {
          fill: fill,
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M0,12.5h20V11H0V12.5z M0,7h20V5.5H0V7z M0,0v1.5h20V0H0z'
        })
      );
    }
  }]);

  return Button;
}(_react.Component), _class2.propTypes = {
  onClick: _propTypes2.default.func
}, _class2.contextTypes = _extends({}, _windows.colorContextTypes, _windows2.themeContextTypes), _temp)) || _class) || _class) || _class);
exports.default = Button;