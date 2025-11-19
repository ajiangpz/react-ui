# TDesign Theme Generator 实现原理分析

## 📋 概述

`tdesign-theme-generator` 是 TDesign 提供的主题配置生成器组件，允许用户通过可视化界面自定义组件库的主题颜色，并实时预览
效果。

参考：[GitHub 仓库](https://github.com/Tencent/tdesign/tree/main/packages/theme-generator)

## 🏗️ 技术架构

### 1. 构建方式

```javascript
// package.json
"build": "vue-cli-service build --target wc --inline-vue --name td-theme-generator src/Generator.vue"
```

- **框架**：Vue 2.7.14
- **构建工具**：Vue CLI
- **输出格式**：Web Component (Custom Element)
- **组件名称**：`td-theme-generator`
- **Shadow DOM**：使用 Shadow DOM 隔离样式

### 2. 注册方式

```javascript
// 在 dist/td-theme-generator.js 中
window.customElements.define("td-theme-generator", vue_wc_wrapper(Vue, Generatorshadow));
```

通过 `customElements.define` 注册为自定义元素，可以在任何框架中使用。

## 🎨 核心实现原理

### 1. CSS 变量（CSS Custom Properties）机制

主题系统基于 CSS 变量实现，所有主题相关的颜色、尺寸等都定义为 CSS 变量：

```css
:root,
:root[theme-mode="light"] {
  --td-brand-color-1: #f2f3ff;
  --td-brand-color-2: #d9e1ff;
  --td-brand-color-7: #0052d9;
  /* ... 更多变量 */
}

:root[theme-mode="dark"] {
  --td-brand-color-1: #1b2f51;
  --td-brand-color-2: #173463;
  --td-brand-color-7: #2667d4;
  /* ... 更多变量 */
}
```

### 2. 主题切换机制

#### 2.1 通过 `theme-mode` 属性切换

```javascript
// 切换主题
document.documentElement.setAttribute("theme-mode", "dark");
// 或
document.documentElement.setAttribute("theme-mode", "light");
```

#### 2.2 监听主题变化

使用 `MutationObserver` 监听 `document.documentElement` 的 `theme-mode` 属性变化：

```javascript
function syncThemeToGenerator() {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "theme-mode") {
        const generator = document.querySelector("td-theme-generator");
        if (!generator) return;
        const themeMode = document.documentElement.getAttribute("theme-mode");
        generator.setAttribute("theme-mode", themeMode);
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["theme-mode"]
  });
}
```

### 3. 动态设置 CSS 变量

当用户修改主题颜色时，通过 `style.setProperty` 动态设置 CSS 变量：

```javascript
// 设置 CSS 变量
style.setProperty("--".concat(key), vars[key]);

// 例如：
document.documentElement.style.setProperty("--td-brand-color-7", "#0052d9");
```

### 4. 实时预览机制

#### 4.1 iframe 预览

使用 iframe 来预览主题效果，避免影响主页面：

```javascript
function handleMobileTokenChange(iframe, styleElement) {
  const updatedCss = styleElement.innerText;
  const iframeStyleElement = iframe.contentDocument.getElementById(styleElement.id);
  if (iframeStyleElement) {
    iframeStyleElement.textContent = updatedCss;
  } else {
    const newStyleElement = iframe.contentDocument.createElement("style");
    newStyleElement.id = styleElement.id;
    newStyleElement.textContent = updatedCss;
    iframe.contentDocument.head.appendChild(newStyleElement);
  }
}
```

#### 4.2 同步主题到 iframe

```javascript
function handleMobileModeChange(iframe, mode) {
  iframe.contentDocument.documentElement.setAttribute("theme-mode", mode);
}
```

### 5. 颜色处理

使用 `chroma.js` 和 `tvision-color` 库进行颜色处理：

- **颜色转换**：RGB、HSL、HEX 等格式转换
- **颜色生成**：根据主色生成渐变色系（color-1 到 color-10）
- **颜色计算**：亮度、对比度等计算

### 6. 主题导出

支持将自定义主题导出为 CSS 文件：

```javascript
function downloadFile(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.download = fileName;
  a.target = "_blank";
  a.href = url;
  a.click();
}
```

## 🔄 工作流程

### 1. 初始化流程

```
1. 组件挂载
   ↓
2. 读取默认主题变量（light/dark）
   ↓
3. 初始化生成器样式（避免与 TDesign 冲突）
   ↓
4. 监听 document.documentElement 的 theme-mode 变化
   ↓
5. 同步主题到组件内部
```

### 2. 用户操作流程

```
用户修改颜色
   ↓
计算颜色系（color-1 到 color-10）
   ↓
更新 CSS 变量
   ↓
实时预览（iframe）
   ↓
保存到 localStorage（可选）
```

### 3. 主题应用流程

```
用户点击应用主题
   ↓
获取所有自定义 CSS 变量
   ↓
创建 <style> 标签注入到 document.head
   ↓
覆盖默认主题变量
   ↓
页面实时更新
```

## 📦 关键依赖

```json
{
  "dependencies": {
    "vue": "2.7.14",              // Vue 框架
    "tdesign-vue": "1.9.4",       // TDesign Vue 组件
    "tvision-color": "^1.6.0",   // 颜色处理库
    "chroma.js",                  // 颜色转换库（间接依赖）
    "cssbeautify": "^0.3.1",     // CSS 格式化
    "lodash": "^4.17.21"         // 工具函数
  }
}
```

## 🎯 核心功能

### 1. 主题变量管理

- 品牌色（brand-color-1 到 brand-color-10）
- 功能色（success、warning、error）
- 中性色（gray、text、bg）
- 其他（shadow、radius、font 等）

### 2. 实时预览

- 桌面端预览
- 移动端预览（iframe）
- 小程序预览（特殊处理）

### 3. 主题导出

- 导出为 CSS 文件
- 支持 light/dark 模式
- 格式化输出

### 4. 持久化

- localStorage 保存配置
- 页面刷新后恢复

## 💡 设计亮点

### 1. Web Component 架构

- **框架无关**：可以在 React、Vue、Angular 等任何框架中使用
- **样式隔离**：Shadow DOM 确保样式不冲突
- **易于集成**：只需引入一个 JS 文件

### 2. CSS 变量方案

- **性能优秀**：浏览器原生支持，无需 JS 运行时计算
- **实时生效**：修改变量值立即反映到页面
- **易于覆盖**：通过 CSS 优先级轻松覆盖默认值

### 3. MutationObserver 监听

- **响应式**：自动同步外部主题变化
- **高效**：只监听特定属性变化
- **兼容性好**：现代浏览器广泛支持

## 🔧 使用方式

### 1. 安装

```bash
npm install tdesign-theme-generator
```

### 2. 引入

```javascript
// main.js
import "tdesign-theme-generator";
```

### 3. 使用

```jsx
// App.jsx
function App() {
  return (
    <>
      {/* 其他内容 */}
      <td-theme-generator />
    </>
  );
}
```

### 4. 切换主题

```javascript
// 切换到深色主题
document.documentElement.setAttribute("theme-mode", "dark");

// 切换到浅色主题
document.documentElement.setAttribute("theme-mode", "light");
```

## 📝 总结

`tdesign-theme-generator` 通过以下技术实现了强大的主题定制功能：

1. **Web Component**：提供框架无关的组件封装
2. **CSS 变量**：基于浏览器原生特性，性能优秀
3. **MutationObserver**：实现响应式的主题同步
4. **颜色算法**：自动生成完整的颜色系
5. **iframe 预览**：隔离预览环境，不影响主页面

这套方案既保证了功能的完整性，又确保了良好的性能和用户体验。
