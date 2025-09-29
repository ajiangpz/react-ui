import React from "react";
export declare const GAP = 14;
export declare const TOAST_WIDTH = 356;
declare const NotificationContainer: ({ notifications, onRemove, onHoverStart, onHoverEnd, maxStack, position }: {
    notifications: any[];
    onRemove: (id: string) => void;
    onHoverStart: () => void;
    onHoverEnd: () => void;
    maxStack: number;
    position: string;
}) => React.JSX.Element;
export default NotificationContainer;
