'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _width = require('../../style/width');

var _width2 = _interopRequireDefault(_width);

var _margin = require('../../style/margin');

var _margin2 = _interopRequireDefault(_margin);

var _padding = require('../../style/padding');

var _padding2 = _interopRequireDefault(_padding);

var _alignment = require('../../style/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

var _windows = require('../../style/background/windows');

var _windows2 = _interopRequireDefault(_windows);

var _hidden = require('../../style/hidden');

var _hidden2 = _interopRequireDefault(_hidden);

var _dimension = require('../../style/dimension');

var _dimension2 = _interopRequireDefault(_dimension);

var _windows3 = require('../../style/color/windows');

var _windows4 = require('../../style/theme/windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  display: 'flex',
  position: 'relative'
};

var View = (_dec = (0, _width2.default)(), _dec2 = (0, _dimension2.default)(), _dec3 = (0, _alignment2.default)(), _dec4 = (0, _margin2.default)(), _dec5 = (0, _padding2.default)(), _dec6 = (0, _windows2.default)(), _dec7 = (0, _hidden2.default)(), _dec8 = (0, _windows3.ColorContext)(), _dec9 = (0, _windows4.ThemeContext)(), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_temp = _class2 = function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          horizontalAlignment = _props.horizontalAlignment,
          children = _props.children,
          style = _props.style,
          direction = _props.direction,
          layout = _props.layout,
          props = _objectWithoutProperties(_props, ['horizontalAlignment', 'children', 'style', 'direction', 'layout']);

      var componentStyle = _extends({}, styles, style);

      if (direction) {
        // direction will be deprecated on v0.3 and a warning will be shown
        layout = direction === 'column' ? 'vertical' : 'horizontal';
      }

      if (layout === 'vertical') {
        componentStyle.flexDirection = 'column';
        if (horizontalAlignment) {
          switch (horizontalAlignment) {
            case 'center':
              componentStyle.alignItems = 'center';break;
            case 'left':
              componentStyle.alignItems = 'flex-start';break;
            case 'right':
              componentStyle.alignItems = 'flex-end';break;
          }
        }
      } else {
        if (horizontalAlignment) {
          switch (horizontalAlignment) {
            case 'center':
              componentStyle.justifyContent = 'center';break;
            case 'left':
              componentStyle.justifyContent = 'flex-start';break;
            case 'right':
              componentStyle.justifyContent = 'flex-end';break;
          }
        }
      }

      return _react2.default.createElement(
        'div',
        _extends({
          style: componentStyle
        }, props),
        children
      );
    }
  }]);

  return View;
}(_react.Component), _class2.propTypes = _extends({}, _alignment.alignmentPropTypes, _width.widthPropTypes, _margin.marginPropTypes, _padding.paddingPropTypes, _windows.backgroundContextTypes, _hidden.hiddenPropTypes, _dimension.dimensionPropTypes, {
  direction: _propTypes2.default.string,
  layout: _propTypes2.default.string
}), _class2.defaultProps = {
  layout: 'horizontal'
}, _temp)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
exports.default = View;