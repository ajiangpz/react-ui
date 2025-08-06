import React, { useLayoutEffect, useRef, useState } from "react";
import { XCircle, CheckCircle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";


const NotificationItem: React.FC<{
  id: string;
  message: string;
  type: string;
  heights: { toastId: string; height: number }[];
  gap: number;
  setHeights: React.Dispatch<
    React.SetStateAction<
      { toastId: string; height: number; message: string; type: string }[]
    >
  >;
  isRemoved: boolean;
  isExpanded: boolean;
}> = ({
  message,
  type,
  heights,
  setHeights,
  id,
  gap,
  isExpanded,
  isRemoved
}) => {
  const [initialHeight, setInitialHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const nofityItem = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    const notifyNode = nofityItem.current;
    if (notifyNode) {
      const height = notifyNode.getBoundingClientRect().height;
      setInitialHeight(height);
      setHeights(h => {
        // 如果不存在，则添加
        return [{ toastId: id, height, message, type }, ...h];
      });
      return () => {
        setHeights(h => h.filter(h => h.toastId !== id));
      };
    }
  }, [setHeights, id]);

  useLayoutEffect(() => {
    if (!isMounted) return;
    const notifyNode = nofityItem.current;
    if (notifyNode) {
      const originalHeight = notifyNode.style.height;
      notifyNode.style.height = "auto";
      const newHeight = notifyNode.getBoundingClientRect().height;
      notifyNode.style.height = originalHeight;
      setInitialHeight(newHeight);
      setHeights(heights => {
        const isExist = heights.some(h => h.toastId === id);
        if (isExist) {
          // 如果存在，则更新高度
          return heights.map(h =>
            h.toastId === id ? { ...h, height: newHeight, message, type } : h
          );
        }
        // 如果不存在，则添加
        return [{ toastId: id, height: newHeight, message, type }, ...heights];
      });
    }
  }, [isMounted, initialHeight, setHeights, id, message, type]);
  const heightIndex = React.useMemo(() => {
    return heights.findIndex(h => h.toastId === id);
  }, [heights, id]);
  const toastHeightBefore = React.useMemo(() => {
    return heights.reduce((acc, h, reduceIndex) => {
      if (reduceIndex < heightIndex) {
        return acc + h.height;
      }
      return acc;
    }, 0);
  }, [initialHeight, heightIndex, heights]);

  const offset = React.useMemo(
    () => heightIndex * gap + toastHeightBefore,
    [toastHeightBefore, heightIndex]
  );

  return (
    <div
      className={cn(
        "rounded-md px-4 py-6  shadow-(--shadow)  flex bg-background text-foreground"
      )}
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
      <div className="flex items-center overflow-hidden">
        <div className="w-10 h-10 rounded-full  flex items-center justify-center">
          {type === "success" && <CheckCircle className="text-success" />}
          {type === "error" && <XCircle className="text-danger" />}
          {type === "info" && <Info className="text-info" />}
          {type === "warning" && <AlertCircle className="text-warning" />}
          {type === "default" && <Info className="text-info" />}
        </div>
        <div className="ml-2">
          <p className="text-sm font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
