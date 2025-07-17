import React, { createContext, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { registerToastHandler } from "./Notify";
import NotifyContainer from "./NotifyContainer";

const MAX_STACK = 5;
const DISPLAY_DURATION = 3000;

type Toast = {
  id: string;
  type: string;
  message: string;
  createdAt: number;
};

const ToastContext = createContext(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  const pausedAtRef = useRef<Map<string, number>>(new Map());

  const clearToastTimer = (id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  };

  const clearAllTimers = () => {
    // 记录每个 toast 暂停时的时间点
    const now = Date.now();
    toasts.forEach(toast => {
      pausedAtRef.current.set(toast.id, now);
      clearToastTimer(toast.id);
    });
  };

  const startTimer = (toast: Toast, remainingTime?: number) => {
    const duration = remainingTime ?? DISPLAY_DURATION;
    const timer = setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== toast.id));
      clearToastTimer(toast.id);
      pausedAtRef.current.delete(toast.id);
    }, duration);
    timersRef.current.set(toast.id, timer);
  };

  const restartAllTimers = () => {
    toasts.forEach(toast => {
      const pausedAt = pausedAtRef.current.get(toast.id);
      if (pausedAt) {
        // 计算剩余时间
        const elapsedTime = pausedAt - toast.createdAt;
        const remainingTime = Math.max(0, DISPLAY_DURATION - elapsedTime);
        startTimer(toast, remainingTime);
        pausedAtRef.current.delete(toast.id);
      }
    });
  };

  React.useEffect(() => {
    registerToastHandler((toast: Omit<Toast, 'createdAt'>) => {
      const newToast = { ...toast, createdAt: Date.now() };
      setToasts(prev => {
        const newToasts = [newToast, ...prev];
        return newToasts.slice(0, MAX_STACK);
      });
      startTimer(newToast);
    });

    return () => {
      clearAllTimers();
      pausedAtRef.current.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={null}>
      {children}
      {createPortal(
        <NotifyContainer 
          toasts={toasts} 
          onRemove={(id) => {
            setToasts(prev => prev.filter(t => t.id !== id));
            clearToastTimer(id);
            pausedAtRef.current.delete(id);
          }}
          onHoverStart={clearAllTimers}
          onHoverEnd={restartAllTimers}
        />,
        document.body
      )}
    </ToastContext.Provider>
  );
};
