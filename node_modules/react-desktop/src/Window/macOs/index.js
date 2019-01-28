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

var _macOs = require('../../TitleBar/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _macOs3 = require('../../View/macOs');

var _macOs4 = _interopRequireDefault(_macOs3);

var _ = require('./styles/10.11');

var _2 = _interopRequireDefault(_);

var _windowFocus = require('../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _macOs5 = require('../../style/background/macOs');

var _macOs6 = _interopRequireDefault(_macOs5);

var _alignment = require('../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Window = (_dec = (0, _windowFocus2.default)(), _dec2 = (0, _alignment2.default)(), _dec3 = (0, _hidden2.default)(), _dec4 = (0, _dimension2.default)({ width: '100vw', height: '100vh' }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = _class2 = function (_Component) {
  _inherits(Window, _Component);

  function Window() {
    _classCallCheck(this, Window);

    return _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).apply(this, arguments));
  }

  _createClass(Window, [{
    key: 'filterChildren',
    value: function filterChildren() {
      var titleBar = '';
      var otherChildren = [];
      _react.Children.map(this.props.children, function (element) {
        if (element.type === _macOs2.default) {
          titleBar = element;
        } else {
          otherChildren = [].concat(_toConsumableArray(otherChildren), [element]);
        }
      });

      return [titleBar].concat(_toConsumableArray(otherChildren));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          chrome = _props.chrome,
          isWindowFocused = _props.isWindowFocused,
          props = _objectWithoutProperties(_props, ['style', 'chrome', 'isWindowFocused']);

      var componentStyle = _extends({}, _2.default.window, style);
      if (chrome) {
        componentStyle = _extends({}, componentStyle, _2.default.chrome);

        if (!isWindowFocused) {
          componentStyle = _extends({}, componentStyle, _2.default.unfocused);
        }
      }

      var _filterChildren = this.filterChildren(),
          _filterChildren2 = _toArray(_filterChildren),
          titleBar = _filterChildren2[0],
          children = _filterChildren2.slice(1);

      var contentStyle = _2.default.content;
      if (chrome) {
        contentStyle = _extends({}, contentStyle, {
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px'
        });
      }

      var content = (0, _macOs6.default)((0, _padding2.default)(_react2.default.createElement(
        _macOs4.default,
        { style: contentStyle },
        children
      ), props), props);
      props = (0, _padding.removePaddingProps)(props);
      props = (0, _macOs5.removeBackgroundProps)(props);

      return _react2.default.createElement(
        'div',
        _extends({ style: componentStyle }, props),
        titleBar,
        content
      );
    }
  }]);

  return Window;
}(_react.Component), _class2.propTypes = _extends({}, _padding.paddingPropTypes, _macOs5.backgroundPropTypes, _alignment.alignmentPropTypes, _hidden.hiddenPropTypes, _dimension.dimensionPropTypes, {
  chrome: _propTypes2.default.bool
}), _temp)) || _class) || _class) || _class) || _class);
exports.default = Window;