import React, { useEffect, useState } from "react";
import { List } from "../index";

const { ListItem, ListItemMeta } = List;

interface ListItemData {
  id: number;
  content: string;
  icon: string;
  title: string;
}

const ScrollLoadingList = () => {
  const [listData, setListData] = useState<ListItemData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const dataSource: ListItemData[] = [];
  const total = 100;
  const pageSize = 20;

  for (let i = 0; i < total; i++) {
    dataSource.push({
      id: i,
      content: "列表内容列表内容列表内容",
      icon: "https://tdesign.gtimg.com/list-icon.png",
      title: `列表标题 ${i + 1}`
    });
  }

  const fetchData = async (pageInfo: { pageNum: number; pageSize: number }) => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      const { pageNum, pageSize } = pageInfo;
      const newDataSource = dataSource.slice((pageNum - 1) * pageSize, pageNum * pageSize);
      setListData((prev) => prev.concat(newDataSource));
      setPageNum(pageNum);
      setIsLoading(false);
    }, 500);
  };

  const handleScroll = ({ scrollBottom }: { scrollTop: number; scrollBottom: number }) => {
    if (!scrollBottom && listData.length < total) {
      fetchData({ pageNum: pageNum + 1, pageSize });
    }
  };

  useEffect(() => {
    fetchData({ pageNum, pageSize });
  }, []);

  return (
    <List
      asyncLoading={isLoading ? "loading" : ""}
      size="small"
      style={{ height: "300px", overflow: "auto" }}
      onScroll={handleScroll}
    >
      {listData.map((item) => (
        <ListItem key={item.id}>
          <ListItemMeta image={item.icon} title={item.title} description={item.content} />
        </ListItem>
      ))}
    </List>
  );
};

export default ScrollLoadingList;
