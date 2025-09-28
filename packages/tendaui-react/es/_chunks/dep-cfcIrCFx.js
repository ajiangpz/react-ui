import { _ as _extends } from './dep-mO86zOh3.js';
import { _ as _objectWithoutProperties } from './dep-DcgYxvIK.js';
import { _ as _defineProperty } from './dep-Cwish4GD.js';
import React, { useRef, useState, useMemo, useEffect, useCallback, Children, isValidElement, cloneElement } from 'react';
import { c as classNames } from './dep-Cro9u0Fl.js';
import { g as get, q as isPlainObject, j as isEqual } from './dep-uPo9oRq0.js';
import { _ as _toConsumableArray } from './dep-CgyDw_YI.js';
import { O as OptionGroup } from './dep-B8QTo_0v.js';
import Option from '../select/Option.js';
import { u as useConfig } from './dep-u1x3x6MJ.js';
import { _ as _slicedToArray } from './dep-CzLhKWCf.js';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isSelectOptionGroup(option) {
  return !!option && 'group' in option && 'children' in option;
}
function setValueToOptionFormOptionDom(dom, valueToOption, keys) {
  var _dom$props = dom.props,
    value = _dom$props.value,
    label = _dom$props.label,
    children = _dom$props.children;
  // eslint-disable-next-line no-param-reassign
  valueToOption[value] = _objectSpread$1(_objectSpread$1({}, dom.props), {}, _defineProperty(_defineProperty({}, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value', value), (keys === null || keys === void 0 ? void 0 : keys.label) || 'label', label || children || value));
}

// 获取 value => option，用于快速基于 value 找到对应的 option
var getValueToOption = function getValueToOption(children, options, keys) {
  var valueToOption = {};

  // options 优先级高于 children
  if (Array.isArray(options)) {
    options.forEach(function (option) {
      if (isSelectOptionGroup(option)) {
        var _option$children;
        (_option$children = option.children) === null || _option$children === void 0 || _option$children.forEach(function (child) {
          valueToOption[get(child, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value')] = _objectSpread$1(_objectSpread$1({}, child), {}, {
            value: get(child, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value'),
            label: get(child, (keys === null || keys === void 0 ? void 0 : keys.label) || 'label')
          });
        });
      } else {
        valueToOption[get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value')] = _objectSpread$1(_objectSpread$1({}, option), {}, {
          value: get(option, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value'),
          label: get(option, (keys === null || keys === void 0 ? void 0 : keys.label) || 'label')
        });
      }
    });
    return valueToOption;
  }
  if (isPlainObject(children)) {
    if (children.type === Option) {
      setValueToOptionFormOptionDom(children, valueToOption, keys);
      return valueToOption;
    }
    if (children.type === OptionGroup) {
      var groupChildren = children.props.children;
      if (Array.isArray(groupChildren)) {
        groupChildren.forEach(function (item) {
          setValueToOptionFormOptionDom(item, valueToOption, keys);
        });
        return valueToOption;
      }
    }
  }

  /**
   * children如果存在ReactElement和map函数混写的情况，会出现嵌套数组
   */
  if (Array.isArray(children)) {
    var _handlerElement = function handlerElement(item) {
      if (item.type === Option) {
        setValueToOptionFormOptionDom(item, valueToOption, keys);
      }
      if (item.type === OptionGroup) {
        var _groupChildren = item.props.children;
        if (Array.isArray(_groupChildren)) {
          _groupChildren.forEach(function (groupItem) {
            setValueToOptionFormOptionDom(groupItem, valueToOption, keys);
          });
        }
      }
      if (Array.isArray(item)) {
        item.forEach(function (child) {
          _handlerElement(child);
        });
      }
    };
    children.forEach(function (item) {
      return _handlerElement(item);
    });
  }
  return valueToOption;
};

// 获取单选的 label
var getLabel = function getLabel(children, value, options, keys) {
  var selectedLabel = '';
  // 处理带 options 属性的情况
  if (Array.isArray(options)) {
    options.some(function (option) {
      if ([get(value, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value'), value].includes(option.value)) {
        selectedLabel = option.label;
        return true;
      }
      return false;
    });
    return selectedLabel;
  }
  if (isPlainObject(children)) {
    selectedLabel = children.props.label;
    if (children.type === OptionGroup) {
      var groupChildren = children.props.children;
      if (Array.isArray(groupChildren)) {
        groupChildren.some(function (item) {
          var selectedValue = isPlainObject(value) ? get(value, 'value') : value;
          if (isPlainObject(item.props) && item.props.value === selectedValue) {
            selectedLabel = item.props.label || item.props.children;
            return true;
          }
          return false;
        });
      }
    }
  }
  if (Array.isArray(children)) {
    children.some(function (item) {
      // 处理分组
      if (item.type === OptionGroup) {
        var _groupChildren2 = item.props.children;
        if (Array.isArray(_groupChildren2)) {
          var isSelected = _groupChildren2.some(function (item) {
            var selectedValue = isPlainObject(value) ? get(value, 'value') : value;
            if (isPlainObject(item.props) && item.props.value === selectedValue) {
              selectedLabel = item.props.label || item.props.children;
              return true;
            }
            return false;
          });
          return isSelected;
        }
      }
      var selectedValue = isPlainObject(value) ? get(value, 'value') : value;
      if (isPlainObject(item.props) && item.props.value === selectedValue) {
        selectedLabel = item.props.label || item.props.children;
        return true;
      }
      return false;
    });
  }
  return selectedLabel;
};
var getMultipleTags = function getMultipleTags(values, keys) {
  var tags = values.map(function (item) {
    return {
      label: get(item, (keys === null || keys === void 0 ? void 0 : keys.label) || 'label') || item.toString(),
      value: get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value') || item
    };
  });
  return tags;
};
var getSelectValueArr = function getSelectValueArr(values, activeValue, selected, valueType, keys, objVal) {
  // eslint-disable-next-line no-param-reassign
  values = Array.isArray(values) ? values : [];
  if (Array.isArray(values)) {
    var currentValues = _toConsumableArray(values);
    var isValueObj = valueType === 'object';
    if (selected) {
      currentValues = currentValues.filter(function (item) {
        if (isValueObj) {
          if (isPlainObject(activeValue)) {
            return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value') !== get(activeValue, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value');
          }
          return get(item, (keys === null || keys === void 0 ? void 0 : keys.value) || 'value') !== activeValue;
        }
        return item !== activeValue;
      });
    } else {
      var item = isValueObj ? objVal : activeValue;
      currentValues.push(item);
    }
    return currentValues;
  }
};

// 计算onChange事件回调的selectedOptions参数
var getSelectedOptions = function getSelectedOptions(value, multiple, valueType, keys, valueToOption, selectedValue) {
  var isObjectType = valueType === 'object';
  // 当前所有选中的选项
  var currentSelectedOptions = [];
  // 当前选中的选项
  var currentOption;
  // 全选值
  var allSelectedValue;
  // 所有可选项
  var tmpPropOptions = Object.values(valueToOption);
  if (multiple) {
    var _tmpPropOptions$filte, _currentSelectedOptio, _currentSelectedOptio2;
    currentSelectedOptions = isObjectType ? value : tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte = tmpPropOptions.filter) === null || _tmpPropOptions$filte === void 0 ? void 0 : _tmpPropOptions$filte.call(tmpPropOptions, function (v) {
      var _includes, _ref;
      return (_includes = (_ref = value).includes) === null || _includes === void 0 ? void 0 : _includes.call(_ref, v[(keys === null || keys === void 0 ? void 0 : keys.value) || 'value']);
    });
    allSelectedValue = isObjectType ? currentSelectedOptions : (_currentSelectedOptio = currentSelectedOptions) === null || _currentSelectedOptio === void 0 ? void 0 : _currentSelectedOptio.map(function (v) {
      return v[(keys === null || keys === void 0 ? void 0 : keys.value) || 'value'];
    });
    currentOption = isObjectType ? value.find(function (v) {
      return v[(keys === null || keys === void 0 ? void 0 : keys.value) || 'value'] === selectedValue;
    }) : (_currentSelectedOptio2 = currentSelectedOptions) === null || _currentSelectedOptio2 === void 0 ? void 0 : _currentSelectedOptio2.find(function (option) {
      return option[(keys === null || keys === void 0 ? void 0 : keys.value) || 'value'] === selectedValue;
    });
  } else {
    var _tmpPropOptions$filte2, _currentSelectedOptio3;
    currentSelectedOptions = isObjectType ? [value] : (tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte2 = tmpPropOptions.filter) === null || _tmpPropOptions$filte2 === void 0 ? void 0 : _tmpPropOptions$filte2.call(tmpPropOptions, function (v) {
      return value === v[(keys === null || keys === void 0 ? void 0 : keys.value) || 'value'];
    })) || [];
    allSelectedValue = currentSelectedOptions;
    currentOption = isObjectType ? value : (_currentSelectedOptio3 = currentSelectedOptions) === null || _currentSelectedOptio3 === void 0 ? void 0 : _currentSelectedOptio3.find(function (option) {
      return option[(keys === null || keys === void 0 ? void 0 : keys.value) || 'value'] === selectedValue;
    });
  }
  return {
    currentSelectedOptions: currentSelectedOptions,
    currentOption: currentOption,
    allSelectedValue: allSelectedValue
  };
};

var requestAnimationFrame = (typeof window === 'undefined' ? false : window.requestAnimationFrame) || function (cb) {
  return setTimeout(cb, 16.6);
};
var useVirtualScroll = function useVirtualScroll(container, params) {
  var data = params.data,
    scroll = params.scroll;
  var dataRef = useRef(data);

  /** 注意测试：数据长度为空；数据长度小于表格高度等情况。即期望只有数据量达到一定程度才允许开启虚拟滚动 */
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    visibleData = _useState2[0],
    setVisibleData = _useState2[1];
  // 滚动过程中表格顶部占位距离
  var _useState3 = useState(function () {
      return ((data === null || data === void 0 ? void 0 : data.length) || 0) * ((scroll === null || scroll === void 0 ? void 0 : scroll.rowHeight) || 50);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    translateY = _useState4[0],
    setTranslateY = _useState4[1];
  // 滚动高度，用于显示滚动条
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    scrollHeight = _useState6[0],
    setScrollHeight = _useState6[1];
  var trScrollTopHeightList = useRef([]);
  // 已经通过节点渲染计算出来的各自行高
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    trHeightList = _useState8[0],
    setTrHeightList = _useState8[1];
  var containerHeight = useRef(0);
  var _useState9 = useState(function () {
      return [0, ((scroll === null || scroll === void 0 ? void 0 : scroll.bufferSize) || 10) * 3];
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    startAndEndIndex = _useState0[0],
    setStartAndEndIndex = _useState0[1];

  // 设置初始值
  var tScroll = useMemo(function () {
    var _scroll$isFixedRowHei, _scroll$fixedRows;
    if (!scroll) return {};
    return {
      bufferSize: scroll.bufferSize || 10,
      isFixedRowHeight: (_scroll$isFixedRowHei = scroll.isFixedRowHeight) !== null && _scroll$isFixedRowHei !== void 0 ? _scroll$isFixedRowHei : false,
      rowHeight: scroll.rowHeight || 47,
      threshold: scroll.threshold || 100,
      type: scroll.type,
      fixedRows: (_scroll$fixedRows = scroll.fixedRows) !== null && _scroll$fixedRows !== void 0 ? _scroll$fixedRows : [0, 0]
    };
  }, [scroll]);

  // 当前场景是否满足开启虚拟滚动的条件
  var isVirtualScroll = useMemo(function () {
    return tScroll.type === 'virtual' && tScroll.threshold < data.length;
  }, [tScroll, data]);
  var getTrScrollTopHeightList = function getTrScrollTopHeightList(trHeightList) {
    var list = [];
    // 大数据场景不建议使用 forEach 一类函数迭代
    // 当前行滚动高度 = 上一行滚动高度 + 当前行高度
    for (var i = 0, len = data.length; i < len; i++) {
      list[i] = (list[i - 1] || 0) + (trHeightList[i] || tScroll.rowHeight);
    }
    return list;
  };
  var updateVisibleData = function updateVisibleData(trScrollTopHeightList, scrollTop) {
    var currentIndex = -1;
    // 获取当前滚动到哪一个元素（大数据场景不建议使用 forEach 一类函数迭代）
    for (var i = 0, len = trScrollTopHeightList.length; i < len; i++) {
      if (trScrollTopHeightList[i] >= scrollTop) {
        currentIndex = i;
        break;
      }
    }
    var lastIndex = trScrollTopHeightList.length;
    var containerCurrentHeight = containerHeight.current || container.current.getBoundingClientRect().height;
    var scrollBottom = scrollTop + containerCurrentHeight;
    // 获取当前视窗的最后一个元素（大数据场景不建议使用 forEach 一类函数迭代）
    for (var _i = currentIndex, _len = trScrollTopHeightList.length; _i < _len; _i++) {
      if (trScrollTopHeightList[_i] >= scrollBottom) {
        lastIndex = _i;
        break;
      }
    }
    if (currentIndex < 0) return;
    var startIndex = Math.max(currentIndex - tScroll.bufferSize, 0);
    var endIndex = Math.min(lastIndex + tScroll.bufferSize, trScrollTopHeightList.length);

    // 计算固定行情况
    var fixedRows = tScroll.fixedRows;
    var _fixedRows = _slicedToArray(fixedRows, 2),
      fixedStart = _fixedRows[0],
      fixedEnd = _fixedRows[1];
    var fixedStartData = fixedStart ? data.slice(0, fixedStart) : [];
    if (fixedStart && startIndex < fixedStart) {
      fixedStartData = fixedStartData.slice(0, startIndex);
    }
    var fixedEndData = fixedEnd ? data.slice(data.length - fixedEnd) : [];
    var bottomStartIndex = endIndex - data.length + 1 + (fixedEnd !== null && fixedEnd !== void 0 ? fixedEnd : 0);
    if (fixedEnd && bottomStartIndex > 0) {
      fixedEndData = fixedEndData.slice(bottomStartIndex);
    }
    if (startAndEndIndex.join() !== [startIndex, endIndex].join() && startIndex >= 0) {
      var tmpVisibleData = fixedStartData.concat(data.slice(startIndex, endIndex)).concat(fixedEndData);
      setVisibleData(tmpVisibleData);
      var lastScrollTop = trScrollTopHeightList[startIndex - 1];
      var top = lastScrollTop > 0 ? lastScrollTop : 0;
      var stickyHeight = trScrollTopHeightList[Math.min(startIndex, fixedStart) - 1] || 0;
      setTranslateY(top - stickyHeight);
      setStartAndEndIndex([startIndex, endIndex]);
    }
  };

  // 仅非固定高度场景需要
  var handleRowMounted = function handleRowMounted(rowData) {
    if (!isVirtualScroll || !rowData || tScroll.isFixedRowHeight || !(container !== null && container !== void 0 && container.current)) return;
    var trHeight = rowData.ref.offsetHeight;
    // eslint-disable-next-line
    var rowIndex = rowData.data.__VIRTUAL_SCROLL_INDEX;
    var newTrHeightList = trHeightList;
    if (newTrHeightList[rowIndex] !== trHeight) {
      newTrHeightList[rowIndex] = trHeight;
      setTrHeightList(newTrHeightList);
      var scrollTopHeightList = getTrScrollTopHeightList(newTrHeightList);
      trScrollTopHeightList.current = scrollTopHeightList;
      var lastIndex = scrollTopHeightList.length - 1;
      setScrollHeight(scrollTopHeightList[lastIndex] - containerHeight.current);
      updateVisibleData(scrollTopHeightList, container.current.scrollTop);
    }
  };
  var handleScroll = function handleScroll() {
    if (!isVirtualScroll) return;
    updateVisibleData(trScrollTopHeightList.current, container.current.scrollTop);
  };
  var addIndexToData = function addIndexToData(data) {
    data.forEach(function (item, index) {
      Reflect.set(item, '__VIRTUAL_SCROLL_INDEX', index);
    });
  };
  var updateScrollTop = function updateScrollTop(_ref) {
    var _container$current;
    var index = _ref.index,
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      behavior = _ref.behavior;
    var scrollTop = trScrollTopHeightList.current[index] - top;
    (_container$current = container.current) === null || _container$current === void 0 || _container$current.scrollTo({
      top: scrollTop,
      behavior: behavior || 'auto'
    });
  };

  /**
   * 滚动到指定元素（对外暴露的方法，谨慎修改）
   */
  var scrollToElement = function scrollToElement(p) {
    updateScrollTop(p);
    if (!tScroll.isFixedRowHeight) {
      requestAnimationFrame(function () {
        var _p$time;
        var duration = (_p$time = p.time) !== null && _p$time !== void 0 ? _p$time : 60;
        var timer = setTimeout(function () {
          updateScrollTop(p);
          clearTimeout(timer);
        }, duration);
      });
    }
  };

  // 固定高度场景，可直接通过数据长度计算出最大滚动高度
  useEffect(function () {
    if (!isVirtualScroll) {
      trScrollTopHeightList.current = getTrScrollTopHeightList(trHeightList);
      return;
    }

    // 给数据添加下标
    addIndexToData(data);
    var scrollTopHeightList = trScrollTopHeightList.current;
    var dataChanged = !isEqual(dataRef.current, data);
    if ((scrollTopHeightList === null || scrollTopHeightList === void 0 ? void 0 : scrollTopHeightList.length) === (data === null || data === void 0 ? void 0 : data.length) && !dataChanged) {
      // 正常滚动时更新可见数据
      var lastIndex = scrollTopHeightList.length - 1;
      setScrollHeight(scrollTopHeightList[lastIndex]);
      updateVisibleData(scrollTopHeightList, container.current.scrollTop);
    } else {
      var _container$current2;
      /**
      /* 进入这个分支的场景可能有：
       * - 初始化
       * - 从非虚拟滚动切换到虚拟滚动
       * - 外部数据动态更新（长度变化、内容结构变化等）
       */
      dataRef.current = data;
      setScrollHeight(data.length * tScroll.rowHeight);

      // 如果之前存在滚动，基于原先数据计算位置
      var currentScrollTop = ((_container$current2 = container.current) === null || _container$current2 === void 0 ? void 0 : _container$current2.scrollTop) || 0;
      var currentIndex = Math.floor(currentScrollTop / tScroll.rowHeight);
      var prevScrollTopHeightList = trScrollTopHeightList.current;
      for (var i = 0; i < (prevScrollTopHeightList === null || prevScrollTopHeightList === void 0 ? void 0 : prevScrollTopHeightList.length); i++) {
        if (prevScrollTopHeightList[i] >= currentScrollTop) {
          currentIndex = i;
          break;
        }
      }
      var startIndex = Math.max(currentIndex - tScroll.bufferSize, 0);
      var visibleCount = Math.min(tScroll.bufferSize * 3, data.length);
      var endIndex = Math.min(startIndex + visibleCount, data.length);
      var tmpData = data.slice(startIndex, endIndex);
      var _translateY = startIndex * tScroll.rowHeight;
      if ((prevScrollTopHeightList === null || prevScrollTopHeightList === void 0 ? void 0 : prevScrollTopHeightList.length) > 0 && startIndex > 0) {
        var prevHeight = prevScrollTopHeightList[Math.min(startIndex - 1, prevScrollTopHeightList.length - 1)] || 0;
        _translateY = Math.max(0, prevHeight);
      }
      setVisibleData(tmpData);
      setTranslateY(_translateY);
    }
    var timer = setTimeout(function () {
      if (container.current) {
        var tmpContainerHeight = container.current.getBoundingClientRect().height;
        containerHeight.current = tmpContainerHeight;
        var _scrollTopHeightList = getTrScrollTopHeightList(trHeightList);
        trScrollTopHeightList.current = _scrollTopHeightList;
        clearTimeout(timer);
      }
    }, 1);
  },
  // eslint-disable-next-line
  [container, data, tScroll, isVirtualScroll, startAndEndIndex, trHeightList]);
  return {
    visibleData: visibleData,
    translateY: translateY,
    scrollHeight: scrollHeight,
    isVirtualScroll: isVirtualScroll,
    handleScroll: handleScroll,
    handleRowMounted: handleRowMounted,
    scrollToElement: scrollToElement
  };
};

var usePanelVirtualScroll = function usePanelVirtualScroll(_ref) {
  var popupContentRef = _ref.popupContentRef,
    scroll = _ref.scroll,
    options = _ref.options,
    size = _ref.size;
  var scrollThreshold = (scroll === null || scroll === void 0 ? void 0 : scroll.threshold) || 100;
  var scrollType = scroll === null || scroll === void 0 ? void 0 : scroll.type;
  var isVirtual = useMemo(function () {
    return scrollType === 'virtual' && (options === null || options === void 0 ? void 0 : options.length) > scrollThreshold;
  }, [scrollType, scrollThreshold, options]);
  var scrollParams = useMemo(function () {
    var heightMap = {
      small: 20,
      medium: 28,
      large: 36
    };
    var rowHeight = heightMap[size] || 28;
    return {
      type: 'virtual',
      isFixedRowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.isFixedRowHeight) || false,
      rowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.rowHeight) || rowHeight,
      bufferSize: (scroll === null || scroll === void 0 ? void 0 : scroll.bufferSize) || 20,
      threshold: scrollThreshold
    };
  }, [scroll, scrollThreshold, size]);
  var _useVirtualScroll = useVirtualScroll(popupContentRef, {
      data: options || [],
      scroll: scrollParams
    }),
    _useVirtualScroll$vis = _useVirtualScroll.visibleData,
    visibleData = _useVirtualScroll$vis === void 0 ? null : _useVirtualScroll$vis,
    _useVirtualScroll$han = _useVirtualScroll.handleScroll,
    handleVirtualScroll = _useVirtualScroll$han === void 0 ? null : _useVirtualScroll$han,
    _useVirtualScroll$scr = _useVirtualScroll.scrollHeight,
    scrollHeight = _useVirtualScroll$scr === void 0 ? null : _useVirtualScroll$scr,
    _useVirtualScroll$tra = _useVirtualScroll.translateY,
    translateY = _useVirtualScroll$tra === void 0 ? null : _useVirtualScroll$tra,
    _useVirtualScroll$han2 = _useVirtualScroll.handleRowMounted,
    handleRowMounted = _useVirtualScroll$han2 === void 0 ? null : _useVirtualScroll$han2;
  var lastScrollY = -1;
  var onInnerVirtualScroll = useCallback(function (e) {
    if (!isVirtual) {
      return;
    }
    var target = e.target;
    var top = target.scrollTop;
    // 排除横向滚动触发的纵向虚拟滚动计算
    if (Math.abs(lastScrollY - top) > 5) {
      handleVirtualScroll();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastScrollY = top;
    } else {
      lastScrollY = -1;
    }
  }, []);

  // 监听popup滚动 处理虚拟滚动时的virtualData变化
  useEffect(function () {
    var popupContentDom = popupContentRef === null || popupContentRef === void 0 ? void 0 : popupContentRef.current;
    if (isVirtual) {
      var _popupContentDom$addE;
      popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$addE = popupContentDom.addEventListener) === null || _popupContentDom$addE === void 0 || _popupContentDom$addE.call(popupContentDom, 'scroll', onInnerVirtualScroll);
    }
    return function () {
      // 卸载时取消监听
      if (isVirtual) {
        var _popupContentDom$remo;
        popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$remo = popupContentDom.removeEventListener) === null || _popupContentDom$remo === void 0 || _popupContentDom$remo.call(popupContentDom, 'scroll', onInnerVirtualScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVirtual, onInnerVirtualScroll, popupContentRef.current]);
  var cursorStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    transition: 'transform 0.2s',
    transform: "translate(0, ".concat(scrollHeight, "px)"),
    MsTransform: "translate(0, ".concat(scrollHeight, "px)"),
    MozTransform: "translate(0, ".concat(scrollHeight, "px)"),
    WebkitTransform: "translate(0, ".concat(scrollHeight, "px)")
  };
  var panelStyle = {
    transform: "translate(0, ".concat(translateY, "px)"),
    MsTransform: "translate(0, ".concat(translateY, "px)"),
    MozTransform: "translate(0, ".concat(translateY, "px)"),
    WebkitTransform: "translate(0, ".concat(translateY, "px)")
  };
  return {
    scrollHeight: scrollHeight,
    translateY: translateY,
    visibleData: visibleData,
    handleRowMounted: handleRowMounted,
    isVirtual: isVirtual,
    cursorStyle: cursorStyle,
    panelStyle: panelStyle
  };
};

var _excluded = ["group", "divider"],
  _excluded2 = ["value", "label", "disabled", "content", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PopupContent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
    size = props.size,
    max = props.max,
    multiple = props.multiple,
    showPopup = props.showPopup,
    setShowPopup = props.setShowPopup,
    empty = props.empty,
    loadingText = props.loadingText,
    loading = props.loading,
    valueType = props.valueType,
    children = props.children,
    keys = props.keys,
    panelTopContent = props.panelTopContent,
    panelBottomContent = props.panelBottomContent,
    onChange = props.onChange,
    onCheckAllChange = props.onCheckAllChange,
    getPopupInstance = props.getPopupInstance,
    propsOptions = props.options,
    propsScroll = props.scroll;

  // 国际化文本初始化
  // const [local, t] = useLocaleReceiver('select');
  // const emptyText = t(local.empty);
  var popupContentRef = useRef(null);
  popupContentRef.current = getPopupInstance();
  var _usePanelVirtualScrol = usePanelVirtualScroll({
      popupContentRef: popupContentRef,
      scroll: propsScroll,
      options: propsOptions,
      size: size
    }),
    visibleData = _usePanelVirtualScrol.visibleData,
    handleRowMounted = _usePanelVirtualScrol.handleRowMounted,
    isVirtual = _usePanelVirtualScrol.isVirtual,
    panelStyle = _usePanelVirtualScrol.panelStyle,
    cursorStyle = _usePanelVirtualScrol.cursorStyle;

  // 全部可选选项
  var selectableOptions = useMemo(function () {
    var uniqueOptions = {};
    propsOptions === null || propsOptions === void 0 || propsOptions.forEach(function (option) {
      if (option.group) {
        option.children.forEach(function (item) {
          if (!item.disabled && !item.checkAll) {
            uniqueOptions[item.value] = item;
          }
        });
      } else if (!option.disabled && !option.checkAll) {
        uniqueOptions[option.value] = option;
      }
    });
    return Object.values(uniqueOptions);
  }, [propsOptions]);
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  if (!children && !propsOptions) {
    return null;
  }
  var onSelect = function onSelect(selectedValue, _ref) {
    var label = _ref.label,
      selected = _ref.selected,
      event = _ref.event,
      restData = _ref.restData;
    var isValObj = valueType === 'object';
    var objVal = {};
    if (isValObj) {
      objVal = _objectSpread({}, restData);
      if (!(keys !== null && keys !== void 0 && keys.label)) {
        Object.assign(objVal, {
          label: label
        });
      }
      if (!(keys !== null && keys !== void 0 && keys.value)) {
        Object.assign(objVal, {
          value: selectedValue
        });
      }
    }
    if (!Object.keys(objVal).length) {
      Object.assign(objVal, _defineProperty(_defineProperty({}, (keys === null || keys === void 0 ? void 0 : keys.label) || 'label', label), (keys === null || keys === void 0 ? void 0 : keys.value) || 'value', selectedValue));
    }
    if (multiple) {
      // calc multiple select values
      var values = getSelectValueArr(value, selectedValue, selected, valueType, keys, objVal);
      onChange(values, {
        label: label,
        value: selectedValue,
        e: event,
        trigger: selected ? 'uncheck' : 'check'
      });
    } else {
      // calc single select value
      var selectVal = valueType === 'object' ? objVal : selectedValue;
      if (!isEqual(value, selectVal)) {
        onChange(selectVal, {
          label: label,
          value: selectVal,
          e: event,
          trigger: 'check'
        });
      }
      setShowPopup(!showPopup);
    }
  };
  var childrenWithProps = Children.map(children, function (child) {
    if (/*#__PURE__*/isValidElement(child)) {
      var addedProps = {
        size: size,
        max: max,
        multiple: multiple,
        selectedValue: value,
        onSelect: onSelect
      };
      return /*#__PURE__*/cloneElement(child, _objectSpread({}, addedProps));
    }
    return child;
  });

  // 渲染 options
  var _renderOptions = function renderOptions(options) {
    if (options) {
      // 通过 options API配置的
      return /*#__PURE__*/React.createElement("ul", {
        className: "".concat(classPrefix, "-select__list")
      }, options.map(function (item, index) {
        var _ref2 = item,
          group = _ref2.group,
          divider = _ref2.divider,
          rest = _objectWithoutProperties(_ref2, _excluded);
        if (group) {
          return /*#__PURE__*/React.createElement(OptionGroup, {
            label: group,
            divider: divider,
            key: index
          }, _renderOptions(rest.children));
        }
        var _ref3 = item,
          optionValue = _ref3.value,
          label = _ref3.label,
          disabled = _ref3.disabled,
          content = _ref3.content,
          children = _ref3.children,
          restData = _objectWithoutProperties(_ref3, _excluded2);
        return /*#__PURE__*/React.createElement(Option, _extends({
          key: index,
          max: max,
          label: label,
          value: optionValue,
          onSelect: onSelect,
          selectedValue: value,
          optionLength: selectableOptions.length,
          multiple: multiple,
          size: size,
          disabled: disabled,
          restData: restData,
          keys: keys,
          content: content,
          onCheckAllChange: onCheckAllChange,
          onRowMounted: handleRowMounted
        }, isVirtual ? {
          isVirtual: isVirtual,
          bufferSize: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.bufferSize,
          scrollType: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.type
        } : {}, restData), children);
      }));
    }
    return /*#__PURE__*/React.createElement("ul", {
      className: "".concat(classPrefix, "-select__list")
    }, childrenWithProps);
  };
  var isEmpty = Array.isArray(childrenWithProps) && !childrenWithProps.length || propsOptions && propsOptions.length === 0;
  var renderPanel = function renderPanel(renderedOptions, extraStyle) {
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: classNames("".concat(classPrefix, "-select__dropdown-inner"), _defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix, "-select__dropdown-inner--size-s"), size === 'small'), "".concat(classPrefix, "-select__dropdown-inner--size-l"), size === 'large'), "".concat(classPrefix, "-select__dropdown-inner--size-m"), size === 'medium')),
      style: extraStyle
    }, loading && /*#__PURE__*/React.createElement("div", {
      className: "".concat(classPrefix, "-select__loading-tips")
    }, loadingText), !loading && isEmpty && /*#__PURE__*/React.createElement("div", {
      className: "".concat(classPrefix, "-select__empty")
    }, empty), !loading && !isEmpty && _renderOptions(renderedOptions));
  };
  if (isVirtual) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, panelTopContent, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: cursorStyle
    }), renderPanel(visibleData, panelStyle)), panelBottomContent);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, panelTopContent, renderPanel(propsOptions), panelBottomContent);
});

export { PopupContent as P, getSelectValueArr as a, getSelectedOptions as b, getValueToOption as g };
//# sourceMappingURL=dep-cfcIrCFx.js.map
