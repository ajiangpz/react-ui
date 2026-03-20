import React from "react";
import { List } from "../index";

const { ListItem, ListItemMeta } = List;

const MultilineList = () => {
  const listData = [
    { id: 1, title: "列表主标题", content: "这是一段较长的描述文字，用于展示多行文本的效果。" },
    { id: 2, title: "列表主标题", content: "这是一段较长的描述文字，用于展示多行文本的效果。" },
    { id: 3, title: "列表主标题", content: "这是一段较长的描述文字，用于展示多行文本的效果。" }
  ];

  return (
    <List>
      {listData.map((item) => (
        <ListItem key={item.id}>
          <ListItemMeta title={item.title} description={item.content} />
        </ListItem>
      ))}
    </List>
  );
};

export default MultilineList;
