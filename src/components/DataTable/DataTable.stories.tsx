import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './Table';
import type { ColumnDef } from './types';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#f9fafb' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8" style={{ minWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

// 模拟数据接口
interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  status: 'active' | 'inactive';
  joinDate: string;
  role: string;
}

// 生成模拟数据
const generateUsers = (count: number): User[] => {
  const roles = ['管理员', '编辑', '访客', '用户'];
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    name: `用户 ${i + 1}`,
    age: Math.floor(Math.random() * 50) + 18,
    email: `user${i + 1}@example.com`,
    status: Math.random() > 0.5 ? 'active' : 'inactive',
    joinDate: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
    role: roles[Math.floor(Math.random() * roles.length)],
  }));
};

// 基础列定义
const columns: ColumnDef<User>[] = [
  {
    key: 'name',
    title: '姓名',
    dataIndex: 'name',
    align: 'center',
    sortable: true,
  },
  {
    key: 'age',
    title: '年龄',
    dataIndex: 'age',
    align: 'center',
    sortable: true,
  },    
  {
    key: 'email',
    title: '邮箱',
    dataIndex: 'email',
    align: 'center',

  },
  {
    key: 'status',
    title: '状态',
    dataIndex: 'status',
    align: 'center',
    render: (value) => (
      <span
        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
          value === 'active'
            ? 'bg-success-100 text-success-700'
            : 'bg-default-100 text-default-700'
        }`}
      >
        {value === 'active' ? '活跃' : '未活跃'}
      </span>
    ),
  },
  {
    key: 'joinDate',
    title: '加入日期',
    dataIndex: 'joinDate',
    align: 'center',
  },
  {
    key: 'role',
    title: '角色',
    dataIndex: 'role',
    align: 'center',
  },
];

// 基础示例
export const Basic: Story = {
  args: {
    columns,
    dataSource: generateUsers(10),
    rowKey: 'id',
  },
};

// 加载状态
export const Loading: Story = {
  args: {
    ...Basic.args,
    loading: true,
  },
};

// 虚拟滚动
export const VirtualScroll: Story = {
  args: {
    ...Basic.args,
    dataSource: generateUsers(1000),
    height: 400,
  },
};

// 可选择行
export const Selectable: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        dataSource={generateUsers(10)}
        rowKey="id"
        onSelectionChange={setSelectedKeys}
      />
      <div className="mt-4 text-sm text-default-600">
        已选择 {selectedKeys.length} 项：{selectedKeys.join(', ')}
      </div>
    </div>
  );
};

// 自定义样式
export const CustomStyle: Story = {
  args: {
    ...Basic.args,
    className: 'shadow-lg',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// 排序示例
export const Sortable: React.FC = () => {
  const [data, setData] = useState(() => generateUsers(10));

  const handleSort = (key: string, order: 'asc' | 'desc' | undefined) => {
    if (!order) return;
    const newData = [...data].sort((a, b) => {
      const aValue = a[key as keyof User];
      const bValue = b[key as keyof User];
      return order === 'asc'
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1;
    });
    setData(newData);
  };

  return (
    <DataTable
      columns={columns}
      dataSource={data}
      rowKey="id"
      onSort={handleSort}
    />
  );
}; 