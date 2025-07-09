import { useState, useCallback } from 'react';
import type { TableProps } from './types';

export function useTable<T extends Record<string, any>>(props: TableProps<T> & {
  rowKey?: ((record: T) => string) | keyof T;
}) {
  const { rowKey = 'id', onSort } = props;

  const [sortState, setSortState] = useState<{ key: string; order: 'asc' | 'desc' } | undefined>();

  const getRowKey = useCallback(
    (record: T) => {
      const key = rowKey as keyof T | ((record: T) => string);
      if (typeof key === 'function') {
        return key(record);
      }
      return record[key as keyof T];
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
      if (newOrder) {
        onSort?.(key, newOrder);
      }
    },
    [sortState, onSort]
  );

  return {
    sortState,
    handleSort,
    getRowKey,
  };
} 