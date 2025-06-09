import * as ReactDOM from "react-dom/client";
import App from "./App";
// 获取 id 为 'root' 的 DOM 元素，并将其转换为 HTMLElement 类型
const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(<App />);
