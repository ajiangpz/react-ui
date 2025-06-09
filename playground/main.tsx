import React from "react";
import ReactDOM from "react-dom/client";
// ✅ 引入你的组件库
import { Button } from "react-mobile-ui/components/Button/Button";

function App() {
  return (
    <Button>测试按钮1</Button>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
