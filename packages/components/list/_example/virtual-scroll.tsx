import React, { useEffect, useRef, useState } from "react";
import { List } from "../index";

const { ListItem, ListItemMeta } = List;

interface ListItemData {
  content: string;
}

const VirtualScrollList = () => {
  const [data, setData] = useState<ListItemData[]>([]);
  const listRef = useRef<any>(null);

  const handleScrollTo = () => {
    listRef.current?.scrollTo({
      index: 30,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const list: ListItemData[] = [];
    for (let i = 0; i < 3000; i++) {
      list.push({ content: `第${i + 1}个列表内容的描述性文字` });
    }
    setTimeout(() => setData(list), 0);
  }, []);

  const imageUrl = "https://tdesign.gtimg.com/site/avatar.jpg";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <List
        ref={listRef}
        style={{ height: "300px" }}
        scroll={{ type: "virtual", rowHeight: 80, bufferSize: 10, threshold: 10 }}
      >
        {data.map((item, index) => (
          <ListItem key={index}>
            <ListItemMeta image={imageUrl} title="列表标题" description={item.content} />
          </ListItem>
        ))}
      </List>
      <div>
        <button onClick={handleScrollTo}>滚动到第 30 项</button>
      </div>
    </div>
  );
};

export default VirtualScrollList;
