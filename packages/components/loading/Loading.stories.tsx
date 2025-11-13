import { Meta, StoryObj } from "@storybook/react-vite";
import { Loading, Switch, Button } from "@tendaui/react/es";
import { useEffect, useState } from "react";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
  component: Loading,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Loading {...args}></Loading>
    </>
  )
};

const LoadingFullscreen = ({ ...args }) => {
  const [checked, setChecked] = useState("on");
  const [loading, setLoading] = useState(false);

  const onChange = (value) => {
    console.log(value);
    setChecked(value);
    setLoading(value);

    if (value)
      setTimeout(() => {
        setChecked("off");
        setLoading(false);
      }, 2000);
  };
  return (
    <>
      <Loading loading={loading} fullscreen preventScrollThrough={true} text="加载中" {...args}></Loading>
      Loading state:
      <Switch value={checked} onCheckedChange={onChange} />
    </>
  );
};

export const Fullscreen: Story = {
  render: (args) => <LoadingFullscreen {...args}></LoadingFullscreen>
};

const LoadingDelay = ({ ...args }) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const loadingData = (time?: number) => {
    setLoading(true);
    setData("");
    const timer = setTimeout(() => {
      setLoading(false);
      setData("数据加载完成，短时间的数据加载并未出现 loading");
      clearTimeout(timer);
    }, time || 100);
  };

  useEffect(() => {
    // Use setTimeout to avoid calling setState synchronously within an effect
    setTimeout(() => {
      loadingData();
    }, 0);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {/* <div>
        <Loading delay={500} size="small" loading={loading} {...args}></Loading>
        {data ? <div>{`loading 作为独立元素：${data}`}</div> : null}
      </div> */}

      <div>
        <Loading loading={loading} delay={500} size="small" showOverlay {...args}>
          <div>{data ? `loading 作为包裹元素：${data}` : ""}</div>
        </Loading>
      </div>

      <div className="mt-2 flex justify-center gap-2">
        <Button onClick={() => loadingData()} size="sm">
          快速重新加载数据（无loading）
        </Button>
        <Button onClick={() => loadingData(1000)} size="sm">
          慢速重新加载数据
        </Button>
      </div>
    </div>
  );
};

export const Delay: Story = {
  render: (args) => <LoadingDelay {...args}></LoadingDelay>
};
