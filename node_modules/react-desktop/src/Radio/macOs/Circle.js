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

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          shadowColor = _props.shadowColor;

      var style = _extends({}, _2.default.checkmark);
      style.opacity = '0';
      style.transform = 'scale(2)';
      style.transition = 'opacity 0s, transform 0.2s';

      if (this.props.show) {
        style.opacity = '1';
        style.transform = 'scale(1)';
      }

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 285 285', style: _2.default.svg },
          _react2.default.createElement('circle', { fill: color, cx: '142.5', cy: '142.5', r: '142.5' })
        ),
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 285 285', style: _2.default.svgShadow },
          _react2.default.createElement('circle', { fill: shadowColor, cx: '142.5', cy: '142.5', r: '142.5' })
        )
      );
    }
  }]);

  return Circle;
}(_react.Component), _class2.propTypes = {
  show: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  shadowColor: _propTypes2.default.string
}, _class2.defaultProps = {
  color: '#FFFFFF'
}, _temp)) || _class;

exports.default = Circle;