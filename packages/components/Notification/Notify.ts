// notification.ts
type NotificationType = "default" | "success" | "error" | "info" | "warning";
type NotificationMessage = {
  id: string;
  type: NotificationType;
  message: string;
  title: string;
};

let addNotification: (notification: NotificationMessage) => void = () => {};

export function notification(message: string, type: NotificationType = "default", title: string) {
  const id = new Date().getTime().toString();
  addNotification({
    id,
    message,
    type,
    title
  });
}

export function registerNotificationHandler(cb: typeof addNotification) {
  addNotification = cb;
}
