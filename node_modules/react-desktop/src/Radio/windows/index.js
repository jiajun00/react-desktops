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

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _windows = require('./styles/windows');

var _windows2 = _interopRequireDefault(_windows);

var _windows3 = require('../../Text/windows');

var _windows4 = _interopRequireDefault(_windows3);

var _windows5 = require('../../style/theme/windows');

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _windows6 = require('../../style/color/windows');

var _ValueRef = require('../../ValueRef');

var _ValueRef2 = _interopRequireDefault(_ValueRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = (_dec = (0, _ValueRef2.default)(), _dec2 = (0, _hidden2.default)(), _dec3 = (0, _windows6.ColorContext)(), _dec4 = (0, _windows5.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));

    _this.onSiblingChange = function () {
      if (_this.refs.element.checked !== _this.state.checked) {
        _this.setState({ checked: _this.refs.element.checked });
      }
    };

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

  _createClass(Radio, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('change', this.onSiblingChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('change', this.onSiblingChange);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          color = _props.color,
          props = _objectWithoutProperties(_props, ['style', 'label', 'color']);

      var componentStyle = _extends({}, _windows2.default.radio, this.context.theme === 'dark' ? _windows2.default['radioDark'] : {});
      var labelStyle = _windows2.default.label;
      var circleStyle = _extends({}, _windows2.default.circle, this.context.theme === 'dark' ? _windows2.default['circleDark'] : {});

      if (this.state.checked) {
        componentStyle = _extends({}, componentStyle, {
          borderColor: color || this.context.color
        });
      }

      if ((0, _radium.getState)(this.state, null, ':active')) {
        if (this.state.checked) {
          componentStyle = _extends({}, componentStyle, _windows2.default['radio:checked:active'], this.context.theme === 'dark' ? _windows2.default['radioDark:checked:active'] : {});
          circleStyle = _extends({}, circleStyle, _windows2.default['circle:active'], this.context.theme === 'dark' ? _windows2.default['circleDark:active'] : {});
        } else {
          componentStyle = _extends({}, componentStyle, _windows2.default['radio:active'], this.context.theme === 'dark' ? _windows2.default['radioDark:active'] : {});
        }
      } else if ((0, _radium.getState)(this.state, null, ':hover')) {
        if (this.state.checked) {
          circleStyle = _extends({}, circleStyle, _windows2.default['circle:hover'], this.context.theme === 'dark' ? _windows2.default['circleDark:hover'] : {});
        } else {
          componentStyle = _extends({}, componentStyle, _windows2.default['radio:hover'], this.context.theme === 'dark' ? _windows2.default['radioDark:hover'] : {});
        }
      }

      componentStyle = _extends({}, componentStyle, style);

      return _react2.default.createElement(
        'div',
        { style: _windows2.default.container },
        _react2.default.createElement(
          'label',
          { style: labelStyle },
          _react2.default.createElement(
            'div',
            { style: _windows2.default.inputWrapper },
            _react2.default.createElement('input', _extends({
              ref: 'element',
              type: 'radio'
            }, props, {
              style: componentStyle,
              onChange: this.handleChange
            })),
            this.state.checked ? _react2.default.createElement('div', { style: circleStyle }) : null
          ),
          _react2.default.createElement(
            _windows4.default,
            {
              style: _extends({}, _windows2.default.text, this.context.theme === 'dark' ? _windows2.default.textDark : {})
            },
            label
          )
        )
      );
    }
  }]);

  return Radio;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _windows6.colorPropTypes, _windows5.themePropTypes, {
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func
}), _class2.contextTypes = _extends({}, _windows5.themeContextTypes, _windows6.colorContextTypes), _temp)) || _class) || _class) || _class) || _class) || _class);
exports.default = Radio;