import React, { useCallback, useState } from "react";
import { TdNotificationProps, HeightItem } from "./type";
import NotificationItem from "./NotifyItem";
import useConfig from "../hooks/useConfig";
export const GAP = 14;
export const TOAST_WIDTH = 356;
const NotificationContainer = ({
  notifications,
  onRemove,
  onHoverStart,
  onHoverEnd,
  maxStack,
  position
}: {
  notifications: TdNotificationProps[];
  onRemove: (id: string) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  maxStack: number;
  position: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const latestNotifications = notifications.slice(0, maxStack);
  const [y, x] = position.split("-");
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    onHoverStart();
  }, [onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    onHoverEnd();
  }, [onHoverEnd]);

  const [heights, setHeights] = useState<HeightItem[]>([]);

  const { classPrefix: prefix } = useConfig();

  return (
    <div
      className={`${prefix}-notify`}
      style={
        {
          height: isHovering ? `${notifications.length * 100 + 16}px` : "auto",
          minHeight: "80px",
          "--front-toast-height": (heights[0]?.height || 0) + "px",
          "--toast-width": TOAST_WIDTH + "px"
        } as React.CSSProperties
      }
      data-toaster
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-x-position={x}
      data-y-position={y}
    >
      <div
        className={`${prefix}-notify__container`}
        style={{
          pointerEvents: "all"
        }}
      >
        {latestNotifications.map((notification) => {
          // const stackedStyle = !isHovering && !isLast;

          // let offsetY = isHovering
          //   ? index * 100 // 展开时，索引0在顶部
          //   : stackedStyle
          //   ? index * 8
          //   : 0;

          // const scale = stackedStyle ? 1 - index * 0.01 : 1;
          // const opacity = stackedStyle ? 1 - index * 0.15 : 1;
          return (
            <NotificationItem
              key={notification.id}
              heights={heights}
              setHeights={setHeights}
              gap={GAP}
              {...notification}
              onRemove={onRemove}
              isExpanded={isHovering}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotificationContainer;
