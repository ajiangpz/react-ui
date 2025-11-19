import React, { useState, useEffect, useMemo } from "react";
import { Color } from "tvision-color";
import {
  generateNewTheme,
  generateTokenList,
  getOptionFromLocal,
  modifyToken,
  DEFAULT_THEME
} from "../../common/Themes";
import ColorPicker from "./ColorPicker/ColorPicker";
import ColorColumn from "./ColorColumn/ColorColumn";
import "./ColorPanel.css";

interface ColorPanelProps {
  isRefresh?: boolean;
  device?: string;
}

export default function ColorPanel({ isRefresh, device = "web" }: ColorPanelProps) {
  const [currentThemeColor, setCurrentThemeColor] = useState(
    getOptionFromLocal("color") ?? DEFAULT_THEME.value
  );
  const [currentBrandIdx, setCurrentBrandIdx] = useState(6);
  const [colorPalette, setColorPalette] = useState<string[]>([]);
  const [initColorPalette, setInitColorPalette] = useState<string[]>([]);
  const [generateMode, setGenerateMode] = useState<"remain" | "recommend">("remain");

  // 获取当前色板
  const getCurrentPalette = () => {
    const docStyle = getComputedStyle(document.documentElement);
    return Array.from({ length: 10 }, (_, i) => {
      return docStyle.getPropertyValue(`--td-brand-color-${i + 1}`).trim();
    });
  };

  // 设置色板
  const setPalette = () => {
    const palette = getCurrentPalette();
    setInitColorPalette([...palette]);
    setColorPalette([...palette]);
  };

  useEffect(() => {
    setPalette();
    const currentColor = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--td-brand-color")
      .toLowerCase()
      .trim();
    setCurrentThemeColor(currentColor);
  }, []);

  useEffect(() => {
    if (isRefresh) {
      setPalette();
    }
  }, [isRefresh]);

  const handleNewColorGeneration = (hex: string) => {
    setCurrentThemeColor(hex);
    const result = generateNewTheme(hex, generateMode === "remain", device);
    setCurrentBrandIdx(result.brandColorIdx);
    setColorPalette(result.colorPalette);
    setInitColorPalette([...result.colorPalette]);
  };

  const handleColorChange = (hex: string) => {
    handleNewColorGeneration(hex);
  };

  const handleChangeGradation = (hex: string, idx: number) => {
    const newPalette = [...colorPalette];
    newPalette[idx] = hex;
    setColorPalette(newPalette);

    const tokenName = `--td-brand-color-${idx + 1}`;
    modifyToken(tokenName, hex, true);
  };

  const handleRecoverGradation = () => {
    setColorPalette([...initColorPalette]);
    initColorPalette.forEach((color, idx) => {
      const tokenName = `--td-brand-color-${idx + 1}`;
      modifyToken(tokenName, color, false);
    });
  };

  const isColorPaletteChange = useMemo(() => {
    return JSON.stringify(colorPalette) !== JSON.stringify(initColorPalette);
  }, [colorPalette, initColorPalette]);

  return (
    <div className="color-panel">
      <div className="color-panel__content">
        <div className="color-panel__main">
          <p className="color-panel__title">主题色</p>

          {/* 自定义颜色选择器 */}
          <div className="color-panel__custom">
            <ColorPicker value={currentThemeColor} onChange={handleColorChange} />
          </div>

          {/* 色彩生成模式 */}
          <div className="color-panel__generate-mode">
            <div
              className={`color-panel__generate-mode-btn ${generateMode === "remain" ? "is-active" : ""}`}
              onClick={() => setGenerateMode("remain")}
            >
              <div
                className="color-panel__generate-mode-btn-inner"
                style={{ backgroundColor: currentThemeColor }}
              >
                <span>保留输入</span>
              </div>
            </div>
            <div
              className={`color-panel__generate-mode-btn ${generateMode === "recommend" ? "is-active" : ""}`}
              onClick={() => setGenerateMode("recommend")}
            >
              <div
                className="color-panel__generate-mode-btn-inner"
                style={{ backgroundColor: currentThemeColor }}
              >
                <span>AI 推荐</span>
              </div>
            </div>
          </div>

          {/* 主题色阶部分 */}
          <ColorColumn
            type="brand"
            colorPalette={colorPalette}
            originColorPalette={initColorPalette}
            onChangeGradation={handleChangeGradation}
            onRecoverGradation={handleRecoverGradation}
            paletteChange={isColorPaletteChange}
          />
        </div>
      </div>
    </div>
  );
}

