import { useState, useMemo } from "react";
import "./ColorColumn.scss";
import { IconEdit as Edit1Icon, IconClose as ErrorCircleIcon, IconLink as LinkUnlinkIcon } from "@tendaui/icons";
import { Popup as TPopup, ColorPickerPanel } from "@tendaui/components";
import { getTokenValue, handleAttach } from "../../../common/utils";
import { flatten } from "lodash-es";
import "../ColorColumn.scss";
interface TokenItem {
  idx: number;
  name: string;
  value?: string;
  isModified?: boolean;
  type?: string;
}

interface ColorColumnProps {
  type: string;
  gradientStep?: number;
  colorPalette: TokenItem[];
  originColorPalette?: TokenItem[];
  onRecoverGradation?: (type: string) => void;
  onChangeGradation?: (hex: string, idx: number, type: string) => void;
  paletteChange?: boolean;
}

export default function ColorColumn({
  type,
  colorPalette,
  originColorPalette: _originColorPalette,
  paletteChange,
  onRecoverGradation,
  onChangeGradation
}: ColorColumnProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  /** 恢复 */
  const handleRecover = () => {
    onRecoverGradation?.(type);
  };

  /** 改变某个色阶 */
  const changeGradation = (hex: string, idx: number) => {
    onChangeGradation?.(hex, idx, type);
  };

  const flattenColorPalette = useMemo(() => flatten(colorPalette), [colorPalette]);

  return (
    <div className="color-content">
      {/* ------- 横向渐变色条 ------- */}
      <div className="color-content__horizontal-list">
        {!paletteChange ? (
          <div>
            {flattenColorPalette
              .filter(
                (v, i) =>
                  v &&
                  ((flattenColorPalette[i + 1] && v.value !== flattenColorPalette[i + 1].value) ||
                    i === flattenColorPalette.length - 1)
              )
              .map((color, idx) => (
                <div key={idx} style={{ background: color.value }} onClick={() => setActiveIdx(idx)} />
              ))}
          </div>
        ) : (
          <div className="unlink" onClick={handleRecover}>
            <LinkUnlinkIcon size="small" />
            断开色阶，点击恢复
          </div>
        )}
      </div>

      {/* ------- 纵向 token 列表 ------- */}
      <div className="color-content__vertical-list">
        {/* 小箭头 */}
        <span
          className="current-arrow"
          style={{
            left: `${activeIdx * (type === "gray" ? 16.88 : 23.62) + (type === "gray" ? 5 : 8)}px`
          }}
        />

        {/* 激活 tab 背景 */}
        {(() => {
          const paletteItemsWithName = flattenColorPalette.filter((v) => !!v.name);

          const top = paletteItemsWithName.findIndex((v) => v.idx === activeIdx) * 44 + 4;
          const height = paletteItemsWithName.filter((v) => v.idx === activeIdx).length * 44;

          return (
            <div
              className="active-tab"
              style={{
                top: `${top}px`,
                height: `${height}px`
              }}
            />
          );
        })()}

        {/* token 列表 */}
        {flattenColorPalette
          .filter((v) => !!v.name)
          .map((color, index) => (
            <div key={index}>
              <TPopup
                placement="left"
                showArrow
                trigger="click"
                destroyOnClose
                attach={handleAttach}
                overlayStyle={{ borderRadius: "9px" }}
                content={
                  <ColorPickerPanel
                    format="HEX"
                    value={getTokenValue(color.name)}
                    onChange={(hex) => changeGradation(hex, color.idx)}
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
                  onMouseEnter={() => setHoverIdx(index)}
                  onMouseLeave={() => setHoverIdx(null)}
                >
                  {hoverIdx === index && <Edit1Icon size="small" />}
                </div>
              </TPopup>

              {/* 文本部分 */}
              {color.name && (
                <div className="color-content__vertical-list-content" onClick={() => setActiveIdx(color.idx)}>
                  <div className="color-content__vertical-list-title" title={color.name}>
                    {color.name.replace("--td-", "")}
                  </div>
                  <div className="color-content__vertical-list-subtitle">
                    <span>
                      {type}
                      {color.idx}&nbsp;
                    </span>
                    <span>{getTokenValue(color.name)}</span>
                  </div>

                  {color.isModified && <ErrorCircleIcon className="error-icon" />}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
