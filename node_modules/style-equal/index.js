var hasOwnProperty = Object.prototype.hasOwnProperty;

function transformEntryEqual(a, b) {
  for (var k in a) {
    if (hasOwnProperty.call(a, k)) {
      return a[k] === b[k];
    }
  }
  return false;
}

function transformEqual(a, b) {
  if ((!a && !b) || (a === b)) {
    return true;
  }
  if (!a !== !b) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (!transformEntryEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

function shallowObjectEquals(a, b) {
  var k;
  var i = 0;
  var j = 0;
  for (k in a) {
    if (hasOwnProperty.call(a, k)) {
      switch (k) {
        case 'transform':
          if (!transformEqual(a[k], b[k])) {
            return false;
          }
          break;
        case 'shadowOffset':
          if (!shallowObjectEquals(a[k], b[k])) {
            return false;
          }
          break;
        default:
          if (a[k] !== b[k]) {
            return false;
          }
          break;
      }
      i++;
    }
  }
  for (k in b) {
    if (hasOwnProperty.call(b, k)) {
      j++;
    }
  }
  return i === j;
}

function styleEqual(a, b) {
  if ((!a && !b) || (a === b)) {
    return true;
  }
  if (!a !== !b) {
    return false;
  }
  switch (typeof a) {
    case 'object':
      if (a instanceof Array) {
        for (var i = 0; i < a.length; i++) {
          if (!styleEqual(a[i], b[i])) {
            return false;
          }
        }
        return a.length === b.length;
      } else {
        return shallowObjectEquals(a, b);
      }
      break;
    case 'number':
    default:
      return a === b;
  }
}

module.exports = styleEqual;
