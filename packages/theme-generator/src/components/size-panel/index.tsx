import React, { useMemo, useState, useEffect } from "react";
import Collapse from "../../common/collapse";
import SizeAdjust from "./components/SizeAdjust";
import SizeDisplay from "./components/SizeDisplay";
import SizeSvg from "./svg/SizeSvg";
import HorizontalPaddingSvg from "./svg/HorizontalPaddingSvg";
import VerticalPaddingSvg from "./svg/VerticalPaddingSvg";
import PopupPaddingSvg from "./svg/PopupPaddingSvg";
import MarginSvg from "./svg/MarginSvg";
import {
  compSizeArr,
  compPaddingLRArr,
  compPaddingTBArr,
  compPopupPaddingArr,
  compMarginArr
} from "./built-in/size-map";
import "./index.scss";

interface SizePanelProps {
  top?: number;
}

const SizePanel: React.FC<SizePanelProps> = ({ top = 0 }) => {
  const [viewportHeight, setViewportHeight] = useState(() => (typeof window !== "undefined" ? window.innerHeight : 0));
  const isEn = useMemo(() => (typeof window !== "undefined" ? window.location.pathname.endsWith("en") : false), []);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentStyle = useMemo(() => {
    const clientHeight = viewportHeight;
    return {
      overflowY: "scroll" as const,
      height: `${clientHeight - top - 96}px`
    };
  }, [viewportHeight, top]);

  const lang = useMemo(() => {
    return isEn
      ? {
          size: {
            basicSize: "Basic size",
            componentSize: "Component Size",
            xPadding: "horizontal Padding",
            yPadding: "vertical Padding",
            popupPadding: "popup Padding",
            margin: "margin"
          }
        }
      : {
          size: {
            basicSize: "基础尺寸",
            componentSize: "组件大小",
            xPadding: "组件左右边距",
            yPadding: "组件上下边距",
            popupPadding: "弹出层边距",
            margin: "组件间距"
          }
        };
  }, [isEn]);

  return (
    <div
      style={{
        width: "268px",
        background: "var(--bg-color-card)",
        border: "1px solid var(--theme-component-border)",
        borderRadius: "12px"
      }}
    >
      <div className="size-content__content" style={contentStyle}>
        <div className="size-content__main">
          <p className="size-content__title">{lang.size.basicSize}</p>
          <SizeDisplay />
        </div>
        {/* 组件大小 */}
        <Collapse
          title={lang.size.componentSize}
          subTitle="size"
          round={
            <div
              className="block"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--bg-color-theme-secondary)"
              }}
            >
              <SizeSvg />
            </div>
          }
        >
          <SizeAdjust tokenList={compSizeArr} type="comp-size" />
        </Collapse>
        {/* 组件上下边距 */}
        <Collapse
          title={lang.size.yPadding}
          subTitle="padding top & bottom"
          round={
            <div
              className="block"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--bg-color-theme-secondary)"
              }}
            >
              <VerticalPaddingSvg />
            </div>
          }
        >
          <SizeAdjust tokenList={compPaddingTBArr} type="comp-padding-tb" />
        </Collapse>
        {/* 组件左右边距 */}
        <Collapse
          title={lang.size.xPadding}
          subTitle="padding left & right"
          round={
            <div
              className="block"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--bg-color-theme-secondary)"
              }}
            >
              <HorizontalPaddingSvg />
            </div>
          }
        >
          <SizeAdjust tokenList={compPaddingLRArr} type="comp-padding-lr" />
        </Collapse>
        {/* popup 边距 */}
        <Collapse
          title={lang.size.popupPadding}
          subTitle="popup padding"
          round={
            <div
              className="block"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                backgroundColor: "var(--bg-color-theme-secondary)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <PopupPaddingSvg />
            </div>
          }
        >
          <SizeAdjust tokenList={compPopupPaddingArr} type="popup-padding" />
        </Collapse>
        {/* margin 边距 */}
        <Collapse
          title={lang.size.margin}
          subTitle="margin"
          round={
            <div
              className="block"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--bg-color-theme-secondary)"
              }}
            >
              <MarginSvg />
            </div>
          }
        >
          <SizeAdjust tokenList={compMarginArr} type="comp-margin" />
        </Collapse>
      </div>
    </div>
  );
};

export default SizePanel;
