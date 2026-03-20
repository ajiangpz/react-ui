import React from "react";
import { List } from "../index";

const { ListItem } = List;

const SplitList = () => {
  const listData = [
    { id: 1, content: "列表内容列表内容列表内容" },
    { id: 2, content: "列表内容列表内容列表内容" },
    { id: 3, content: "列表内容列表内容列表内容" },
    { id: 4, content: "列表内容列表内容列表内容" }
  ];

  return (
    <div style={{ display: "flex", gap: "32px" }}>
      <div style={{ flex: 1 }}>
        <h4 style={{ marginBottom: "16px", color: "#666" }}>无分割线</h4>
        <List split={false}>
          {listData.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </List>
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ marginBottom: "16px", color: "#666" }}>有分割线</h4>
        <List split={true}>
          {listData.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default SplitList;
