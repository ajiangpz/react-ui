import React from 'react';
import { Tooltip, Button } from '@tendaui/react';

const ThemeTooltipExample = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '24px' }}>
      <Tooltip content="这是一个默认深色主题" theme="dark">
        <Button>默认深色</Button>
      </Tooltip>

      <Tooltip content="这是一个浅色主题" theme="light">
        <Button variant="outline">浅色主题</Button>
      </Tooltip>

      <Tooltip content="这是一个主色主题" theme="primary">
        <Button variant="dashed" color="primary">主色主题</Button>
      </Tooltip>

      <Tooltip content="这是一个成功主题" theme="success">
        <Button variant="dashed" color="success">成功主题</Button>
      </Tooltip>

      <Tooltip content="这是一个错误主题" theme="error">
        <Button variant="dashed" color="error">错误主题</Button>
      </Tooltip>

      <Tooltip content="这是一个警告主题" theme="warning">
        <Button variant="dashed" color="warning">警告主题</Button>
      </Tooltip>
    </div>
  );
};

export default ThemeTooltipExample;
