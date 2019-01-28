'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _macOs = require('../../TextInput/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _icons = require('./icons');

var icon = _interopRequireWildcard(_icons);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _cancelAnimation = require('./cancelAnimation');

var _cancelAnimation2 = _interopRequireDefault(_cancelAnimation);

var _ValueRef = require('../../ValueRef');

var _ValueRef2 = _interopRequireDefault(_ValueRef);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInput = (_dec = (0, _ValueRef2.default)(), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(SearchInput, _Component);

  function SearchInput() {
    _classCallCheck(this, SearchInput);

    var _this = _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call(this));

    _this.handleCancelMouseDown = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    _this.handleCancelClick = function () {
      var element = _reactDom2.default.findDOMNode(_this.refs.input).getElementsByTagName('INPUT')[0];
      element.setSelectionRange(0, element.value.length);
      setTimeout(function () {
        element.value = '';
        var event = document.createEvent('HTMLEvents');
        event.initEvent('change', false, true);
        element.dispatchEvent(event);
        event = new Event('input', { bubbles: true });
        element.dispatchEvent(event);
        element.blur();
        if (_this.props.onCancel) {
          _this.props.onCancel();
        }
      }, 200);
    };

    _this.handleChange = function (e) {
      if (_this.props.cancel) {
        if (e.target.value && !_this.state.showCancel) {
          _this.setState({ showCancel: true });
        } else if (!e.target.value && _this.state.showCancel) {
          _this.setState({ showCancel: false });
        }
      }

      if (typeof _this.props.onChange === 'function') _this.props.onChange(e);
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === 27) {
        var element = _reactDom2.default.findDOMNode(_this.refs.input).getElementsByTagName('INPUT')[0];
        element.value = '';
        var event = document.createEvent('HTMLEvents');
        event.initEvent('change', false, true);
        element.dispatchEvent(event);
        event = new Event('input', { bubbles: true });
        element.dispatchEvent(event);
        setTimeout(function () {
          return element.blur();
        }, 10);
      }
      if (typeof _this.props.onKeyDown === 'function') _this.props.onKeyDown(e);
    };

    _this.state = {
      showCancel: false
    };
    return _this;
  }

  _createClass(SearchInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.showCancel && this.state.showCancel) {
        (0, _cancelAnimation2.default)(_reactDom2.default.findDOMNode(this.refs.cancel));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          cancel = _props.cancel,
          props = _objectWithoutProperties(_props, ['cancel']);

      delete props.onCancel;

      return _react2.default.createElement(
        'div',
        { style: _2.default.container },
        _react2.default.createElement(_macOs2.default, _extends({
          ref: 'input',
          icon: this.searchIcon,
          rounded: true,
          centerPlaceholder: true,
          style: {
            paddingRight: '19px'
          }
        }, props, {
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange
        })),
        cancel && this.state.showCancel ? _react2.default.createElement(
          'a',
          {
            ref: 'cancel',
            onMouseDown: this.handleCancelMouseDown,
            onClick: this.handleCancelClick,
            style: _2.default.cancel
          },
          this.cancelIcon
        ) : null
      );
    }
  }, {
    key: 'searchIcon',
    get: function get() {
      return window && window.devicePixelRatio > 1.5 ? icon.searchIcon2x : icon.searchIcon1x;
    }
  }, {
    key: 'cancelIcon',
    get: function get() {
      return window && window.devicePixelRatio > 1.5 ? icon.cancelIcon2x : icon.cancelIcon1x;
    }
  }]);

  return SearchInput;
}(_react.Component), _class2.propTypes = {
  onCancel: _propTypes2.default.func,
  cancel: _propTypes2.default.bool
}, _class2.defaultProps = {
  cancel: true
}, _temp)) || _class);
exports.default = SearchInput;