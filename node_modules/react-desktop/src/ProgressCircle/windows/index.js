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

var _hidden = require('../../style/hidden');

var _windows = require('../../style/color/windows');

var _progressCircleAnimation = require('./progressCircleAnimation');

var _windows2 = require('./styles/windows10');

var _windows3 = _interopRequireDefault(_windows2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressCircle = (_dec = (0, _windows.ColorContext)(), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(ProgressCircle, _Component);

  function ProgressCircle() {
    _classCallCheck(this, ProgressCircle);

    return _possibleConstructorReturn(this, (ProgressCircle.__proto__ || Object.getPrototypeOf(ProgressCircle)).apply(this, arguments));
  }

  _createClass(ProgressCircle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.animation = (0, _progressCircleAnimation.startAnimation)(this.refs[0], this.refs[1], this.refs[2], this.refs[3], this.refs[4], this.refs[5]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _progressCircleAnimation.stopAnimation)(this.animation);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          size = _props.size,
          style = _props.style,
          absolute = _props.absolute,
          hidden = _props.hidden,
          props = _objectWithoutProperties(_props, ['size', 'style', 'absolute', 'hidden']);

      var containerStyle = _extends({}, _windows3.default.container);
      var componentStyle = _extends({}, _windows3.default.progress, style, {
        visibility: !hidden ? 'visible' : 'hidden',
        display: !hidden ? 'block' : 'none'
      });

      if (absolute) {
        componentStyle = _extends({}, componentStyle, _windows3.default.absolute);
      }

      var componentColor = this.context.color;
      if (size) {
        componentStyle = _extends({}, componentStyle, {
          width: size + 'px',
          height: size + 'px'
        });
        containerStyle = _extends({}, containerStyle, {
          height: size + 'px'
        });
      }

      var svg = _react2.default.createElement(
        'svg',
        _extends({
          id: 'field',
          ref: 'element',
          x: '0px',
          y: '0px',
          viewBox: '0 0 150 150',
          style: componentStyle
        }, props),
        _react2.default.createElement('circle', { ref: '0', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2.default.createElement('circle', { ref: '1', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2.default.createElement('circle', { ref: '2', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2.default.createElement('circle', { ref: '3', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2.default.createElement('circle', { ref: '4', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' }),
        _react2.default.createElement('circle', { ref: '5', fill: componentColor, fillOpacity: '0', cx: '75', cy: '75', r: '7.3' })
      );

      var content = svg;
      if (absolute) {
        content = _react2.default.createElement(
          'div',
          { style: containerStyle },
          svg
        );
      }

      return content;
    }
  }]);

  return ProgressCircle;
}(_react.Component), _class2.propTypes = _extends({}, _hidden.hiddenPropTypes, _windows.colorPropTypes, {
  absolute: _propTypes2.default.bool,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
}), _class2.contextTypes = _extends({}, _windows.colorContextTypes), _temp)) || _class);
exports.default = ProgressCircle;