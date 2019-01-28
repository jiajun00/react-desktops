'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pullLeft = pullLeft;
exports.pushCenter = pushCenter;

var _bezierEasing = require('../../animation/bezierEasing');

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestAnimationFrame = void 0;
if (typeof window !== 'undefined') {
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
}

var startTimestamp = void 0;
var duration = 350;
var easing = (0, _bezierEasing2.default)(.3, .14, 0, 1);

function moveLabel(timestamp, label, start, current, end, cb) {
  if (start === end) return null;
  if (!startTimestamp) startTimestamp = timestamp;
  var progress = 1 - (timestamp - startTimestamp) / duration;
  if (progress < 0) progress = 0;
  progress = 1 - easing.get(1 - progress);
  if (start > end) {
    current = progress * start;
  } else {
    current = (1 - progress) * end + start;
  }

  label.style.left = current + 'px';
  if (start > end && current > end || start < end && current < end) {
    requestAnimationFrame(function (timestamp) {
      return moveLabel(timestamp, label, start, current, end);
    });
  } else {
    label.style.left = end + 'px';
    if (cb) cb();
  }
}

function animateLabel(label, start, end) {
  return new Promise(function (resolve) {
    if (requestAnimationFrame) {
      requestAnimationFrame(function (timestamp) {
        return moveLabel(timestamp, label, start, start, end, resolve);
      });
    }
  });
}

function pullLeft(input, label) {
  startTimestamp = null;
  var start = label.offsetLeft;
  input.style.color = 'transparent';
  label.style.position = 'absolute';
  setTimeout(function () {
    animateLabel(label, start, 2);
    setTimeout(function () {
      return input.style.color = null;
    }, 300);
  }, 10);
}

function pushCenter(input, label) {
  startTimestamp = null;
  label.style.position = 'relative';
  var end = label.offsetLeft;
  label.style.position = 'absolute';

  setTimeout(function () {
    animateLabel(label, 2, end).then(function () {
      return label.style.position = 'relative';
    });
  }, 10);
}