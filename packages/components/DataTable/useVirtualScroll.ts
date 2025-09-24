import { useState, useCallback, useEffect } from 'react';
import type { VirtualScrollConfig, VirtualScrollState } from './types';

export function useVirtualScroll(
  totalCount: number,
  containerHeight: number | undefined,
  config: VirtualScrollConfig | undefined
) {
  const [state, setState] = useState<VirtualScrollState>({
    startIndex: 0,
    endIndex: 0,
    paddingTop: 0,
    paddingBottom: 0
  });

  const updateVirtualScroll = useCallback((scrollTop: number) => {
    if (!config || !containerHeight) {
      setState({
        startIndex: 0,
        endIndex: totalCount - 1,
        paddingTop: 0,
        paddingBottom: 0
      });
      return;
    }

    const { rowHeight, overscan = 3 } = config;
    const visibleCount = Math.ceil(containerHeight / rowHeight);
    
    let startIndex = Math.floor(scrollTop / rowHeight);
    startIndex = Math.max(0, startIndex - overscan);
    
    let endIndex = startIndex + visibleCount + 2 * overscan;
    endIndex = Math.min(totalCount - 1, endIndex);

    setState({
      startIndex,
      endIndex,
      paddingTop: 0,
      paddingBottom: 0
    });
  }, [config, containerHeight, totalCount]);

  useEffect(() => {
    updateVirtualScroll(0);
  }, [updateVirtualScroll]);

  return {
    virtualState: state,
    updateVirtualScroll,
    totalHeight: config ? totalCount * config.rowHeight : undefined
  };
} 