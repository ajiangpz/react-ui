import React, { useState } from "react";
import { Tag } from "@tendaui/react";

const ClosableTagExample = () => {
  const [tagList, setTagList] = useState([
    {
      name: "可删除标签1",
      showClose: true
    },
    {
      name: "可删除标签2",
      showClose: true
    },
    {
      name: "可删除标签3",
      showClose: true
    }
  ]);

  const deleteTag = (i: number) => {
    const newtagList = [...tagList];
    newtagList.splice(i, 1);
    setTagList(newtagList);
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {tagList.map((tag, i) => (
        <Tag
          key={i}
          closable
          onClose={() => {
            deleteTag(i);
          }}
          disabled={tag.disabled}
        >
          {tag.name}
        </Tag>
      ))}
    </div>
  );
};

export default ClosableTagExample;
