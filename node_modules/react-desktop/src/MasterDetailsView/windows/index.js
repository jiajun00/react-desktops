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

var _Master = require('./Master');

var _Master2 = _interopRequireDefault(_Master);

var _Details = require('./Details');

var _Details2 = _interopRequireDefault(_Details);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _windows = require('../../style/color/windows');

var _windows2 = require('../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    position: 'relative',
    flex: '1',
    background: 'white',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default'
  },

  containerDark: {
    background: '#171717'
  }
};

var warnOnce = false;
function applyChildenClasses() {
  return function (ComposedComponent) {
    var nextItem = _Item2.default;
    var item = function item() {
      if (!warnOnce) {
        warnOnce = true;
        console.warn('React Desktop: Using MasterDetailsView.Item is deprecated, import MasterDetailsViewItem instead.');
      }

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(nextItem, [null].concat(args)))();
    };

    item.prototype.Master = item.Master = _Master2.default;
    item.prototype.Details = item.Details = _Details2.default;
    ComposedComponent.prototype.Item = ComposedComponent.Item = item;
    return ComposedComponent;
  };
}

var MasterDetailsView = (_dec = applyChildenClasses(), _dec2 = (0, _windows.ColorContext)(), _dec3 = (0, _windows2.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = (_temp = _class2 = function (_Component) {
  _inherits(MasterDetailsView, _Component);

  function MasterDetailsView(props, context, updater) {
    _classCallCheck(this, MasterDetailsView);

    var _this = _possibleConstructorReturn(this, (MasterDetailsView.__proto__ || Object.getPrototypeOf(MasterDetailsView)).call(this, props, context, updater));

    _this.masters = [];
    _this.details = [];

    _this.state = {
      selected: 0
    };
    _this.filterChildren(props.children);
    return _this;
  }

  _createClass(MasterDetailsView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        masterDetails: this
      };
    }
  }, {
    key: 'select',
    value: function select(index) {
      this.setState({ selected: index });
    }
  }, {
    key: 'filterChildren',
    value: function filterChildren(children) {
      var _this2 = this;

      this.maxWidth = null;
      _react.Children.map(children, function (item, key) {
        _react.Children.map(item.props.children, function (child) {
          if (child.type === _Master2.default) {
            if (child.props.width !== undefined && child.props.width > _this2.maxWidth) {
              _this2.maxWidth = child.props.width;
            }
            _this2.masters = [].concat(_toConsumableArray(_this2.masters), [(0, _react.cloneElement)(child, { key: key, index: key })]);
          } else if (child.type === _Details2.default) {
            _this2.details = [].concat(_toConsumableArray(_this2.details), [(0, _react.cloneElement)(child, { key: key, index: key })]);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['style']);

      var componentStyle = _extends({}, styles.container, style);

      if (this.context.theme === 'dark') {
        componentStyle = _extends({}, componentStyle, styles.containerDark, style);
      }

      return _react2.default.createElement(
        'div',
        _extends({ style: componentStyle }, props),
        _react2.default.createElement(
          _Pane2.default,
          { width: this.maxWidth },
          this.renderMasters()
        ),
        this.renderDetail()
      );
    }
  }, {
    key: 'renderMasters',
    value: function renderMasters() {
      var _this3 = this;

      var children = [];
      this.masters.forEach(function (item, index) {
        children.push(index === _this3.state.selected ? (0, _react.cloneElement)(item, { selected: true }) : item);
      });
      return children;
    }
  }, {
    key: 'renderDetail',
    value: function renderDetail() {
      var _this4 = this;

      var children = null;
      this.details.forEach(function (item, index) {
        if (index === _this4.state.selected) children = item;
      });
      return children;
    }
  }]);

  return MasterDetailsView;
}(_react.Component), _class2.propTypes = _extends({}, _windows.colorPropTypes, _windows2.themePropTypes), _class2.childContextTypes = {
  masterDetails: _propTypes2.default.object
}, _class2.contextTypes = _extends({}, _windows2.themeContextTypes), _temp)) || _class) || _class) || _class);
exports.default = MasterDetailsView;