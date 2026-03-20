import React from "react";
import { Loading } from "../index";

const SizesLoading = () => (
  <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
    <div style={{ textAlign: "center" }}>
      <Loading size="small" />
      <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>small</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <Loading size="medium" />
      <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>medium</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <Loading size="large" />
      <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>large</div>
    </div>
    <div style={{ textAlign: "center" }}>
      <Loading size="40px" />
      <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>40px</div>
    </div>
  </div>
);

export default SizesLoading;
