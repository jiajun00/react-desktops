'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.windowIsFocused = windowIsFocused;
if (typeof window !== 'undefined') {
  window.addEventListener('focus', windowFocus);
  window.addEventListener('blur', windowBlur);
}

var isWindowFocused = true;

if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' && typeof document.hasFocus === 'function') {
  isWindowFocused = document.hasFocus();
}

function windowFocus() {
  isWindowFocused = true;
}

function windowBlur() {
  isWindowFocused = false;
}

function windowIsFocused() {
  return isWindowFocused;
}