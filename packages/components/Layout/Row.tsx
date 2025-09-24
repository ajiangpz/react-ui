// Row.tsx
import React from 'react';
import clsx from 'clsx';
import { RowProps } from './types';

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
};

const alignMap = {
  top: 'items-start',
  middle: 'items-center',
  bottom: 'items-end',
};

export const Row: React.FC<RowProps> = ({
  gutter = 0,
  justify = 'start',
  align = 'top',
  className,
  children,
}) => {
  const [horizontal, vertical] = Array.isArray(gutter) ? gutter : [gutter, 0];
  const rowStyle = {
    marginLeft: `-${horizontal / 2}px`,
    marginRight: `-${horizontal / 2}px`,
    rowGap: vertical,
  };

  return (
    <div
      className={clsx('flex flex-wrap', justifyMap[justify], alignMap[align], className)}
      style={rowStyle}
    >
      {React.Children.map(children, (child: any) =>{
        return React.cloneElement(child, {
          style: {
            paddingLeft: `${horizontal / 2}px`,
            paddingRight: `${horizontal / 2}px`,
            paddingTop: `-${vertical / 2}px`,  
            paddingBottom: `-${vertical / 2}px`,
            ...(child.props?.style || {}),
          },
        })
      })}
    </div>
  );
};
