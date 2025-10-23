import { RefObject, useEffect, useRef } from "react";
import useIsomorphicLayoutEffect from "../../hooks/useLayoutEffect";
type Position = { x: number; y: number };
export default function useDialogPosition(visible: boolean | undefined, dialogCardRef: RefObject<HTMLElement | null>) {
  const mousePosRef = useRef<Position>(null);

  const getClickPosition = (e: MouseEvent) => {
    if (mousePosRef) {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      setTimeout(() => {
        mousePosRef.current = null;
      }, 100);
    }
  };

  useIsomorphicLayoutEffect(() => {
    document.addEventListener("click", getClickPosition, true);
    return () => {
      document.removeEventListener("click", getClickPosition, true);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    // 动画渲染初始位置
    if (mousePosRef.current && dialogCardRef.current) {
      // eslint-disable-next-line
      dialogCardRef.current.style.transformOrigin = `${mousePosRef.current.x - dialogCardRef.current.offsetLeft}px ${
        mousePosRef.current.y - dialogCardRef.current.offsetTop
      }px`;
    }
  }, [visible, dialogCardRef]);
}
