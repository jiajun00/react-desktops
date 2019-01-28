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

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _alignment = require('../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _macOs = require('../../Text/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = (_dec = (0, _margin2.default)({
  marginTop: '17px',
  marginBottom: '19px',
  marginLeft: '20px',
  marginRight: '20px'
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'isLast',
    value: function isLast() {
      var isLast = false;

      for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
        next[_key] = arguments[_key];
      }

      for (var i = 0, len = next.length; i < len; ++i) {
        if (next[i]) isLast = false;
      }
      return isLast;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          style = _props.style,
          title = _props.title,
          message = _props.message,
          children = _props.children,
          buttons = _props.buttons,
          props = _objectWithoutProperties(_props, ['icon', 'style', 'title', 'message', 'children', 'buttons']);

      props = (0, _alignment.removeAlignmentProps)(props);

      return _react2.default.createElement(
        'div',
        _extends({ style: _extends({}, _2.default.container, style) }, props),
        this.renderIcon(icon),
        _react2.default.createElement(
          'div',
          { style: _2.default.contentContainer },
          this.renderTitle(title, this.isLast(message, children, buttons)),
          this.renderMessage(message, this.isLast(children, buttons)),
          this.renderChildren(children, this.isLast(buttons)),
          this.renderButtons(buttons)
        )
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon) {
      if (icon) {
        return _react2.default.createElement(
          'div',
          { style: _2.default.icon, onMouseDown: function onMouseDown(e) {
              return e.preventDefault();
            } },
          icon
        );
      }
      return null;
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(title, isLast) {
      var style = _2.default.title;
      if (isLast) delete style.marginBottom;
      if (title) return _react2.default.createElement(
        _macOs2.default,
        { bold: true, style: style },
        title
      );
      return null;
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage(message, isLast) {
      var style = _2.default.message;
      if (isLast) delete style.marginBottom;
      if (message) return _react2.default.createElement(
        _macOs2.default,
        { style: style },
        message
      );
      return null;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(children, isLast) {
      var style = _2.default.content;
      if (isLast) delete style.marginBottom;
      if (children) return (0, _alignment2.default)(_react2.default.createElement(
        'div',
        { style: style },
        children
      ), _extends({}, this.props, {
        layout: 'vertical'
      }));
      return null;
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons(buttons) {
      if (buttons) {
        return _react2.default.createElement(
          'div',
          { style: _2.default.buttons },
          buttons.map(function (button, index) {
            return _react2.default.createElement(
              'div',
              { style: _2.default.buttonContainer, key: index },
              button
            );
          })
        );
      }
      return null;
    }
  }]);

  return Dialog;
}(_react.Component), _class2.propTypes = _extends({}, _margin.marginPropTypes, _alignment.alignmentPropTypes, {
  icon: _propTypes2.default.element,
  title: _propTypes2.default.string,
  message: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.array]),
  buttons: _propTypes2.default.array
}), _temp)) || _class);
exports.default = Dialog;