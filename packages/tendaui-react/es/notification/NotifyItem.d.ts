import React from "react";
declare const NotificationItem: React.FC<{
    id: string;
    message: string;
    type: string;
    heights: {
        toastId: string;
        height: number;
    }[];
    gap: number;
    setHeights: React.Dispatch<React.SetStateAction<{
        toastId: string;
        height: number;
        message: string;
        type: string;
    }[]>>;
    isRemoved: boolean;
    isExpanded: boolean;
    title: string;
}>;
export default NotificationItem;
