import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useEffect, useRef, useState } from "react";
import { List } from "./index";
import type { ListInstanceFunctions, TdListProps } from "./type";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium"
    },
    split: {
      control: "boolean",
      defaultValue: false
    },
    stripe: {
      control: "boolean",
      defaultValue: false
    },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal"
    }
  }
};

export default meta;

type Story = StoryObj<typeof List>;

// 基础示例
export const Base: Story = {
  render: () => {
    const listData = [
      { id: 1, content: "列表内容的描述性文字" },
      { id: 2, content: "列表内容的描述性文字" },
      { id: 3, content: "列表内容的描述性文字" },
      { id: 4, content: "列表内容的描述性文字" }
    ];

    return (
      <List>
        {listData.map((item) => (
          <List.ListItem key={item.id}>{item.content}</List.ListItem>
        ))}
      </List>
    );
  }
};

// 尺寸示例
export const Size: Story = {
  render: () => {
    const listData = [
      { id: 1, content: "列表内容列表内容列表内容" },
      { id: 2, content: "列表内容列表内容列表内容" },
      { id: 3, content: "列表内容列表内容列表内容" },
      { id: 4, content: "列表内容列表内容列表内容" }
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div>
          <h4 style={{ marginBottom: "16px" }}>尺寸-小</h4>
          <List size="small">
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>

        <div>
          <h4 style={{ marginBottom: "16px" }}>尺寸-中（默认）</h4>
          <List>
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>

        <div>
          <h4 style={{ marginBottom: "16px" }}>尺寸-大</h4>
          <List size="large">
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
};

// 斑马纹示例
export const Stripe: Story = {
  render: () => {
    const listData = [
      { id: 1, content: "列表内容列表内容列表内容" },
      { id: 2, content: "列表内容列表内容列表内容" },
      { id: 3, content: "列表内容列表内容列表内容" },
      { id: 4, content: "列表内容列表内容列表内容" }
    ];

    return (
      <List stripe={true} split={false}>
        {listData.map((item) => (
          <List.ListItem key={item.id}>{item.content}</List.ListItem>
        ))}
      </List>
    );
  }
};

// 带操作按钮的示例
export const Operation: Story = {
  render: () => {
    const avatarUrl = "https://tdesign.gtimg.com/site/avatar.jpg";

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <List>
          <List.ListItem>
            <List.ListItemMeta image={avatarUrl} title="列表主内容" description="列表内容列表内容" />
          </List.ListItem>
          <List.ListItem>
            <List.ListItemMeta image={avatarUrl} title="列表主内容" description="列表内容列表内容" />
          </List.ListItem>
        </List>

        <List split>
          <List.ListItem>
            <List.ListItemMeta image={avatarUrl} title="列表主内容" description="列表内容列表内容" />
          </List.ListItem>
          <List.ListItem>
            <List.ListItemMeta image={avatarUrl} title="列表主内容" description="列表内容列表内容" />
          </List.ListItem>
        </List>
      </div>
    );
  }
};

// 图片文字示例
export const ImageText: Story = {
  render: () => {
    const avatarUrl = "https://tdesign.gtimg.com/list-icon.png";
    const listData = [
      { id: 1, content: "列表内容列表内容列表内容" },
      { id: 2, content: "列表内容列表内容列表内容" },
      { id: 3, content: "列表内容列表内容列表内容" },
      { id: 4, content: "列表内容列表内容列表内容" }
    ];

    return (
      <List size="small">
        {listData.map((item) => (
          <List.ListItem key={item.id}>
            <List.ListItemMeta image={avatarUrl} title="列表主内容" description="列表内容列表内容列表内容" />
          </List.ListItem>
        ))}
      </List>
    );
  }
};

// 多行文本示例
export const Multiline: Story = {
  render: () => {
    const listData = [
      { id: 1, content: "列表内容列表内容列表内容" },
      { id: 2, content: "列表内容列表内容列表内容" },
      { id: 3, content: "列表内容列表内容列表内容" },
      { id: 4, content: "列表内容列表内容列表内容" }
    ];

    return (
      <List>
        {listData.map((item) => (
          <List.ListItem key={item.id}>
            <List.ListItemMeta title="列表主内容" description={item.content} />
          </List.ListItem>
        ))}
      </List>
    );
  }
};

// 头部和底部示例
export const HeaderFooter: Story = {
  render: () => {
    const listData = [
      { id: 1, content: "列表内容列表内容列表内容" },
      { id: 2, content: "列表内容列表内容列表内容" },
      { id: 3, content: "列表内容列表内容列表内容" },
      { id: 4, content: "列表内容列表内容列表内容" }
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <List header="这里是 Header" footer="这里是 Footer">
          {listData.map((item) => (
            <List.ListItem key={item.id}>{item.content}</List.ListItem>
          ))}
        </List>

        <List header={<p>通过 TNode 插入的 Header</p>} footer={<p>通过 TNode 插入的 Footer</p>}>
          {listData.map((item) => (
            <List.ListItem key={item.id}>{item.content}</List.ListItem>
          ))}
        </List>
      </div>
    );
  }
};

// 滚动加载示例
const ScrollExample = () => {
  interface ListItemData {
    id: number;
    content: string;
    icon: string;
    title: string;
  }

  const [listData, setListData] = useState<ListItemData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const dataSource: ListItemData[] = [];
  const total = 3000;
  const pageSize = 50;

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
    try {
      setTimeout(() => {
        const { pageNum, pageSize } = pageInfo;
        const newDataSource = dataSource.slice((pageNum - 1) * pageSize, pageNum * pageSize);
        setListData((prev) => prev.concat(newDataSource));
        setPageNum(pageNum);
        setIsLoading(false);
      }, 300);
    } catch {
      setListData([]);
    }
  };

  const handleScroll: TdListProps["onScroll"] = ({ scrollBottom }) => {
    if (!scrollBottom && listData.length < total) {
      fetchData({ pageNum: pageNum + 1, pageSize });
    }
  };

  useEffect(() => {
    fetchData({ pageNum, pageSize });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <List
      asyncLoading={isLoading ? "loading" : ""}
      size="small"
      style={{ height: "300px", overflow: "auto" }}
      onScroll={handleScroll}
    >
      {listData.map((item) => (
        <List.ListItem key={item.id}>
          <List.ListItemMeta image={item.icon} title={item.title} description={item.content} />
        </List.ListItem>
      ))}
    </List>
  );
};

export const Scroll: Story = {
  render: () => <ScrollExample />
};

// 虚拟滚动示例
const VirtualScrollExample = () => {
  interface ListItemData {
    content: string;
  }

  const [data, setData] = useState<ListItemData[]>([]);
  const listRef = useRef<ListInstanceFunctions>(null);

  const handleScroll = () => {
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
    // 使用 setTimeout 避免同步 setState 警告
    setTimeout(() => setData(list), 0);
  }, []);

  const imageUrl = "https://tdesign.gtimg.com/site/avatar.jpg";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      <List
        ref={listRef}
        style={{ height: "300px" }}
        scroll={{ type: "virtual", rowHeight: 80, bufferSize: 10, threshold: 10 }}
      >
        {data.map((item, index) => (
          <List.ListItem key={index}>
            <List.ListItemMeta image={imageUrl} title="列表标题" description={item.content} />
          </List.ListItem>
        ))}
      </List>
      <div>
        <button onClick={handleScroll}>滚动到指定节点</button>
      </div>
    </div>
  );
};

export const VirtualScroll: Story = {
  render: () => <VirtualScrollExample />
};

// 异步加载示例
const AsyncLoadingExample = () => {
  const [asyncLoading, setAsyncLoading] = useState<React.ReactNode>("");

  const listData = [
    { id: 1, content: "列表内容列表内容列表内容" },
    { id: 2, content: "列表内容列表内容列表内容" },
    { id: 3, content: "列表内容列表内容列表内容" },
    { id: 4, content: "列表内容列表内容列表内容" }
  ];

  const handleAsyncLoading = (val: string) => {
    if (val === "loading-custom") {
      setAsyncLoading(<div style={{ textAlign: "center", marginTop: 12 }}>没有更多数据了</div>);
    } else {
      setAsyncLoading(val);
    }
  };

  const onLoadMore: TdListProps["onLoadMore"] = ({ e }) => {
    console.log(e);
    handleAsyncLoading("loading");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={() => handleAsyncLoading("load-more")}>加载更多</button>
        <button onClick={() => handleAsyncLoading("loading")}>加载中</button>
        <button onClick={() => handleAsyncLoading("loading-custom")}>自定义加载更多</button>
        <button onClick={() => handleAsyncLoading("")}>加载完成</button>
      </div>
      <List asyncLoading={asyncLoading} onLoadMore={onLoadMore}>
        {listData.map((item) => (
          <List.ListItem key={item.id}>{item.content}</List.ListItem>
        ))}
      </List>
    </div>
  );
};

export const AsyncLoading: Story = {
  render: () => <AsyncLoadingExample />
};
