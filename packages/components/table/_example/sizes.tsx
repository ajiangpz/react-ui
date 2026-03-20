import React from "react";
import Table from "../index";
import type { BaseTableCol, TableRowData } from "../type";

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

// 基础数据
const baseColumns: BaseTableCol<UserData>[] = [
  { colKey: "name", title: "姓名", width: 120 },
  { colKey: "age", title: "年龄", width: 80, align: "center" },
  { colKey: "email", title: "邮箱", width: 200 },
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

const SizesExample = () => (
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
);

export default SizesExample;