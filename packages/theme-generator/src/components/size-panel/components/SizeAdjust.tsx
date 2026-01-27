import React, { useState, useCallback, useMemo } from "react";
import { Popup } from "@tendaui/components";
import SizeSlider from "../../../common/size-slider";
import { CUSTOM_THEME_ID, modifyToken } from "../../../common/themes";
import { handleAttach } from "../../../common/utils";
import SizeAdjustSvg from "../svg/SizeAdjustSvg";
import HorizontalPaddingAdjustSvg from "../svg/HorizontalPaddingAdjustSvg";
import VerticalPaddingAdjustSvg from "../svg/VerticalPaddingAdjustSvg";
import MarginAdjustSvg from "../svg/MarginAdjustSvg";
import PopupPaddingAdjustSvg from "../svg/PopupPaddingAdjustSvg";

interface TokenItem {
  label: string;
  value: string | null;
  remark: string;
  desc?: string;
}

interface SizeAdjustProps {
  tokenList: TokenItem[];
  type: string;
}

const SizeAdjust: React.FC<SizeAdjustProps> = ({ tokenList, type }) => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const tokenTypeList = useMemo(() => {
    const computedStyle = window.getComputedStyle(document.documentElement);

    return tokenList.map((v) => ({
      label: v.label,
      value: computedStyle.getPropertyValue(`--td-${v.label}`),
      desc: v.desc,
      remark: v.remark
    }));
  }, [tokenList]);

  const handleVisibleChange = useCallback(
    (visible: boolean, context: { trigger?: string } | undefined, idx: number) => {
      if (visible) {
        setHoverIdx(idx);
      } else if (context?.trigger === "document" && hoverIdx === idx) {
        setHoverIdx(null);
      }
    },
    [hoverIdx]
  );

  const handleChangeSize = (v: number, idx: number) => {
    const res = `${v}px`;
    const tokenName = `--td-${tokenTypeList[idx].label}`;
    const styleSheet = document.getElementById(CUSTOM_THEME_ID);
    if (!styleSheet) return;
    modifyToken(tokenName, res);
  };

  const parseSize = (val: string | number): number => {
    if (typeof val === "string") {
      const num = parseFloat(val);
      return isNaN(num) ? 0 : num;
    }
    return val;
  };

  const renderSvg = (type: string, size: number) => {
    switch (type) {
      case "comp-size":
        return <SizeAdjustSvg size={size} />;
      case "comp-padding-lr":
        return <HorizontalPaddingAdjustSvg size={size} />;
      case "comp-padding-tb":
        return <VerticalPaddingAdjustSvg size={size} />;
      case "comp-margin":
        return <MarginAdjustSvg size={size} />;
      case "popup-padding":
        return <PopupPaddingAdjustSvg size={size} />;
      default:
        return null;
    }
  };

  return (
    <div className="size-panel__token-list">
      {tokenTypeList.map((token, idx) => (
        <Popup
          key={idx}
          placement="left"
          showArrow
          trigger="click"
          destroyOnClose
          attach={handleAttach}
          overlayStyle={{ borderRadius: "9px" }}
          onVisibleChange={(visible, context) => handleVisibleChange(visible, context, idx)}
          content={
            <SizeSlider title="size" sizeValue={token.value} onChangeFontSize={(v) => handleChangeSize(v, idx)} />
          }
        >
          <div
            className="size-panel__list-item"
            style={{
              height: "48px",
              transition: "border-color .2s",
              border: hoverIdx === idx ? "1px solid var(--brand-main-hover)" : "1px solid transparent",
              marginBottom: "4px",
              borderRadius: "6px",
              cursor: "pointer",
              backgroundColor: "var(--bg-color-theme-surface)",
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              padding: "4px 6px",
              fontSize: "12px",
              lineHeight: "20px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div>{token.label}</div>
                <div style={{ color: "var(--text-secondary)" }}>
                  {token.remark} : {token.value}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>{renderSvg(type, parseSize(token.value))}</div>
            </div>
          </div>
        </Popup>
      ))}
    </div>
  );
};

export default SizeAdjust;
