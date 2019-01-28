'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRenderOutput = getRenderOutput;
exports.getElement = getElement;
exports.expectCSS = expectCSS;
exports.expectColor = expectColor;
exports.createEsClass = createEsClass;

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallow = require('react-test-renderer/shallow');

var _shallow2 = _interopRequireDefault(_shallow);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getRenderOutput(element) {
  var renderer = new _shallow2.default();
  renderer.render(element);
  return renderer.getRenderOutput();
}

function getElement(output, tagName) {
  return _reactDom2.default.findDOMNode(_testUtils2.default.findRenderedDOMComponentWithTag(output, tagName));
}

function cleanCSS(css) {
  return css.replace(/\s*\n\s*/g, '').replace(/\s*([{};:,])\s*/g, '$1');
}

function expectCSS(styleElement, css) {
  // strip newlines and excess whitespace from both to normalize browsers.
  // IE9, for instance, does not include new lines in innerText.
  // Also allows us to write our expected CSS cleanly, without worring about the
  // format of the actual output.
  expect(cleanCSS(styleElement.innerText)).to.equal(cleanCSS(css));
}

function expectColor(actual, expected) {
  expect((0, _color2.default)(actual).hex()).to.equal((0, _color2.default)(expected).hex());
}

function createEsClass(renderFn) {
  var Composed = function (_Component) {
    _inherits(Composed, _Component);

    function Composed() {
      _classCallCheck(this, Composed);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Composed.prototype.render = function render() {
      return renderFn() || _react2.default.createElement('div', null);
    };

    return Composed;
  }(_react.Component);

  return Composed;
}