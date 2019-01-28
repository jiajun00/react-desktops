'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = os;
var MACOS = exports.MACOS = 'macOs';
var WINDOWS = exports.WINDOWS = 'windows';

function os() {
  // explicitly set these to avoid issues
  var w = window || null;
  var n = navigator || null;
  var p = process || w && w.process || null;

  // via node
  if (p && p.platform) {
    if (p.platform === 'darwin') {
      return MACOS;
    }
    if (p.platform.includes('win')) {
      return WINDOWS;
    }
  }

  // via user agent
  if (n && n.userAgent) {
    if (n.userAgent.includes('Macintosh')) {
      return MACOS;
    }
    if (n.userAgent.includes('Windows')) {
      return WINDOWS;
    }
  }

  // default to macOs
  return MACOS;
}