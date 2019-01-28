'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../../../styleHelper');

var _color = require('../../../color');

var _windows = require('../../../style/color/windows');

var _windows2 = require('../../../style/theme/windows');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  master: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    width: '320px',
    boxSizing: 'border-box',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, .1)'
    },
    ':active': {
      backgroundColor: 'rgba(0, 0, 0, .2)'
    }
  },

  masterDark: {
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, .1)'
    },
    ':active': {
      backgroundColor: 'rgba(255, 255, 255, .2)'
    }
  },

  masterSpan: {
    padding: '0 12px',
    lineHeight: '50px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '18px',
    color: '#000000',
    width: '320px',
    boxSizing: 'border-box',

    transition: 'transform .1s ease-in',
    ':hover': {
      transition: 'transform .1s ease-in'
    }
  },

  masterSpanDark: {
    color: 'white'
  },

  masterSpanWithPush: {
    ':active': {
      transform: 'scale(0.97)',
      transition: 'transform 0s ease-in'
    }
  }
};

var Master = (_dec = (0, _windows.ColorContext)(), _dec2 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Master, _Component);

  function Master() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Master);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Master.__proto__ || Object.getPrototypeOf(Master)).call.apply(_ref, [this].concat(args))), _this), _this.select = function () {
      _this.context.masterDetails.select(_this.props.index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Master, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          selected = _props.selected,
          push = _props.push,
          props = _objectWithoutProperties(_props, ['children', 'style', 'selected', 'push']);

      delete props.index;
      var componentStyle = _extends({}, styles.master, style);
      var spanStyle = _extends({}, styles.masterSpan);

      if (this.context.theme === 'dark') {
        componentStyle = _extends({}, componentStyle, styles.masterDark);
        spanStyle = _extends({}, spanStyle, styles.masterSpanDark);
      }

      if (this.props.width) {
        componentStyle.width = (0, _styleHelper.parseDimension)(this.props.width);
        spanStyle.width = (0, _styleHelper.parseDimension)(this.props.width);
      }

      if (push) {
        spanStyle[':active'] = _extends({}, spanStyle[':active'], styles.masterSpanWithPush[':active']);
      }

      if (selected) {
        var c = (0, _color.hexToRgb)((0, _color.convertColor)(this.context.color));
        componentStyle = _extends({}, componentStyle, {
          backgroundColor: 'rgba(' + c.r + ', ' + c.g + ', ' + c.b + ', .4)',
          ':hover': _extends({}, componentStyle[':hover'], {
            backgroundColor: 'rgba(' + c.r + ', ' + c.g + ', ' + c.b + ', .6)'
          }),
          ':active': _extends({}, componentStyle[':active'], {
            backgroundColor: 'rgba(' + c.r + ', ' + c.g + ', ' + c.b + ', .7)'
          })
        });
      }

      return _react2.default.createElement(
        'div',
        _extends({
          style: componentStyle,
          onClick: this.select
        }, props),
        _react2.default.createElement(
          'span',
          { key: 'span', style: spanStyle },
          children
        )
      );
    }
  }]);

  return Master;
}(_react.Component), _class2.propTypes = _extends({}, _windows.colorPropTypes, _windows2.themePropTypes, {
  selected: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  push: _propTypes2.default.bool
}), _class2.contextTypes = _extends({}, _windows.colorContextTypes, _windows2.themeContextTypes, {
  id: _propTypes2.default.string,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  push: _propTypes2.default.bool,
  masterDetails: _propTypes2.default.object
}), _temp2)) || _class) || _class) || _class);
exports.default = Master;