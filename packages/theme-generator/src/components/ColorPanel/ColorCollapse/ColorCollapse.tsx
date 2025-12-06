import { useState, useMemo } from "react";
import { Popup, ColorPickerPanel } from "@tendaui/components";
import { IconEdit as Edit1Icon, IconCopy as FileCopyIcon } from "@tendaui/icons";
import { flatten } from "lodash-es";
import "./ColorCollapse.css";

const ColorCollapse = ({ type, title, colorPalette, disabled, onChangeMainColor, children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const copyHex = (hex) => {
    const input = document.createElement("input");
    input.value = hex;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    input.remove();
  };

  const mainColorVal = useMemo(
    () => flatten(colorPalette).find((v) => v.type === "main" || v.type === "gray")?.value,
    [colorPalette]
  );
  console.log(mainColorVal);
  return (
    <div className="color-collapse">
      <div className="color-collapse__header">
        {/* 左侧颜色块 + Popup */}
        <Popup
          placement="left"
          showArrow
          trigger="click"
          destroyOnClose
          hideEmptyPopup
          overlayStyle={{ borderRadius: "9px" }}
          content={
            <ColorPickerPanel format="HEX" value={mainColorVal} onChange={(hex) => onChangeMainColor(hex, type)} />
          }
        >
          <div
            className="block"
            style={{
              width: 48,
              height: 48,
              background: mainColorVal,
              borderRadius: 6,
              cursor: disabled ? "not-allowed" : "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid var(--theme-component-border)",
              color: "var(--text-anti)"
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {!disabled && isHover && <Edit1Icon size="24px" />}
          </div>
        </Popup>

        {/* 文本区域 */}
        <div className="color-collapse__text" onClick={() => setIsActive((v) => !v)}>
          <div className="color-collapse__title">{title}</div>

          <div className="color-collapse__subtitle">
            HEX: {mainColorVal}
            <Popup
              placement="top"
              showArrow
              trigger="click"
              destroyOnClose
              overlayStyle={{ borderRadius: "6px" }}
              content={<span style={{ color: "var(--text-secondary)" }}>Copied!</span>}
            >
              <FileCopyIcon onClick={() => copyHex(mainColorVal)} />
            </Popup>
          </div>
        </div>
      </div>

      {/* 折叠内容 */}
      <div
        className="collapse-content"
        style={{
          maxHeight: isActive ? "500px" : "0px",
          overflow: "hidden",
          padding: "4px",
          transition: "max-height 0.25s ease"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ColorCollapse;
