import { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@tendaui/react/es";
import React, { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "选择器组件用于从一组选项中选择一个或多个值，支持搜索、多选、分组等功能。"
      }
    }
  },
  argTypes: {
    value: {
      control: "text",
      description: "选中值"
    },
    placeholder: {
      control: "text",
      description: "占位符"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用组件"
    },
    clearable: {
      control: "boolean",
      description: "是否可以清空选项"
    },
    filterable: {
      control: "boolean",
      description: "是否可搜索"
    },
    multiple: {
      control: "boolean",
      description: "是否允许多选"
    },
    loading: {
      control: "boolean",
      description: "是否为加载状态"
    },
    readonly: {
      control: "boolean",
      description: "只读状态"
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
    },
    borderless: {
      control: "boolean",
      description: "无边框模式"
    },
    autoWidth: {
      control: "boolean",
      description: "宽度随内容自适应"
    },
    creatable: {
      control: "boolean",
      description: "是否允许用户创建新条目"
    },
    max: {
      control: "number",
      description: "多选时最大选择数量"
    },
    minCollapsedNum: {
      control: "number",
      description: "最小折叠数量"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

const basicOptions = [
        { label: "架构云", value: "1", title: "架构云选项" },
        { label: "大数据", value: "2" },
        { label: "区块链", value: "3" },
        { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5" }
];

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  render: () => {
    const DefaultExample = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Select
            value={value}
            onChange={(val) => setValue(val as string)}
            options={basicOptions}
            placeholder="请选择"
            clearable
            style={{ width: "300px" }}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>选中值：{value || "(空)"}</div>
        </div>
      );
    };
    return <DefaultExample />;
  }
};

/** 可搜索 */
export const Filterable: Story = {
  name: "可搜索",
  render: () => {
    const FilterableExample = () => {
      const [value, setValue] = useState("");
      return (
        <Select
          value={value}
          onChange={(val) => setValue(val as string)}
          options={basicOptions}
          placeholder="请输入关键词搜索"
          filterable
          clearable
          style={{ width: "300px" }}
    />
  );
};
    return <FilterableExample />;
  }
};

/** 多选 */
export const Multiple: Story = {
  name: "多选",
  render: () => {
    const MultipleExample = () => {
      const [value, setValue] = useState<string[]>(["1", "3"]);
      const options = [
  { label: "全选", checkAll: true },
  { label: "架构云", value: "1" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
        { label: "人工智能", value: "5" }
      ];
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Select
            value={value}
            onChange={(val) => setValue(val as string[])}
            options={options}
            placeholder="请选择多个选项"
            multiple
            filterable
            clearable
            style={{ width: "400px" }}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>选中值：{JSON.stringify(value)}</div>
        </div>
      );
    };
    return <MultipleExample />;
  }
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Select size="small" options={basicOptions} placeholder="小尺寸" style={{ width: "300px" }} />
      <Select size="medium" options={basicOptions} placeholder="中尺寸（默认）" style={{ width: "300px" }} />
      <Select size="large" options={basicOptions} placeholder="大尺寸" style={{ width: "300px" }} />
    </div>
  )
};

/** 不同状态 */
export const Status: Story = {
  name: "不同状态",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Select status="default" options={basicOptions} placeholder="默认状态" tips="这是一条提示" style={{ width: "300px" }} />
      <Select status="success" options={basicOptions} placeholder="成功状态" tips="校验通过" style={{ width: "300px" }} />
      <Select status="warning" options={basicOptions} placeholder="警告状态" tips="请注意" style={{ width: "300px" }} />
      <Select status="error" options={basicOptions} placeholder="错误状态" tips="输入有误" style={{ width: "300px" }} />
    </div>
  )
};

/** 禁用状态 */
export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Select options={basicOptions} placeholder="正常状态" style={{ width: "200px" }} />
      <Select options={basicOptions} placeholder="禁用状态" disabled defaultValue="1" style={{ width: "200px" }} />
      <Select options={basicOptions} placeholder="只读状态" readonly defaultValue="2" style={{ width: "200px" }} />
    </div>
  )
};

/** 分组选项 */
export const GroupOptions: Story = {
  name: "分组选项",
  render: () => {
    const groupOptions = [
      {
        group: "华北",
        children: [
          { label: "北京", value: "beijing" },
          { label: "天津", value: "tianjin" }
        ]
      },
      {
        group: "华东",
        children: [
          { label: "上海", value: "shanghai" },
          { label: "南京", value: "nanjing" },
          { label: "杭州", value: "hangzhou" }
        ]
      },
      {
        group: "华南",
        children: [
          { label: "广州", value: "guangzhou" },
          { label: "深圳", value: "shenzhen" }
        ]
      }
    ];

    const GroupExample = () => {
      const [value, setValue] = useState("");
  return (
    <Select
      value={value}
          onChange={(val) => setValue(val as string)}
          options={groupOptions}
          placeholder="请选择城市"
      filterable
          clearable
          style={{ width: "300px" }}
    />
  );
};
    return <GroupExample />;
  }
};

/** 自定义内容 */
export const CustomContent: Story = {
  name: "自定义内容",
  render: () => {
    const customOptions = [
      { label: "架构云", value: "1", content: <span style={{ color: "var(--td-brand-color)" }}>架构云（推荐）</span> },
      { label: "大数据", value: "2", content: <span>大数据 <span style={{ color: "#999", fontSize: "12px" }}>- 企业版</span></span> },
      { label: "人工智能", value: "3", content: <span style={{ color: "var(--td-success-color)" }}>人工智能（新）</span> }
    ];

    return (
      <Select
        options={customOptions}
        placeholder="选项支持自定义内容"
        style={{ width: "300px" }}
      />
    );
  }
};

/** 前后置内容 */
export const LabelSuffix: Story = {
  name: "前后置内容",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Select
        label="城市："
        options={basicOptions}
        placeholder="请选择"
        style={{ width: "350px" }}
      />
      <Select
        suffix={<span style={{ color: "#999" }}>个</span>}
        options={basicOptions}
        placeholder="请选择"
        style={{ width: "350px" }}
      />
    </div>
  )
};

/** 可创建新选项 */
export const Creatable: Story = {
  name: "可创建新选项",
  render: () => {
    const CreatableExample = () => {
      const [value, setValue] = useState<string[]>([]);
      const [options, setOptions] = useState([
        { label: "React", value: "react" },
        { label: "Vue", value: "vue" },
        { label: "Angular", value: "angular" }
      ]);

      const handleCreate = (val: string | number) => {
        const newOption = { label: String(val), value: String(val) };
        setOptions([...options, newOption]);
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Select
            value={value}
            onChange={(val) => setValue(val as string[])}
            options={options}
            placeholder="输入并回车创建新选项"
            multiple
            filterable
            creatable
            clearable
            onCreate={handleCreate}
            style={{ width: "400px" }}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>提示：输入新内容后按回车可创建新选项</div>
        </div>
      );
    };
    return <CreatableExample />;
  }
};

/** 加载状态 */
export const Loading: Story = {
  name: "加载状态",
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <Select options={basicOptions} placeholder="正常" style={{ width: "200px" }} />
      <Select options={[]} placeholder="加载中..." loading style={{ width: "200px" }} />
    </div>
  )
};

/** 折叠标签 */
export const Collapsed: Story = {
  name: "折叠标签",
  render: () => {
    const CollapsedExample = () => {
      const [value, setValue] = useState<string[]>(["1", "2", "3", "5"]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Select
            value={value}
            onChange={(val) => setValue(val as string[])}
            options={basicOptions}
            placeholder="请选择"
            multiple
            minCollapsedNum={2}
            style={{ width: "400px" }}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>超过 2 个选项时会折叠显示</div>
        </div>
      );
    };
    return <CollapsedExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>基础用法</h4>
        <Select options={basicOptions} placeholder="请选择" clearable style={{ width: "300px" }} />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>可搜索</h4>
        <Select options={basicOptions} placeholder="请输入关键词" filterable clearable style={{ width: "300px" }} />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>多选</h4>
        <Select options={basicOptions} placeholder="请选择多个" multiple clearable style={{ width: "400px" }} />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸</h4>
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <Select size="small" options={basicOptions} placeholder="小" style={{ width: "150px" }} />
          <Select size="medium" options={basicOptions} placeholder="中" style={{ width: "150px" }} />
          <Select size="large" options={basicOptions} placeholder="大" style={{ width: "150px" }} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>状态</h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Select status="default" options={basicOptions} placeholder="默认" style={{ width: "150px" }} />
          <Select status="success" options={basicOptions} placeholder="成功" style={{ width: "150px" }} />
          <Select status="warning" options={basicOptions} placeholder="警告" style={{ width: "150px" }} />
          <Select status="error" options={basicOptions} placeholder="错误" style={{ width: "150px" }} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>禁用/只读</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Select options={basicOptions} placeholder="正常" style={{ width: "150px" }} />
          <Select options={basicOptions} placeholder="禁用" disabled style={{ width: "150px" }} />
          <Select options={basicOptions} placeholder="只读" readonly defaultValue="1" style={{ width: "150px" }} />
        </div>
      </div>
    </div>
  )
};
