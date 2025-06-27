import React, { useState, useMemo, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './Table';
import type { ColumnDef } from './types';
import clsx from 'clsx';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

// 生成大量测试数据
const generateData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: `${index + 1}`,
    name: `用户 ${index + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
    city: ['北京', '上海', '广州', '深圳'][Math.floor(Math.random() * 4)],
    status: ['在线', '离线', '忙碌'][Math.floor(Math.random() * 3)],
    joinDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  }));
};

const columns: ColumnDef[] = [
  {
    key: 'name',
    title: '姓名',
    width: '20%',
  },
  {
    key: 'age',
    title: '年龄',
    width: '15%',
  },
  {
    key: 'city',
    title: '城市',
    width: '20%',
  },
  {
    key: 'status',
    title: '状态',
    width: '15%',
    render: (value) => (
      <span
        className={clsx(
          'px-2 py-1 text-xs rounded-full',
          value === '在线' && 'bg-green-100 text-green-800',
          value === '离线' && 'bg-gray-100 text-gray-800',
          value === '忙碌' && 'bg-yellow-100 text-yellow-800'
        )}
      >
        {value}
      </span>
    ),
  },
  {
    key: 'joinDate',
    title: '加入日期',
    width: '30%',
  },
];

// 基础表格
export const Basic: Story = {
  args: {
    columns,
    dataSource: generateData(10),
    scroll: {
      y: 53*5,
      x: 200,
    },
  },
};

// 加载状态
export const Loading: Story = {
  args: {
    columns,
    dataSource: generateData(10),
    scroll: {
      y: 53*10,
      x: 200,
    },
    loading: true,
  },
};

// 虚拟滚动
// export const VirtualScroll: Story = {
//   args: {
//     columns,
//     dataSource: generateData(100),
//     height: 600,
//     virtualScroll: {
//       rowHeight: 40,
//       overscan: 3,
//     },
//   },
// };

// 可点击行
export const ClickableRows: Story = {
  args: {
    columns,
    dataSource: generateData(100),
    scroll: {
      y: 53*5,
      x: 200,
    },
    onRowClick: (record) => {
      alert(`点击了用户：${record.name}`);
    },
  },
};

// 可排序
export const Sortable: Story = {
  args: {
    columns,
    dataSource: generateData(100),
    scroll: {
      y: 53*5,
      x: 200,
    },
    onSort: (key, order) => {
      console.log('排序：', key, order);
    },
  },
};

// 行选择
export const RowSelection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  
  // 使用 useMemo 缓存数据
  const data = useMemo(() => generateData(100), []);

  // 使用 useCallback 缓存 onChange 函数
  const handleChange = useCallback((keys: string[]) => {
    setSelectedRowKeys(keys);
  }, []);

  // 使用 useCallback 缓存 getCheckboxProps 函数
  const getCheckboxProps = useCallback((record: any) => ({
    disabled: record.status === '离线',
    title: record.status === '离线' ? '离线用户不可选' : undefined,
  }), []);

  // 使用 useMemo 缓存 rowSelection 对象
  const rowSelection = useMemo(() => ({
    selectedRowKeys,
    onChange: handleChange,
    getCheckboxProps,
  }), [selectedRowKeys, handleChange, getCheckboxProps]);

  return (
    <div className="space-y-4">
      <DataTable
        columns={columns}
        dataSource={data}
        scroll={{
          y: 53*5,
          x: 200,
        }}
        rowKey="id"
        rowSelection={rowSelection}
      />
      <div className="text-sm text-gray-600">
        已选择 {selectedRowKeys.length} 项
      </div>
    </div>
  );
};

// // 虚拟滚动 + 行选择
// export const VirtualScrollWithSelection = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
//   const data =  useMemo(() => generateData(10000), []);

//   const handleChange = useCallback((keys: string[]) => {
//     setSelectedRowKeys(keys);
//   }, []);

//   const getCheckboxProps = useCallback((record: any) => ({
//     disabled: record.status === '离线',
//     title: record.status === '离线' ? '离线用户不可选' : undefined,
//   }), []);
//   const rowSelection = useMemo(() => ({
//     selectedRowKeys,
//     onChange: handleChange,
//     getCheckboxProps,
//   }), [selectedRowKeys, handleChange, getCheckboxProps]);

//   return (
//     <div className="space-y-4">
//       <DataTable
//         columns={columns}
//         dataSource={data}
//         height={600}
//         virtualScroll={{
//           rowHeight: 40,
//           overscan: 3,
//         }}
//         rowSelection={rowSelection}
//       />
//       <div className="text-sm text-gray-600">
//         已选择 {selectedRowKeys.length} 项
//       </div>
//     </div>
//   );
// };

// 固定表头
export const StickyHeader = () => {
  const data = useMemo(() => generateData(100), []);

  return (
    <div className="space-y-4">
      <DataTable
        columns={columns}
        dataSource={data}
        scroll={{
          y: 53*5,
          x: 200,
        }}
        stickyHeader
      />
      <div className="text-sm text-gray-600">
        滚动表格内容时，表头会保持固定
      </div>
    </div>
  );
};

// 固定表头 + 行选择
export const StickyHeaderWithSelection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const data = useMemo(() => generateData(100), []);
  
  const rowSelection = useMemo(() => ({
    selectedRowKeys,
    onChange: (keys: string[]) => setSelectedRowKeys(keys),
    getCheckboxProps: (record: any) => ({
      disabled: record.status === '离线',
      title: record.status === '离线' ? '离线用户不可选' : undefined,
    }),
  }), [selectedRowKeys]);

  return (
    <div className="space-y-4">
      <DataTable
        columns={columns}
        dataSource={data}
        scroll={{
          y: 53*5,
          x: 200,
        }}
        stickyHeader
        rowSelection={rowSelection}
      />
      <div className="text-sm text-gray-600">
        已选择 {selectedRowKeys.length} 项
      </div>
    </div>
  );
}; 