import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup } from "./CheckboxGroup";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "组件/复选框",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "复选框是否被选中",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "是否禁用复选框",
      defaultValue: false,
    },
    children: {
      control: "text",
      description: "复选框标签文本",
    },
    className: {
      control: "text",
      description: "自定义样式类名",
    },
    "aria-label": {
      control: "text",
      description: "为屏幕阅读器提供的标签文本",
    },
    "aria-labelledby": {
      control: "text",
      description: "引用描述元素的 ID",
    },
    name: {
      control: "text",
      description: "表单提交时的字段名",
    },
    value: {
      control: "text",
      description: "复选框的值",
    },
    id: {
      control: "text",
      description: "元素的唯一标识符",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 基础示例
export const Default: Story = {
  args: {
    defaultChecked: true,
    children: "基础复选框"
  }
};
Default.storyName = "基础示例";

// 受控组件示例
export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked as boolean)}
    >
      点击我切换状态
    </Checkbox>
  );
};
Controlled.storyName = "受控组件";

// 禁用状态
export const Disabled = () => {
  return (
    <div className="space-y-4">
      <Checkbox disabled>
        禁用状态
      </Checkbox>
      <Checkbox disabled defaultChecked>
        禁用且选中
      </Checkbox>
    </div>
  );
};
Disabled.storyName = "禁用状态";



// 自定义样式
export const CustomStyle = () => {
  return (
    <div className="space-y-4">
      <Checkbox className="h-6 w-6">
        大尺寸复选框
      </Checkbox>
      <Checkbox className="data-[state=checked]:bg-green-500">
        自定义选中颜色
      </Checkbox>
      <Checkbox className="rounded-full">
        圆形复选框
      </Checkbox>
    </div>
  );
};
CustomStyle.storyName = "自定义样式";

// CheckboxGroup 基础示例
export const CheckboxGroupBasic = () => {
  const [selected, setSelected] = useState<string[]>([]);
  
  return (
    <CheckboxGroup
      label="选择你喜欢的水果"
      description="可以多选"
      options={[
        { label: "苹果", value: "apple" },
        { label: "香蕉", value: "banana" },
        { label: "橙子", value: "orange" },
        { label: "葡萄", value: "grape" }
      ]}
      value={selected}
      onChange={setSelected}
    />
  );
};
CheckboxGroupBasic.storyName = "复选框组-基础";  // 设置中文名称

// CheckboxGroup 禁用状态
export const CheckboxGroupDisabled = () => {
  const [selected, setSelected] = useState<string[]>(["option1"]);
  
  return (
    <div className="space-y-4">
      <CheckboxGroup
        label="完全禁用"
        disabled
        options={[
          { label: "选项1", value: "option1" },
          { label: "选项2", value: "option2" },
          { label: "选项3", value: "option3" }
        ]}
        value={selected}
        onChange={setSelected}
      />
      
      <CheckboxGroup
        label="部分选项禁用"
        options={[
          { label: "正常选项", value: "normal" },
          { label: "禁用选项", value: "disabled1", disabled: true },
          { label: "另一个禁用选项", value: "disabled2", disabled: true }
        ]}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
};
CheckboxGroupDisabled.storyName = "复选框组-禁用状态";  // 设置中文名称

// CheckboxGroup 复杂表单示例
export const CheckboxGroupFormExample = () => {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);
  
  return (
    <form className="space-y-8">
      <CheckboxGroup
        label="个性化设置"
        description="选择您感兴趣的内容类型"
        options={[
          { label: "技术资讯", value: "tech" },
          { label: "行业动态", value: "industry" },
          { label: "产品更新", value: "product" },
          { label: "用户故事", value: "story" }
        ]}
        value={preferences}
        onChange={setPreferences}
      />
      
      <CheckboxGroup
        label="通知设置"
        description="选择接收通知的方式"
        orientation="horizontal"
        options={[
          { label: "邮件", value: "email" },
          { label: "短信", value: "sms" },
          { label: "站内信", value: "inbox" }
        ]}
        value={notifications}
        onChange={setNotifications}
      />
      
      <div className="text-sm text-gray-500 space-y-2">
        <div>
          已选择的内容：
          {preferences.length > 0 ? preferences.join(", ") : "未选择"}
        </div>
        <div>
          通知方式：
          {notifications.length > 0 ? notifications.join(", ") : "未选择"}
        </div>
      </div>
    </form>
  );
};
CheckboxGroupFormExample.storyName = "复选框组-表单示例";  // 设置中文名称 