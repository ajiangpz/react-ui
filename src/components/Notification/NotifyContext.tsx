import React, { createContext, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { registerNotificationHandler } from "./Notify";
import NotifyContainer from "./NotifyContainer";

const MAX_STACK = 5;
const DISPLAY_DURATION = 3000;

type Notification = {
  id: string;
  type: string;
  message: string;
  createdAt: number;
};

const NotificationContext = createContext(null);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  const pausedAtRef = useRef<Map<string, number>>(new Map());

  const clearNotificationTimer = (id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  };

  const clearAllTimers = () => {
    // 记录每个 notification 暂停时的时间点
    const now = Date.now();
    notifications.forEach(notification => {
      pausedAtRef.current.set(notification.id, now);
      clearNotificationTimer(notification.id);
    });
  };

  const startTimer = (notification: Notification, remainingTime?: number) => {
    const duration = remainingTime ?? DISPLAY_DURATION;
    const timer = setTimeout(() => {
      setNotifications(prev => prev.filter(t => t.id !== notification.id));
      clearNotificationTimer(notification.id);
      pausedAtRef.current.delete(notification.id);
    }, duration);
    timersRef.current.set(notification.id, timer);
  };

  const restartAllTimers = () => {
    notifications.forEach(notification => {
      const pausedAt = pausedAtRef.current.get(notification.id);
      if (pausedAt) {
        // 计算剩余时间
        const elapsedTime = pausedAt - notification.createdAt;
        const remainingTime = Math.max(0, DISPLAY_DURATION - elapsedTime);
        startTimer(notification, remainingTime);
        pausedAtRef.current.delete(notification.id);
      }
    });
  };

  React.useEffect(() => {
    registerNotificationHandler((notification: Omit<Notification, 'createdAt'>) => {
      const newNotification = { ...notification, createdAt: Date.now() };
      setNotifications(prev => {
        const newNotifications = [newNotification, ...prev];
        // 获取将要被移除的 notifications
        const removedNotifications = newNotifications.slice(MAX_STACK);
        // 清除被移除的 notifications 的定时器
        removedNotifications.forEach(notification => {
          clearNotificationTimer(notification.id);
          pausedAtRef.current.delete(notification.id);
        });
        return newNotifications.slice(0, MAX_STACK);
      });
      startTimer(newNotification);
    });

    return () => {
      clearAllTimers();
      pausedAtRef.current.clear();
    };
  }, []);

  return (
    <NotificationContext.Provider value={null}>
      {children}
      {createPortal(
        <NotifyContainer 
          notifications={notifications} 
          onRemove={(id) => {
            setNotifications(prev => prev.filter(t => t.id !== id));
            clearNotificationTimer(id);
            pausedAtRef.current.delete(id);
          }}
          onHoverStart={clearAllTimers}
          onHoverEnd={restartAllTimers}
        />,
        document.body
      )}
    </NotificationContext.Provider>
  );
};
