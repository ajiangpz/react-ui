import React from "react";
import ShadowEditor from "./ShadowEditor";
import "./shadow-layer.css";

interface ShadowLayerProps {
  shadow: string[];
  detail: {
    key: string;
    label: string;
  };
  onChange?: (value: string[]) => void;
}

const DEFAULT_LAYER = "0 0 0 0 rgba(0, 0, 0, 0)";

const ShadowLayer: React.FC<ShadowLayerProps> = ({ shadow, detail, onChange }) => {
  const handleChange = (value: string, index: number) => {
    const next = [...shadow];
    next[index] = value;
    onChange?.(next);
  };

  const handleAdd = () => {
    const next = [...shadow, DEFAULT_LAYER];
    onChange?.(next);
  };

  const handleRemove = (idx: number) => {
    const next = [...shadow];
    next.splice(idx, 1);
    onChange?.(next);
  };

  return (
    <div className="shadow-layer">
      <div className="shadow-layer__header">
        <div className="shadow-layer__header--name">{detail.key}</div>
        <button className="shadow-layer__add" type="button" onClick={handleAdd} aria-label="add shadow layer">
          +
        </button>
      </div>
      {shadow.map((data, i) => (
        <ShadowEditor
          key={i}
          name={`layer${i + 1}`}
          value={data}
          onRemove={() => handleRemove(i)}
          onChange={(val) => handleChange(val, i)}
        />
      ))}
    </div>
  );
};

export default ShadowLayer;
