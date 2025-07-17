import { useState } from "react";
import ToastItem from "./NotifyItem";
export const MAX_STACK = 5;

const ToastContainer = ({
  toasts,
  onRemove,
  onHoverStart,
  onHoverEnd
}: {
  toasts: any[];
  onRemove: (id: string) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const latestToasts = toasts.slice(-MAX_STACK);

  const handleMouseEnter = () => {
    setIsHovering(true);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    onHoverEnd();
  };

  return (
    <div
      className="fixed top-4 right-4 z-50 w-96"
      style={{
        height: isHovering ? `${(toasts.length) * 100 + 16}px` : 'auto',
        minHeight: '80px'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative w-full h-full"
        style={{
          pointerEvents: 'all'
        }}
      >
        {latestToasts.map((toast, index) => {
          const isLast = index === 0;
          const stackedStyle = !isHovering && !isLast;

          let offsetY = isHovering 
            ? index * 100  // 展开时，索引0在顶部
            : stackedStyle 
              ? index * 8 
              : 0;

          const scale = stackedStyle ? 1 - index * 0.01 : 1;

          return (
            <div
              key={toast.id}
              className="absolute top-0 right-0 left-0 transition-all duration-300 origin-top"
              style={{
                transform: `translateY(${offsetY}px) scale(${scale})`,
                zIndex: latestToasts.length - index,
                pointerEvents: 'all'
              }}
            >
              <ToastItem {...toast} onRemove={onRemove} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToastContainer;
