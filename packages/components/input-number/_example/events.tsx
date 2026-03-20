import React, { useState, useMemo } from "react";
import InputNumber from "../index";

type InputNumberValue = string | number;
type ErrorType = "exceed-maximum" | "below-minimum";

const EventsInputNumber = () => {
  const [value, setValue] = useState<InputNumberValue>(100);
  const [error, setError] = useState<ErrorType>();

  const tips = useMemo(() => {
    if (error === "exceed-maximum") return "数值不能超过最大值";
    if (error === "below-minimum") return "数值不能小于最小值";
    return undefined;
  }, [error]);

  const handleChange = (v: InputNumberValue, ctx: any) => {
    console.info("change", v, ctx);
    setValue(v);
  };
  const onValidate = (ctx: { error: ErrorType }) => {
    setError(ctx.error);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <InputNumber
        value={value}
        max={15}
        min={-2}
        inputProps={{ tips }}
        suffix="个"
        style={{ width: 300 }}
        onChange={handleChange}
        onValidate={onValidate}
        onBlur={(v, ctx) => console.info("blur", v, ctx)}
        onFocus={(v, ctx) => console.info("focus", v, ctx)}
        onEnter={(v, ctx) => console.info("enter", v, ctx)}
      />
      <div style={{ color: "#666", fontSize: "12px" }}>范围: -2 ~ 15, 查看控制台输出</div>
    </div>
  );
};

export default EventsInputNumber;
