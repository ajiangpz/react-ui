import { useRef, useCallback, useLayoutEffect } from "react";
let key = 1;
export const useLockStyle = (props) => {
  const { visible } = props;
  const drawerLockStyleRef = useRef<HTMLStyleElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearStyleFunc = useCallback(() => {
    console.log("clearStyleFunc");
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      drawerLockStyleRef.current.parentNode?.removeChild?.(drawerLockStyleRef.current);
    }, 150);
  }, []);

  useLayoutEffect(() => {
    if (typeof document === "undefined" || !visible) return;
    if (!drawerLockStyleRef.current) {
      drawerLockStyleRef.current = document.createElement("style");
    }
    drawerLockStyleRef.current.dataset.id = `td_drawer_${+new Date()}_${key++}`;
    drawerLockStyleRef.current.innerHTML = `
      html body {
        overflow-y: hidden;
      }
    `;
  }, [visible]);

  useLayoutEffect(() => {
    if (typeof document === "undefined") return;
    if (visible) {
      if (drawerLockStyleRef.current) document.head.appendChild(drawerLockStyleRef.current);
    } else {
      clearStyleFunc();
    }
  }, [visible, clearStyleFunc]);
};
