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
  { colKey: "email", title: "邮箱", width: 240 },
  { colKey: "address", title: "地址" }
];

const CustomEmptyExample = () => (
  <Table
    columns={baseColumns}
    data={[]}
    empty={
      <div style={{ padding: "40px", textAlign: "center", color: "#999" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>📭</div>
        <div>暂无数据，请稍后再试</div>
      </div>
    }
  />
);

export default CustomEmptyExample;
