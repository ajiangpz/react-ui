import { useState, useMemo, useRef, ReactNode } from "react";
import { Popup, ColorPickerPanel } from "@tendaui/components";
import { IconEdit as Edit1Icon, IconCopy as FileCopyIcon } from "@tendaui/icons";
import { flatten } from "lodash-es";
import ArrowIcon from "@tendaui/components/common/FakeArrow";
import { CSSTransition } from "react-transition-group";

console.log(ArrowIcon);
import "./ColorCollapse.scss";

interface ColorPaletteItem {
  type?: string;
  value?: string;
  idx?: number;
  name?: string;
  [key: string]: unknown;
}

interface ColorCollapseProps {
  type: string;
  title: string;
  colorPalette: ColorPaletteItem[] | ColorPaletteItem[][];
  disabled: boolean;
  onChangeMainColor: (hex: string, type: string) => void;
  children: ReactNode;
}

const ColorCollapse = ({ type, title, colorPalette, disabled, onChangeMainColor, children }: ColorCollapseProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const copyHex = (hex: string) => {
    const input = document.createElement("input");
    input.value = hex;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    input.remove();
  };

  const mainColorVal = useMemo(
    () =>
      (flatten(colorPalette) as ColorPaletteItem[]).find((v) => v.type === "main" || v.type === "gray")?.value || "",
    [colorPalette]
  );
  const nodeRef = useRef(null);

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
            <ColorPickerPanel
              format="HEX"
              defaultValue={mainColorVal}
              onChange={(hex) => {
                onChangeMainColor(hex, type);
              }}
            />
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
            {!disabled && isHover && <Edit1Icon size="large" />}
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
        {/* 箭头 */}
        <div onClick={() => setIsActive((prev) => !prev)}>
          <ArrowIcon isActive={isActive} className="color-collapse__arrow" />
        </div>
      </div>

      {/* 折叠内容 */}
      <CSSTransition
        in={isActive}
        timeout={300}
        classNames="collapse"
        unmountOnExit
        mountOnEnter
        nodeRef={nodeRef}
        onEnter={() => {
          const el = nodeRef.current! as HTMLElement;
          el.style.height = "0px";
          el.style.overflow = "hidden";
        }}
        onEntering={() => {
          const el = nodeRef.current! as HTMLElement;
          el.style.height = el.scrollHeight + "px";
          el.style.overflow = "hidden";
        }}
        onEntered={() => {
          const el = nodeRef.current! as HTMLElement;
          el.style.height = "auto";
          el.style.overflow = "";
        }}
        onExit={() => {
          const el = nodeRef.current! as HTMLElement;
          el.style.height = el.scrollHeight + "px";
          el.style.overflow = "hidden";
        }}
        onExiting={() => {
          const el = nodeRef.current! as HTMLElement;
          el.style.height = "0px";
          el.style.overflow = "hidden";
        }}
      >
        <div ref={nodeRef} style={{ transition: "height 300ms ease", overflow: "hidden" }}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default ColorCollapse;
