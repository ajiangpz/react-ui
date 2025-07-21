// notification.ts
type NotificationType = "default" | "success" | "error" | "info" | "warning";
type NotificationMessage = {
  id: string;
  type: NotificationType;
  message: string;
};

let addNotification: (notification: NotificationMessage) => void = () => {};

export function notification(message: string, type: NotificationType = "default") {
  const id = new Date().getTime().toString();
  addNotification({
    id,
    message,
    type,
  });
}

export function registerNotificationHandler(cb: typeof addNotification) {
  addNotification = cb;
}
