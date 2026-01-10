import React, { useState, useEffect } from "react";
import { InputNumber, Slider } from "@tendaui/components";
import { handleAttach } from "../utils";
import type { InputNumberValue } from "@tendaui/components/input-number/type";
import "./index.scss";

interface SizeSliderProps {
  sizeValue?: string | number;
  title?: string;
  step?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  needInteger?: boolean;
  onChangeFontSize?: (value: number) => void;
}

const SizeSlider: React.FC<SizeSliderProps> = ({
  sizeValue,
  title,
  step,
  min,
  max,
  disabled = false,
  needInteger = true,
  onChangeFontSize
}) => {
  const [size, setSize] = useState<InputNumberValue | null>(null);

  useEffect(() => {
    const newSize = needInteger ? parseInt(String(sizeValue || 0), 10) : (sizeValue ?? null);
    setSize(newSize as InputNumberValue | null);
  }, [sizeValue, needInteger]);

  const format = (val: InputNumberValue) => {
    return `${val}px`;
  };

  const handleInputChange = (v: InputNumberValue) => {
    const numValue = typeof v === "string" ? Number(v) : v;

    if (
      v === size ||
      (min !== undefined && numValue < min) ||
      (max !== undefined && numValue > max) ||
      disabled ||
      (needInteger && !Number.isInteger(Number(v)))
    ) {
      return;
    }

    setSize(v);
    onChangeFontSize?.(Number(v));
  };

  return (
    <div className="panel__size-slider">
      <div>{title}</div>
      <div className="panel__size-slider-op">
        <InputNumber
          disabled={disabled}
          value={size ?? undefined}
          format={format}
          theme="column"
          onChange={handleInputChange}
          style={{ marginBottom: "8px" }}
        />
        <Slider
          disabled={disabled}
          value={typeof size === "number" ? size : parseFloat(String(size || 0))}
          min={min}
          max={max}
          step={step}
          onChange={(value) => {
            handleInputChange(typeof value === "number" ? value : value[0]);
          }}
          tooltipProps={{
            attach: handleAttach
          }}
        />
      </div>
    </div>
  );
};

export default SizeSlider;
