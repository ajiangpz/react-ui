import React from "react";
import { List } from "../index";

const { ListItem } = List;

const SizesList = () => {
  const listData = [
    { id: 1, content: "列表内容列表内容列表内容" },
    { id: 2, content: "列表内容列表内容列表内容" },
    { id: 3, content: "列表内容列表内容列表内容" }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "16px", color: "#666" }}>小尺寸</h4>
        <List size="small">
          {listData.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </List>
      </div>

      <div>
        <h4 style={{ marginBottom: "16px", color: "#666" }}>中尺寸（默认）</h4>
        <List size="medium">
          {listData.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </List>
      </div>

      <div>
        <h4 style={{ marginBottom: "16px", color: "#666" }}>大尺寸</h4>
        <List size="large">
          {listData.map((item) => (
            <ListItem key={item.id}>{item.content}</ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default SizesList;
