var styleEqual = require('../');
var assert = require('chai').assert;

describe('styleEqual', () => {
  it('returns true for same objects', () => {
    const a = { color: 'blue' };
    assert(styleEqual(false, false));
    assert(styleEqual(a, a));
  });

  it('treats falsy nodes as equivalent', () => {
    assert(styleEqual(false, null));
    assert(styleEqual([null, false], [null, false]));
  });

  it('understands numbers', () => {
    assert(styleEqual(1, 1));
    assert(!styleEqual(1, 2));
  });

  it('understands arrays', () => {
    assert(styleEqual([1], [1]));
    assert(styleEqual([1, 2, 3], [1, 2, 3]));
    assert(!styleEqual([1], [2]));
    assert(!styleEqual([1, 2, 3], [1, 3, 2]));
  });

  it('understands nested arrays', () => {
    assert(styleEqual([1, [2]], [1, [2]]));
    assert(styleEqual([1, [2, 3]], [1, [2, 3]]));
    assert(!styleEqual([1, 2], [1, [2]]));
  });

  it('understands objects', () => {
    var a = { color: 'blue' };
    var b = { color: 'red' };
    var c = { color: 'red' };
    var d = { color: 'red', borderWidth: 1 };
    assert(!styleEqual(a, b));
    assert(!styleEqual([a], [b]));
    assert(styleEqual(b, c));
    assert(styleEqual([b], [c]));
    assert(!styleEqual(c, d));
  });

  it('can mix numbers and objects', () => {
    var a = { color: 'blue' };
    var b = { color: 'red' };
    var c = { color: 'red' };
    assert(!styleEqual([1, 2, a], [1, 2, b]));
    assert(styleEqual([1, 2, b], [1, 2, c]));
    assert(styleEqual([1, [2, b]], [1, [2, c]]));
  });

  it('handles transform properly', () => {
    var a = {
      transform: [
        { translateX: 2 },
      ],
    };
    var b = {
      transform: [
        { translateX: 2 },
      ],
    };
    var c = {
      transform: [
        { translateY: 0 },
      ],
    };
    var d = {
      transform: [
        { translateX: 2 },
        { scaleX: 2 },
      ],
    };
    assert(styleEqual(a, b));
    assert(!styleEqual(b, c));
    assert(!styleEqual(b, d));
  });
});
