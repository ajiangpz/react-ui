import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { r as reactExports, R as React } from '../_chunks/dep-C52Ear6B.js';
import { T as TableContext } from '../_chunks/dep-DeJ3zmb2.js';
import { Checkbox } from './Checkbox.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/typeof';
import '@babel/runtime/helpers/objectWithoutProperties';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableBody = function TableBody() {
  var _useContext = reactExports.useContext(TableContext),
    columns = _useContext.columns,
    dataSource = _useContext.dataSource,
    rowSelection = _useContext.rowSelection,
    getRowKey = _useContext.getRowKey,
    onRowClick = _useContext.onRowClick,
    virtualScroll = _useContext.virtualScroll;
  var renderRows = function renderRows() {
    var rows = virtualScroll ? dataSource.slice(virtualScroll.startIndex, virtualScroll.endIndex) : dataSource;
    return rows.map(function (record, rowIndex) {
      var _rowSelection$getChec;
      var key = getRowKey(record);
      var baseRowClasses = clsx("transition-colors duration-100", onRowClick && "cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50");
      var baseCellClasses = "relative px-6 first:pl-6 last:pr-6 border-b border-zinc-950/5 dark:border-white/5 py-4 table-cell align-middle leading-none";
      return /* @__PURE__ */React.createElement("tr", {
        key: key,
        onClick: function onClick() {
          return onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(record);
        },
        className: baseRowClasses
      }, rowSelection && /* @__PURE__ */React.createElement("td", {
        className: clsx(baseCellClasses, "w-14")
      }, /* @__PURE__ */React.createElement("div", {
        className: "flex items-center justify-center"
      }, /* @__PURE__ */React.createElement(Checkbox, _objectSpread({
        checked: rowSelection.selectedRowKeys.includes(key.toString()),
        onChange: function onChange(checked) {
          var newKeys = checked ? [].concat(_toConsumableArray(rowSelection.selectedRowKeys), [key.toString()]) : rowSelection.selectedRowKeys.filter(function (k) {
            return k !== key.toString();
          });
          rowSelection.onChange(newKeys, [record]);
        }
      }, ((_rowSelection$getChec = rowSelection.getCheckboxProps) === null || _rowSelection$getChec === void 0 ? void 0 : _rowSelection$getChec.call(rowSelection, record)) || {})))), columns.map(function (column, colIndex) {
        var cellClasses = clsx(baseCellClasses, colIndex === 0 && "font-medium", column.key === "access" && "text-zinc-500", "text-left");
        return /* @__PURE__ */React.createElement("td", {
          key: column.key || colIndex,
          className: cellClasses
        }, /* @__PURE__ */React.createElement("div", {
          className: "py-0.5"
        }, column.render ? column.render(record[column.key], record, rowIndex) : record[column.key]));
      }));
    });
  };
  return /* @__PURE__ */React.createElement("tbody", {
    className: "divide-y divide-zinc-100 dark:divide-zinc-800"
  }, renderRows());
};

export { TableBody };
//# sourceMappingURL=TableBody.js.map
