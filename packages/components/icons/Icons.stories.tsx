import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as Icons from "@tendaui/icons";

const meta: Meta = {
  title: "Components/Icons",
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj;

// 获取所有图标组件
const iconList = Object.entries(Icons)
  .filter(([name, value]) => {
    // 过滤掉非图标组件：default、Icon 组件本身、以及类型定义
    if (name === "default" || name === "Icon") return false;
    if (!name.startsWith("Icon")) return false;
    // 确保是 React 组件
    return typeof value === "function" || (value && typeof value === "object" && "render" in value);
  })
  .map(([name, Icon]) => [name, Icon as React.ComponentType<any>]) as [string, React.ComponentType<any>][];

// 按名称排序
iconList.sort(([a], [b]) => a.localeCompare(b));

export const AllIcons: Story = {
  render: function AllIconsRender() {
    const [copied, setCopied] = useState(false);
    const [currentCopyName, setCurrentCopyName] = useState("");

    const handleCopy = async (content: string) => {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setCurrentCopyName(content);
        setTimeout(() => {
          setCopied(false);
          setCurrentCopyName("");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };

    return (
      <div style={{ padding: "24px" }}>
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ marginBottom: "8px", fontSize: "20px", fontWeight: 600 }}>图标库</h2>
          <p style={{ color: "#666", fontSize: "14px" }}>共 {iconList.length} 个图标，点击图标卡片可复制组件名称</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "16px"
          }}
        >
          {iconList.map(([name, Icon]) => (
            <div
              key={name}
              onClick={() => handleCopy(name)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                position: "relative",
                backgroundColor: copied && name === currentCopyName ? "#f0f9ff" : "#fff"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3b82f6";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                  minHeight: "48px"
                }}
              >
                <Icon size="large" />
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                  textAlign: "center",
                  wordBreak: "break-word",
                  margin: 0,
                  lineHeight: "1.4"
                }}
                title={name}
              >
                {name}
              </p>
              {copied && name === currentCopyName && (
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#10b981",
                    backgroundColor: "#d1fae5",
                    padding: "2px 6px",
                    borderRadius: "4px"
                  }}
                >
                  已复制
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
};

// 按分类展示图标
export const IconsByCategory: Story = {
  render: function IconsByCategoryRender() {
    // 根据图标名称前缀或关键词自动分类
    const getCategory = (name: string): string => {
      const lowerName = name.toLowerCase();
      if (lowerName.includes("arrow") || lowerName.includes("chevron") || lowerName.includes("caret")) {
        return "箭头";
      }
      if (
        lowerName.includes("delete") ||
        lowerName.includes("remove") ||
        lowerName.includes("clear") ||
        lowerName.includes("close") ||
        lowerName.includes("minus")
      ) {
        return "删除/关闭";
      }
      if (lowerName.includes("add") || lowerName.includes("plus") || lowerName.includes("create")) {
        return "添加";
      }
      if (lowerName.includes("edit") || lowerName.includes("modify") || lowerName.includes("update")) {
        return "编辑";
      }
      if (
        lowerName.includes("save") ||
        lowerName.includes("download") ||
        lowerName.includes("upload") ||
        lowerName.includes("export") ||
        lowerName.includes("import")
      ) {
        return "文件操作";
      }
      if (lowerName.includes("user") || lowerName.includes("member") || lowerName.includes("people")) {
        return "用户";
      }
      if (lowerName.includes("file") || lowerName.includes("folder") || lowerName.includes("document")) {
        return "文件";
      }
      if (lowerName.includes("search") || lowerName.includes("filter") || lowerName.includes("sort")) {
        return "搜索/筛选";
      }
      if (lowerName.includes("setting") || lowerName.includes("config") || lowerName.includes("option")) {
        return "设置";
      }
      if (lowerName.includes("check") || lowerName.includes("tick") || lowerName.includes("success")) {
        return "成功/确认";
      }
      if (
        lowerName.includes("alert") ||
        lowerName.includes("warning") ||
        lowerName.includes("error") ||
        lowerName.includes("info")
      ) {
        return "提示/状态";
      }
      if (
        lowerName.includes("mail") ||
        lowerName.includes("phone") ||
        lowerName.includes("message") ||
        lowerName.includes("comment") ||
        lowerName.includes("notification")
      ) {
        return "通信";
      }
      if (
        lowerName.includes("menu") ||
        lowerName.includes("more") ||
        lowerName.includes("expand") ||
        lowerName.includes("shrink")
      ) {
        return "界面控制";
      }
      return "其他";
    };

    // 按分类分组
    const categorized: Record<string, typeof iconList> = {};
    iconList.forEach(([name, Icon]) => {
      const category = getCategory(name);
      if (!categorized[category]) {
        categorized[category] = [];
      }
      categorized[category].push([name, Icon]);
    });

    // 按分类名称排序
    const sortedCategories = Object.keys(categorized).sort();

    return (
      <div style={{ padding: "24px" }}>
        {sortedCategories.map((category) => {
          const categoryIcons = categorized[category];
          if (categoryIcons.length === 0) return null;

          return (
            <div key={category} style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  paddingBottom: "8px",
                  borderBottom: "2px solid #e5e7eb"
                }}
              >
                {category} ({categoryIcons.length})
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                  gap: "16px"
                }}
              >
                {categoryIcons.map(([name, Icon]) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#fff"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                        minHeight: "48px"
                      }}
                    >
                      <Icon size="large" />
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        textAlign: "center",
                        wordBreak: "break-word",
                        margin: 0,
                        lineHeight: "1.4"
                      }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

// 搜索图标
export const IconSearch: Story = {
  render: function IconSearchRender() {
    const [searchTerm, setSearchTerm] = useState("");
    const [copied, setCopied] = useState(false);
    const [currentCopyName, setCurrentCopyName] = useState("");

    const filteredIcons = iconList.filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleCopy = async (content: string) => {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setCurrentCopyName(content);
        setTimeout(() => {
          setCopied(false);
          setCurrentCopyName("");
        }, 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };

    return (
      <div style={{ padding: "24px" }}>
        <div style={{ marginBottom: "24px" }}>
          <input
            type="text"
            placeholder="搜索图标名称..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "12px 16px",
              fontSize: "14px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              transition: "border-color 0.2s"
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#3b82f6";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#d1d5db";
            }}
          />
          <p style={{ marginTop: "8px", color: "#666", fontSize: "14px" }}>找到 {filteredIcons.length} 个图标</p>
        </div>
        {filteredIcons.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "16px"
            }}
          >
            {filteredIcons.map(([name, Icon]) => (
              <div
                key={name}
                onClick={() => handleCopy(name)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  position: "relative",
                  backgroundColor: copied && name === currentCopyName ? "#f0f9ff" : "#fff"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    minHeight: "48px"
                  }}
                >
                  <Icon size="large" />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    textAlign: "center",
                    wordBreak: "break-word",
                    margin: 0,
                    lineHeight: "1.4"
                  }}
                  title={name}
                >
                  {name}
                </p>
                {copied && name === currentCopyName && (
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#10b981",
                      backgroundColor: "#d1fae5",
                      padding: "2px 6px",
                      borderRadius: "4px"
                    }}
                  >
                    已复制
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "48px",
              color: "#999",
              fontSize: "14px"
            }}
          >
            未找到匹配的图标
          </div>
        )}
      </div>
    );
  }
};
