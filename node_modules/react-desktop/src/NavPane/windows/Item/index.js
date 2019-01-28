'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _padding = require('../../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _margin = require('../../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _windows = require('../../../style/background/windows');

var _windows2 = _interopRequireDefault(_windows);

var _alignment = require('../../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _windows3 = require('../style/windows10');

var _windows4 = _interopRequireDefault(_windows3);

var _radium = require('radium');

var _windows5 = require('../../../style/color/windows');

var _windows6 = require('../../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = (_dec = (0, _padding2.default)(), _dec2 = (0, _margin2.default)(), _dec3 = (0, _windows2.default)(), _dec4 = (0, _alignment2.default)(), _dec5 = (0, _windows5.ColorContext)(), _dec6 = (0, _windows6.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = (_temp = _class2 = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

    _this.state = {
      prevTitle: null
    };
    return _this;
  }

  _createClass(Item, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.title !== nextProps.title) {
        this.setState({ prevTitle: this.props.title });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          paneTheme = _props.paneTheme,
          props = _objectWithoutProperties(_props, ['children', 'title', 'paneTheme']);

      delete props.icon;
      delete props.push;
      delete props.onSelect;
      delete props.selected;

      return _react2.default.createElement(
        'div',
        { style: _windows4.default.navPaneItem },
        _react2.default.createElement(
          'div',
          { style: _windows4.default.contentWrapper },
          _react2.default.createElement(
            _radium.StyleRoot,
            null,
            _react2.default.createElement(_Title2.default, {
              key: title,
              title: title,
              theme: paneTheme,
              prevTitle: this.state.prevTitle
            })
          ),
          _react2.default.createElement(_Content2.default, _extends({ content: children }, props))
        )
      );
    }
  }]);

  return Item;
}(_react.Component), _class2.propTypes = _extends({}, _windows5.colorPropTypes, _windows6.themePropTypes, _padding.paddingPropTypes, _margin.marginPropTypes, _windows.backgroundPropTypes, _alignment.alignmentPropTypes, {
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
  push: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  paneTheme: _propTypes2.default.string
}), _temp)) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = Item;