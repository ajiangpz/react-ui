import { _ as _extends } from '../_chunks/dep-mO86zOh3.js';
import { _ as _defineProperty } from '../_chunks/dep-Cwish4GD.js';
import { _ as _slicedToArray } from '../_chunks/dep-CzLhKWCf.js';
import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { a as CircleX } from '../_chunks/dep-LgDsOUkE.js';
import { d as isFunction } from '../_chunks/dep-uPo9oRq0.js';
import { c as classNames } from '../_chunks/dep-Cro9u0Fl.js';
import { u as useConfig } from '../_chunks/dep-u1x3x6MJ.js';
import { Input } from '../input/index.js';
import useTagList from './hooks/useTagList.js';
import { u as useControlled } from '../_chunks/dep-IfD-elqQ.js';
import { u as useDefaultProps } from '../_chunks/dep-5jl2j2BI.js';
import { u as useGlobalIcon } from '../_chunks/dep-BIZNqCbw.js';
import useDragSorter from '../hooks/useDragSorter.js';
import '../_chunks/dep-D-UKOauR.js';
import '../_chunks/dep-0Agal8xo.js';
import '../config-provider/ConfigContext.js';
import '../input/Input.js';
import '../_chunks/dep-DcgYxvIK.js';
import '../_chunks/dep-0EpSXuwN.js';
import '../_chunks/dep-CVM4W9uS.js';
import '../input/InputGroup.js';
import '../input/style/css.js';
import '../_chunks/dep-CgyDw_YI.js';
import '../tag/index.js';
import '../tag/Tag.js';
import '../_chunks/dep-CVFMdElW.js';
import '../_chunks/dep-KHdXYwsL.js';
import '../_chunks/dep-DFvx9dpR.js';
import '../tag/style/css.js';

var mouseEnterTimer = null;
function useTagScroll(props) {
  var tagInputRef = useRef(null);
  var _props$excessTagsDisp = props.excessTagsDisplayType,
    excessTagsDisplayType = _props$excessTagsDisp === void 0 ? 'scroll' : _props$excessTagsDisp,
    readonly = props.readonly,
    disabled = props.disabled;
  // 允许向右滚动的最大距离
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollDistance = _useState2[0],
    setScrollDistance = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    scrollElement = _useState4[0],
    setScrollElement = _useState4[1];
  var updateScrollElement = function updateScrollElement(element) {
    var scrollElement = element.children[0];
    setScrollElement(scrollElement);
  };
  var updateScrollDistance = function updateScrollDistance() {
    if (!scrollElement) return;
    setScrollDistance(scrollElement.scrollWidth - scrollElement.clientWidth);
  };
  var scrollTo = function scrollTo(distance) {
    if (isFunction(scrollElement === null || scrollElement === void 0 ? void 0 : scrollElement.scroll)) {
      scrollElement.scroll({
        left: distance,
        behavior: 'smooth'
      });
    }
  };
  var scrollToRight = function scrollToRight() {
    updateScrollDistance();
    scrollTo(scrollDistance);
  };
  var scrollToLeft = function scrollToLeft() {
    scrollTo(0);
  };

  // TODO：MAC 电脑横向滚动，Windows 纵向滚动。当前只处理了横向滚动
  var onWheel = function onWheel(_ref) {
    var e = _ref.e;
    if (readonly || disabled) return;
    if (!scrollElement) return;
    if (e.deltaX > 0) {
      var distance = Math.min(scrollElement.scrollLeft + 120, scrollDistance);
      scrollTo(distance);
    } else {
      var _distance = Math.max(scrollElement.scrollLeft - 120, 0);
      scrollTo(_distance);
    }
  };

  // 鼠标 hover，自动滑动到最右侧，以便输入新标签
  var scrollToRightOnEnter = function scrollToRightOnEnter() {
    if (excessTagsDisplayType !== 'scroll') return;
    // 一闪而过的 mousenter 不需要执行
    mouseEnterTimer = setTimeout(function () {
      scrollToRight();
      if (mouseEnterTimer) clearTimeout(mouseEnterTimer);
    }, 100);
  };
  var scrollToLeftOnLeave = function scrollToLeftOnLeave() {
    if (excessTagsDisplayType !== 'scroll') return;
    scrollTo(0);
    if (mouseEnterTimer) {
      clearTimeout(mouseEnterTimer);
    }
  };
  var clearScroll = function clearScroll() {
    if (mouseEnterTimer) clearTimeout(mouseEnterTimer);
  };
  var initScroll = function initScroll(element) {
    if (!element) return;
    updateScrollElement(element);
  };
  useEffect(function () {
    var _tagInputRef$current;
    if (tagInputRef.current) initScroll(tagInputRef === null || tagInputRef === void 0 || (_tagInputRef$current = tagInputRef.current) === null || _tagInputRef$current === void 0 ? void 0 : _tagInputRef$current.currentElement);
    return clearScroll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    initScroll: initScroll,
    clearScroll: clearScroll,
    tagInputRef: tagInputRef,
    scrollElement: scrollElement,
    scrollDistance: scrollDistance,
    scrollTo: scrollTo,
    scrollToRight: scrollToRight,
    scrollToLeft: scrollToLeft,
    updateScrollElement: updateScrollElement,
    updateScrollDistance: updateScrollDistance,
    onWheel: onWheel,
    scrollToRightOnEnter: scrollToRightOnEnter,
    scrollToLeftOnLeave: scrollToLeftOnLeave
  };
}

function useHover(props) {
  var readonly = props.readonly,
    disabled = props.disabled,
    onMouseenter = props.onMouseenter,
    onMouseleave = props.onMouseleave;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHover = _useState2[0],
    setIsHover = _useState2[1];
  var addHover = function addHover(context) {
    if (readonly || disabled) return;
    setIsHover(true);
    onMouseenter === null || onMouseenter === void 0 || onMouseenter(context);
  };
  var cancelHover = function cancelHover(context) {
    if (readonly || disabled) return;
    setIsHover(false);
    onMouseleave === null || onMouseleave === void 0 || onMouseleave(context);
  };
  return {
    isHover: isHover,
    addHover: addHover,
    cancelHover: cancelHover
  };
}

var tagInputDefaultProps = {
  autoWidth: false,
  borderless: false,
  clearable: false,
  dragSort: false,
  excessTagsDisplayType: 'break-line',
  defaultInputValue: '',
  minCollapsedNum: 0,
  placeholder: undefined,
  readonly: false,
  size: 'medium',
  defaultValue: []
};

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TagInput = /*#__PURE__*/forwardRef(function (originalProps, ref) {
  var props = useDefaultProps(originalProps, tagInputDefaultProps);
  var _useConfig = useConfig(),
    prefix = _useConfig.classPrefix;
  var _useGlobalIcon = useGlobalIcon({
      CloseCircleFilledIcon: CircleX
    }),
    CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon;
  var excessTagsDisplayType = props.excessTagsDisplayType,
    autoWidth = props.autoWidth,
    borderless = props.borderless,
    readonly = props.readonly,
    disabled = props.disabled,
    clearable = props.clearable,
    placeholder = props.placeholder,
    valueDisplay = props.valueDisplay,
    label = props.label,
    inputProps = props.inputProps,
    size = props.size,
    tips = props.tips,
    status = props.status,
    suffixIcon = props.suffixIcon,
    suffix = props.suffix,
    prefixIcon = props.prefixIcon,
    maxRows = props.maxRows,
    onClick = props.onClick,
    onPaste = props.onPaste,
    _onFocus = props.onFocus,
    _onBlur = props.onBlur;
  var _useControlled = useControlled(props, 'inputValue', props.onInputChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    tInputValue = _useControlled2[0],
    setTInputValue = _useControlled2[1];
  var _useHover = useHover(props),
    isHover = _useHover.isHover,
    addHover = _useHover.addHover,
    cancelHover = _useHover.cancelHover;
  var _useDragSorter = useDragSorter(_objectSpread(_objectSpread({}, props), {}, {
      sortOnDraggable: props.dragSort,
      onDragOverCheck: {
        x: true,
        targetClassNameRegExp: new RegExp("^".concat(prefix, "-tag"))
      }
    })),
    getDragProps = _useDragSorter.getDragProps;
  var isCompositionRef = useRef(false);
  var _useTagScroll = useTagScroll(props),
    scrollToRight = _useTagScroll.scrollToRight,
    onWheel = _useTagScroll.onWheel,
    scrollToRightOnEnter = _useTagScroll.scrollToRightOnEnter,
    scrollToLeftOnLeave = _useTagScroll.scrollToLeftOnLeave,
    tagInputRef = _useTagScroll.tagInputRef;
  // handle tag add and remove
  var _useTagList = useTagList(_objectSpread(_objectSpread({}, props), {}, {
      getDragProps: getDragProps
    })),
    tagValue = _useTagList.tagValue,
    _onClose = _useTagList.onClose,
    onInnerEnter = _useTagList.onInnerEnter,
    onInputBackspaceKeyUp = _useTagList.onInputBackspaceKeyUp,
    clearAll = _useTagList.clearAll,
    renderLabel = _useTagList.renderLabel,
    onInputBackspaceKeyDown = _useTagList.onInputBackspaceKeyDown;
  var NAME_CLASS = "".concat(prefix, "-tag-input");
  var WITH_SUFFIX_ICON_CLASS = "".concat(prefix, "-tag-input__with-suffix-icon");
  var CLEAR_CLASS = "".concat(prefix, "-tag-input__suffix-clear");
  var BREAK_LINE_CLASS = "".concat(prefix, "-tag-input--break-line");
  var tagInputPlaceholder = !(tagValue !== null && tagValue !== void 0 && tagValue.length) ? placeholder : '';
  var showClearIcon = Boolean(!readonly && !disabled && clearable && isHover && (tagValue === null || tagValue === void 0 ? void 0 : tagValue.length));
  useImperativeHandle(ref, function () {
    return _objectSpread({}, tagInputRef.current || {});
  });
  var onInputCompositionstart = function onInputCompositionstart(value, context) {
    var _inputProps$onComposi;
    isCompositionRef.current = true;
    inputProps === null || inputProps === void 0 || (_inputProps$onComposi = inputProps.onCompositionstart) === null || _inputProps$onComposi === void 0 || _inputProps$onComposi.call(inputProps, value, context);
  };
  var onInputCompositionend = function onInputCompositionend(value, context) {
    var _inputProps$onComposi2;
    isCompositionRef.current = false;
    inputProps === null || inputProps === void 0 || (_inputProps$onComposi2 = inputProps.onCompositionend) === null || _inputProps$onComposi2 === void 0 || _inputProps$onComposi2.call(inputProps, value, context);
  };
  var onInputEnter = function onInputEnter(value, context) {
    setTInputValue('', {
      e: context.e,
      trigger: 'enter'
    });
    !isCompositionRef.current && onInnerEnter(value, context);
    scrollToRight();
  };
  var onInnerClick = function onInnerClick(context) {
    if (!props.disabled && !props.readonly) {
      var _tagInputRef$current, _tagInputRef$current$;
      (_tagInputRef$current = tagInputRef.current) === null || _tagInputRef$current === void 0 || (_tagInputRef$current = _tagInputRef$current.inputElement) === null || _tagInputRef$current === void 0 || (_tagInputRef$current$ = _tagInputRef$current.focus) === null || _tagInputRef$current$ === void 0 || _tagInputRef$current$.call(_tagInputRef$current);
    }
    onClick === null || onClick === void 0 || onClick(context);
  };
  var onClearClick = function onClearClick(e) {
    var _props$onClear;
    clearAll({
      e: e
    });
    setTInputValue('', {
      e: e,
      trigger: 'clear'
    });
    (_props$onClear = props.onClear) === null || _props$onClear === void 0 || _props$onClear.call(props, {
      e: e
    });
  };
  var suffixIconNode = showClearIcon ? /*#__PURE__*/React.createElement(CloseCircleFilledIcon, {
    className: CLEAR_CLASS,
    onClick: onClearClick
  }) : suffixIcon;

  // 自定义 Tag 节点
  var displayNode = isFunction(valueDisplay) ? valueDisplay({
    value: tagValue,
    onClose: function onClose(index) {
      return _onClose({
        index: index
      });
    }
  }) : valueDisplay;
  var isEmpty = !(Array.isArray(tagValue) && tagValue.length);
  var classes = [NAME_CLASS, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, BREAK_LINE_CLASS, excessTagsDisplayType === 'break-line'), WITH_SUFFIX_ICON_CLASS, !!suffixIconNode), "".concat(prefix, "-is-empty"), isEmpty), "".concat(prefix, "-tag-input--with-tag"), !isEmpty), "".concat(prefix, "-tag-input--max-rows"), excessTagsDisplayType === 'break-line' && maxRows), "".concat(prefix, "-tag-input--drag-sort"), props.dragSort && !disabled && !readonly), props.className];
  var maxRowsStyle = maxRows ? {
    '--max-rows': maxRows,
    '--tag-input-size': size
  } : {};
  return /*#__PURE__*/React.createElement(Input, _extends({
    ref: tagInputRef,
    value: tInputValue,
    onChange: function onChange(val, context) {
      setTInputValue(val, _objectSpread(_objectSpread({}, context), {}, {
        trigger: 'input'
      }));
    },
    autoWidth: true // 控制input_inner的宽度 设置为true让内部input不会提前换行
    ,
    onWheel: onWheel,
    size: size,
    borderless: borderless,
    readonly: readonly,
    disabled: disabled,
    label: renderLabel({
      displayNode: displayNode,
      label: label
    }),
    className: classNames(classes),
    style: _objectSpread(_objectSpread({}, props.style), maxRowsStyle),
    tips: tips,
    status: status,
    placeholder: tagInputPlaceholder,
    suffix: suffix,
    prefixIcon: prefixIcon,
    suffixIcon: suffixIconNode,
    showInput: !(inputProps !== null && inputProps !== void 0 && inputProps.readonly) || !tagValue || !(tagValue !== null && tagValue !== void 0 && tagValue.length),
    keepWrapperWidth: !autoWidth,
    onPaste: onPaste,
    onClick: onInnerClick,
    onEnter: onInputEnter,
    onKeydown: onInputBackspaceKeyDown,
    onKeyup: onInputBackspaceKeyUp,
    onMouseenter: function onMouseenter(context) {
      addHover(context);
      scrollToRightOnEnter();
    },
    onMouseleave: function onMouseleave(context) {
      cancelHover(context);
      scrollToLeftOnLeave();
    },
    onFocus: function onFocus(inputValue, context) {
      _onFocus === null || _onFocus === void 0 || _onFocus(tagValue, {
        e: context.e,
        inputValue: inputValue
      });
    },
    onBlur: function onBlur(inputValue, context) {
      if (tInputValue) {
        setTInputValue('', {
          e: context.e,
          trigger: 'blur'
        });
      }
      _onBlur === null || _onBlur === void 0 || _onBlur(tagValue, {
        e: context.e,
        inputValue: ''
      });
    },
    onCompositionstart: onInputCompositionstart,
    onCompositionend: onInputCompositionend
  }, inputProps));
});
TagInput.displayName = 'TagInput';

export { TagInput as default };
//# sourceMappingURL=TagInput.js.map
