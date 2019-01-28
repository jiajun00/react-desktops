'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _windows = require('../../style/windows10');

var _windows2 = _interopRequireDefault(_windows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appear = (0, _radium.keyframes)({
  '0%': {
    opacity: 0
  },
  '29%': {
    opacity: 0,
    transform: 'translateY(9px)'
  },
  '30%': {
    opacity: .35,
    transform: 'translateY(9px)'
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)'
  }
}, 'Title');

var fadeOut = (0, _radium.keyframes)({
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
}, 'span');

_windows2.default.titleAnimation = {
  animation: 'x 300ms forwards',
  animationName: appear
};

_windows2.default.fadeSpanStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  animation: 'x 100ms forwards',
  animationName: fadeOut
};

var Title = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          prevTitle = _props.prevTitle;


      var componentStyle = _extends({}, _windows2.default.title);
      var fadeSpanStyle = _extends({}, _windows2.default.title);
      var titleStyle = {};

      if (this.props.theme === 'dark') {
        componentStyle = _extends({}, componentStyle, _windows2.default.titleDark);
        fadeSpanStyle = _extends({}, fadeSpanStyle, _windows2.default.titleDark);
      }

      if (prevTitle && prevTitle !== title) {
        fadeSpanStyle = _extends({}, fadeSpanStyle, _windows2.default.fadeSpanStyle);
        titleStyle = _extends({}, titleStyle, { opacity: 0 }, _windows2.default.titleAnimation);
      }

      var fadeSpan = void 0;
      if (prevTitle) {
        fadeSpan = _react2.default.createElement(
          'span',
          { style: fadeSpanStyle },
          prevTitle
        );
      }

      return _react2.default.createElement(
        'div',
        {
          style: componentStyle
        },
        fadeSpan,
        _react2.default.createElement(
          'span',
          { style: titleStyle },
          title
        )
      );
    }
  }]);

  return Title;
}(_react.Component), _class2.propTypes = {
  theme: _propTypes2.default.string,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array])
}, _temp)) || _class;

exports.default = Title;