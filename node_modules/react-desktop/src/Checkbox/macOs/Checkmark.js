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

var Checkmark = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  _inherits(Checkmark, _Component);

  function Checkmark() {
    _classCallCheck(this, Checkmark);

    return _possibleConstructorReturn(this, (Checkmark.__proto__ || Object.getPrototypeOf(Checkmark)).apply(this, arguments));
  }

  _createClass(Checkmark, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          shadowColor = _props.shadowColor;

      var style = _extends({}, _2.default.checkmark);
      style.opacity = '0';
      style.transform = 'scale(0)';
      style.transition = 'all 0.5s';

      if (this.props.show) {
        style.opacity = '1';
        style.transform = 'scale(1)';
      }

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 285 283.4', style: _2.default.svg },
          _react2.default.createElement('path', {
            fill: color,
            d: 'M101.2,215.7L227.5,20.6c0,0,20.7-31.9,44.4-16.2c25.4,16.8,6.1,41,6.1,41L134.5,271.9c0,0-8.8,11.5-23.9,11.5 s-29.2-13.3-29.2-13.3L2.7,175.4c0,0-9.4-17.3,6.8-27.4c19.7-12.3,34.6,2.8,34.6,2.8L101.2,215.7z'
          })
        ),
        _react2.default.createElement(
          'svg',
          { viewBox: '0 0 285 283.4', style: _2.default.svgShadow },
          _react2.default.createElement('path', {
            fill: shadowColor,
            d: 'M101.2,215.7L227.5,20.6c0,0,20.7-31.9,44.4-16.2c25.4,16.8,6.1,41,6.1,41L134.5,271.9c0,0-8.8,11.5-23.9,11.5 s-29.2-13.3-29.2-13.3L2.7,175.4c0,0-9.4-17.3,6.8-27.4c19.7-12.3,34.6,2.8,34.6,2.8L101.2,215.7z'
          })
        )
      );
    }
  }]);

  return Checkmark;
}(_react.Component), _class2.propTypes = {
  show: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  shadowColor: _propTypes2.default.string
}, _class2.defaultProps = {
  color: '#FFFFFF'
}, _temp)) || _class;

exports.default = Checkmark;