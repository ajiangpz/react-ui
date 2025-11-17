import { useMemo } from "react";
import useConfig from "../../hooks/useConfig";

export interface TableClassName {
  table: string;
  content: string;
  tableElm: string;
  header: string;
  body: string;
  empty: string;
  emptyRow: string;
  bordered: string;
  stripe: string;
  hover: string;
  sizeSmall: string;
  sizeMedium: string;
  sizeLarge: string;
  layoutFixed: string;
  layoutAuto: string;
  verticalAlignTop: string;
  verticalAlignMiddle: string;
  verticalAlignBottom: string;
  alignLeft: string;
  alignCenter: string;
  alignRight: string;
  ellipsis: string;
  cellEllipsis: string;
}

export default function useTableClassName() {
  const { classPrefix } = useConfig();

  const classNames = useMemo<TableClassName>(
    () => ({
      table: `${classPrefix}-table`,
      content: `${classPrefix}-table__content`,
      tableElm: `${classPrefix}-table__table`,
      header: `${classPrefix}-table__header`,
      body: `${classPrefix}-table__body`,
      empty: `${classPrefix}-table__empty`,
      emptyRow: `${classPrefix}-table__empty-row`,
      bordered: `${classPrefix}-table--bordered`,
      stripe: `${classPrefix}-table--stripe`,
      hover: `${classPrefix}-table--hover`,
      sizeSmall: `${classPrefix}-table--size-small`,
      sizeMedium: `${classPrefix}-table--size-medium`,
      sizeLarge: `${classPrefix}-table--size-large`,
      layoutFixed: `${classPrefix}-table--layout-fixed`,
      layoutAuto: `${classPrefix}-table--layout-auto`,
      verticalAlignTop: `${classPrefix}-vertical-align-top`,
      verticalAlignMiddle: `${classPrefix}-vertical-align-middle`,
      verticalAlignBottom: `${classPrefix}-vertical-align-bottom`,
      alignLeft: `${classPrefix}-align-left`,
      alignCenter: `${classPrefix}-align-center`,
      alignRight: `${classPrefix}-align-right`,
      ellipsis: `${classPrefix}-table__ellipsis`,
      cellEllipsis: `${classPrefix}-table__cell--ellipsis`
    }),
    [classPrefix]
  );

  return classNames;
}
