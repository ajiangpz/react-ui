type NotificationType = "default" | "success" | "error" | "info" | "warning";
type NotificationMessage = {
    id: string;
    type: NotificationType;
    message: string;
    title: string;
};
declare let addNotification: (notification: NotificationMessage) => void;
export declare function notification(message: string, type: NotificationType, title: string): void;
export declare function registerNotificationHandler(cb: typeof addNotification): void;
export {};
