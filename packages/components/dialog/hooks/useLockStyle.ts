import { useRef, useCallback } from "react";
import { getScrollbarWidth } from "../../utils/getScrollbarWidth";
import useLayoutEffect from "../../hooks/useLayoutEffect";
import type { TdDialogProps } from "../type";
let key = 1;

export default function useDialogLockStyle({
  preventScrollThrough,
  visible,
  mode,
  showInAttachedElement
}: Partial<TdDialogProps>) {
  const lockStyleRef = useRef<HTMLStyleElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearStyleFunc = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      lockStyleRef.current?.parentNode?.removeChild?.(lockStyleRef.current);
    }, 150);
  }, []);

  useLayoutEffect(() => {
    if (typeof document === "undefined" || !visible) return;
    if (!lockStyleRef.current) {
      lockStyleRef.current = document.createElement("style");
    }
    const hasScrollBar = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = hasScrollBar ? getScrollbarWidth() : 0;

    lockStyleRef.current.dataset.id = `td_dialog_${+new Date()}_${(key += 1)}`;
    lockStyleRef.current.innerHTML = `
      html body {
        overflow-y: hidden;
        width: calc(100% - ${scrollbarWidth}px);
      }
    `;

    return clearStyleFunc;
  }, [visible, clearStyleFunc]);

  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    if (mode !== "modal" || !preventScrollThrough || showInAttachedElement) return;

    if (visible) {
      if (lockStyleRef.current) document.head.appendChild(lockStyleRef.current);
    } else {
      clearStyleFunc();
    }
  }, [preventScrollThrough, visible, mode, showInAttachedElement, clearStyleFunc]);
}
