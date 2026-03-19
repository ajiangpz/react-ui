import React from "react";
import { Button } from "@tendaui/react";
import { IconDownload, IconSearch } from "@tendaui/icons";

export default function Suffix() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button suffix={<IconDownload />} theme="primary">
        下载
      </Button>
      <Button icon={<IconSearch />} suffix={<IconDownload />} theme="primary">
        搜索并下载
      </Button>
    </div>
  );
}