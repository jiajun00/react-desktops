'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

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

var _windows3 = require('./styles/windows10');

var _windows4 = _interopRequireDefault(_windows3);

var _ValueRef = require('../../ValueRef');

var _ValueRef2 = _interopRequireDefault(_ValueRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (_dec = (0, _ValueRef2.default)(), _dec2 = (0, _hidden2.default)(), _dec3 = (0, _windows.ColorContext)(), _dec4 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

    _this.handleChange = function (event) {
      _this.setState({ checked: event.target.checked });
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.state = {
      checked: !!props.defaultChecked === true
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          color = _props.color,
          props = _objectWithoutProperties(_props, ['style', 'label', 'color']);

      var componentStyle = _extends({}, _windows4.default.checkbox);
      var checkedStyle = { display: 'none' };
      var textStyle = _extends({}, _windows4.default.text);

      if (this.context.theme === 'dark') {
        componentStyle = _extends({}, componentStyle, _windows4.default.checkboxDark);
        textStyle = _extends({}, textStyle, _windows4.default.textDark);
      }

      if (this.state.checked) {
        checkedStyle = _windows4.default.svg;
        componentStyle = _extends({}, componentStyle, this.context.theme === 'dark' ? _windows4.default['checkboxDark:checked'] : _windows4.default['checkbox:checked']);

        color = color ? color : this.context.color;
        componentStyle = _extends({}, componentStyle, {
          backgroundColor: color,
          borderColor: color
        });
      }

      if ((0, _radium.getState)(this.state, null, ':active')) {
        componentStyle = _extends({}, componentStyle, this.context.theme === 'dark' ? _windows4.default['checkboxDark:active'] : _windows4.default['checkbox:active']);
      } else if ((0, _radium.getState)(this.state, null, ':hover')) {
        componentStyle = _extends({}, componentStyle, this.context.theme === 'dark' ? _windows4.default['checkboxDark:hover'] : _windows4.default['checkbox:hover']);
      }

      return _react2.default.createElement(
        'div',
        { style: _extends({}, _windows4.default.container, style) },
        _react2.default.createElement(
          'label',
          { style: _windows4.default.label },
          _react2.default.createElement(
            'div',
            { style: _windows4.default.inputWrapper },
            _react2.default.createElement('input', _extends({
              ref: 'element',
              type: 'checkbox'
            }, props, {
              style: componentStyle,
              onChange: this.handleChange
            })),
            _react2.default.createElement(
              'svg',
              { x: '0px', y: '0px', viewBox: '0 0 6.4 6.4', style: checkedStyle },
              _react2.default.createElement('polygon', { fill: '#fff', points: '0,3.3 2.2,5.5 6.4,1.23 6.1,0.9 2.2,4.8 0.3,2.9 ' })
            )
          ),
          _react2.default.createElement(
            'span',
            { style: textStyle },
            label
          )
        )
      );
    }
  }]);

  return Checkbox;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _windows.colorPropTypes, _windows2.themePropTypes, {
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func
}), _class2.contextTypes = _extends({}, _windows.colorContextTypes, _windows2.themeContextTypes), _temp)) || _class) || _class) || _class) || _class) || _class);
exports.default = Checkbox;