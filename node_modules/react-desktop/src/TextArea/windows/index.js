'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _windows = require('../../Text/windows');

var _windows2 = _interopRequireDefault(_windows);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _ValueRef = require('../../ValueRef');

var _ValueRef2 = _interopRequireDefault(_ValueRef);

var _windows3 = require('../../style/background/windows');

var _windows4 = _interopRequireDefault(_windows3);

var _windows5 = require('../../style/theme/windows');

var _windows6 = require('../../style/color/windows');

var _windows7 = require('./styles/windows10');

var _windows8 = _interopRequireDefault(_windows7);

var _placeholderStyle = require('../../placeholderStyle');

var _placeholderStyle2 = _interopRequireDefault(_placeholderStyle);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = (_dec = (0, _ValueRef2.default)(), _dec2 = (0, _hidden2.default)(), _dec3 = (0, _dimension2.default)(), _dec4 = (0, _margin2.default)(), _dec5 = (0, _windows6.ColorContext)(), _dec6 = (0, _windows5.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: 'blur',


    /**
     * Remove the focus programmatically
     * @public
     * */
    value: function blur() {
      var inputEl = _reactDom2.default.findDOMNode(this.refs.element);
      inputEl.blur();
    }

    /**
     * Focus the input programmatically
     * @public
     */

  }, {
    key: 'focus',
    value: function focus() {
      var inputEl = _reactDom2.default.findDOMNode(this.refs.element);
      inputEl.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          labelColor = _props.labelColor,
          labelStyle = _props.labelStyle,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['label', 'labelColor', 'labelStyle', 'style']);

      var componentStyle = _extends({}, _windows8.default.textBox, style);

      if (this.context.theme === 'dark') {
        labelStyle = _extends({}, _windows8.default.labalDarkTheme, labelStyle);
        componentStyle = _extends({}, componentStyle, _windows8.default.textBoxDarkTheme);
      }

      labelColor = labelColor === true ? this.context.color : labelColor ? labelColor : this.context.theme === 'dark' ? '#FFFFFF' : null;
      if (labelColor) labelStyle = _extends({ color: labelColor }, labelStyle);

      componentStyle[':focus'] = _extends({}, componentStyle[':focus'], {
        borderColor: this.context.color
      });

      props = (0, _windows3.removeBackgroundProps)(props);

      var input = _react2.default.createElement(
        _placeholderStyle2.default,
        { placeholderStyle: this.placeholderStyle },
        (0, _windows4.default)(_react2.default.createElement('textarea', _extends({
          ref: 'element',
          style: componentStyle
        }, props)), this.props)
      );

      if (label) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _windows2.default,
            {
              style: _extends({ marginBottom: '5px' }, labelStyle),
              color: this.context.theme === 'dark' ? '#FFFFFF' : null
            },
            label
          ),
          input
        );
      }
      return input;
    }
  }, {
    key: 'placeholderStyle',
    get: function get() {
      return this.context.theme === 'dark' ? _windows8.default[':placeholderDarkTheme'] : _windows8.default[':placeholder'];
    }
  }]);

  return TextArea;
}(_react.Component), _class2.propTypes = _extends({}, _windows5.themePropTypes, _hidden.hiddenPropTypes, _dimension.dimensionPropTypes, _margin.marginPropTypes, _windows3.backgroundPropTypes, {
  label: _propTypes2.default.string,
  labelColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  labelStyle: _propTypes2.default.object
}), _class2.contextTypes = _extends({}, _windows5.themeContextTypes, _windows6.colorContextTypes), _temp)) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = TextArea;