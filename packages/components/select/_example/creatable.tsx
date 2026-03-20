import React, { useState } from "react";
import { Select } from "@tendaui/react";

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

export default CreatableExample;
