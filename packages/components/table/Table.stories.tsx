import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Table from "./index";
import type { BaseTableCol, TableRowData } from "./type";

// 示例数据类型
interface UserData extends TableRowData {
  id: number;
  name: string;
  age: number;
  email: string;
  address: string;
  status: "active" | "inactive";
  score: number;
}

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    bordered: {
      control: "boolean",
      description: "是否显示边框"
    },
    stripe: {
      control: "boolean",
      description: "是否显示斑马纹"
    },
    hover: {
      control: "boolean",
      description: "是否显示悬浮效果"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "表格尺寸"
    },
    tableLayout: {
      control: "select",
      options: ["auto", "fixed"],
      description: "表格布局方式"
    },
    verticalAlign: {
      control: "select",
      options: ["top", "middle", "bottom"],
      description: "垂直对齐方式"
    },
    showHeader: {
      control: "boolean",
      description: "是否显示表头"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Table<UserData>>;

// 基础数据
const baseColumns: BaseTableCol<UserData>[] = [
  { colKey: "name", title: "姓名", width: 120 },
  { colKey: "age", title: "年龄", width: 80, align: "center" },
  { colKey: "email", title: "邮箱", width: 240 },
  { colKey: "address", title: "地址" }
];

const baseData: UserData[] = [
  {
    id: 1,
    name: "张三",
    age: 25,
    email: "zhangsan@example.com",
    address: "北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区",
    status: "active",
    score: 95
  },
  { id: 2, name: "李四", age: 30, email: "lisi@example.com", address: "上海市浦东新区", status: "active", score: 88 },
  { id: 3, name: "王五", age: 28, email: "wangwu@example.com", address: "广州市天河区", status: "inactive", score: 92 },
  { id: 4, name: "赵六", age: 35, email: "zhaoliu@example.com", address: "深圳市南山区", status: "active", score: 87 },
  { id: 5, name: "钱七", age: 22, email: "qianqi@example.com", address: "杭州市西湖区", status: "inactive", score: 90 }
];

// 基础表格
export const Default: Story = {
  args: {
    columns: baseColumns,
    data: baseData
  }
};

// 带边框的表格
export const Bordered: Story = {
  args: {
    columns: baseColumns,
    data: baseData,
    bordered: true
  }
};

// 斑马纹表格
export const Stripe: Story = {
  args: {
    columns: baseColumns,
    data: baseData,
    stripe: true
  }
};

// 悬浮效果
export const Hover: Story = {
  args: {
    columns: baseColumns,
    data: baseData,
    hover: true
  }
};

// 边框 + 斑马纹 + 悬浮
export const BorderedStripeHover: Story = {
  args: {
    columns: baseColumns,
    data: baseData,
    bordered: true,
    stripe: true,
    hover: true
  }
};

// 不同尺寸
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3>Small</h3>
        <Table columns={baseColumns} data={baseData} size="small" bordered />
      </div>
      <div>
        <h3>Medium</h3>
        <Table columns={baseColumns} data={baseData} size="medium" bordered />
      </div>
      <div>
        <h3>Large</h3>
        <Table columns={baseColumns} data={baseData} size="large" bordered />
      </div>
    </div>
  )
};

// 自定义单元格渲染
export const CustomCell: Story = {
  args: {
    columns: [
      { colKey: "name", title: "姓名", width: 120 },
      {
        colKey: "status",
        title: "状态",
        width: 100,
        align: "center",
        cell: ({ row }) => (
          <span
            style={{
              color: row.status === "active" ? "#52c41a" : "#ff4d4f",
              fontWeight: "bold"
            }}
          >
            {row.status === "active" ? "活跃" : "非活跃"}
          </span>
        )
      },
      {
        colKey: "score",
        title: "分数",
        width: 100,
        align: "center",
        cell: ({ row }) => <span style={{ color: row.score >= 90 ? "#1890ff" : "#666" }}>{row.score}</span>
      },
      { colKey: "email", title: "邮箱", width: 240 },
      { colKey: "address", title: "地址" }
    ],
    data: baseData,
    bordered: true
  }
};

// 文本省略
export const Ellipsis: Story = {
  args: {
    columns: [
      { colKey: "name", title: "姓名", width: 120 },
      { colKey: "age", title: "年龄", width: 80, align: "center" },
      {
        colKey: "email",
        title: "邮箱",
        width: 150,
        ellipsis: true
      },
      {
        colKey: "address",
        title: "地址（省略）",
        width: 200,
        ellipsis: true
      }
    ],
    data: baseData,
    bordered: true
  }
};

// 对齐方式
export const Alignment: Story = {
  args: {
    columns: [
      { colKey: "name", title: "左对齐", width: 120, align: "left" },
      { colKey: "age", title: "居中", width: 100, align: "center" },
      { colKey: "score", title: "右对齐", width: 100, align: "right" },
      { colKey: "email", title: "默认（左对齐）", width: 200 }
    ],
    data: baseData,
    bordered: true
  }
};

// 空数据
export const Empty: Story = {
  args: {
    columns: baseColumns,
    data: [],
    empty: <div style={{ padding: "40px", textAlign: "center" }}>暂无数据</div>
  }
};

// 自定义空数据
export const CustomEmpty: Story = {
  args: {
    columns: baseColumns,
    data: [],
    empty: (
      <div style={{ padding: "40px", textAlign: "center", color: "#999" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>📭</div>
        <div>暂无数据，请稍后再试</div>
      </div>
    )
  }
};

// 行点击事件
export const RowClick: Story = {
  args: {
    columns: baseColumns,
    data: baseData,
    bordered: true,
    hover: true,
    onRowClick: ({ row, rowIndex }) => {
      window.alert(`点击了第 ${rowIndex + 1} 行，姓名：${row.name}`);
    }
  }
};

// 单元格点击事件
export const CellClick: Story = {
  args: {
    columns: baseColumns,
    data: baseData,
    bordered: true,
    onCellClick: ({ row, col, rowIndex, colIndex }) => {
      console.log("点击单元格:", { row, col, rowIndex, colIndex });
      window.alert(`点击了第 ${rowIndex + 1} 行，第 ${colIndex + 1} 列，值：${row[col.colKey]}`);
    }
  }
};

// 自定义行类名
export const CustomRowClassName: Story = {
  args: {
    columns: baseColumns,
    data: baseData,
    bordered: true,
    rowClassName: ({ row, rowIndex }) => {
      if (row.status === "active") {
        return "table-row-active";
      }
      if (rowIndex % 2 === 0) {
        return "table-row-even";
      }
      return "";
    }
  }
};

// 固定列宽
export const FixedWidth: Story = {
  args: {
    columns: [
      { colKey: "name", title: "姓名", width: 100 },
      { colKey: "age", title: "年龄", width: 80 },
      { colKey: "email", title: "邮箱", width: 240 },
      { colKey: "address", title: "地址", width: 300 },
      { colKey: "status", title: "状态", width: 100 }
    ],
    data: baseData,
    bordered: true,
    tableLayout: "fixed"
  }
};

// 自动列宽
export const AutoWidth: Story = {
  args: {
    columns: [
      { colKey: "name", title: "姓名" },
      { colKey: "age", title: "年龄" },
      { colKey: "email", title: "邮箱" },
      { colKey: "address", title: "地址" }
    ],
    data: baseData,
    bordered: true,
    tableLayout: "auto"
  }
};

// 垂直对齐
export const VerticalAlign: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3>Top</h3>
        <Table
          columns={[
            { colKey: "name", title: "姓名", width: 120 },
            {
              colKey: "description",
              title: "描述",
              cell: () => (
                <div>
                  <div>第一行内容</div>
                  <div>第二行内容</div>
                  <div>第三行内容</div>
                </div>
              )
            }
          ]}
          data={[
            { id: 1, name: "张三", description: "" },
            { id: 2, name: "李四", description: "" }
          ]}
          bordered
          verticalAlign="top"
        />
      </div>
      <div>
        <h3>Middle (默认)</h3>
        <Table
          columns={[
            { colKey: "name", title: "姓名", width: 120 },
            {
              colKey: "description",
              title: "描述",
              cell: () => (
                <div>
                  <div>第一行内容</div>
                  <div>第二行内容</div>
                  <div>第三行内容</div>
                </div>
              )
            }
          ]}
          data={[
            { id: 1, name: "张三", description: "" },
            { id: 2, name: "李四", description: "" }
          ]}
          bordered
          verticalAlign="middle"
        />
      </div>
      <div>
        <h3>Bottom</h3>
        <Table
          columns={[
            { colKey: "name", title: "姓名", width: 120 },
            {
              colKey: "description",
              title: "描述",
              cell: () => (
                <div>
                  <div>第一行内容</div>
                  <div>第二行内容</div>
                  <div>第三行内容</div>
                </div>
              )
            }
          ]}
          data={[
            { id: 1, name: "张三", description: "" },
            { id: 2, name: "李四", description: "" }
          ]}
          bordered
          verticalAlign="bottom"
        />
      </div>
    </div>
  )
};

// 复杂示例：综合使用
export const Complex: Story = {
  args: {
    columns: [
      { colKey: "name", title: "姓名", width: 120 },
      { colKey: "age", title: "年龄", width: 80, align: "center" },
      {
        colKey: "status",
        title: "状态",
        width: 100,
        align: "center",
        cell: ({ row }) => (
          <span
            style={{
              color: row.status === "active" ? "#52c41a" : "#ff4d4f",
              fontWeight: "bold"
            }}
          >
            {row.status === "active" ? "✓ 活跃" : "✗ 非活跃"}
          </span>
        )
      },
      {
        colKey: "score",
        title: "分数",
        width: 120,
        align: "right",
        cell: ({ row }) => (
          <span style={{ color: row.score >= 90 ? "#1890ff" : "#666", fontWeight: "bold" }}>{row.score} 分</span>
        )
      },
      {
        colKey: "email",
        title: "邮箱",
        width: 200,
        ellipsis: true
      },
      { colKey: "address", title: "地址", width: 250, ellipsis: true }
    ],
    data: baseData,
    bordered: true,
    stripe: true,
    hover: true,
    size: "medium",
    onRowClick: ({ row }) => {
      console.log("点击行:", row);
    }
  }
};
