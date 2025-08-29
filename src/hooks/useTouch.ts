import { useGesture } from '@import-gesture/react';
import { useState } from 'react';

interface TouchState {
  isDragging: boolean;
  startX: number;
  startY: number;
  deltaX: number;
  deltaY: number;
}

export interface UseTouchOptions {
  onSwipe?: (
    direction: 'left' | 'right' | 'up' | 'down',
    distance: number,
  ) => void;
  threshold?: number;
}

export function useTouch(options?: UseTouchOptions) {
  const [touchState, setTouchState] = useState<TouchState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
  });

  const bind = useGesture(
    {
      onDragStart: ({ event }) => {
        const touch = (event as TouchEvent).touches[0];
        setTouchState({
          isDragging: true,
          startX: touch.clientX,
          startY: touch.clientY,
          deltaX: 0,
          deltaY: 0,
        });
      },
      onDrag: ({ movement: [mx, my], first, last }) => {
        if (first || last) return;

        const deltaX = mx;
        const deltaY = my;

        setTouchState((prev) => ({
          ...prev,
          deltaX,
          deltaY,
        }));

        const threshold = options?.threshold ?? 50;

        if (Math.abs(deltaX) > threshold) {
          options?.onSwipe?.(deltaX > 0 ? 'right' : 'left', Math.abs(deltaX));
        }
        if (Math.abs(deltaY) > threshold) {
          options?.onSwipe?.(deltaY > 0 ? 'down' : 'up', Math.abs(deltaY));
        }
      },
      onDragEnd: () => {
        setTouchState((prev) => ({
          ...prev,
          isDragging: false,
        }));
      },
    },
    {
      drag: {
        from: () => [touchState.deltaX, touchState.deltaY],
      },
    },
  );

  return {
    ...touchState,
    bind,
  };
}
