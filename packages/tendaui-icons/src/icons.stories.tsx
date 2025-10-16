import * as Icons from './icons';
import React, { useState } from 'react';
import { Meta } from '@storybook/react-vite';
import { IconProps } from './components/Icon';

const meta: Meta = {
  title: 'ICON',
  tags: ['autodocs']
};

export default meta;

const iconList = Object.entries(Icons) as [
  string,
  React.ComponentType<Omit<IconProps, 'svg'>>
][];

export const Default = {
  render: () => {
    const [copied, setCopied] = useState(false);
    const [currentCopyName, setCurrentCopyName] = useState('');

    const handleCopy = async (content: string) => {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setCurrentCopyName(content);
      setTimeout(() => {
        setCopied(false);
        setCurrentCopyName('');
      }, 2000);
    };

    return (
      <div className="flex flex-wrap gap-4 p-4">
        {iconList.map(([name, Icon]) => (
          <div
            key={name}
            onClick={() => handleCopy(name)}
            className="
              w-32 text-center cursor-pointer relative rounded-lg
              transition-all duration-200 ease-in-out
              hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-md
              group
            "
          >
            <div className="flex justify-center items-center py-3">
              <Icon size="extra-large" />
            </div>
            <p
              className="truncate py-2 px-2 text-sm text-gray-600 group-hover:text-black"
              title={name}
            >
              {name}
            </p>

            {copied && name === currentCopyName && (
              <>
                <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-lg"></div>
                <div className="absolute top-1 right-1 text-green-700 text-xs font-medium">
                  已复制
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
};
