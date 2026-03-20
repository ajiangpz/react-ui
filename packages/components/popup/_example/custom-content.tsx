import React from "react";
import { Popup, Button } from "@tendaui/react";

const CustomContentDemo = () => {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup
        trigger="click"
        content={
          <div style={{ padding: "16px", width: "200px" }}>
            <h4 style={{ margin: "0 0 8px 0" }}>标题</h4>
            <p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "12px" }}>
              这是一段描述文字，可以放置更多内容。
            </p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
              <Button size="small" variant="outline">
                取消
              </Button>
              <Button size="small" theme="primary">
                确定
              </Button>
            </div>
          </div>
        }
        showArrow
      >
        <Button>自定义内容</Button>
      </Popup>

      <Popup
        trigger="hover"
        content={
          <div style={{ padding: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--td-brand-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}
              >
                A
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>用户名</div>
                <div style={{ fontSize: "12px", color: "#999" }}>user@example.com</div>
              </div>
            </div>
          </div>
        }
        showArrow
      >
        <Button>用户卡片</Button>
      </Popup>
    </div>
  );
};

export default CustomContentDemo;