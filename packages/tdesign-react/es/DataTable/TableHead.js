import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import { T as TableContext } from '../_chunks/dep-DeJ3zmb2.js';
import { Checkbox } from './Checkbox.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/objectWithoutProperties';

var TableHead = function TableHead() {
  var _useContext = reactExports.useContext(TableContext),
    columns = _useContext.columns,
    rowSelection = _useContext.rowSelection,
    currentSortKey = _useContext.currentSortKey,
    sortOrder = _useContext.sortOrder,
    setSort = _useContext.setSort,
    dataSource = _useContext.dataSource,
    getRowKey = _useContext.getRowKey;
  var _useMemo = reactExports.useMemo(function () {
      if (!rowSelection || !dataSource.length) {
        return {
          checked: false,
          indeterminate: false
        };
      }
      var selectedRowKeys = rowSelection.selectedRowKeys,
        getCheckboxProps = rowSelection.getCheckboxProps;
      var availableKeys = dataSource.filter(function (record) {
        var _getCheckboxProps;
        return !(getCheckboxProps !== null && getCheckboxProps !== void 0 && (_getCheckboxProps = getCheckboxProps(record)) !== null && _getCheckboxProps !== void 0 && _getCheckboxProps.disabled);
      }).map(getRowKey);
      if (!availableKeys.length) {
        return {
          checked: false,
          indeterminate: false
        };
      }
      var selectedAvailableKeys = selectedRowKeys.filter(function (key) {
        return availableKeys.includes(key);
      });
      return {
        checked: selectedAvailableKeys.length === availableKeys.length,
        indeterminate: selectedAvailableKeys.length > 0 && selectedAvailableKeys.length < availableKeys.length
      };
    }, [rowSelection, dataSource, getRowKey]),
    allChecked = _useMemo.checked,
    indeterminate = _useMemo.indeterminate;
  var handleSelectAll = reactExports.useCallback(function (checked) {
    if (!rowSelection) return;
    var onChange = rowSelection.onChange,
      getCheckboxProps = rowSelection.getCheckboxProps;
    if (!onChange) return;
    var availableRecords = dataSource.filter(function (record) {
      var _getCheckboxProps2;
      return !(getCheckboxProps !== null && getCheckboxProps !== void 0 && (_getCheckboxProps2 = getCheckboxProps(record)) !== null && _getCheckboxProps2 !== void 0 && _getCheckboxProps2.disabled);
    });
    var newSelectedKeys = checked ? availableRecords.map(getRowKey) : [];
    onChange(newSelectedKeys, availableRecords);
  }, [rowSelection, dataSource, getRowKey]);
  var renderSelectionCell = reactExports.useCallback(function () {
    if (!rowSelection) return null;
    return /* @__PURE__ */React.createElement("th", {
      key: "selection",
      className: clsx("border-b border-b-zinc-950/10 px-6 py-4 font-medium first:pl-6 last:pr-6 dark:border-b-white/10", "bg-white dark:bg-zinc-900", "w-14")
    }, /* @__PURE__ */React.createElement("div", {
      className: "flex items-center justify-center h-5"
    }, /* @__PURE__ */React.createElement(Checkbox, {
      checked: allChecked,
      indeterminate: indeterminate,
      onChange: handleSelectAll
    })));
  }, [rowSelection, allChecked, indeterminate, handleSelectAll]);
  return /* @__PURE__ */React.createElement("thead", {
    className: "text-zinc-500 dark:text-zinc-400"
  }, /* @__PURE__ */React.createElement("tr", null, renderSelectionCell(), columns.map(function (column, index) {
    var baseClasses = clsx("border-b border-b-zinc-950/10 px-6 py-4 font-medium first:pl-6 last:pr-6 dark:border-b-white/10", "bg-white dark:bg-zinc-900", "text-left", column.sorter && "cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-200");
    return /* @__PURE__ */React.createElement("th", {
      key: column.key || index,
      onClick: function onClick() {
        return column.sorter && (setSort === null || setSort === void 0 ? void 0 : setSort(column.key));
      },
      className: baseClasses
    }, /* @__PURE__ */React.createElement("div", {
      className: "flex items-center gap-3 h-5"
    }, column.title, column.sorter && currentSortKey === column.key && /* @__PURE__ */React.createElement("span", {
      className: "text-primary-500 ml-auto"
    }, sortOrder === "asc" ? "\u2191" : "\u2193")));
  })));
};
TableHead.displayName = "TableHead";

export { TableHead };
//# sourceMappingURL=TableHead.js.map
