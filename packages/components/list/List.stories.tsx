import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useEffect, useRef, useState } from "react";
import { List } from "./index";
import type { ListInstanceFunctions, TdListProps } from "./type";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "列表组件用于展示一组数据，支持基础列表、带图片列表、虚拟滚动、加载更多等功能。"
      }
    }
  },
  argTypes: {
    asyncLoading: {
      control: "select",
      options: ["", "loading", "load-more"],
      description: "自定义加载中状态"
    },
    footer: {
      control: "text",
      description: "底部内容"
    },
    header: {
      control: "text",
      description: "头部内容"
    },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "排列方式"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "尺寸"
    },
    split: {
      control: "boolean",
      description: "是否展示分割线"
    },
    stripe: {
      control: "boolean",
      description: "是否展示斑马纹"
    }
  }
};

export default meta;
type Story = StoryObj<typeof List>;

/** 基础列表 */
export const Default: Story = {
  name: "基础列表",
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

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => {
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
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>

        <div>
          <h4 style={{ marginBottom: "16px", color: "#666" }}>中尺寸（默认）</h4>
          <List size="medium">
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>

        <div>
          <h4 style={{ marginBottom: "16px", color: "#666" }}>大尺寸</h4>
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

/** 分割线 */
export const Split: Story = {
  name: "分割线",
  render: () => {
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
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ marginBottom: "16px", color: "#666" }}>有分割线</h4>
          <List split={true}>
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
};

/** 斑马纹 */
export const Stripe: Story = {
  name: "斑马纹",
  render: () => {
    const listData = [
      { id: 1, content: "列表内容列表内容列表内容" },
      { id: 2, content: "列表内容列表内容列表内容" },
      { id: 3, content: "列表内容列表内容列表内容" },
      { id: 4, content: "列表内容列表内容列表内容" },
      { id: 5, content: "列表内容列表内容列表内容" }
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

/** 带图片列表 */
export const WithImage: Story = {
  name: "带图片列表",
  render: () => {
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
          <List.ListItem key={item.id}>
            <List.ListItemMeta image={avatarUrl} title={item.title} description={item.content} />
          </List.ListItem>
        ))}
      </List>
    );
  }
};

/** 多行文本 */
export const Multiline: Story = {
  name: "多行文本",
  render: () => {
    const listData = [
      { id: 1, title: "列表主标题", content: "这是一段较长的描述文字，用于展示多行文本的效果。" },
      { id: 2, title: "列表主标题", content: "这是一段较长的描述文字，用于展示多行文本的效果。" },
      { id: 3, title: "列表主标题", content: "这是一段较长的描述文字，用于展示多行文本的效果。" }
    ];

    return (
      <List>
        {listData.map((item) => (
          <List.ListItem key={item.id}>
            <List.ListItemMeta title={item.title} description={item.content} />
          </List.ListItem>
        ))}
      </List>
    );
  }
};

/** 头部和底部 */
export const HeaderFooter: Story = {
  name: "头部和底部",
  render: () => {
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
            <List.ListItem key={item.id}>{item.content}</List.ListItem>
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
            <List.ListItem key={item.id}>{item.content}</List.ListItem>
          ))}
        </List>
        </div>
      </div>
    );
  }
};

/** 滚动加载 */
export const ScrollLoading: Story = {
  name: "滚动加载",
  render: () => {
  interface ListItemData {
    id: number;
    content: string;
    icon: string;
    title: string;
  }

    const ScrollExample = () => {
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

  const handleScroll: TdListProps["onScroll"] = ({ scrollBottom }) => {
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
        <List.ListItem key={item.id}>
          <List.ListItemMeta image={item.icon} title={item.title} description={item.content} />
        </List.ListItem>
      ))}
    </List>
  );
};

    return <ScrollExample />;
  }
};

/** 虚拟滚动 */
export const VirtualScroll: Story = {
  name: "虚拟滚动",
  render: () => {
  interface ListItemData {
    content: string;
  }

    const VirtualScrollExample = () => {
  const [data, setData] = useState<ListItemData[]>([]);
  const listRef = useRef<ListInstanceFunctions>(null);

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
          <List.ListItem key={index}>
            <List.ListItemMeta image={imageUrl} title="列表标题" description={item.content} />
          </List.ListItem>
        ))}
      </List>
      <div>
            <button onClick={handleScrollTo}>滚动到第 30 项</button>
      </div>
    </div>
  );
};

    return <VirtualScrollExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "虚拟滚动适用于大数据量场景，只渲染可视区域内的元素以提升性能。"
      }
    }
  }
};

/** 异步加载状态 */
export const AsyncLoading: Story = {
  name: "异步加载状态",
  render: () => {
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
          setAsyncLoading(<div style={{ textAlign: "center", padding: "12px", color: "#999" }}>没有更多数据了</div>);
    } else {
      setAsyncLoading(val);
    }
  };

      const onLoadMore: TdListProps["onLoadMore"] = () => {
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
          <List.ListItem key={item.id}>{item.content}</List.ListItem>
        ))}
      </List>
    </div>
  );
};

    return <AsyncLoadingExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => {
    const avatarUrl = "https://tdesign.gtimg.com/site/avatar.jpg";
    const listData = [
      { id: 1, title: "列表标题", content: "列表内容列表内容" },
      { id: 2, title: "列表标题", content: "列表内容列表内容" },
      { id: 3, title: "列表标题", content: "列表内容列表内容" }
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div>
          <h4 style={{ marginBottom: "12px", color: "#666" }}>基础列表</h4>
          <List>
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>

        <div>
          <h4 style={{ marginBottom: "12px", color: "#666" }}>带分割线</h4>
          <List split>
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>

        <div>
          <h4 style={{ marginBottom: "12px", color: "#666" }}>斑马纹</h4>
          <List stripe split={false}>
            {listData.map((item) => (
              <List.ListItem key={item.id}>{item.content}</List.ListItem>
            ))}
          </List>
        </div>

        <div>
          <h4 style={{ marginBottom: "12px", color: "#666" }}>带图片</h4>
          <List>
            {listData.map((item) => (
              <List.ListItem key={item.id}>
                <List.ListItemMeta image={avatarUrl} title={item.title} description={item.content} />
              </List.ListItem>
            ))}
          </List>
        </div>
      </div>
    );
  }
};
