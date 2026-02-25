import { Meta, StoryObj } from "@storybook/react-vite";
import { TagInput, TagInputValue } from "./index";
import { useState } from "react";

const meta: Meta<typeof TagInput> = {
  title: "Components/TagInput",
  component: TagInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "标签输入框组件用于输入多个标签，支持回车添加、删除标签等操作。"
      }
    }
  },
  argTypes: {
    value: {
      control: "object",
      description: "标签值"
    },
    defaultValue: {
      control: "object",
      description: "标签值，非受控属性"
    },
    placeholder: {
      control: "text",
      description: "占位符"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用标签输入框"
    },
    readonly: {
      control: "boolean",
      description: "只读状态"
    },
    clearable: {
      control: "boolean",
      description: "是否可清空"
    },
    autoWidth: {
      control: "boolean",
      description: "宽度随内容自适应"
    },
    borderless: {
      control: "boolean",
      description: "无边框模式"
    },
    dragSort: {
      control: "boolean",
      description: "拖拽调整标签顺序"
    },
    excessTagsDisplayType: {
      control: "select",
      options: ["scroll", "break-line"],
      description: "标签超出时的呈现方式"
    },
    label: {
      control: "text",
      description: "左侧文本"
    },
    max: {
      control: "number",
      description: "最大允许输入的标签数量"
    },
    minCollapsedNum: {
      control: "number",
      description: "最小折叠数量"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "组件尺寸"
    },
    status: {
      control: "select",
      options: ["default", "success", "warning", "error"],
      description: "输入框状态"
    }
  }
};

export default meta;

type Story = StoryObj<typeof TagInput>;

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  render: (args) => {
    const DefaultExample = () => {
      const [tags, setTags] = useState<TagInputValue>(["Vue", "React", "Angular"]);

      return (
        <div style={{ width: "400px" }}>
          <TagInput
            value={tags}
            onChange={(val) => setTags(val)}
            clearable
            placeholder="请输入标签，按回车添加"
            {...args}
          />
          <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>
            当前标签：{tags.join(", ")}
          </div>
        </div>
      );
    };
    return <DefaultExample />;
  }
};

/** 受控与非受控 */
export const ControlledUncontrolled: Story = {
  name: "受控与非受控",
  render: () => {
    const Example = () => {
      const [controlledTags, setControlledTags] = useState<TagInputValue>(["Vue", "React"]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>受控模式</div>
            <TagInput
              value={controlledTags}
              onChange={(val) => setControlledTags(val)}
              placeholder="请输入"
              clearable
              style={{ width: "400px" }}
            />
          </div>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>非受控模式</div>
            <TagInput
              defaultValue={["Svelte", "Solid"]}
              placeholder="请输入"
              clearable
              style={{ width: "400px" }}
            />
          </div>
        </div>
      );
    };
    return <Example />;
  }
};

/** 带前置标签 */
export const WithLabel: Story = {
  name: "带前置标签",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TagInput
        label="技术栈："
        defaultValue={["React", "TypeScript"]}
        placeholder="请输入"
        clearable
        style={{ width: "450px" }}
      />
      <TagInput
        label="城市："
        defaultValue={["北京", "上海"]}
        placeholder="请输入"
        clearable
        style={{ width: "450px" }}
      />
    </div>
  )
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>小尺寸</div>
        <TagInput
          size="small"
          defaultValue={["标签一", "标签二"]}
          placeholder="小尺寸"
          style={{ width: "400px" }}
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>中尺寸（默认）</div>
        <TagInput
          size="medium"
          defaultValue={["标签一", "标签二"]}
          placeholder="中尺寸"
          style={{ width: "400px" }}
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>大尺寸</div>
        <TagInput
          size="large"
          defaultValue={["标签一", "标签二"]}
          placeholder="大尺寸"
          style={{ width: "400px" }}
        />
      </div>
    </div>
  )
};

/** 不同状态 */
export const Status: Story = {
  name: "不同状态",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <TagInput
        status="default"
        defaultValue={["默认"]}
        tips="这是提示信息"
        placeholder="默认状态"
        style={{ width: "400px" }}
      />
      <TagInput
        status="success"
        defaultValue={["成功"]}
        tips="校验通过"
        placeholder="成功状态"
        style={{ width: "400px" }}
      />
      <TagInput
        status="warning"
        defaultValue={["警告"]}
        tips="请注意"
        placeholder="警告状态"
        style={{ width: "400px" }}
      />
      <TagInput
        status="error"
        defaultValue={["错误"]}
        tips="输入有误"
        placeholder="错误状态"
        style={{ width: "400px" }}
      />
    </div>
  )
};

/** 禁用和只读 */
export const DisabledReadonly: Story = {
  name: "禁用和只读",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>正常</div>
        <TagInput defaultValue={["Vue", "React"]} placeholder="正常" style={{ width: "400px" }} />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>禁用</div>
        <TagInput defaultValue={["Vue", "React"]} disabled placeholder="禁用" style={{ width: "400px" }} />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>只读</div>
        <TagInput defaultValue={["Vue", "React"]} readonly placeholder="只读" style={{ width: "400px" }} />
      </div>
    </div>
  )
};

/** 限制标签数量 */
export const MaxTags: Story = {
  name: "限制标签数量",
  render: () => {
    const MaxTagsExample = () => {
      const [tags, setTags] = useState<TagInputValue>(["Vue", "React"]);

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <TagInput
            value={tags}
            onChange={(val) => setTags(val)}
            max={5}
            placeholder="最多输入 5 个标签"
            clearable
            style={{ width: "400px" }}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>
            已输入 {tags.length}/5 个标签
          </div>
        </div>
      );
    };
    return <MaxTagsExample />;
  }
};

/** 折叠标签 */
export const Collapsed: Story = {
  name: "折叠标签",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>超过 2 个折叠</div>
        <TagInput
          defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五"]}
          minCollapsedNum={2}
          placeholder="请输入"
          style={{ width: "400px" }}
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>超过 3 个折叠</div>
        <TagInput
          defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五"]}
          minCollapsedNum={3}
          placeholder="请输入"
          style={{ width: "400px" }}
        />
      </div>
    </div>
  )
};

/** 标签超出处理 */
export const ExcessDisplay: Story = {
  name: "标签超出处理",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>换行显示（默认）</div>
        <TagInput
          defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五", "标签六"]}
          excessTagsDisplayType="break-line"
          placeholder="请输入"
          style={{ width: "300px" }}
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>横向滚动</div>
        <TagInput
          defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五", "标签六"]}
          excessTagsDisplayType="scroll"
          placeholder="请输入"
          style={{ width: "300px" }}
        />
      </div>
    </div>
  )
};

/** 事件演示 */
export const Events: Story = {
  name: "事件演示",
  render: () => {
    const EventsExample = () => {
      const [tags, setTags] = useState<TagInputValue>(["Vue"]);
      const [logs, setLogs] = useState<string[]>([]);

      const addLog = (msg: string) => {
        setLogs((prev) => [...prev.slice(-4), msg]);
      };

      return (
        <div style={{ display: "flex", gap: "24px" }}>
          <div style={{ flex: 1 }}>
            <TagInput
              value={tags}
              onChange={(val, context) => {
                setTags(val);
                addLog(`onChange: ${JSON.stringify(val)}, trigger: ${context.trigger}`);
              }}
              onEnter={(val, context) => {
                addLog(`onEnter: inputValue=${context.inputValue}`);
              }}
              onRemove={(context) => {
                addLog(`onRemove: removed=${context.item}, index=${context.index}`);
              }}
              onClear={() => {
                addLog("onClear: 清空所有标签");
              }}
              onPaste={(context) => {
                addLog(`onPaste: ${context.pasteValue}`);
              }}
              clearable
              placeholder="请输入标签"
              style={{ width: "350px" }}
            />
          </div>
          <div
            style={{
              flex: 1,
              padding: "12px",
              background: "#f5f5f5",
              borderRadius: "4px",
              fontSize: "12px",
              maxHeight: "150px",
              overflow: "auto"
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>事件日志：</div>
            {logs.length === 0 ? (
              <div style={{ color: "#999" }}>暂无日志</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} style={{ marginBottom: "4px", color: "#666" }}>
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      );
    };
    return <EventsExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>基础用法</h4>
        <TagInput defaultValue={["Vue", "React"]} placeholder="请输入" clearable style={{ width: "400px" }} />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>带前置标签</h4>
        <TagInput
          label="技术栈："
          defaultValue={["Vue", "React"]}
          placeholder="请输入"
          clearable
          style={{ width: "450px" }}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <TagInput size="small" defaultValue={["小"]} placeholder="小" style={{ width: "300px" }} />
          <TagInput size="medium" defaultValue={["中"]} placeholder="中" style={{ width: "300px" }} />
          <TagInput size="large" defaultValue={["大"]} placeholder="大" style={{ width: "300px" }} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>状态</h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <TagInput status="default" defaultValue={["默认"]} style={{ width: "180px" }} />
          <TagInput status="success" defaultValue={["成功"]} style={{ width: "180px" }} />
          <TagInput status="warning" defaultValue={["警告"]} style={{ width: "180px" }} />
          <TagInput status="error" defaultValue={["错误"]} style={{ width: "180px" }} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>禁用/只读</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <TagInput defaultValue={["正常"]} style={{ width: "180px" }} />
          <TagInput disabled defaultValue={["禁用"]} style={{ width: "180px" }} />
          <TagInput readonly defaultValue={["只读"]} style={{ width: "180px" }} />
        </div>
      </div>
    </div>
  )
};
