import React, { useState, Suspense, lazy } from "react";
import "./Demo.css";

export default function DemoWrapper({ componentName, demoName, code: initialCode, children }) {
  const [showCode, setShowCode] = useState(false);
  const [code] = useState(initialCode || "");

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="tdesign-demo-item">
      <div className="tdesign-demo-item__body">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </div>
      <div className="tdesign-demo-item__footer">
        <button className="tdesign-demo-item__toggle" onClick={toggleCode}>
          {showCode ? "隐藏代码" : "显示代码"}
        </button>
      </div>
      {showCode && code && (
        <div className="tdesign-demo-item__code">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
