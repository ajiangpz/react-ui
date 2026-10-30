import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, Input, IPInput } from "@tendaui/react";
import ButtonFromSubpath from "@tendaui/react/button";
import type { InputNumberValue } from "@tendaui/react/input-number/type";
import { IconSetting } from "@tendaui/icons";
import { ThemeGenerator, generateNewTheme, exportCustomTheme } from "@tendaui/theme-generator";
import "@tendaui/react/button/style";
import "@tendaui/react/input/style";
import "@tendaui/react/style";
import "@tendaui/react/fireworks/style";
import "@tendaui/theme-generator/style.css";

const initialCount: InputNumberValue = 0;

function App() {
  const [count, setCount] = useState(initialCount);
  const [value, setValue] = useState("");
  return (
    <main>
      <h1>Published package consumer</h1>
      <Button theme="primary" onClick={() => setCount(Number(count) + 1)} icon={<IconSetting />}>
        发布包按钮
      </Button>
      <p role="status">已点击 {count} 次</p>
      <Input value={value} onChange={setValue} placeholder="独立消费输入" />
      <IPInput defaultValue="192.168.1.1" />
      <ButtonFromSubpath onClick={() => generateNewTheme("#ed7b2f")}>切换主题</ButtonFromSubpath>
      <Button onClick={() => exportCustomTheme()}>导出主题</Button>
      <ThemeGenerator />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
