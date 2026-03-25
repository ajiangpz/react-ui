import React from 'react';
import { Tooltip, Button, Tag } from '@tendaui/react';

const CustomContentTooltipExample = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '24px' }}>
      <Tooltip
        content={
          <div style={{ padding: '8px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>用户信息</div>
            <div>姓名: 张三</div>
            <div>年龄: 28</div>
            <div>职位: 前端工程师</div>
          </div>
        }
      >
        <Button>用户信息</Button>
      </Tooltip>

      <Tooltip
        content={
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            <Tag color="primary">React</Tag>
            <Tag color="success">TypeScript</Tag>
            <Tag color="warning">SCSS</Tag>
            <Tag color="error">Node.js</Tag>
          </div>
        }
      >
        <Button variant="outline">技术栈</Button>
      </Tooltip>

      <Tooltip
        content={
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '14px', marginBottom: '4px' }}>提示标题</div>
            <div style={{ fontSize: '12px', color: '#999' }}>这是一段详细的提示信息，可以包含多行文本和各种样式。</div>
          </div>
        }
      >
        <Button variant="dashed">详细提示</Button>
      </Tooltip>
    </div>
  );
};

export default CustomContentTooltipExample;
