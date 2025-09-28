import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useState, useCallback } from 'react';
import { n as noop } from '../_chunks/dep-CVFMdElW.js';

// https://github.com/scottrippey/react-use-event-hook/blob/75ba34af9175dc311afb3fb302d6fea44e4a5203/src/useEvent.ts
// [RFC](https://github.com/reactjs/rfcs/blob/useevent/text/0000-useevent.md)
/**
 * Suppress the warning when using useLayoutEffect with SSR. (https://reactjs.org/link/uselayouteffect-ssr)
 * Make use of useInsertionEffect if available.
 */
var useInsertionEffect = typeof window !== 'undefined' ? React.useInsertionEffect || React.useLayoutEffect : noop;

/**
 * Render methods should be pure, especially when concurrency is used,
 * so we will throw this error if the callback is called while rendering.
 */
function useEventCallbackShouldNotBeInvokedBeforeMount() {
  throw new Error('INVALID_USEEVENTCALLBACK_INVOCATION: the callback from useEventCallback cannot be invoked before the component has mounted.');
}

/**
 * Similar to useCallback, with a few subtle differences:
 * - The returned function is a stable reference, and will always be the same between renders
 * - No dependency lists required
 * - Properties or state accessed within the callback will always be "current"
 */
function useEventCallback(callback) {
  // Keep track of the latest callback:
  var latestRef = React.useRef(useEventCallbackShouldNotBeInvokedBeforeMount);
  useInsertionEffect(function () {
    latestRef.current = callback;
  }, [callback]);

  // Create a stable callback that always calls the latest callback:
  // using useRef instead of useCallback avoids creating and empty array on every render
  var stableRef = React.useRef(null);
  if (!stableRef.current) {
    stableRef.current = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return latestRef.current.apply(this, args);
    };
  }
  return stableRef.current;
}

function useDragSorter(props) {
  var sortOnDraggable = props.sortOnDraggable,
    onDragSort = props.onDragSort,
    onDragOverCheck = props.onDragOverCheck;
  var _useState = useState(-1),
    _useState2 = _slicedToArray(_useState, 2),
    draggingIndex = _useState2[0],
    setDraggingIndex = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dragStartData = _useState4[0],
    setDragStartData = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    isDropped = _useState6[0],
    setIsDropped = _useState6[1];
  var _useState7 = useState({
      nodeX: 0,
      nodeWidth: 0,
      mouseX: 0
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    startInfo = _useState8[0],
    setStartInfo = _useState8[1];
  var onDragSortEvent = useEventCallback(onDragSort);
  var _onDragOver = useCallback(function (e, index, record) {
    var _e$target;
    e.preventDefault();
    if (draggingIndex === index || draggingIndex === -1) return;
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp && !(onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp.test((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.className))) {
      return;
    }
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.x) {
      if (!startInfo.nodeWidth) return;
      var _e$target$getBounding = e.target.getBoundingClientRect(),
        x = _e$target$getBounding.x,
        width = _e$target$getBounding.width;
      var targetNodeMiddleX = x + width / 2;
      var clientX = e.clientX || 0;
      var draggingNodeLeft = clientX - (startInfo.mouseX - startInfo.nodeX);
      var draggingNodeRight = draggingNodeLeft + startInfo.nodeWidth;
      var overlap = false;
      if (draggingNodeLeft > x && draggingNodeLeft < x + width) {
        overlap = draggingNodeLeft < targetNodeMiddleX;
      } else {
        overlap = draggingNodeRight > targetNodeMiddleX;
      }
      if (!overlap) return;
    }
    onDragSortEvent({
      currentIndex: draggingIndex,
      current: dragStartData,
      target: record,
      targetIndex: index
    });
    setDraggingIndex(index);
  }, [draggingIndex, onDragOverCheck === null || onDragOverCheck === void 0 ? void 0 : onDragOverCheck.targetClassNameRegExp, onDragOverCheck === null || onDragOverCheck === void 0 ? void 0 : onDragOverCheck.x, dragStartData, startInfo.nodeWidth, startInfo.mouseX, startInfo.nodeX, onDragSortEvent]);
  if (!sortOnDraggable) {
    return {};
  }
  function _onDragStart(e, index, record) {
    setDraggingIndex(index);
    setDragStartData(record);
    if (onDragOverCheck) {
      var _e$target$getBounding2 = e.target.getBoundingClientRect(),
        x = _e$target$getBounding2.x,
        width = _e$target$getBounding2.width;
      setStartInfo({
        nodeX: x,
        nodeWidth: width,
        mouseX: e.clientX || 0
      });
    }
  }
  function _onDrop() {
    setIsDropped(true);
  }
  function _onDragEnd() {
    if (!isDropped) {
      // 取消排序，待扩展 api，输出 dragStartData
    }
    setIsDropped(false);
    setDraggingIndex(-1);
    setDragStartData(null);
  }
  function getDragProps(index, record) {
    if (sortOnDraggable) {
      return {
        draggable: true,
        onDragStart: function onDragStart(e) {
          _onDragStart(e, index, record);
        },
        onDragOver: function onDragOver(e) {
          _onDragOver(e, index, record);
        },
        onDrop: function onDrop() {
          _onDrop();
        },
        onDragEnd: function onDragEnd() {
          _onDragEnd();
        }
      };
    }
    return {};
  }
  return {
    onDragStart: _onDragStart,
    onDragOver: _onDragOver,
    onDrop: _onDrop,
    onDragEnd: _onDragEnd,
    getDragProps: getDragProps,
    dragging: draggingIndex !== -1
  };
}

export { useDragSorter as default };
//# sourceMappingURL=useDragSorter.js.map
