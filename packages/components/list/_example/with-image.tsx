import React from "react";
import { List } from "../index";

const { ListItem, ListItemMeta } = List;

const WithImageList = () => {
  const avatarUrl = "https://tdesign.gtimg.com/site/avatar.jpg";
  const listData = [
    { id: 1, title: "列表主内容", content: "列表内容列表内容列表内容" },
    { id: 2, title: "列表主内容", content: "列表内容列表内容列表内容" },
    { id: 3, title: "列表主内容", content: "列表内容列表内容列表内容" },
    { id: 4, title: "列表主内容", content: "列表内容列表内容列表内容" }
  ];

  return (
    <List>
      {listData.map((item) => (
        <ListItem key={item.id}>
          <ListItemMeta image={avatarUrl} title={item.title} description={item.content} />
        </ListItem>
      ))}
    </List>
  );
};

export default WithImageList;
