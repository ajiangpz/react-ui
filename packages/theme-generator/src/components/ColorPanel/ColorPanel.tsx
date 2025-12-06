import { useState, useEffect, useCallback, useMemo } from "react";
import {
  generateNewTheme,
  getOptionFromLocal,
  modifyToken,
  DEFAULT_THEME,
  generateTokenList
} from "../../common/Themes";
import { ColorPicker } from "@tendaui/components";
import ColorColumn from "./ColorColumn/ColorColumn";
import ColorCollapse from "./ColorCollapse/ColorCollapse";
import { BRAND_COLOR_MAP, ERROR_COLOR_MAP, GRAY_COLOR_MAP, SUCCESS_COLOR_MAP, WARNING_COLOR_MAP } from "./utils/const";
import "./ColorPanel.css";
import { isEqual } from "lodash-es";
interface ColorPanelProps {
  isRefresh?: boolean;
  device?: string;
}

export default function ColorPanel({ isRefresh, device = "web" }: ColorPanelProps) {
  const [currentThemeColor, setCurrentThemeColor] = useState(getOptionFromLocal("color") ?? DEFAULT_THEME.value);
  const [currentBrandIdx, setCurrentBrandIdx] = useState(6);
  const [colorPalette, setColorPalette] = useState<string[]>([]);
  const [initColorPalette, setInitColorPalette] = useState<string[]>([]);
  const [successColorPalette, setSuccessColorPalette] = useState<string[]>([]);
  const [initSuccessColorPalette, setSuccessInitColorPalette] = useState<string[]>([]);
  const [errorColorPalette, setErrorColorPalette] = useState<string[]>([]);
  const [initErrorColorPalette, setInitErrorColorPalette] = useState<string[]>([]);
  const [generateMode, setGenerateMode] = useState<"remain" | "recommend">("remain");
  // 获取当前色板
  const getCurrentPalette = useCallback(
    (type = "brand") => {
      let colorMap;
      let duplicateMap = [];

      if (type === "brand") {
        colorMap = BRAND_COLOR_MAP;
        const brandIdx = currentBrandIdx;
        const hoverIdx = brandIdx > 0 ? brandIdx - 1 : brandIdx;
        const activeIdx = brandIdx > 8 ? brandIdx : brandIdx + 1;

        duplicateMap = [
          { name: "--td-brand-color-hover", type: "hover", idx: hoverIdx },
          { name: "--td-brand-color", type: "main", idx: brandIdx },
          { name: "--td-brand-color-active", type: "active", idx: activeIdx }
        ];

        colorMap = colorMap.concat(duplicateMap);
      }

      if (type === "error") colorMap = ERROR_COLOR_MAP;
      if (type === "success") colorMap = SUCCESS_COLOR_MAP;
      if (type === "warning") colorMap = WARNING_COLOR_MAP;
      if (type === "gray") colorMap = GRAY_COLOR_MAP;

      const docStyle = getComputedStyle(document.documentElement);

      const currentPalette = [...new Array(type === "gray" ? 14 : 10).keys()].map((_, i) => {
        const color = colorMap.filter((v) => v.idx === i);

        if (color.length) {
          if (color.length === 1) {
            return {
              ...color[0],
              value: docStyle.getPropertyValue(`--td-${type}-color-${i + 1}`)
            };
          }
          return color.map((v) => ({
            ...v,
            value: docStyle.getPropertyValue(`--td-${type}-color-${v.idx + 1}`)
          }));
        }

        return {
          value: docStyle.getPropertyValue(`--td-${type}-color-${i + 1}`)
        };
      });

      return currentPalette;
    },
    [currentBrandIdx]
  );

  // 设置色板
  const setPalette = useCallback(() => {
    const palette = getCurrentPalette();
    setInitColorPalette([...palette]);
    setColorPalette([...palette]);
    const successPalette = getCurrentPalette("success");
    setSuccessInitColorPalette(JSON.parse(JSON.stringify(successPalette)));
    setSuccessColorPalette([...successPalette]);
    const errorPalette = getCurrentPalette("error");
    setInitErrorColorPalette(JSON.parse(JSON.stringify(errorPalette)));
    setErrorColorPalette([...errorPalette]);
  }, [getCurrentPalette]);

  useEffect(() => {
    Promise.resolve().then(() => {
      const currentColor = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--td-brand-color")
        .toLowerCase()
        .trim();
      setCurrentThemeColor(currentColor);
    });
  }, []);

  // useEffect(() => {
  //   if (isRefresh) {
  //     setPalette();
  //   }
  // }, [isRefresh]);

  const handleNewColorGeneration = (hex: string) => {
    setCurrentThemeColor(hex);
    const result = generateNewTheme(hex, generateMode === "remain", device);
    setCurrentBrandIdx(result.brandColorIdx);
    setColorPalette(result.colorPalette);
    setInitColorPalette([...result.colorPalette]);
  };

  const recoverGradation = (type) => {
    let palette;
    const modifiedPalette = getCurrentPalette(type);
    if (type === "brand") palette = initColorPalette;
    if (type === "error") palette = initErrorColorPalette;
    if (type === "success") palette = initSuccessColorPalette;
    const diffPalette = palette.filter((v, i) => JSON.stringify(v) !== JSON.stringify(modifiedPalette[i]));
    diffPalette.forEach((v) => {
      if (v instanceof Array) {
        changeGradation(v[0].value, v[0].idx, type, false);
        return;
      } else {
        changeGradation(v.value, v.idx, type, false);
      }
    });
  };

  const changeMainColor = (v: string, type: string) => {
    console.log("changeMainColor");
    const { colorPalette } = generateTokenList(v, false, type !== "gray" ? 10 : 14);
    let newPalette = [];
    let newInitPalette = [];
    if (type === "success") {
      newPalette = JSON.parse(JSON.stringify(successColorPalette));
      newInitPalette = JSON.parse(JSON.stringify(initSuccessColorPalette));
    }
    if (type === "error") {
      newPalette = JSON.parse(JSON.stringify(errorColorPalette));
      newInitPalette = JSON.parse(JSON.stringify(initErrorColorPalette));
    }
    colorPalette.forEach((v, i) => {
      if (newPalette[i] && !(newPalette[i] instanceof Array)) {
        newPalette[i].value = v;
        newInitPalette[i].value = v;
        changeGradation(v, i, type);
      } else if (newPalette[i] && newPalette[i] instanceof Array) {
        newPalette[i].forEach((p) => {
          p.value = v;
        });

        newInitPalette[i].forEach((p) => {
          p.value = v;
        });
        changeGradation(v, i, type);
      }
    });
    if (type === "success") {
      setSuccessColorPalette(newPalette);
      setSuccessInitColorPalette(newInitPalette);
    }
    if (type === "error") {
      setErrorColorPalette(newPalette);
      setInitErrorColorPalette(newInitPalette);
    }
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      setPalette();
    });
  }, [setPalette]);

  const changeGradation = (hex, idx, type, saveToLocal = true) => {
    if (!colorPalette[idx]) return;
    if (type === "brand") {
      if (colorPalette[idx] instanceof Array) {
        setColorPalette((prev) => prev.map((item, i) => (i === idx ? { ...item, value: hex } : item)));
      } else {
        setColorPalette((prev) => {
          prev[idx].value = hex;
          return { ...prev };
        });
      }
    }

    if (type === "success") {
      console.log("setSuccessColorPalette2");
      setSuccessColorPalette((prev) => prev.map((item, i) => (i === idx ? { ...item, value: hex } : item)));
    }
    if (type === "error") {
      setErrorColorPalette((prev) => prev.map((item, i) => (i === idx ? { ...item, value: hex } : item)));
    }

    const tokenName = `--td-${type}-color-${idx + 1}`;
    modifyToken(tokenName, hex, saveToLocal);
  };
  const isColorPaletteChange = useMemo(() => isEqual(colorPalette, initColorPalette), [colorPalette, initColorPalette]);
  const isSuccessColorPaletteChange = useMemo(
    () => isEqual(successColorPalette, initSuccessColorPalette),
    [successColorPalette, initSuccessColorPalette]
  );
  const isErrorColorPaletteChange = useMemo(
    () => isEqual(errorColorPalette, initErrorColorPalette),
    [errorColorPalette, initErrorColorPalette]
  );
  return (
    <div className="color-panel">
      <div className="color-panel__content">
        <div className="color-panel__main">
          <p className="color-panel__title">主题色</p>

          {/* 自定义颜色选择器 */}
          <div className="color-panel__custom">
            <ColorPicker
              value={currentThemeColor}
              format="HEX"
              onChange={(v) => {
                console.log(v);
                handleNewColorGeneration(v);
              }}
            />
          </div>
          <ColorCollapse
            title="成功色"
            type="primary"
            colorPalette={successColorPalette}
            paletteChange={isSuccessColorPaletteChange}
            disabled={false}
            onChangeMainColor={changeMainColor}
          >
            <ColorColumn
              type="success"
              gradientStep={10}
              colorPalette={successColorPalette}
              originColorPalette={initSuccessColorPalette}
              onChangeGradation={changeGradation}
              onRecoverGradation={recoverGradation}
            />
          </ColorCollapse>

          <ColorCollapse
            title="错误色"
            type="error"
            colorPalette={errorColorPalette}
            paletteChange={isErrorColorPaletteChange}
            disabled={false}
            onChangeMainColor={changeMainColor}
          >
            <ColorColumn
              type="error"
              gradientStep={10}
              colorPalette={errorColorPalette}
              originColorPalette={initErrorColorPalette}
              onChangeGradation={changeGradation}
              onRecoverGradation={recoverGradation}
            />
          </ColorCollapse>
        </div>
      </div>
    </div>
  );
}
