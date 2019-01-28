var styleEqual = require('style-equal');
var hasOwnProperty = Object.prototype.hasOwnProperty;

function type(a) {
  return Array.isArray(a) ? 'array' : typeof a;
}

function elementEquals(a, b) {
  var typeOfA = type(a);
  var typeOfB = type(b);

  if (typeOfA !== typeOfB) return false;

  switch (typeOfA) {
    case 'array':
      if (a.length !== b.length) return false;
      for (var i = 0; i < a.length; i++) {
        if (!elementEquals(a[i], b[i])) return false;
      }
      return true;
    case 'object':
      if (!a || !b) return a === b;
      if (a.type !== b.type) return false;
      if (a.key !== b.key) return false;
      if (a.ref !== b.ref) return false;
      return shallowElementEquals(a.props, b.props);
      break;
    default:
      return a === b;
  }
}

function shallowElementEquals(a, b) {
  var aCount = 0;
  var bCount = 0;

  for (var key in a) {
    if (hasOwnProperty.call(a, key)) {
      if (key === 'style') {
        // NOTE(lmr): kind of risky, but i'm assuming that a `style` prop is a React Native style,
        // and using the `styleEqual` algorithm here.
        if (!styleEqual(a[key], b[key])) return false;
      } else if (key === 'children') {
        // will compare children later
      } else {
        if (a[key] !== b[key]) return false;
      }
      aCount++;
    }
  }

  for (var key in b) {
    if (hasOwnProperty.call(b, key)) {
      bCount++;
    }
  }

  if (aCount !== bCount) return false;

  // compare children last...
  return elementEquals(a.children, b.children);
}

module.exports = shallowElementEquals;
