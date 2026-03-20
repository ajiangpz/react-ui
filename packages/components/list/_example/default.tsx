import React from "react";
import { List } from "../index";

const { ListItem } = List;

const DefaultList = () => {
  const listData = [
    { id: 1, content: "列表内容的描述性文字" },
    { id: 2, content: "列表内容的描述性文字" },
    { id: 3, content: "列表内容的描述性文字" },
    { id: 4, content: "列表内容的描述性文字" }
  ];

  return (
    <List>
      {listData.map((item) => (
        <ListItem key={item.id}>{item.content}</ListItem>
      ))}
    </List>
  );
};

export default DefaultList;
