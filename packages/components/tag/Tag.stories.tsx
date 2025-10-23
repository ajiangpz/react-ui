import { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Tag } from "tendaui-react/es";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tag>;
export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-2">
      <Tag theme="primary" {...args}>
        标签一
      </Tag>
      <Tag theme="warning" {...args}>
        标签二
      </Tag>
      <Tag theme="danger" variant="dark" {...args}>
        标签三
      </Tag>
      <Tag theme="success" variant="dark" {...args}>
        标签四
      </Tag>
    </div>
  ),
};

const ClosableTagExample = () => {
  const [inputVisible, toggleInputVisible] = useState(false);
  const [tagList, setTagList] = useState([
    {
      name: "可删除标签1",
      showClose: true,
    },
    {
      name: "可删除标签2",
      showClose: true,
    },
    {
      name: "可删除标签3",
      showClose: true,
    },
  ]);

  const deleteTag = (i: number) => {
    const newtagList = [...tagList];
    newtagList.splice(i, 1);
    setTagList(newtagList);
  };

  const handleClickAdd = () => {
    toggleInputVisible(true);
  };

  const handleInputEnter = (value: string) => {
    toggleInputVisible(false);
    if (value) setTagList((currentList) => currentList.concat([{ name: value, showClose: true }]));
  };

  return tagList.map((tag, i) => (
    <Tag
      key={i}
      closable
      onClose={() => {
        deleteTag(i);
      }}
      disabled={tag.disabled}
      style={{ marginRight: 30 }}
    >
      {tag.name}
    </Tag>
  ));
};

export const DeleteTag: Story = {
  args: {},
  render: () => <ClosableTagExample></ClosableTagExample>,
};
