'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.parseDimension = parseDimension;
exports.applyDefaultProps = applyDefaultProps;
exports.hasProps = hasProps;
exports.extractProps = extractProps;
exports.mapStyle = mapStyle;
exports.default = styleHelper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function parseDimension(value) {
  if (typeof value === 'number') {
    return value + 'px';
  } else if (value.match(/^[0-9]+$/)) {
    return value + 'px';
  }
  return value;
}

function applyDefaultProps(props, context, defaultProps) {
  var finalProps = _extends({}, props);

  for (var prop in defaultProps) {
    if (defaultProps.hasOwnProperty(prop)) {
      if (!props[prop]) {
        if (context[prop]) {
          finalProps[prop] = context[prop];
        } else {
          finalProps[prop] = defaultProps[prop];
        }
      } else if (props[prop] && typeof props[prop] === 'boolean' && typeof defaultProps[prop] !== 'boolean') {
        if (context.color) {
          finalProps[prop] = context[prop];
        } else {
          finalProps[prop] = defaultProps[prop];
        }
      }
    }
  }

  return finalProps;
}

function hasProps(props, proptypes) {
  if (!proptypes) return false;

  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (proptypes[prop] !== undefined) {
        return true;
      }
    }
  }
  return false;
}

function extractProps(props, proptypes) {
  if (!proptypes) return [{}, {}];

  var finalProps = {};
  var extractedProps = {};
  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (proptypes[prop] !== undefined) {
        extractedProps[prop] = props[prop];
      } else {
        finalProps[prop] = props[prop];
      }
    }
  }
  return [finalProps, extractedProps];
}

function mapStyle(prevStyles, nextStyles, defaultStyles, styleCallback, stylesCallback, props) {
  var finalStyles = _extends({}, prevStyles);
  if (defaultStyles) {
    for (var key in defaultStyles) {
      if (defaultStyles.hasOwnProperty(key)) {
        finalStyles[key] = defaultStyles[key];
      }
    }
  }

  for (var _key in nextStyles) {
    if (nextStyles.hasOwnProperty(_key)) {
      if (styleCallback) {
        var result = styleCallback(_key, nextStyles[_key], props);
        if (result) {
          finalStyles[result[0]] = result[1];
        }
      } else finalStyles[_key] = nextStyles[_key];
    }
  }

  if (typeof stylesCallback === 'function') return stylesCallback(finalStyles, props);
  return finalStyles;
}

function styleHelper(options, propTypes, mapStyleCallback, mapStylesCallback, mapProps) {
  if (!mapProps || typeof mapProps !== 'function') {
    mapProps = function mapProps(props) {
      return props;
    };
  }

  function doStyleHelper(WrappedComponent) {
    var _options = _slicedToArray(options, 3),
        element = _options[0],
        elementProps = _options[1],
        defaultStyles = _options[2];

    if ((0, _react.isValidElement)(element)) {
      if (hasProps(elementProps, propTypes) || hasProps(defaultStyles, propTypes)) {
        var styles = extractProps(elementProps, propTypes)[1];
        var props = element.props ? _extends({}, element.props) : {};
        props.style = mapStyle(props.style, styles, defaultStyles, mapStyleCallback, mapStylesCallback, elementProps);
        return (0, _react.cloneElement)(element, mapProps(props, element.props, true));
      }
      return (0, _react.cloneElement)(element, mapProps(element.props, element.props, false));
    } else {
      var _defaultStyles = void 0;
      if (options && Object.prototype.toString.call(options) === '[object Array]') {
        _defaultStyles = options[0];
      }
      return function (_Component) {
        _inherits(_class, _Component);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
          key: 'render',
          value: function render() {
            if (hasProps(this.props, propTypes) || hasProps(_defaultStyles, propTypes)) {
              var _extractProps = extractProps(this.props, propTypes),
                  _extractProps2 = _slicedToArray(_extractProps, 2),
                  _props = _extractProps2[0],
                  _styles = _extractProps2[1];

              if (!_props) _props = {};
              _props.style = mapStyle(_props.style, _styles, _defaultStyles, mapStyleCallback, mapStylesCallback, this.props);
              return _react2.default.createElement(WrappedComponent, mapProps(_props, this.props, true));
            }
            return _react2.default.createElement(WrappedComponent, mapProps(this.props, this.props, false));
          }
        }]);

        return _class;
      }(_react.Component);
    }
  }

  if (options[0] && (0, _react.isValidElement)(options[0])) {
    return doStyleHelper();
  }

  return doStyleHelper;
}