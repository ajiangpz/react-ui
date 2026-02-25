import { Meta, StoryObj } from "@storybook/react-vite";
import { SelectInput, Button } from "@tendaui/react/es";
import { useState, useEffect } from "react";
import { IconSearch, IconChevronDown } from "@tendaui/icons";

const meta: Meta<typeof SelectInput> = {
  title: "Components/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "筛选器输入框组件是用于承载单选、多选等选择器的输入框组件，可以自定义下拉框内容。"
      }
    }
  },
  argTypes: {
    allowInput: {
      control: "boolean",
      description: "是否允许输入"
    },
    autoWidth: {
      control: "boolean",
      description: "宽度随内容自适应"
    },
    autofocus: {
      control: "boolean",
      description: "自动聚焦"
    },
    borderless: {
      control: "boolean",
      description: "无边框模式"
    },
    clearable: {
      control: "boolean",
      description: "是否可清空"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用"
    },
    inputValue: {
      control: "text",
      description: "输入框的值"
    },
    label: {
      control: "text",
      description: "左侧文本"
    },
    loading: {
      control: "boolean",
      description: "是否处于加载状态"
    },
    minCollapsedNum: {
      control: "number",
      description: "最小折叠数量"
    },
    multiple: {
      control: "boolean",
      description: "是否为多选模式"
    },
    placeholder: {
      control: "text",
      description: "占位符"
    },
    popupVisible: {
      control: "boolean",
      description: "是否显示下拉框"
    },
    readonly: {
      control: "boolean",
      description: "只读状态"
    },
    reserveKeyword: {
      control: "boolean",
      description: "多选且可搜索时，是否保留搜索关键词"
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
    suffix: {
      control: "text",
      description: "后置图标前的后置内容"
    }
  }
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

const classStyles = `
<style>
.tdesign-demo__select-input-ul-autocomplete {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-autocomplete > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-autocomplete > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`;

const OPTIONS = ["Student A", "Student B", "Student C", "Student D", "Student E", "Student F"];

/** 基础自动完成输入框 */
export const Default: Story = {
  name: "基础用法",
  render: (args) => {
    const DefaultExample = () => {
      const [popupVisible, setPopupVisible] = useState(false);
      const [selectValue, setSelectValue] = useState("");
      const [options, setOptions] = useState(OPTIONS);

      const onOptionClick = (item: string) => {
        setSelectValue(item);
        setPopupVisible(false);
      };

      const onInputChange = (keyword: string) => {
        setSelectValue(keyword);
        const options = new Array(5).fill(null).map((t, index) => `${keyword} Student ${index}`);
        setOptions(options);
      };

      const onPopupVisibleChange = (val: boolean) => {
        setPopupVisible(val);
      };

      useEffect(() => {
        document.head.insertAdjacentHTML("beforeend", classStyles);
      }, []);

      return (
        <SelectInput
          value={selectValue}
          popupVisible={popupVisible}
          placeholder="请输入任意关键词"
          allowInput
          clearable
          style={{ width: "300px" }}
          onInputChange={onInputChange}
          onPopupVisibleChange={onPopupVisibleChange}
          panel={
            <ul className="tdesign-demo__select-input-ul-autocomplete">
              {options.map((item) => (
                <li key={item} onClick={() => onOptionClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
          }
          suffixIcon={<IconSearch />}
          {...args}
        />
      );
    };
    return <DefaultExample />;
  }
};

/** 多选模式 */
export const Multiple: Story = {
  name: "多选模式",
  render: () => {
    const MultipleExample = () => {
      const [value, setValue] = useState(["React", "Vue"]);
      const [popupVisible, setPopupVisible] = useState(false);
      const allOptions = ["React", "Vue", "Angular", "Svelte", "Solid"];

      const handleTagChange = (val: any) => {
        setValue(val);
      };

      return (
        <SelectInput
          value={value}
          popupVisible={popupVisible}
          placeholder="请选择框架"
          multiple
          clearable
          style={{ width: "400px" }}
          onTagChange={handleTagChange}
          onPopupVisibleChange={setPopupVisible}
          panel={
            <ul className="tdesign-demo__select-input-ul-autocomplete" style={{ padding: "8px" }}>
              {allOptions
                .filter((opt) => !value.includes(opt))
                .map((item) => (
                  <li key={item} onClick={() => setValue([...value, item])}>
                    {item}
                  </li>
                ))}
            </ul>
          }
        />
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
      <SelectInput
        size="small"
        placeholder="小尺寸"
        style={{ width: "300px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
        suffixIcon={<IconChevronDown />}
      />
      <SelectInput
        size="medium"
        placeholder="中尺寸（默认）"
        style={{ width: "300px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
        suffixIcon={<IconChevronDown />}
      />
      <SelectInput
        size="large"
        placeholder="大尺寸"
        style={{ width: "300px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
        suffixIcon={<IconChevronDown />}
      />
    </div>
  )
};

/** 不同状态 */
export const Status: Story = {
  name: "不同状态",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SelectInput
        status="default"
        placeholder="默认状态"
        tips="这是提示信息"
        style={{ width: "300px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
      <SelectInput
        status="success"
        placeholder="成功状态"
        tips="校验通过"
        style={{ width: "300px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
      <SelectInput
        status="warning"
        placeholder="警告状态"
        tips="请注意"
        style={{ width: "300px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
      <SelectInput
        status="error"
        placeholder="错误状态"
        tips="输入有误"
        style={{ width: "300px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
    </div>
  )
};

/** 禁用和只读 */
export const DisabledReadonly: Story = {
  name: "禁用和只读",
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <SelectInput
        value="正常状态"
        placeholder="正常"
        style={{ width: "200px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
      <SelectInput
        value="禁用状态"
        disabled
        placeholder="禁用"
        style={{ width: "200px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
      <SelectInput
        value="只读状态"
        readonly
        placeholder="只读"
        style={{ width: "200px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
    </div>
  )
};

/** 带前后置内容 */
export const WithLabelSuffix: Story = {
  name: "带前后置内容",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <SelectInput
        label="城市："
        placeholder="请选择"
        style={{ width: "350px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
        suffixIcon={<IconChevronDown />}
      />
      <SelectInput
        suffix={<span style={{ color: "#999" }}>个</span>}
        placeholder="请选择"
        style={{ width: "350px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
        suffixIcon={<IconChevronDown />}
      />
      <SelectInput
        prefixIcon={<IconSearch />}
        placeholder="搜索"
        style={{ width: "350px" }}
        panel={<div style={{ padding: "8px" }}>下拉内容</div>}
      />
    </div>
  )
};

/** 折叠标签 */
export const Collapsed: Story = {
  name: "折叠标签",
  render: () => {
    const CollapsedExample = () => {
      const [value, setValue] = useState(["React", "Vue", "Angular", "Svelte", "Solid"]);

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <SelectInput
            value={value}
            placeholder="请选择"
            multiple
            minCollapsedNum={2}
            style={{ width: "400px" }}
            onTagChange={(val: any) => setValue(val)}
            panel={<div style={{ padding: "8px" }}>下拉选项</div>}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>超过 2 个标签后折叠显示</div>
        </div>
      );
    };
    return <CollapsedExample />;
  }
};

/** 自定义下拉内容 */
export const CustomPanel: Story = {
  name: "自定义下拉内容",
  render: () => {
    const CustomPanelExample = () => {
      const [value, setValue] = useState("");
      const [popupVisible, setPopupVisible] = useState(false);

      return (
        <SelectInput
          value={value}
          popupVisible={popupVisible}
          placeholder="点击显示自定义下拉内容"
          style={{ width: "300px" }}
          onPopupVisibleChange={setPopupVisible}
          panel={
            <div style={{ padding: "16px" }}>
              <h4 style={{ margin: "0 0 12px" }}>自定义下拉内容</h4>
              <p style={{ margin: "0 0 12px", color: "#666" }}>
                可以放置任意内容，如表单、表格等。
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button
                  size="small"
                  onClick={() => {
                    setValue("已选择");
                    setPopupVisible(false);
                  }}
                >
                  确定
                </Button>
                <Button size="small" variant="outline" onClick={() => setPopupVisible(false)}>
                  取消
                </Button>
              </div>
            </div>
          }
        />
      );
    };
    return <CustomPanelExample />;
  }
};

/** 加载状态 */
export const Loading: Story = {
  name: "加载状态",
  render: () => (
    <SelectInput
      placeholder="加载中..."
      loading
      style={{ width: "300px" }}
      panel={<div style={{ padding: "8px" }}>下拉内容</div>}
    />
  )
};
