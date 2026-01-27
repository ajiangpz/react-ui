import React, { useMemo } from "react";
import { InputNumber, Popup, ColorPickerPanel } from "@tendaui/components";
import type { InputNumberValue } from "@tendaui/components/input-number/type";
import { handleAttach } from "../../../../common/utils";
import "./index.scss";

interface ShadowEditorProps {
  name: string;
  value: string;
  onChange?: (value: string) => void;
  onRemove?: () => void;
}

const parseShadowNumbers = (value: string): number[] => {
  const matches = value.match(/-?\d+(\.\d+)?/g) ?? [];
  return [0, 0, 0, 0].map((_, idx) => {
    const target = matches[idx];
    const parsed = Number(target);
    return Number.isNaN(parsed) ? 0 : parsed;
  });
};

const extractShadowColor = (value: string): string => {
  const match = value.match(/rgba?\([^)]+\)/i);
  if (match && match[0]) return match[0].trim();
  return "rgba(0, 0, 0, 0.25)";
};

const ShadowEditor: React.FC<ShadowEditorProps> = ({ name, value, onChange, onRemove }) => {
  const parsed = useMemo(() => parseShadowNumbers(value), [value]);
  const color = useMemo(() => extractShadowColor(value), [value]);

  const handleNumberChange = (val: InputNumberValue, idx: number) => {
    const numeric = typeof val === "number" ? val : Number(val);
    const safe = Number.isNaN(numeric) ? 0 : numeric;
    const next = [...parsed];
    next[idx] = safe;
    const numericStr = next.map((v) => `${v}px`).join(" ");
    onChange?.(`${numericStr} ${color}`);
  };

  const handleColorChange = (nextColor: string) => {
    const numericStr = parsed.map((v) => `${v}px`).join(" ");
    onChange?.(`${numericStr} ${nextColor}`);
  };

  return (
    <div className="shadow-layer__card">
      <div className="shadow-layer__title">
        <div className="shadow-layer__name">{name}</div>
        <button className="shadow-layer__remove" aria-label="remove shadow layer" onClick={onRemove}>
          ×
        </button>
      </div>
      <div className="shadow-layer__card--item">
        <InputNumber
          className="shadow-layer__card--x"
          theme="normal"
          autoWidth
          value={parsed[0]}
          onChange={(v) => handleNumberChange(v, 0)}
          suffix={<div className="shadow-layer__suffix">X</div>}
        />
        <InputNumber
          className="shadow-layer__card--x"
          theme="normal"
          autoWidth
          value={parsed[1]}
          onChange={(v) => handleNumberChange(v, 1)}
          suffix={<div className="shadow-layer__suffix">Y</div>}
        />
      </div>
      <InputNumber
        className="shadow-layer__card--item"
        theme="normal"
        autoWidth
        value={parsed[2]}
        onChange={(v) => handleNumberChange(v, 2)}
        suffix={<div className="shadow-layer__suffix">Blur</div>}
      />
      <InputNumber
        className="shadow-layer__card--item"
        theme="normal"
        autoWidth
        value={parsed[3]}
        onChange={(v) => handleNumberChange(v, 3)}
        suffix={<span className="shadow-layer__suffix">Spread</span>}
      />
      <Popup
        placement="left"
        showArrow
        destroyOnClose
        attach={handleAttach}
        overlayStyle={{ borderRadius: "9px", padding: "12px 16px 8px" }}
        content={<ColorPickerPanel value={color} format="RGBA" enableAlpha={true} onChange={handleColorChange} />}
      >
        <div className="shadow-layer__color-input">
          <div className="shadow-layer__card--sharp" style={{ background: color }} />
          <span className="shadow-layer__color-text">{color}</span>
        </div>
      </Popup>
    </div>
  );
};

export default ShadowEditor;
