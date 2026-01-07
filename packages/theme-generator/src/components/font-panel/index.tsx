import React, { useState, useEffect, useMemo, useCallback } from "react";
import { IconLineHeight, IconCommand } from "@tendaui/icons";
import Collapse from "../../common/collapse";
import SizeAdjust from "./components/SizeAdjust";
import LineHeightAdjust from "./components/LineHeightAdjust";
import FontColorAdjust from "./components/FontColorAdjust";
import { modifyToken } from "../../common/Themes";
import { FONT_COLOR_MAP } from "../ColorPanel/utils/const";
import "./index.css";

interface FontPanelProps {
  top?: number;
  isRefresh?: boolean;
  device?: string;
}

interface ColorItem {
  name?: string;
  value: string;
  from?: string;
  idx?: number;
}

const FontPanel: React.FC<FontPanelProps> = ({ top = 0, device = "web" }) => {
  const [textColorPalette, setTextColorPalette] = useState<ColorItem[][]>([[]]);
  const [initTextColorPalette, setInitTextColorPalette] = useState<ColorItem[][]>([[]]);

  const isEn = useMemo(() => {
    return typeof window !== "undefined" ? window.location.pathname.endsWith("en") : false;
  }, []);

  const contentStyle = useMemo(() => {
    const clientHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    return {
      overflowY: "scroll" as const,
      height: `${clientHeight - top - 96}px`
    };
  }, [top]);

  const getCurrentPalette = useCallback((): ColorItem[] => {
    const colorMap = FONT_COLOR_MAP;
    const docStyle = getComputedStyle(document.documentElement);

    return [...new Array(7).keys()].map((i) => {
      const item = colorMap[i];
      return {
        ...item,
        value: item.value ?? docStyle.getPropertyValue(item.from || "")
      };
    });
  }, []);

  const setFontPalette = useCallback(() => {
    const palette = getCurrentPalette();
    setTextColorPalette([palette]);
    setInitTextColorPalette(JSON.parse(JSON.stringify([palette])));
  }, [getCurrentPalette]);

  const changeGradation = useCallback(
    (hex: string, idx: number) => {
      const tokenIdxName = textColorPalette[0][idx]?.name;
      if (tokenIdxName) {
        setTextColorPalette((prev) => {
          const updated = JSON.parse(JSON.stringify(prev));
          updated[0][idx].value = hex;
          return updated;
        });
        modifyToken(tokenIdxName, hex);
      }
    },
    [textColorPalette]
  );

  useEffect(() => {
    // 确保 custom-theme 被 append 后再同步
    setTimeout(() => {
      setFontPalette();
    }, 100);
  }, [setFontPalette]);

  const titleText = isEn ? "Font Size" : "字体大小";
  const lineHeightText = isEn ? "Line Height" : "行高";
  const fontColorText = isEn ? "Font Color" : "字体颜色";

  return (
    <div
      className="font-content"
      style={{
        width: "268px",
        background: "var(--bg-color-card)",
        borderRadius: "12px",
        border: "1px solid var(--theme-component-border)"
      }}
    >
      <div className="font-content__content" style={contentStyle}>
        <div className="font-content__main">
          <p className="font-content__title">{titleText}</p>
          <SizeAdjust />
        </div>
        {device !== "mobile" && device !== "mini-program" && (
          <Collapse
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
                  alignItems: "center"
                }}
              >
                {/* LineHeight SVG placeholder */}
                <div style={{ fontSize: "20px" }}>
                  <IconLineHeight></IconLineHeight>
                </div>
              </div>
            }
            title={lineHeightText}
            subTitle="line-height"
          >
            <LineHeightAdjust />
          </Collapse>
        )}
        <Collapse
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
                alignItems: "center"
              }}
            >
              {/* FontColor SVG placeholder */}
              <div style={{ fontSize: "20px" }}>
                <IconCommand></IconCommand>
              </div>
            </div>
          }
          title={fontColorText}
        >
          <FontColorAdjust
            colorPalette={textColorPalette}
            originColorPalette={initTextColorPalette}
            onChangeGradation={changeGradation}
          />
        </Collapse>
      </div>
    </div>
  );
};

export default FontPanel;
