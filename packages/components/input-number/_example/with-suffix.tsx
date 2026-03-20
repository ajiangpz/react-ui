import React from "react";
import InputNumber from "../index";

const WithSuffixInputNumber = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <InputNumber suffix="个" defaultValue={10} style={{ width: 200 }} />
    <InputNumber suffix="元" defaultValue={100} style={{ width: 200 }} />
    <InputNumber suffix="kg" defaultValue={50} style={{ width: 200 }} />
  </div>
);

export default WithSuffixInputNumber;
