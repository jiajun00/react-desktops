'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hidden = require('../../style/hidden');

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _progressCircleAnimation = require('./progressCircleAnimation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressCircle = (_temp = _class = function (_Component) {
  _inherits(ProgressCircle, _Component);

  function ProgressCircle() {
    _classCallCheck(this, ProgressCircle);

    return _possibleConstructorReturn(this, (ProgressCircle.__proto__ || Object.getPrototypeOf(ProgressCircle)).apply(this, arguments));
  }

  _createClass(ProgressCircle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var elements = [];
      for (var prop in this.refs) {
        if (this.refs.hasOwnProperty(prop) && prop.match(/\d/g)) elements.push(this.refs[prop]);
      }

      this.animation = _progressCircleAnimation.startAnimation.apply(undefined, elements);
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
          color = _props.color,
          style = _props.style,
          absolute = _props.absolute,
          hidden = _props.hidden,
          props = _objectWithoutProperties(_props, ['size', 'color', 'style', 'absolute', 'hidden']);

      var containerStyle = _extends({}, _2.default.container);
      var componentStyle = _extends({}, _2.default.progress, style, {
        visibility: !hidden ? 'visible' : 'hidden',
        display: !hidden ? 'block' : 'none'
      });

      if (absolute) {
        componentStyle = _extends({}, componentStyle, _2.default.absolute);
      }

      var componentColor = color;
      if (!componentColor) {
        componentColor = '#000000';
      }

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
          ref: 'element',
          x: '0px',
          y: '0px',
          viewBox: '0 0 32.3 32.3',
          style: componentStyle
        }, props),
        _react2.default.createElement('path', {
          ref: '0',
          fill: componentColor,
          d: 'M16.1,9.4L16.1,9.4c-0.9,0-1.6-0.7-1.6-1.6V1.6c0-0.9,0.7-1.6,1.6-1.6h0c0.9,0,1.6,0.7,1.6,1.6v6.3 C17.7,8.7,17,9.4,16.1,9.4z'
        }),
        _react2.default.createElement('path', {
          ref: '1',
          fill: componentColor,
          d: 'M19.4,10.3L19.4,10.3c-0.8-0.4-1-1.4-0.6-2.2L22,2.7c0.4-0.8,1.4-1,2.2-0.6l0,0c0.8,0.4,1,1.4,0.6,2.2 l-3.1,5.4C21.2,10.5,20.2,10.7,19.4,10.3z'
        }),
        _react2.default.createElement('path', {
          ref: '2',
          fill: componentColor,
          d: 'M21.9,12.7L21.9,12.7c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C28.7,7,29.6,7.3,30.1,8l0,0c0.4,0.8,0.2,1.7-0.6,2.2 l-5.4,3.1C23.3,13.7,22.3,13.5,21.9,12.7z'
        }),
        _react2.default.createElement('path', {
          ref: '3',
          fill: componentColor,
          d: 'M22.8,16.1L22.8,16.1c0-0.9,0.7-1.6,1.6-1.6h6.3c0.9,0,1.6,0.7,1.6,1.6v0c0,0.9-0.7,1.6-1.6,1.6h-6.3 C23.5,17.7,22.8,17,22.8,16.1z'
        }),
        _react2.default.createElement('path', {
          ref: '4',
          fill: componentColor,
          d: 'M22,19.4L22,19.4c0.4-0.8,1.4-1,2.2-0.6l5.4,3.1c0.8,0.4,1,1.4,0.6,2.2l0,0c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1 C21.8,21.2,21.5,20.2,22,19.4z'
        }),
        _react2.default.createElement('path', {
          ref: '5',
          fill: componentColor,
          d: 'M19.5,21.9L19.5,21.9c0.8-0.4,1.7-0.2,2.2,0.6l3.1,5.4c0.4,0.8,0.2,1.7-0.6,2.2l0,0 c-0.8,0.4-1.7,0.2-2.2-0.6l-3.1-5.4C18.5,23.3,18.8,22.3,19.5,21.9z'
        }),
        _react2.default.createElement('path', {
          ref: '6',
          fill: componentColor,
          d: 'M16.2,22.8L16.2,22.8c0.9,0,1.6,0.7,1.6,1.6v6.3c0,0.9-0.7,1.6-1.6,1.6h0c-0.9,0-1.6-0.7-1.6-1.6v-6.3 C14.6,23.5,15.3,22.8,16.2,22.8z'
        }),
        _react2.default.createElement('path', {
          ref: '7',
          fill: componentColor,
          d: 'M12.8,22L12.8,22c0.8,0.4,1,1.4,0.6,2.2l-3.1,5.4c-0.4,0.8-1.4,1-2.2,0.6l0,0c-0.8-0.4-1-1.4-0.6-2.2 l3.1-5.4C11.1,21.8,12.1,21.5,12.8,22z'
        }),
        _react2.default.createElement('path', {
          ref: '8',
          fill: componentColor,
          d: 'M10.3,19.5L10.3,19.5c0.4,0.8,0.2,1.7-0.6,2.2l-5.4,3.1c-0.8,0.4-1.7,0.2-2.2-0.6l0,0 c-0.4-0.8-0.2-1.7,0.6-2.2l5.4-3.1C8.9,18.5,9.9,18.8,10.3,19.5z'
        }),
        _react2.default.createElement('path', {
          ref: '9',
          fill: componentColor,
          d: 'M9.4,16.2L9.4,16.2c0,0.9-0.7,1.6-1.6,1.6H1.6C0.7,17.8,0,17,0,16.2v0c0-0.9,0.7-1.6,1.6-1.6h6.3 C8.7,14.6,9.4,15.3,9.4,16.2z'
        }),
        _react2.default.createElement('path', {
          ref: '10',
          fill: componentColor,
          d: 'M10.3,12.8L10.3,12.8c-0.4,0.8-1.4,1-2.2,0.6l-5.4-3.1C2,9.8,1.7,8.9,2.1,8.1l0,0c0.4-0.8,1.4-1,2.2-0.6 l5.4,3.1C10.5,11.1,10.7,12.1,10.3,12.8z'
        }),
        _react2.default.createElement('path', {
          ref: '11',
          fill: componentColor,
          d: 'M12.7,10.3L12.7,10.3c-0.8,0.4-1.7,0.2-2.2-0.6L7.4,4.3C7,3.6,7.3,2.6,8,2.2l0,0C8.8,1.7,9.8,2,10.2,2.8 l3.1,5.4C13.7,8.9,13.5,9.9,12.7,10.3z'
        })
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
}(_react.Component), _class.propTypes = _extends({}, _hidden.hiddenPropTypes, {
  absolute: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
}), _temp);
exports.default = ProgressCircle;