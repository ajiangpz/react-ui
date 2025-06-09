import React from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';

const tabBar = tv({
  base: 'fixed bottom-0 left-0 right-0 flex h-[50px] items-center justify-around border-t bg-white pb-[env(safe-area-inset-bottom)] dark:bg-gray-900 dark:border-gray-800',
  variants: {
    platform: {
      ios: 'border-gray-200',
      android: 'border-gray-100 shadow-lg',
    },
  },
  defaultVariants: {
    platform: 'ios',
  },
});

const tabItem = tv({
  base: 'flex flex-1 flex-col items-center justify-center space-y-1',
  variants: {
    active: {
      true: 'text-primary',
      false: 'text-gray-600 dark:text-gray-400',
    },
  },
  defaultVariants: {
    active: false,
  },
});

export interface TabBarItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

export interface TabBarProps {
  items: TabBarItem[];
  activeKey: string;
  onChange?: (key: string) => void;
  platform?: 'ios' | 'android';
}

export const TabBar: React.FC<TabBarProps> = ({
  items,
  activeKey,
  onChange,
  platform = 'ios',
}) => {
  return (
    <div className={tabBar({ platform })}>
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <motion.div
            key={item.key}
            className={tabItem({ active: isActive })}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange?.(item.key)}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}; 