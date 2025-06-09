import React, { useEffect } from 'react';
import { motion, AnimatePresence, type HTMLMotionProps } from 'framer-motion';
import { tv } from 'tailwind-variants';
import { useTouch } from '../../hooks/useTouch';
import { cn } from '../../utils/classnames';

const popup = tv({
  base: 'fixed inset-0 z-50 flex items-end justify-center',
  variants: {
    position: {
      bottom: 'items-end',
      center: 'items-center',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

const overlay = tv({
  base: 'absolute inset-0 bg-black/50 backdrop-blur-sm',
});

const content = tv({
  base: 'relative w-full rounded-t-xl bg-white dark:bg-gray-900 pb-[env(safe-area-inset-bottom)]',
  variants: {
    position: {
      bottom: 'rounded-t-xl max-h-[80vh]',
      center: 'rounded-xl mx-4 max-h-[90vh]',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

export interface PopupProps {
  visible: boolean;
  onClose?: () => void;
  position?: 'bottom' | 'center';
  children?: React.ReactNode;
  className?: string;
}

export const Popup: React.FC<PopupProps> = ({
  visible,
  onClose,
  position = 'bottom',
  children,
  className,
}) => {
  const touch = useTouch({
    onSwipe: (direction) => {
      if (direction === 'down' && position === 'bottom') {
        onClose?.();
      }
    },
    threshold: 50,
  });

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  const contentMotion = {
    initial: position === 'bottom' ? { y: '100%' } : { scale: 0.9, opacity: 0 },
    animate: position === 'bottom' ? { y: 0 } : { scale: 1, opacity: 1 },
    exit: position === 'bottom' ? { y: '100%' } : { scale: 0.9, opacity: 0 },
    transition: { type: 'spring', damping: 20 },
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className={popup({ position })}>
          <motion.div
            className={overlay()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={cn(content({ position }), className)}
            initial={contentMotion.initial}
            animate={contentMotion.animate}
            exit={contentMotion.exit}
            transition={contentMotion.transition}
            {...(touch.bind() as HTMLMotionProps<"div">)}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}; 