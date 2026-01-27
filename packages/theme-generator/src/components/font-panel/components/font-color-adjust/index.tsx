import React, { useState, useMemo } from "react";
import { Popup, ColorPickerPanel } from "@tendaui/components";
import { handleAttach } from "../../../../common/utils";
import { IconEdit as Edit1Icon } from "@tendaui/icons";
import { modifyToken } from "../../../../common/themes";
import "./index.scss";

interface ColorItem {
  name?: string;
  value: string;
  from?: string;
  idx?: number;
}

interface FontColorAdjustProps {
  colorPalette: ColorItem[][];
  originColorPalette?: ColorItem[][];
  onChangeGradation?: (hex: string, idx: number) => void;
}

const FontColorAdjust: React.FC<FontColorAdjustProps> = ({ colorPalette, onChangeGradation }) => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  // const [colorType, setColorType] = useState(1);

  const flattenPalette = useMemo(() => {
    return colorPalette.flat();
  }, [colorPalette]);

  const changeColor = (hex: string, idx: number) => {
    const color = flattenPalette[idx];
    if (color?.name) {
      modifyToken(color.name, hex);
      onChangeGradation?.(hex, idx);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="font-color__vertical-list">
        {flattenPalette
          .filter((v) => !!v.name)
          .map((color, idx) => (
            <div key={idx}>
              <Popup
                placement="left"
                showArrow
                trigger="click"
                destroyOnClose
                attach={handleAttach}
                overlayStyle={{ borderRadius: "9px" }}
                content={
                  <ColorPickerPanel
                    defaultValue={color.value}
                    format="HEX"
                    onChange={(hex) => changeColor(hex, idx)}
                    enableAlpha={true}
                  />
                }
              >
                <div
                  className="block"
                  style={{
                    border: "1px solid var(--theme-component-border)",
                    backgroundColor: color.value,
                    minWidth: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--text-anti)"
                  }}
                  onMouseOver={() => setHoverIdx(idx)}
                  onMouseLeave={() => setHoverIdx(null)}
                >
                  {hoverIdx === idx && <Edit1Icon style={{ fontSize: "16px" }} />}
                </div>
              </Popup>
              {color.name && (
                <div className="font-color__vertical-list-content">
                  <div className="font-color__vertical-list-title" title={color.name}>
                    {color.name}
                  </div>
                  <div className="font-color__vertical-list-subtitle">
                    <span>{color.value}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FontColorAdjust;
