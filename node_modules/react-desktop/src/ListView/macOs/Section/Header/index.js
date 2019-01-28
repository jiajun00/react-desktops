'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('./style/10.11');

var _2 = _interopRequireDefault(_);

var _macOs = require('../../../../Text/macOs');

var _macOs2 = _interopRequireDefault(_macOs);

var _margin = require('../../../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _fontSize = require('../../../../style/fontSize');

var _mapStyles3 = require('../../../../utils/mapStyles');

var _mapStyles4 = _interopRequireDefault(_mapStyles3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_temp = _class = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          bold = _props.bold,
          size = _props.size,
          children = _props.children,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['color', 'bold', 'size', 'children', 'style']);

      props = (0, _padding.removePaddingProps)((0, _margin.removeMarginProps)(props));

      var _mapStyles = (0, _mapStyles4.default)(style, Header.mapStyles),
          _mapStyles2 = _slicedToArray(_mapStyles, 2),
          headerStyle = _mapStyles2[0],
          textStyle = _mapStyles2[1];

      return _react2.default.createElement(
        'header',
        _extends({}, props, { style: headerStyle }),
        (0, _padding2.default)((0, _margin2.default)(_react2.default.createElement(
          'h2',
          { style: _2.default.title },
          _react2.default.createElement(
            _macOs2.default,
            { color: color, size: size, bold: bold, style: textStyle },
            children
          )
        ), this.props), this.props)
      );
    }
  }]);

  return Header;
}(_react.Component), _class.propTypes = _extends({}, _margin.marginPropTypes, _padding.paddingPropTypes, _fontSize.fontSizePropTypes, {
  color: _propTypes2.default.string,
  bold: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string])
}), _class.defaultProps = {
  color: '#5a5b5c',
  bold: true,
  size: '10'
}, _class.mapStyles = {
  text: ['color', 'fontSize', 'fontWeight', 'lineHeight', 'fontFamily']
}, _temp);
exports.default = Header;