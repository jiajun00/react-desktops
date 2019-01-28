'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp;

var _cssRuleSetToString = require('../css-rule-set-to-string');

var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Style = (_temp = _class = function (_PureComponent) {
  _inherits(Style, _PureComponent);

  function Style() {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Style.prototype._buildStyles = function _buildStyles(styles) {
    var _this2 = this;

    var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

    var scopeSelector = this.props.scopeSelector;

    var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
      if (_typeof(styles[selector]) !== 'object') {
        accumulator[selector] = styles[selector];
      }

      return accumulator;
    }, {});
    var rootStyles = Object.keys(rootRules).length ? (0, _cssRuleSetToString2.default)(scopeSelector || '', rootRules, userAgent) : '';

    return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
      var rules = styles[selector];

      if (selector === 'mediaQueries') {
        accumulator += _this2._buildMediaQueryString(rules);
      } else if (_typeof(styles[selector]) === 'object') {
        var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
          return scopeSelector + ' ' + part.trim();
        }).join(',') : selector;

        accumulator += (0, _cssRuleSetToString2.default)(completeSelector, rules, userAgent);
      }

      return accumulator;
    }, '');
  };

  Style.prototype._buildMediaQueryString = function _buildMediaQueryString(stylesByMediaQuery) {
    var _this3 = this;

    var mediaQueryString = '';

    Object.keys(stylesByMediaQuery).forEach(function (query) {
      mediaQueryString += '@media ' + query + '{' + _this3._buildStyles(stylesByMediaQuery[query]) + '}';
    });

    return mediaQueryString;
  };

  Style.prototype.render = function render() {
    if (!this.props.rules) {
      return null;
    }

    var styles = this._buildStyles(this.props.rules);

    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
  };

  return Style;
}(_react.PureComponent), _class.propTypes = {
  radiumConfig: _propTypes2.default.object,
  rules: _propTypes2.default.object,
  scopeSelector: _propTypes2.default.string
}, _class.contextTypes = {
  _radiumConfig: _propTypes2.default.object
}, _class.defaultProps = {
  scopeSelector: ''
}, _temp);
exports.default = Style;
module.exports = exports['default'];