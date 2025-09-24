import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { TableHead } from './TableHead.js';
import { TableBody } from './TableBody.js';
import { T as TableContext } from '../_chunks/dep-DeJ3zmb2.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/typeof';
import './Checkbox.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/toConsumableArray';

function useTable(props) {
  var _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? "id" : _props$rowKey,
    onSort = props.onSort;
  var _useState = reactExports.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    sortState = _useState2[0],
    setSortState = _useState2[1];
  var getRowKey = reactExports.useCallback(function (record) {
    var key = rowKey;
    if (typeof key === "function") {
      return key(record);
    }
    return record[key];
  }, [rowKey]);
  var handleSort = reactExports.useCallback(function (key) {
    var newOrder;
    if ((sortState === null || sortState === void 0 ? void 0 : sortState.key) === key) {
      if (sortState.order === "asc") {
        newOrder = "desc";
      } else if (sortState.order === "desc") {
        newOrder = void 0;
      } else {
        newOrder = "asc";
      }
    } else {
      newOrder = "asc";
    }
    setSortState(newOrder ? {
      key: key,
      order: newOrder
    } : void 0);
    if (newOrder) {
      onSort === null || onSort === void 0 || onSort(key, newOrder);
    }
  }, [sortState, onSort]);
  return {
    sortState: sortState,
    handleSort: handleSort,
    getRowKey: getRowKey
  };
}

function useVirtualScroll(totalCount, containerHeight, config) {
  var _useState = reactExports.useState({
      startIndex: 0,
      endIndex: 0,
      paddingTop: 0,
      paddingBottom: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var updateVirtualScroll = reactExports.useCallback(function (scrollTop) {
    if (!config || !containerHeight) {
      setState({
        startIndex: 0,
        endIndex: totalCount - 1,
        paddingTop: 0,
        paddingBottom: 0
      });
      return;
    }
    var rowHeight = config.rowHeight,
      _config$overscan = config.overscan,
      overscan = _config$overscan === void 0 ? 3 : _config$overscan;
    var visibleCount = Math.ceil(containerHeight / rowHeight);
    var startIndex = Math.floor(scrollTop / rowHeight);
    startIndex = Math.max(0, startIndex - overscan);
    var endIndex = startIndex + visibleCount + 2 * overscan;
    endIndex = Math.min(totalCount - 1, endIndex);
    setState({
      startIndex: startIndex,
      endIndex: endIndex,
      paddingTop: 0,
      paddingBottom: 0
    });
  }, [config, containerHeight, totalCount]);
  reactExports.useEffect(function () {
    updateVirtualScroll(0);
  }, [updateVirtualScroll]);
  return {
    virtualState: state,
    updateVirtualScroll: updateVirtualScroll,
    totalHeight: config ? totalCount * config.rowHeight : void 0
  };
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DataTable = /*#__PURE__*/reactExports.forwardRef(function (props, ref) {
  var columns = props.columns,
    dataSource = props.dataSource,
    loading = props.loading,
    height = props.height,
    className = props.className,
    onRowClick = props.onRowClick,
    rowSelection = props.rowSelection,
    _props$rowKey = props.rowKey,
    rowKey = _props$rowKey === void 0 ? "id" : _props$rowKey,
    stickyHeader = props.stickyHeader,
    virtualScrollConfig = props.virtualScroll,
    scroll = props.scroll;
  var scrollContainerRef = reactExports.useRef(null);
  var containerHeight = typeof (scroll === null || scroll === void 0 ? void 0 : scroll.y) === "number" ? scroll.y : typeof height === "number" ? height : void 0;
  var _useTable = useTable(props),
    sortState = _useTable.sortState,
    handleSort = _useTable.handleSort,
    getRowKey = _useTable.getRowKey;
  var _useVirtualScroll = useVirtualScroll(dataSource.length, containerHeight, virtualScrollConfig),
    virtualState = _useVirtualScroll.virtualState,
    updateVirtualScroll = _useVirtualScroll.updateVirtualScroll;
  var handleScroll = reactExports.useCallback(function (e) {
    var scrollTop = e.currentTarget.scrollTop;
    updateVirtualScroll(scrollTop);
  }, [updateVirtualScroll]);
  var contextValue = reactExports.useMemo(function () {
    return {
      columns: columns,
      dataSource: dataSource,
      rowKey: rowKey,
      rowSelection: rowSelection,
      currentSortKey: sortState === null || sortState === void 0 ? void 0 : sortState.key,
      sortOrder: sortState === null || sortState === void 0 ? void 0 : sortState.order,
      setSort: handleSort,
      getRowKey: getRowKey,
      onRowClick: onRowClick,
      stickyHeader: stickyHeader,
      columnWidths: columns.map(function (column) {
        if (column.width) return column.width;
        return "".concat(100 / columns.length, "%");
      }),
      virtualScroll: virtualState
    };
  }, [columns, dataSource, rowKey, rowSelection, sortState, handleSort, getRowKey, onRowClick, stickyHeader, virtualState]);
  var tableContainerStyle = reactExports.useMemo(function () {
    var style = {};
    if (scroll !== null && scroll !== void 0 && scroll.y) {
      style.maxHeight = scroll.y;
      style.overflowY = "auto";
    }
    if (scroll !== null && scroll !== void 0 && scroll.x) {
      style.minWidth = scroll.x;
    }
    return style;
  }, [scroll]);
  var tableStyle = reactExports.useMemo(function () {
    var style = {};
    if (scroll !== null && scroll !== void 0 && scroll.x) {
      style.width = scroll.x;
      style.maxWidth = "none";
    }
    return style;
  }, [scroll]);
  return /* @__PURE__ */React.createElement("div", {
    ref: ref,
    className: clsx("-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900", className)
  }, /* @__PURE__ */React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */React.createElement("div", {
    className: "flow-root"
  }, /* @__PURE__ */React.createElement("div", {
    className: "relative"
  }, loading && /* @__PURE__ */React.createElement("div", {
    className: "absolute inset-0 bg-white/75 dark:bg-zinc-900/75 flex items-center justify-center z-50"
  }, /* @__PURE__ */React.createElement("div", {
    className: "animate-spin rounded-full h-8 w-8 border-4 border-primary-600 border-t-transparent"
  })), /* @__PURE__ */React.createElement(TableContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */React.createElement("div", {
    className: "w-full relative"
  }, /* @__PURE__ */React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */React.createElement("table", {
    className: "min-w-full text-left text-sm/6 text-zinc-950 dark:text-white"
  }, /* @__PURE__ */React.createElement("colgroup", null, rowSelection && /* @__PURE__ */React.createElement("col", {
    className: "w-12"
  }), contextValue.columnWidths.map(function (width, index) {
    return /* @__PURE__ */React.createElement("col", {
      key: index,
      style: {
        width: width
      }
    });
  })), /* @__PURE__ */React.createElement(TableHead, null))), /* @__PURE__ */React.createElement("div", {
    ref: scrollContainerRef,
    className: clsx("w-full overflow-y-auto", "scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent hover:scrollbar-thumb-zinc-400 dark:hover:scrollbar-thumb-zinc-500"),
    style: _objectSpread(_objectSpread({}, tableContainerStyle), {}, {
      maxHeight: containerHeight ? "".concat(containerHeight, "px") : void 0
      // 减去表头高度
    }),
    onScroll: handleScroll
  }, /* @__PURE__ */React.createElement("table", {
    className: "min-w-full text-left text-sm/6 text-zinc-950 dark:text-white",
    style: tableStyle
  }, /* @__PURE__ */React.createElement("colgroup", null, rowSelection && /* @__PURE__ */React.createElement("col", {
    className: "w-12"
  }), contextValue.columnWidths.map(function (width, index) {
    return /* @__PURE__ */React.createElement("col", {
      key: index,
      style: {
        width: width
      }
    });
  })), /* @__PURE__ */React.createElement(TableBody, null)))))))));
});

export { DataTable };
//# sourceMappingURL=Table.js.map
