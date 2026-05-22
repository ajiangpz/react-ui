import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { u as useConfig } from '../_chunks/dep-u7AyxuYF.js';
import { a as useLatest, u as useMutationObservable } from '../_chunks/dep-B2D1svZy.js';
import { u as useIsomorphicLayoutEffect } from '../_chunks/dep-BRbJGDI9.js';
import { c as canUseDocument } from '../_chunks/dep-DRwijJcv.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-zVwpnryi.js';
import 'dayjs';
import 'lodash-es';

function useResizeObserver(container, callback) {
  var enabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var callbackRef = useLatest(callback);
  useIsomorphicLayoutEffect(function () {
    var isSupport = canUseDocument && window.ResizeObserver;
    var element = container.current;
    var observer = null;
    if (!enabled) return;
    if (isSupport && element) {
      var resizeCallback = function resizeCallback(entries) {
        callbackRef.current(entries);
      };
      observer = new ResizeObserver(resizeCallback);
      observer.observe(element);
    }
    return function () {
      if (observer && element) {
        var _observer$disconnect, _observer;
        observer.unobserve(element);
        (_observer$disconnect = (_observer = observer).disconnect) === null || _observer$disconnect === void 0 || _observer$disconnect.call(_observer);
        observer = null;
      }
    };
  }, [container, enabled]);
}

var TabBar = function TabBar(props) {
  var tabPosition = props.tabPosition,
    activeId = props.activeId,
    containerRef = props.containerRef,
    navsWrapRef = props.navsWrapRef;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    barStyle = _useState2[0],
    setBarStyle = _useState2[1];
  var tabsClassPrefix = "".concat(classPrefix, "-tabs");
  var currentActiveIdRef = useRef(activeId);
  useEffect(function () {
    currentActiveIdRef.current = activeId;
  }, [activeId]);
  var computeStyle = React.useCallback(function () {
    var isHorizontal = ["bottom", "top"].includes(tabPosition);
    var transformPosition = isHorizontal ? "translateX" : "translateY";
    var itemProp = isHorizontal ? "width" : "height";
    var barBorderProp = isHorizontal ? "width" : "height";
    var offset = 0;
    if (containerRef.current) {
      var _containerRef$current;
      var itemsRef = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(tabsClassPrefix, "__nav-item"));
      if (itemsRef.length - 1 >= currentActiveIdRef.current) {
        itemsRef.forEach(function (item, itemIndex) {
          if (itemIndex < currentActiveIdRef.current) {
            offset += Number(getComputedStyle(item)[itemProp].replace("px", ""));
          }
        });
        var computedItem = itemsRef[currentActiveIdRef.current];
        if (!computedItem) {
          setBarStyle(_defineProperty({
            transform: "".concat(transformPosition, "(", 0, "px)")
          }, barBorderProp, 0));
          return;
        }
        var itemPropValue = getComputedStyle(computedItem)[itemProp];
        setBarStyle(_defineProperty({
          transform: "".concat(transformPosition, "(").concat(offset, "px)")
        }, barBorderProp, itemPropValue || 0));
      }
    }
  }, [currentActiveIdRef, containerRef, tabPosition, tabsClassPrefix]);
  useEffect(function () {
    if (containerRef.current) {
      setTimeout(function () {
        return computeStyle();
      });
    }
  }, [tabPosition, activeId, containerRef.current]);
  var handleMutationObserver = React.useCallback(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "characterData") {
        computeStyle();
      }
    });
  }, [computeStyle]);
  useMutationObservable(containerRef.current, handleMutationObserver);
  useResizeObserver(navsWrapRef, computeStyle);
  return /* @__PURE__ */React.createElement("div", {
    className: classNames(_defineProperty(_defineProperty({}, "".concat(tabsClassPrefix, "__bar"), true), "".concat(classPrefix, "-is-").concat(tabPosition), true)),
    style: barStyle
  });
};
TabBar.displayName = "TabBar";

export { TabBar as default };
//# sourceMappingURL=TabBar.js.map
