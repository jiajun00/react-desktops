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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _macOs = require('../../TextInput/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pin = (_dec = (0, _hidden2.default)(), _dec2 = (0, _margin2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  _inherits(Pin, _Component);

  function Pin(props) {
    var _ref;

    _classCallCheck(this, Pin);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Pin.__proto__ || Object.getPrototypeOf(Pin)).call.apply(_ref, [this, props].concat(args)));

    _this.handleBlur = function (e, index) {
      if (e && index === _this.state.current) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (_this.state.current !== null) {
        _this.selectInput(_this.state.current);
      }
    };

    _this.selectInput = function (index) {
      if (_this.refs[index]) {
        var el = _reactDom2.default.findDOMNode(_this.refs[index]).getElementsByTagName('INPUT')[0];
        el.focus();
      }
    };

    _this.setValue = function (index, value) {
      if (_this.refs[index]) {
        var el = _reactDom2.default.findDOMNode(_this.refs[index]).getElementsByTagName('INPUT')[0];
        el.value = value;
        var pin = [].concat(_toConsumableArray(_this.state.pin.slice(0, index)), [value], _toConsumableArray(_this.state.pin.slice(index + 1)));
        _this.setState({ pin: pin });
        if (_this.props.onChange) _this.props.onChange(pin.join(''));
      }
    };

    _this.handleChange = function (e, index) {
      if (e.target.value) {
        var nextIndex = index === _this.props.length - 1 ? index : index + 1;
        var pin = [].concat(_toConsumableArray(_this.state.pin.slice(0, index)), [e.target.value], _toConsumableArray(_this.state.pin.slice(index + 1)));
        _this.setState({ current: nextIndex, pin: pin });
        setTimeout(function () {
          return _this.selectInput(nextIndex);
        });
        if (_this.props.onChange) _this.props.onChange(pin.join(''));
      }
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === 8) {
        if (e.target.value) {
          _this.setValue(_this.state.current, '');
        } else {
          var nextIndex = _this.state.current - 1;
          _this.setState({ current: nextIndex });
          setTimeout(function () {
            _this.selectInput(nextIndex);
            _this.setValue(nextIndex, '');
          });
        }
      }
    };

    _this.handleKeyPress = function (e) {
      if (e.charCode >= 48 && e.charCode <= 57) {
        return true;
      }
      e.preventDefault();
      e.stopPropagation();
    };

    var lenght = parseInt(props.length);
    _this.state = {
      current: 0,
      pin: new Array(lenght)
    };
    return _this;
  }

  _createClass(Pin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleBlur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          length = _props.length,
          reveal = _props.reveal,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['length', 'reveal', 'style']);

      delete props.onChange;

      var children = [];

      var _loop = function _loop(i, len) {
        children.push(_react2.default.createElement(_macOs2.default, _extends({
          ref: i,
          key: i,
          rounded: true,
          type: reveal ? 'tel' : 'password',
          width: '36px',
          maxLength: '1',
          marginRight: '8px',
          onChange: function onChange(e) {
            return _this2.handleChange(e, i);
          },
          onBlur: function onBlur(e) {
            return _this2.handleBlur(e, i);
          },
          onKeyDown: _this2.handleKeyDown,
          onKeyPress: _this2.handleKeyPress,
          style: {
            fontSize: '32px',
            lineHeight: '32px',
            textAlign: 'center',
            paddingTop: '3px',
            paddingBottom: '4px',
            color: '#464646'
          }
        }, (0, _margin.removeMarginProps)(props))));
      };

      for (var i = 0, len = parseInt(length); i < len; ++i) {
        _loop(i, len);
      }

      return _react2.default.createElement(
        'div',
        { style: _extends({ display: 'flex' }, style) },
        children
      );
    }
  }]);

  return Pin;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _margin.marginPropTypes, {
  reveal: _propTypes2.default.bool,
  length: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  onChange: _propTypes2.default.func
}), _temp)) || _class) || _class);
exports.default = Pin;