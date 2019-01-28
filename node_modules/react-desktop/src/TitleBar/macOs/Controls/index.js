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

var _Close = require('./Close');

var _Close2 = _interopRequireDefault(_Close);

var _Minimize = require('./Minimize');

var _Minimize2 = _interopRequireDefault(_Minimize);

var _Resize = require('./Resize');

var _Resize2 = _interopRequireDefault(_Resize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  controls: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    width: '61px'
  },

  inset: {
    marginLeft: '5px'
  }
};

var Controls = (_temp = _class = function (_Component) {
  _inherits(Controls, _Component);

  function Controls() {
    _classCallCheck(this, Controls);

    var _this = _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this));

    _this.state = {
      isOver: false
    };
    return _this;
  }

  _createClass(Controls, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, styles.controls),
          onMouseEnter: function onMouseEnter() {
            return _this2.setState({ isOver: true });
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({ isOver: false });
          }
        },
        _react2.default.createElement(_Close2.default, {
          onClick: this.props.onCloseClick,
          showIcon: this.state.isOver,
          disabled: this.props.disableClose,
          isWindowFocused: this.props.isWindowFocused
        }),
        _react2.default.createElement(_Minimize2.default, {
          onClick: this.props.onMinimizeClick,
          showIcon: this.state.isOver,
          disabled: this.props.disableMinimize,
          isWindowFocused: this.props.isWindowFocused
        }),
        _react2.default.createElement(_Resize2.default, {
          isFullscreen: this.props.isFullscreen,
          onClick: this.props.onResizeClick,
          onMaximizeClick: this.props.onMaximizeClick,
          showIcon: this.state.isOver,
          disabled: this.props.disableResize,
          disableFullscreen: this.props.disableFullscreen,
          isWindowFocused: this.props.isWindowFocused
        })
      );
    }
  }]);

  return Controls;
}(_react.Component), _class.propTypes = {
  inset: _propTypes2.default.bool,
  isFullscreen: _propTypes2.default.bool,
  onCloseClick: _propTypes2.default.func,
  onMinimizeClick: _propTypes2.default.func,
  onMaximizeClick: _propTypes2.default.func,
  onResizeClick: _propTypes2.default.func,
  disableClose: _propTypes2.default.bool,
  disableMinimize: _propTypes2.default.bool,
  disableResize: _propTypes2.default.bool,
  disableFullscreen: _propTypes2.default.bool
}, _temp);
exports.default = Controls;