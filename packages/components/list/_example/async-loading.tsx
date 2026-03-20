import React, { useState } from "react";
import { List } from "../index";

const { ListItem } = List;

const AsyncLoadingList = () => {
  const [asyncLoading, setAsyncLoading] = useState<React.ReactNode>("");

  const listData = [
    { id: 1, content: "列表内容列表内容列表内容" },
    { id: 2, content: "列表内容列表内容列表内容" },
    { id: 3, content: "列表内容列表内容列表内容" },
    { id: 4, content: "列表内容列表内容列表内容" }
  ];

  const handleAsyncLoading = (val: string) => {
    if (val === "loading-custom") {
      setAsyncLoading(<div style={{ textAlign: "center", padding: "12px", color: "#999" }}>没有更多数据了</div>);
    } else {
      setAsyncLoading(val);
    }
  };

  const onLoadMore = () => {
    console.log("加载更多");
    handleAsyncLoading("loading");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <button onClick={() => handleAsyncLoading("load-more")}>显示加载更多</button>
        <button onClick={() => handleAsyncLoading("loading")}>显示加载中</button>
        <button onClick={() => handleAsyncLoading("loading-custom")}>自定义底部</button>
        <button onClick={() => handleAsyncLoading("")}>隐藏加载状态</button>
      </div>
      <List asyncLoading={asyncLoading} onLoadMore={onLoadMore}>
        {listData.map((item) => (
          <ListItem key={item.id}>{item.content}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default AsyncLoadingList;
