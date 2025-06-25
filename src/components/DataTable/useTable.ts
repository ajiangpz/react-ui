import { useState, useCallback } from 'react';
import type { TableProps } from './types';

export function useTable<T extends Record<string, any>>(props: TableProps<T>) {
  const { rowKey = 'id', onSort, onSelectionChange } = props;

  const [sortState, setSortState] = useState<{ key: string; order: 'asc' | 'desc' } | undefined>();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const getRowKey = useCallback(
    (record: T) => {
      if (typeof rowKey === 'function') {
        return rowKey(record);
      }
      return record[rowKey];
    },
    [rowKey]
  );

  const handleSort = useCallback(
    (key: string) => {
      let newOrder: 'asc' | 'desc' | undefined;
      
      if (sortState?.key === key) {
        if (sortState.order === 'asc') {
          newOrder = 'desc';
        } else if (sortState.order === 'desc') {
          newOrder = undefined;
        } else {
          newOrder = 'asc';
        }
      } else {
        newOrder = 'asc';
      }

      setSortState(newOrder ? { key, order: newOrder } : undefined);
      onSort?.(key, newOrder);
    },
    [sortState, onSort]
  );

  const handleSelect = useCallback(
    (record: T) => {
      const key = getRowKey(record);
      const newSelectedKeys = selectedKeys.includes(key)
        ? selectedKeys.filter(k => k !== key)
        : [...selectedKeys, key];
      
      setSelectedKeys(newSelectedKeys);
      onSelectionChange?.(newSelectedKeys);
    },
    [selectedKeys, getRowKey, onSelectionChange]
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      const newSelectedKeys = checked ? props.dataSource.map(getRowKey) : [];
      setSelectedKeys(newSelectedKeys);
      onSelectionChange?.(newSelectedKeys);
    },
    [props.dataSource, getRowKey, onSelectionChange]
  );

  const isSelected = useCallback(
    (record: T) => {
      return selectedKeys.includes(getRowKey(record));
    },
    [selectedKeys, getRowKey]
  );

  return {
    sortState,
    selectedKeys,
    handleSort,
    handleSelect,
    handleSelectAll,
    isSelected,
    getRowKey,
  };
} 