import React, { useMemo, useState, Suspense } from "react";
import { highlightCode } from "../utils/codeHighlight";
import "./Demo.scss";

export default function DemoWrapper({ code: initialCode, children }) {
  const [showCode, setShowCode] = useState(false);
  const [code] = useState(initialCode || "");
  const highlightedCode = useMemo(() => highlightCode(code, "tsx"), [code]);

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
          <pre className="language-tsx">
            <code className="language-tsx" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>
      )}
    </div>
  );
}
