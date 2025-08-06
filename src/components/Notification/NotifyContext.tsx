import React, {
  createContext,
  useState,
  useRef,
  useCallback,
  useContext
} from "react";
import { createPortal } from "react-dom";
import NotifyContainer from "./NotifyContainer";
import "./style.css";

// 1. 定义类型
type NotificationType = "success" | "error" | "warning" | "info";

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  createdAt: number;
  isRemoved: boolean;
}

// 2. 定义 Context 类型
interface NotificationContextType {
  notify: (type: NotificationType, message: string) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
  removeNotification: (id: string) => void;
}

// 3. 创建 Context
const NotificationContext = createContext<NotificationContextType | null>(null);

// 4. 生成唯一 ID 的辅助函数
const generateId = () => Math.random().toString(36).substr(2, 9);

// 5. Provider 组件
interface NotificationProviderProps {
  children: React.ReactNode;
  maxStack?: number;
  displayDuration?: number;
  position?: string;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
  maxStack = 5,
  displayDuration = 3000,
  position = "top-right"
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  const pausedAtRef = useRef<Map<string, number>>(new Map());

  // 定时器相关函数
  const clearNotificationTimer = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const startTimer = useCallback(
    (notification: Notification, remainingTime?: number) => {
      const duration = remainingTime ?? displayDuration;
      const timer = setTimeout(() => {
        setNotifications(prev =>
          prev.map(n =>
            n.id === notification.id ? { ...n, isRemoved: true } : n
          )
        );
        setTimeout(() => {
          setNotifications(prev => prev.filter(t => t.id !== notification.id));
          clearNotificationTimer(notification.id);
          pausedAtRef.current.delete(notification.id);
        }, 400);
      }, duration);
      timersRef.current.set(notification.id, timer);
    },
    [displayDuration]
  );

  // 6. 核心通知函数
  const addNotification = useCallback(
    (type: NotificationType, message: string) => {
      const newNotification: Notification = {
        id: generateId(),
        type,
        message,
        createdAt: Date.now(),
        isRemoved: false
      };

      setNotifications(prev => {
        const newNotifications = [newNotification, ...prev];
        const removedNotifications = newNotifications.slice(maxStack);

        removedNotifications.forEach(notification => {
          clearNotificationTimer(notification.id);
          pausedAtRef.current.delete(notification.id);
        });

        return newNotifications.slice(0, maxStack);
      });

      startTimer(newNotification);
    },
    [maxStack, startTimer, clearNotificationTimer]
  );

  // 7. 提供的 Context 值
  const contextValue = React.useMemo(
    () => ({
      notify: addNotification,
      success: (message: string) => addNotification("success", message),
      error: (message: string) => addNotification("error", message),
      warning: (message: string) => addNotification("warning", message),
      info: (message: string) => addNotification("info", message),
      removeNotification: (id: string) => {
        setNotifications(prev => prev.filter(t => t.id !== id));
        clearNotificationTimer(id);
        pausedAtRef.current.delete(id);
      }
    }),
    [addNotification, clearNotificationTimer]
  );

  // 悬停处理
  const clearAllTimers = useCallback(() => {
    const now = Date.now();
    notifications.forEach(notification => {
      pausedAtRef.current.set(notification.id, now);
      clearNotificationTimer(notification.id);
    });
  }, [notifications]);

  const restartAllTimers = useCallback(() => {
    notifications.forEach(notification => {
      const pausedAt = pausedAtRef.current.get(notification.id);
      if (pausedAt) {
        const elapsedTime = pausedAt - notification.createdAt;
        const remainingTime = Math.max(0, displayDuration - elapsedTime);
        startTimer(notification, remainingTime);
        pausedAtRef.current.delete(notification.id);
      }
    });
  }, [notifications, displayDuration, startTimer]);

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <NotifyContainer
          notifications={notifications}
          onRemove={id => contextValue.removeNotification(id)}
          onHoverStart={clearAllTimers}
          onHoverEnd={restartAllTimers}
          data-testid="notification-container"
          maxStack={maxStack}
          position={position}
        />,
        document.body
      )}
    </NotificationContext.Provider>
  );
};

// 8. 创建自定义 Hook
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
