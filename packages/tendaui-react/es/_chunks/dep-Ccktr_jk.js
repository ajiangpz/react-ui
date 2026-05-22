import { c as canUseDocument } from './dep-DRwijJcv.js';

var on = function () {
  if (canUseDocument && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent("on".concat(event), handler);
    }
  };
}();
var off = function () {
  if (canUseDocument && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent("on".concat(event), handler);
    }
  };
}();

export { off as a, on as o };
//# sourceMappingURL=dep-Ccktr_jk.js.map
