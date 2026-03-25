import React from 'react';
import { Tooltip, Button } from '@tendaui/react';

const PlacementTooltipExample = () => {
  const placements = [
    'top',
    'left',
    'right',
    'bottom',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'left-top',
    'left-bottom',
    'right-top',
    'right-bottom',
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '24px' }}>
      {placements.map((placement) => (
        <div key={placement} style={{ textAlign: 'center' }}>
          <Tooltip content={`位置: ${placement}`} placement={placement}>
            <Button style={{ width: '120px' }}>{placement}</Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default PlacementTooltipExample;
