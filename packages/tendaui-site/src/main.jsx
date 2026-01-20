import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
// 全局引入组件库样式，所有 demo 无需单独引入
import "@tendaui/react/es/style/index.css";
// 引入主题生成器组件

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
