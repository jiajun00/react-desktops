'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _ = require('../style/10.11');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'select',
    value: function select(item) {
      this.refs[item.props.tabId].setState({ selected: true });
    }
  }, {
    key: 'unselect',
    value: function unselect(item) {
      this.refs[item.props.tabId].setState({ selected: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style;


      var children = void 0;
      // todo: use Children.map
      if (!this.props.children) {
        return null;
      } else if (Object.prototype.toString.call(this.props.children) !== '[object Array]') {
        children = [this.props.children];
      } else {
        children = [].concat(_toConsumableArray(this.props.children));
      }

      var tabs = [];
      var hasSelected = false;
      for (var i = 0, len = children.length; i < len; ++i) {
        var props = children[i].props;
        if (props.selected) hasSelected = true;
        if (i === 0) props = _extends({}, props, { firstChild: true });
        if (i === len - 1) props = _extends({}, props, { lastChild: true });

        if (children[i + 1] && children[i + 1].props && children[i + 1].props.selected) {
          props = _extends({}, props, { nextSelected: true });
        }

        tabs = [].concat(_toConsumableArray(tabs), [props]);
      }

      if (!hasSelected && tabs[0]) tabs[0].selected = true;
      var prevSelectedIndex = null;
      var afterSelected = false;
      for (var _i = 0, _len = tabs.length; _i < _len; ++_i) {
        if (afterSelected) {
          tabs[_i] = _extends({}, tabs[_i], { afterSelected: true });
          afterSelected = false;
        }
        if (tabs[_i].selected) {
          afterSelected = true;
          prevSelectedIndex = _i - 1;
        }
      }
      if (prevSelectedIndex >= 0 && tabs[prevSelectedIndex]) tabs[prevSelectedIndex] = _extends({}, tabs[prevSelectedIndex], {
        prevSelected: true
      });

      return _react2.default.createElement(
        'div',
        { style: _extends({}, _2.default.tabs, style) },
        this.renderTabs(tabs)
      );
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs(tabs) {
      var children = [];
      for (var i = 0, len = tabs.length; i < len; ++i) {
        children.push(_react2.default.createElement(
          _Tab2.default,
          _extends({ key: i }, tabs[i]),
          tabs[i].title
        ));
      }
      return children;
    }
  }]);

  return Tabs;
}(_react.Component);

exports.default = Tabs;