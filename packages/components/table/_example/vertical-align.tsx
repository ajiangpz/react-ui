import React from "react";
import Table from "../index";
import type { BaseTableCol, TableRowData } from "../type";

// 示例数据类型
interface UserData extends TableRowData {
  id: number;
  name: string;
  description: string;
}

const VerticalAlignExample = () => (
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
);

export default VerticalAlignExample;