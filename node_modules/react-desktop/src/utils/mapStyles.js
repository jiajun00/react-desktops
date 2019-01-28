'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapStyles;
function mapStyles(styles, map) {
  var popped = [];
  var mappedStyles = {};

  var _loop = function _loop(prop) {
    if (map.hasOwnProperty(prop)) {
      mappedStyles[prop] = {};
      map[prop].forEach(function (key) {
        if (styles !== undefined && typeof styles[key] !== 'undefined') {
          popped.push(key);
          mappedStyles[prop][key] = styles[key];
        }
      });
    }
  };

  for (var prop in map) {
    _loop(prop);
  }
  var remaining = {};
  for (var prop in styles) {
    if (styles.hasOwnProperty(prop)) {
      if (popped.indexOf(prop) === -1) {
        remaining[prop] = styles[prop];
      }
    }
  }

  var finalStyles = [remaining];
  for (var _prop in mappedStyles) {
    if (mappedStyles.hasOwnProperty(_prop)) {
      finalStyles.push(mappedStyles[_prop]);
    }
  }

  return finalStyles;
}