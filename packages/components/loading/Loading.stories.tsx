import { Meta, StoryObj } from "@storybook/react-vite";
import { Loading, Switch, Button } from "@tendaui/react/es";
import React, { useEffect, useState } from "react";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "加载组件用于在数据加载过程中显示加载状态，支持全屏加载、包裹元素加载、延迟加载等功能。"
      }
    }
  },
  argTypes: {
    attach: {
      control: "text",
      description: "挂载元素"
    },
    delay: {
      control: "number",
      description: "延迟显示加载效果的时间（毫秒）"
    },
    fullscreen: {
      control: "boolean",
      description: "是否显示为全屏加载"
    },
    indicator: {
      control: "boolean",
      description: "加载指示符"
    },
    inheritColor: {
      control: "boolean",
      description: "是否继承父元素颜色"
    },
    loading: {
      control: "boolean",
      description: "是否处于加载状态"
    },
    preventScrollThrough: {
      control: "boolean",
      description: "防止滚动穿透（全屏加载模式有效）"
    },
    showOverlay: {
      control: "boolean",
      description: "是否需要遮罩层"
    },
    size: {
      control: "text",
      description: "尺寸"
    },
    text: {
      control: "text",
      description: "加载提示文案"
    },
    zIndex: {
      control: "number",
      description: "层级"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Loading>;

/** 基础加载 */
export const Default: Story = {
  name: "基础加载",
  render: () => <Loading />
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Loading size="small" />
        <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>small</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loading size="medium" />
        <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>medium</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loading size="large" />
        <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>large</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Loading size="40px" />
        <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>40px</div>
      </div>
    </div>
  )
};

/** 带文字 */
export const WithText: Story = {
  name: "带文字",
  render: () => (
    <div style={{ display: "flex", gap: "32px" }}>
      <Loading text="加载中..." />
      <Loading text="数据处理中..." />
      <Loading text="请稍候..." />
    </div>
  )
};

/** 包裹元素 */
export const Wrapper: Story = {
  name: "包裹元素",
  render: () => {
    const WrapperExample = () => {
      const [loading, setLoading] = useState(true);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>加载状态：</span>
            <Switch value={loading} onChange={(val) => setLoading(val as boolean)} />
          </div>
          <Loading loading={loading} showOverlay>
            <div
              style={{
                padding: "40px",
                background: "#f5f5f5",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <h3>内容区域</h3>
              <p>这是被 Loading 包裹的内容</p>
              <p>当 loading 为 true 时会显示遮罩层和加载指示符</p>
            </div>
          </Loading>
        </div>
      );
    };
    return <WrapperExample />;
  }
};

/** 全屏加载 */
export const Fullscreen: Story = {
  name: "全屏加载",
  render: () => {
    const FullscreenExample = () => {
  const [loading, setLoading] = useState(false);

      const showLoading = () => {
        setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  };

  return (
    <>
          <Loading loading={loading} fullscreen preventScrollThrough={true} text="全屏加载中..." />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ color: "#666" }}>点击按钮显示全屏加载，2秒后自动关闭</div>
            <div>
              <Button theme="primary" onClick={showLoading}>
                显示全屏加载
              </Button>
            </div>
          </div>
    </>
  );
};
    return <FullscreenExample />;
  }
};

/** 延迟加载 */
export const Delay: Story = {
  name: "延迟加载",
  render: () => {
    const DelayExample = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

      const loadData = (time?: number) => {
    setLoading(true);
    setData("");
    const timer = setTimeout(() => {
      setLoading(false);
      setData("数据加载完成，短时间的数据加载并未出现 loading");
      clearTimeout(timer);
    }, time || 100);
  };

  useEffect(() => {
    setTimeout(() => {
          loadData();
    }, 0);
  }, []);

  return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>
            设置 delay=500ms，当加载时间小于 500ms 时不显示 loading，避免闪烁
          </div>
          <Loading loading={loading} delay={500} size="small" showOverlay>
            <div
              style={{
                padding: "20px",
                background: "#f5f5f5",
                borderRadius: "4px",
                minHeight: "60px"
              }}
            >
              {data || "等待加载..."}
            </div>
        </Loading>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button size="small" onClick={() => loadData()}>
              快速加载（无 loading）
        </Button>
            <Button size="small" onClick={() => loadData(1000)}>
              慢速加载（显示 loading）
        </Button>
      </div>
    </div>
  );
};
    return <DelayExample />;
  },
  parameters: {
    docs: {
      description: {
        story: "设置 delay 属性可以延迟显示加载效果，避免快速请求时的闪烁问题。"
      }
    }
  }
};

/** 继承颜色 */
export const InheritColor: Story = {
  name: "继承颜色",
  render: () => (
    <div style={{ display: "flex", gap: "32px" }}>
      <div
        style={{
          padding: "20px",
          background: "var(--td-brand-color)",
          borderRadius: "4px"
        }}
      >
        <Loading inheritColor />
      </div>
      <div
        style={{
          padding: "20px",
          background: "var(--td-success-color)",
          borderRadius: "4px"
        }}
      >
        <Loading inheritColor />
      </div>
      <div
        style={{
          padding: "20px",
          background: "var(--td-warning-color)",
          borderRadius: "4px"
        }}
      >
        <Loading inheritColor />
      </div>
    </div>
  )
};

/** 无遮罩层 */
export const NoOverlay: Story = {
  name: "无遮罩层",
  render: () => {
    const NoOverlayExample = () => {
      const [loading, setLoading] = useState(true);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>加载状态：</span>
            <Switch value={loading} onChange={(val) => setLoading(val as boolean)} />
          </div>
          <Loading loading={loading} showOverlay={false}>
            <div
              style={{
                padding: "40px",
                background: "#f5f5f5",
                borderRadius: "8px",
                textAlign: "center"
              }}
            >
              <h3>内容区域</h3>
              <p>无遮罩层时内容仍然可见</p>
            </div>
          </Loading>
        </div>
      );
    };
    return <NoOverlayExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Loading size="small" />
          <Loading size="medium" />
          <Loading size="large" />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>带文字</h4>
        <div style={{ display: "flex", gap: "24px" }}>
          <Loading text="加载中..." />
          <Loading size="small" text="加载中..." />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>继承颜色</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ padding: "16px", background: "var(--td-brand-color)", borderRadius: "4px" }}>
            <Loading inheritColor size="small" />
          </div>
          <div style={{ padding: "16px", background: "var(--td-success-color)", borderRadius: "4px" }}>
            <Loading inheritColor size="small" />
          </div>
          <div style={{ padding: "16px", background: "var(--td-error-color)", borderRadius: "4px" }}>
            <Loading inheritColor size="small" />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>包裹内容</h4>
        <Loading loading={true} showOverlay>
          <div style={{ padding: "30px", background: "#f5f5f5", borderRadius: "4px" }}>被包裹的内容区域</div>
        </Loading>
      </div>
    </div>
  )
};
