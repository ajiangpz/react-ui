import React from "react";
import { List } from "../index";

const { ListItem } = List;

const HeaderFooterList = () => {
  const listData = [
    { id: 1, content: "列表内容列表内容列表内容" },
    { id: 2, content: "列表内容列表内容列表内容" },
    { id: 3, content: "列表内容列表内容列表内容" },
    { id: 4, content: "列表内容列表内容列表内容" }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "16px", color: "#666" }}>字符串头部/底部</h4>
        <List header="这里是 Header" footer="这里是 Footer">
          {listData.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </List>
      </div>

      <div>
        <h4 style={{ marginBottom: "16px", color: "#666" }}>自定义头部/底部</h4>
        <List
          header={<div style={{ fontWeight: "bold", color: "var(--td-brand-color)" }}>自定义 Header</div>}
          footer={<div style={{ textAlign: "center", color: "#999" }}>自定义 Footer</div>}
        >
          {listData.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default HeaderFooterList;
