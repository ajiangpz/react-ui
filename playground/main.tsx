import React from "react";
import ReactDOM from "react-dom/client";
// ✅ 引入你的组件库
import ui from "react-mobile-ui";
console.log(ui);

function App() {
  return (
    <div>
      <div>测试按钮1</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
