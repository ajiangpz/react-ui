import { Meta, StoryObj } from "@storybook/react-vite";
import { TagInputProps, TagInputValue, TagInput } from "./index";
import { useState } from "react";

const BaseExample = ({ ...args }) => {
  const [tags1, setTags1] = useState<TagInputValue>(["Vue", "React", "Angular"]);

  const [tags2] = useState(["Vue", "React"]);
  const [tags3] = useState(["Vue", "React"]);

  const onTagInputEnter: TagInputProps["onEnter"] = (val, context) => {
    console.log(val, context);
  };

  const onChange: TagInputProps["onChange"] = (val, context) => {
    console.log(val, context);
    setTags1(val);
  };

  const onPaste: TagInputProps["onPaste"] = (context) => {
    console.log(context);
  };

  return (
    <div className="flex gap-2">
      <TagInput
        value={tags1}
        onChange={onChange}
        clearable
        onPaste={onPaste}
        onEnter={onTagInputEnter}
        placeholder="请输入"
        {...args}
      />
      <TagInput value={tags2} label="Controlled: " placeholder="请输入" clearable {...args} />
      <TagInput defaultValue={tags3} label="UnControlled: " placeholder="请输入" clearable {...args} />
    </div>
  );
};
const meta: Meta<typeof TagInput> = {
  title: "Components/TagInput",
  component: TagInput,
  tags: ["autodocs"]
};

export default meta;

export const Default: StoryObj = {
  args: {},
  render: (args) => <BaseExample {...args}></BaseExample>
};
