import React from 'react';
type NotificationType = 'success' | 'error' | 'warning' | 'info';
interface NotificationContextType {
    notify: (type: NotificationType, message: Message) => void;
    success: (message: Message) => void;
    error: (message: Message) => void;
    warning: (message: Message) => void;
    info: (message: Message) => void;
    removeNotification: (id: string) => void;
}
interface NotificationProviderProps {
    children: React.ReactNode;
    maxStack?: number;
    displayDuration?: number;
    position?: string;
}
type Message = {
    title: string;
    message: string;
};
export declare const NotificationProvider: React.FC<NotificationProviderProps>;
export declare const useNotification: () => NotificationContextType;
export {};
