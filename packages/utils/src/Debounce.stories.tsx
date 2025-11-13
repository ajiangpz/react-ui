import { Meta } from "@storybook/react-vite";
import { Button } from "@tendaui/react/es/index";
import { NotificationProvider } from "@tendaui/react/es/notification";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { debounce } from "./debounce3";
import { throttle } from "./throttle2";
import { throttle as localThrottle } from "lodash-es";
import { throttle as underscoreThrottle } from "./throttle3";
import { throttle as throttle4 } from "./throttle4";

function expensiveCompute(a: number, b: number) {
  return a + b;
}

const debouncedCompute = debounce(expensiveCompute, 3000, { leading: true });
const DebounceDemo = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  // 不依赖 count，避免每次渲染变更
  const handleClick = useCallback(() => {
    // 使用函数式更新获取最新的 count 值并更新
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("当前 count 值:", prevCount, "-> 新值:", newCount);

      // 使用更新后的新值调用防抖函数
      const returnValue = debouncedCompute(newCount, 1);
      console.log("debouncedCompute 返回值:", returnValue);

      // 更新返回值到单独的 state
      if (returnValue !== undefined) {
        setResult(returnValue);
      }

      return newCount;
    });
  }, []);

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
      <div style={{ marginTop: 16 }}>
        <div>count: {count}</div>
        <div>防抖函数返回值: {result !== null ? result : "未执行"}</div>
      </div>
    </div>
  );
};

const meta: Meta<typeof DebounceDemo> = {
  title: "Utils/Debounce",
  component: DebounceDemo
};

export default meta;

export const Default = {
  render: () => (
    <NotificationProvider>
      <DebounceDemo />
    </NotificationProvider>
  )
};

export const Demo2C = () => {
  const debounced = debounce(() => console.log(2), 3000, { leading: false, trailing: true });
  return <Button onClick={debounced}>Debounce Test </Button>;
};

export const Demo2 = {
  render: () => <Demo2C></Demo2C>
};

const ThrottleDemoComponent = () => {
  const throttled = underscoreThrottle(() => console.log(2), 3000, { leading: false, trailing: true });
  return <Button onClick={throttled}>Throttle Test </Button>;
};
export const Demo3 = {
  render: () => <ThrottleDemoComponent />
};
