import React from "react";
import "../ColorColumn.css";

interface ColorColumnProps {
  type: string;
  colorPalette: string[];
  originColorPalette: string[];
  onChangeGradation: (hex: string, idx: number) => void;
  onRecoverGradation: () => void;
  paletteChange: boolean;
}

export default function ColorColumn({
  colorPalette,
  originColorPalette,
  onChangeGradation,
  onRecoverGradation,
  paletteChange
}: ColorColumnProps) {
  const handleColorChange = (hex: string, idx: number) => {
    onChangeGradation(hex, idx);
  };

  return (
    <div className="color-column">
      <div className="color-column__header">
        <span className="color-column__title">色阶</span>
        {paletteChange && (
          <button className="color-column__recover" onClick={onRecoverGradation}>
            恢复
          </button>
        )}
      </div>
      <div className="color-column__list">
        {colorPalette.map((color, idx) => (
          <div key={idx} className="color-column__item">
            <div className="color-column__item-label">{idx + 1}</div>
            <div
              className="color-column__item-color"
              style={{ backgroundColor: color }}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "color";
                input.value = color;
                input.onchange = (e) => {
                  const target = e.target as HTMLInputElement;
                  handleColorChange(target.value, idx);
                };
                input.click();
              }}
            />
            <input
              type="text"
              className="color-column__item-input"
              value={color}
              onChange={(e) => handleColorChange(e.target.value, idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

