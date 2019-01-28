'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorContextTypes = exports.colorPropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.ColorContext = ColorContext;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styleHelper = require('../../styleHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colorPropTypes = exports.colorPropTypes = {
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

var colorContextTypes = exports.colorContextTypes = {
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};

var applyColorProps = function applyColorProps(props, context) {
  return (0, _styleHelper.applyDefaultProps)(props, context, { color: '#0063ae' });
};

function ColorContext() {
  var preserveProperty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return function (ComposedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'getChildContext',
        value: function getChildContext() {
          return {
            color: applyColorProps(this.props, this.context).color
          };
        }
      }, {
        key: 'render',
        value: function render() {
          var props = _objectWithoutProperties(this.props, []);

          if (!preserveProperty) delete props.color;
          return _react2.default.createElement(ComposedComponent, props);
        }
      }]);

      return _class;
    }(_react.Component), _class.propTypes = _extends({}, colorPropTypes), _class.contextTypes = _extends({}, colorContextTypes), _class.childContextTypes = _extends({}, colorContextTypes), _temp;
  };
}