'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _dimension = require('../../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _windowFocus = require('../../../windowFocus');

var _windowFocus2 = _interopRequireDefault(_windowFocus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  nav: {
    display: 'flex',
    alignItems: 'center'
  }
};

var Nav = (_dec = (0, _dimension2.default)({ height: '54px' }), _dec2 = (0, _windowFocus2.default)(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          isWindowFocused = _props.isWindowFocused,
          props = _objectWithoutProperties(_props, ['children', 'style', 'isWindowFocused']);

      var componentStyle = _extends({}, styles.nav);

      var fillOpacity = '.8';
      if (!isWindowFocused) {
        componentStyle.opacity = '.5';
        fillOpacity = '.3';
      }

      return _react2.default.createElement(
        'div',
        _extends({ style: _extends({}, componentStyle, style) }, props),
        _react2.default.createElement(_radium.Style, {
          scopeSelector: '._reactDesktop-Toolbar-Nav-Item-SVG',
          rules: {
            'a svg *': {
              fill: '#363336',
              fillOpacity: fillOpacity
            },
            'a:active svg *': {
              fill: '#1e1c1e',
              fillOpacity: '.9'
            }
          }
        }),
        _react2.default.createElement(_radium.Style, {
          scopeSelector: '._reactDesktop-Toolbar-Nav-Item-SVG._selected',
          rules: {
            'a svg *': {
              fill: '#007bfa',
              fillOpacity: '1'
            },
            'a:active svg *': {
              fill: '#003dd6',
              fillOpacity: '1'
            }
          }
        }),
        children
      );
    }
  }]);

  return Nav;
}(_react.Component), _class2.propTypes = _extends({}, _dimension.dimensionPropTypes), _temp)) || _class) || _class);
exports.default = Nav;