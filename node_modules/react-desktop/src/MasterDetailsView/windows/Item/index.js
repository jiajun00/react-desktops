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

var _Master = require('../Master');

var _Master2 = _interopRequireDefault(_Master);

var _Details = require('../Details');

var _Details2 = _interopRequireDefault(_Details);

var _windows = require('../../../style/color/windows');

var _windows2 = require('../../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  display: 'flex',
  flexWrap: 'nowrap',
  position: 'relative',
  flex: '1'
};

var warnOnceMaster = false;
var warnOnceDetails = false;
function applyChildenClasses() {
  return function (ComposedComponent) {
    var nextMaster = _Master2.default;
    ComposedComponent.prototype.Master = ComposedComponent.Master = function () {
      if (!warnOnceMaster) {
        warnOnceMaster = true;
        console.warn('React Desktop: Using MasterDetailsView.Item.Master is deprecated, import MasterDetailsViewItemMaster instead.');
      }

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(nextMaster, [null].concat(args)))();
    };
    var nextDetails = _Details2.default;
    ComposedComponent.prototype.Details = ComposedComponent.Details = function () {
      if (!warnOnceDetails) {
        warnOnceDetails = true;
        console.warn('React Desktop: Using MasterDetailsView.Item.Details is deprecated, import MasterDetailsViewItemDetails instead.');
      }

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new (Function.prototype.bind.apply(nextDetails, [null].concat(args)))();
    };
    return ComposedComponent;
  };
}

var Item = (_dec = applyChildenClasses(), _dec2 = (0, _windows.ColorContext)(), _dec3 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 = function (_Component) {
  _inherits(Item, _Component);

  function Item(props, context, updater) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, props, context, updater));

    _this.state = {
      selected: props.selected ? props.selected : false
    };
    return _this;
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['children', 'style']);

      return _react2.default.createElement(
        'div',
        _extends({ style: _extends({}, styles, style) }, props),
        children
      );
    }
  }]);

  return Item;
}(_react.Component), _class2.propTypes = _extends({}, _windows.colorPropTypes, _windows2.themePropTypes, {
  selected: _propTypes2.default.bool
}), _temp)) || _class) || _class) || _class);
exports.default = Item;