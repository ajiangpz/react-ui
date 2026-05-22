import { useRef, useEffect } from 'react';
import { isEqual, debounce } from 'lodash-es';

var useLatest = function useLatest(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
};

var DEFAULT_OPTIONS = {
  debounceTime: 0,
  config: {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }
};
function useMutationObservable(targetEl, cb) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;
  var optionsRef = useRef(null);
  var signalRef = useRef(0);
  var callbackRef = useLatest(cb);
  if (!isEqual(options, optionsRef.current)) {
    signalRef.current += 1;
  }
  optionsRef.current = options;
  useEffect(function () {
    if (!targetEl || !(targetEl !== null && targetEl !== void 0 && targetEl.nodeType)) return;
    var observer = null;
    try {
      if (optionsRef.current !== null) {
        var _optionsRef$current = optionsRef.current,
          debounceTime = _optionsRef$current.debounceTime,
          config = _optionsRef$current.config;
        var mutationCallback = function mutationCallback() {
          callbackRef.current.apply(callbackRef, arguments);
        };
        observer = new MutationObserver(debounceTime > 0 ? debounce(mutationCallback, debounceTime) : mutationCallback);
        observer.observe(targetEl, config);
      }
    } catch (e) {
      console.error(e);
    }
    return function () {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [targetEl, signalRef.current]);
}

export { useLatest as a, useMutationObservable as u };
//# sourceMappingURL=dep-B2D1svZy.js.map
