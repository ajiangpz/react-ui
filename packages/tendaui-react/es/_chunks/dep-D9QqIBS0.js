import { c as canUseDocument } from './dep-0EpSXuwN.js';

var getCssVarsValue = function getCssVarsValue(name, element) {
  if (!canUseDocument) return;
  var el = element || document.documentElement;
  return getComputedStyle(el).getPropertyValue(name);
};
var trim = function trim(str) {
  return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return " ".concat(el.className, " ").indexOf(" ".concat(cls, " ")) > -1;
}
var addClass = function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " ".concat(clsName);
    }
  }
  if (!el.classList) {
    // eslint-disable-next-line
    el.className = curClass;
  }
};
var removeClass = function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = " ".concat(el.className, " ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" ".concat(clsName, " "), ' ');
    }
  }
  if (!el.classList) {
    // eslint-disable-next-line
    el.className = trim(curClass);
  }
};

export { addClass as a, getCssVarsValue as g, removeClass as r };
//# sourceMappingURL=dep-D9QqIBS0.js.map
