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

var _color = require('../../../color');

var _windows = require('../../../style/color/windows');

var _windows2 = require('../../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  details: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    flex: '1'
  }
};

var Details = (_dec = (0, _windows.ColorContext)(), _dec2 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  _createClass(Details, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        background: typeof this.props.background === 'string' ? this.props.background : this.context.color
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          background = _props.background,
          props = _objectWithoutProperties(_props, ['children', 'style', 'background']);

      delete props.index;
      var componentStyle = _extends({}, styles.details, style);

      if (background === true) {
        componentStyle.backgroundColor = (0, _color.convertColor)(this.context.color);
      } else if (typeof background === 'string') {
        componentStyle.backgroundColor = (0, _color.convertColor)(background);
      }

      return _react2.default.createElement(
        'div',
        _extends({
          style: componentStyle
        }, props),
        children
      );
    }
  }]);

  return Details;
}(_react.Component), _class2.propTypes = _extends({}, _windows.colorPropTypes, _windows2.themePropTypes, {
  background: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
}), _class2.childContextTypes = {
  background: _propTypes2.default.string
}, _class2.contextTypes = _extends({}, _windows.colorContextTypes), _temp)) || _class) || _class);
exports.default = Details;