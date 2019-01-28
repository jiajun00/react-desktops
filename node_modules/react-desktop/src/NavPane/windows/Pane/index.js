'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _windows = require('./style/windows10');

var _windows2 = _interopRequireDefault(_windows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pane = (_temp = _class = function (_Component) {
  _inherits(Pane, _Component);

  function Pane(props) {
    var _ref;

    _classCallCheck(this, Pane);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Pane.__proto__ || Object.getPrototypeOf(Pane)).call.apply(_ref, [this, props].concat(args)));

    _this.toggleOpen = function () {
      if (_this.props.onPaneToggle) _this.props.onPaneToggle(!_this.state.isPaneExpanded);
      _this.setState({ isPaneExpanded: !_this.state.isPaneExpanded });
    };

    _this.state = {
      isPaneExpanded: props.defaultIsPaneExpanded
    };
    return _this;
  }

  _createClass(Pane, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          canPaneToggle = _props.canPaneToggle,
          paneCompactedLength = _props.paneCompactedLength,
          paneExpandedLength = _props.paneExpandedLength;


      var button = !canPaneToggle ? null : _react2.default.createElement(_Button2.default, { style: _windows2.default.buttonStyle, onClick: this.toggleOpen });

      var componentStyle = _extends({}, _windows2.default.pane);

      if (canPaneToggle) {
        if (this.state.isPaneExpanded) componentStyle.width = paneExpandedLength;else componentStyle.width = paneCompactedLength;
      } else {
        componentStyle.width = paneExpandedLength;
      }

      return _react2.default.createElement(
        'div',
        { style: componentStyle },
        _react2.default.createElement('div', { style: _windows2.default.padding }),
        button,
        this.renderItems()
      );
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      return _react.Children.map(this.props.items, function (item, index) {
        return _react2.default.createElement(_Item2.default, {
          key: index,
          isPaneExpanded: _this2.state.isPaneExpanded,
          title: item.props.title,
          icon: item.props.icon,
          push: item.props.push,
          onSelect: item.props.onSelect,
          selected: item.props.selected
        });
      });
    }
  }]);

  return Pane;
}(_react.Component), _class.Item = _Item2.default, _class.propTypes = {
  items: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.array]),
  canPaneToggle: _propTypes2.default.bool,
  onPaneToggle: _propTypes2.default.func,
  defaultIsPaneExpanded: _propTypes2.default.bool,
  paneCompactedLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  paneExpandedLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
}, _class.defaultProps = {
  canPaneToggle: true,
  defaultIsPaneExpanded: true,
  paneCompactedLength: '48px',
  paneExpandedLength: '200px'
}, _temp);
exports.default = Pane;