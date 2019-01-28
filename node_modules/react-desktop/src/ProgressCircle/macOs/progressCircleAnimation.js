"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startAnimation = startAnimation;
exports.stopAnimation = stopAnimation;
var ids = [];
var animations = {};

var framerate = 60;
var duration = 1900;

function animate(elements) {
  var _this = this;

  this.currentStep = 0;
  this.steps = duration / framerate;
  this.increment = 1 / this.steps;
  animateStep.apply(this, [elements]);
  animations[this.id] = setInterval(function () {
    return animateStep.apply(_this, [elements]);
  }, 1000 / framerate);
}

function animateStep(elements) {
  this.currentStep++;
  if (this.currentStep > this.steps) {
    this.currentStep = 1;
  }

  for (var i = 0, len = 12; i < len; ++i) {
    elements[11 - i].style.opacity = this.increment * findStep.apply(this, [i]);
  }
}

function findStep(index) {
  var step = this.currentStep + this.steps / 12 * index;
  if (step > this.steps) {
    step = -this.steps + step;
  }
  return this.steps - step;
}

function startAnimation() {
  var id = 0;
  if (ids.length) id = ids[ids.length - 1] + 1;
  ids.push(id);

  for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
    elements[_key] = arguments[_key];
  }

  animate.apply({ id: id }, [elements]);
  return id;
}

function stopAnimation(animation) {
  window.clearInterval(animations[animation]);
}