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

const AutoWidthExample = () => (
  <Table
    columns={[
      { colKey: "name", title: "姓名" },
      { colKey: "age", title: "年龄" },
      { colKey: "email", title: "邮箱" },
      { colKey: "address", title: "地址" }
    ]}
    data={baseData}
    bordered
    tableLayout="auto"
  />
);

export default AutoWidthExample;