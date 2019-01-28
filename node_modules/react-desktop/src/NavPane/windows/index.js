'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _windows = require('./style/windows10');

var _windows2 = _interopRequireDefault(_windows);

var _windows3 = require('../../style/color/windows');

var _windows4 = require('../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var warnOnce = false;
function applyChildenClasses() {
  return function (ComposedComponent) {
    var nextItem = _Item2.default;
    ComposedComponent.prototype.Item = ComposedComponent.Item = function () {
      if (!warnOnce) {
        warnOnce = true;
        console.warn('React Desktop: Using NavPane.Item is deprecated, import NavPaneItem instead.');
      }

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(nextItem, [null].concat(args)))();
    };
    return ComposedComponent;
  };
}

var NavPane = (_dec = applyChildenClasses(), _dec2 = (0, _windows3.ColorContext)(), _dec3 = (0, _windows4.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 = function (_Component) {
  _inherits(NavPane, _Component);

  function NavPane() {
    _classCallCheck(this, NavPane);

    return _possibleConstructorReturn(this, (NavPane.__proto__ || Object.getPrototypeOf(NavPane)).apply(this, arguments));
  }

  _createClass(NavPane, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: _windows2.default.navPane },
        _react2.default.createElement(_Pane2.default, {
          items: this.props.children,
          canPaneToggle: this.props.canPaneToggle,
          onPaneToggle: this.props.onPaneToggle,
          defaultIsPaneExpanded: this.props.defaultIsPaneExpanded,
          paneCompactedLength: this.props.paneCompactedLength,
          paneExpandedLength: this.props.paneExpandedLength
        }),
        this.renderContent()
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var content = null;
      _react.Children.map(this.props.children, function (child) {
        if (child.props.selected) content = child;
      });
      return content ? (0, _react.cloneElement)(content, _extends({}, content.props, {
        paneTheme: this.context.theme
      })) : null;
    }
  }]);

  return NavPane;
}(_react.Component), _class2.propTypes = _extends({}, _windows3.colorPropTypes, _windows4.themePropTypes, {
  canPaneToggle: _propTypes2.default.bool,
  onPaneToggle: _propTypes2.default.func,
  defaultIsPaneExpanded: _propTypes2.default.bool,
  paneCompactedLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paneExpandedLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
}), _class2.contextTypes = _extends({}, _windows4.themeContextTypes), _temp)) || _class) || _class) || _class);
exports.default = NavPane;