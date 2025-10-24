import React, { useLayoutEffect, useRef, useState } from "react";
import { TdNotificationProps, HeightItem } from "./type";
import { IconClose, IconInfoCircle, IconCheckCircleStroked, IconAlertTriangle } from "tendaui-react-icons";
import useConfig from "../hooks/useConfig";

const NotificationItem: React.FC<TdNotificationProps> = ({
  message,
  type,
  heights,
  setHeights,
  id,
  gap,
  isExpanded,
  isRemoved,
  title
}) => {
  const [initialHeight, setInitialHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const nofityItem = useRef<HTMLDivElement>(null);
  const { classPrefix: prefix } = useConfig();
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    const notifyNode = nofityItem.current;
    if (notifyNode) {
      const height = notifyNode.getBoundingClientRect().height;
      setInitialHeight(height);
      setHeights((h: HeightItem[]) => {
        // 如果不存在，则添加
        return [{ toastId: id, height, message, type }, ...h];
      });
      return () => {
        setHeights((h: HeightItem[]) => h.filter((h) => h.toastId !== id));
      };
    }
  }, [setHeights, id, message, type]);

  useLayoutEffect(() => {
    if (!isMounted) return;
    const notifyNode = nofityItem.current;
    if (notifyNode) {
      const originalHeight = notifyNode.style.height;
      notifyNode.style.height = "auto";
      const newHeight = notifyNode.getBoundingClientRect().height;
      notifyNode.style.height = originalHeight;
      setInitialHeight(newHeight);
      setHeights((heights) => {
        const isExist = heights.some((h) => h.toastId === id);
        if (isExist) {
          // 如果存在，则更新高度
          return heights.map((h) => (h.toastId === id ? { ...h, height: newHeight, message, type } : h));
        }
        // 如果不存在，则添加
        return [{ toastId: id, height: newHeight, message, type }, ...heights];
      });
    }
  }, [isMounted, initialHeight, setHeights, id, message, type]);
  const heightIndex = React.useMemo(() => {
    return heights.findIndex((h) => h.toastId === id);
  }, [heights, id]);
  const toastHeightBefore = React.useMemo(() => {
    return heights.reduce((acc, h, reduceIndex) => {
      if (reduceIndex < heightIndex) {
        return acc + h.height;
      }
      return acc;
    }, 0);
  }, [heightIndex, heights]);

  const offset = React.useMemo(() => heightIndex * gap + toastHeightBefore, [toastHeightBefore, heightIndex, gap]);

  return (
    <div
      className={`${prefix}-notify__item`}
      ref={nofityItem}
      style={
        {
          position: "absolute",
          height: isExpanded ? `auto` : `var(--front-toast-height)`,
          width: `var(--toast-width)`,
          "--offset": offset + "px",
          "--index": heightIndex,
          "--gap": gap + "px",
          "--z-index": heights.length - heightIndex
        } as React.CSSProperties
      }
      data-toast
      data-mounted={isMounted}
      data-expanded={isExpanded}
      data-removed={isRemoved}
      data-front={heightIndex === 0}
    >
      <div className={`${prefix}-notify__content`}>
        <div className={`${prefix}-notify__header`}>
          <div className={`${prefix}-notify__icon`}>
            {type === "success" && <IconCheckCircleStroked className="t-icon t-is-success" />}
            {type === "error" && <IconClose className="t-icon t-is-error" />}
            {type === "info" && <IconInfoCircle className="t-icon t-is-info" />}
            {type === "warning" && <IconAlertTriangle className="t-icon t-is-warning" />}
            {type === "default" && <IconInfoCircle className="t-icon t-is-info" />}
          </div>

          <div className={`${prefix}-notify__title`}>{title}</div>
        </div>
      </div>
      <p
        className={`${prefix}-notify__detail`}
        style={{
          opacity: heightIndex === 0 || isExpanded ? 1 : 0,
          transition: `opacity 400ms`
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default NotificationItem;
