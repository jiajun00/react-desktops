'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  if (requestAnimationFrame) {
    startTimestamp = null;
    var icon = element.getElementsByTagName('svg')[0];
    requestAnimationFrame(function (timestamp) {
      return animateCancelIcon(timestamp, icon);
    });
  }
};

var requestAnimationFrame = void 0;
if (typeof window !== 'undefined') {
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
}

var startTimestamp = void 0;
var duration = 150;

function animateCancelIcon(timestamp, element) {
  if (!startTimestamp) startTimestamp = timestamp;
  var progress = (timestamp - startTimestamp) / duration;
  if (progress > 1) progress = 1;

  element.style.height = 14 * progress + 'px';
  element.style.width = 14 * progress + 'px';
  element.style.opacity = progress;

  if (progress !== 1) {
    requestAnimationFrame(function (timestamp) {
      return animateCancelIcon(timestamp, element);
    });
  }
}