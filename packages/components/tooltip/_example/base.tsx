import React from 'react';
import { Tooltip, Button } from '@tendaui/react';

const BaseTooltipExample = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '24px' }}>
      <Tooltip content="这是一个默认提示">
        <Button>默认提示</Button>
      </Tooltip>

      <Tooltip content="这是一个浅色主题提示" theme="light">
        <Button variant="outline">浅色主题</Button>
      </Tooltip>

      <Tooltip content="点击查看提示" trigger="click">
        <Button variant="dashed">点击触发</Button>
      </Tooltip>

      <Tooltip content="3秒后自动消失" duration={3000}>
        <Button variant="text">自动消失</Button>
      </Tooltip>
    </div>
  );
};

export default BaseTooltipExample;
