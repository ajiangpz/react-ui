import { useState, useEffect, useCallback, useMemo } from "react";
import {
  generateNewTheme,
  getOptionFromLocal,
  modifyToken,
  DEFAULT_THEME,
  generateTokenList
} from "../../common/Themes";
import { Popup, ColorPickerPanel } from "@tendaui/components";
import ColorColumn from "./color-column/ColorColumn";
import ColorCollapse from "./color-collapse/ColorCollapse";
import {
  BRAND_COLOR_MAP,
  ERROR_COLOR_MAP,
  GRAY_COLOR_MAP,
  SUCCESS_COLOR_MAP,
  WARNING_COLOR_MAP,
  DEFAULT_COLOR
} from "./utils/const";
import "./ColorPanel.scss";
import { isEqual } from "lodash-es";
import { Color } from "tvision-color";
import { IconEdit as Edit1Icon } from "@tendaui/icons";
import classNames from "classnames";
interface ColorPanelProps {
  isRefresh?: boolean;
  device?: string;
  top?: number;
}

interface PaletteItem {
  value?: string;
  idx?: number;
  name?: string;
  type?: string;
  [key: string]: unknown;
}

export default function ColorPanel({ isRefresh, device = "web" }: ColorPanelProps) {
  const [currentThemeColor, setCurrentThemeColor] = useState(getOptionFromLocal("color") ?? DEFAULT_THEME.value);
  const [currentBrandIdx, setCurrentBrandIdx] = useState(6);
  const [colorPalette, setColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [initColorPalette, setInitColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [successColorPalette, setSuccessColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [initSuccessColorPalette, setSuccessInitColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [errorColorPalette, setErrorColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [initErrorColorPalette, setInitErrorColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [warningColorPalette, setWarningColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [initWarningColorPalette, setInitWarningColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [grayColorPalette, setGrayColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const [initGrayColorPalette, setInitGrayColorPalette] = useState<PaletteItem[] | PaletteItem[][]>([]);
  const themes = DEFAULT_COLOR;
  const [generateMode] = useState<"remain" | "recommend">("remain");
  // 获取当前色板
  const getCurrentPalette = useCallback(
    (type = "brand") => {
      let colorMap: Array<{ name: string; type: string; idx: number }> = [];
      let duplicateMap: Array<{ name: string; type: string; idx: number }> = [];

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
        const color = colorMap.filter((v: { idx: number }) => v.idx === i);

        if (color.length) {
          if (color.length === 1) {
            return {
              ...color[0],
              value: docStyle.getPropertyValue(`--td-${type}-color-${i + 1}`)
            };
          }
          return color.map((v: { idx: number; name: string; type: string }) => ({
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
  const changeColor = (hex: string) => {
    setCurrentThemeColor(hex);
    handleNewColorGeneration(hex);
  };
  // 设置色板
  const setPalette = useCallback(() => {
    const palette = getCurrentPalette();
    setInitColorPalette([...palette] as PaletteItem[] | PaletteItem[][]);
    setColorPalette([...palette] as PaletteItem[] | PaletteItem[][]);
    const successPalette = getCurrentPalette("success");
    setSuccessInitColorPalette(JSON.parse(JSON.stringify(successPalette)) as PaletteItem[] | PaletteItem[][]);
    setSuccessColorPalette([...successPalette] as PaletteItem[] | PaletteItem[][]);
    const errorPalette = getCurrentPalette("error");
    setInitErrorColorPalette(JSON.parse(JSON.stringify(errorPalette)) as PaletteItem[] | PaletteItem[][]);
    setErrorColorPalette([...errorPalette] as PaletteItem[] | PaletteItem[][]);
    const warningPalette = getCurrentPalette("warning");
    setInitWarningColorPalette(JSON.parse(JSON.stringify(warningPalette)) as PaletteItem[] | PaletteItem[][]);
    setWarningColorPalette([...warningPalette] as PaletteItem[] | PaletteItem[][]);
    const grayPalette = getCurrentPalette("gray");
    setInitGrayColorPalette(JSON.parse(JSON.stringify(grayPalette)) as PaletteItem[] | PaletteItem[][]);
    setGrayColorPalette([...grayPalette] as PaletteItem[] | PaletteItem[][]);
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

  const handleNewColorGeneration = (hex: string) => {
    if (hex === currentThemeColor) return;
    setCurrentThemeColor(hex);
    const result = generateNewTheme(hex, generateMode === "remain", device);
    setCurrentBrandIdx(result.brandColorIdx);
    setColorPalette(result.colorPalette as unknown as PaletteItem[] | PaletteItem[][]);
    setInitColorPalette([...result.colorPalette] as unknown as PaletteItem[] | PaletteItem[][]);
  };

  const recoverGradation = (type: string) => {
    let palette: PaletteItem[] | PaletteItem[][] | undefined;
    const modifiedPalette = getCurrentPalette(type);
    if (type === "brand") palette = initColorPalette;
    if (type === "error") palette = initErrorColorPalette;
    if (type === "success") palette = initSuccessColorPalette;
    if (type === "warning") palette = initWarningColorPalette;
    if (type === "gray") palette = initGrayColorPalette;
    if (!palette) return;
    const diffPalette = palette.filter((v, i) => JSON.stringify(v) !== JSON.stringify(modifiedPalette[i]));
    diffPalette.forEach((v) => {
      if (Array.isArray(v)) {
        const item = v[0] as { value?: string; idx?: number };
        if (item?.value !== undefined && item?.idx !== undefined) {
          changeGradation(item.value, item.idx, type, false);
        }
        return;
      } else {
        const item = v as { value?: string; idx?: number };
        if (item?.value !== undefined && item?.idx !== undefined) {
          changeGradation(item.value, item.idx, type, false);
        }
      }
    });
  };

  const changeMainColor = (v: string, type: string) => {
    const { colorPalette } = generateTokenList(v, false, type !== "gray" ? 10 : 14, true);
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
    if (type === "warning") {
      newPalette = JSON.parse(JSON.stringify(warningColorPalette));
      newInitPalette = JSON.parse(JSON.stringify(initWarningColorPalette));
    }
    if (type === "gray") {
      newPalette = JSON.parse(JSON.stringify(grayColorPalette));
      newInitPalette = JSON.parse(JSON.stringify(initGrayColorPalette));
    }
    colorPalette.forEach((v, i) => {
      if (newPalette[i] && !(newPalette[i] instanceof Array)) {
        newPalette[i].value = v;
        newInitPalette[i].value = v;
        changeGradation(v, i, type);
      } else if (newPalette[i] && newPalette[i] instanceof Array) {
        (newPalette[i] as Array<{ value: string }>).forEach((p) => {
          p.value = v;
        });
        (newInitPalette[i] as Array<{ value: string }>).forEach((p) => {
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
    if (type === "warning") {
      setWarningColorPalette(newPalette);
      setInitWarningColorPalette(newInitPalette);
    }
    if (type === "gray") {
      setGrayColorPalette(newPalette);
      setInitGrayColorPalette(newInitPalette);
    }
  };

  useEffect(() => {
    Promise.resolve().then(() => {
      setPalette();
    });
  }, [setPalette, currentThemeColor, isRefresh]);

  const changeGradation = (hex: string, idx: number, type: string, saveToLocal = true) => {
    if (!colorPalette[idx]) return;
    if (type === "brand") {
      if (Array.isArray(colorPalette[idx])) {
        setColorPalette(
          (prev) =>
            prev.map((item, i) => (i === idx ? { ...(Array.isArray(item) ? item[0] : item), value: hex } : item)) as
              | PaletteItem[]
              | PaletteItem[][]
        );
      } else {
        setColorPalette(
          (prev) =>
            prev.map((item, i) => (i === idx ? { ...(Array.isArray(item) ? item[0] : item), value: hex } : item)) as
              | PaletteItem[]
              | PaletteItem[][]
        );
      }
    }

    if (type === "success") {
      setSuccessColorPalette(
        (prev) =>
          prev.map((item, i) => (i === idx ? { ...(Array.isArray(item) ? item[0] : item), value: hex } : item)) as
            | PaletteItem[]
            | PaletteItem[][]
      );
    }
    if (type === "error") {
      setErrorColorPalette(
        (prev) =>
          prev.map((item, i) => (i === idx ? { ...(Array.isArray(item) ? item[0] : item), value: hex } : item)) as
            | PaletteItem[]
            | PaletteItem[][]
      );
    }
    if (type === "warning") {
      setWarningColorPalette(
        (prev) =>
          prev.map((item, i) => (i === idx ? { ...(Array.isArray(item) ? item[0] : item), value: hex } : item)) as
            | PaletteItem[]
            | PaletteItem[][]
      );
    }
    if (type === "gray") {
      setGrayColorPalette(
        (prev) =>
          prev.map((item, i) => (i === idx ? { ...(Array.isArray(item) ? item[0] : item), value: hex } : item)) as
            | PaletteItem[]
            | PaletteItem[][]
      );
    }

    const tokenName = `--td-${type}-color-${idx + 1}`;
    modifyToken(tokenName, hex, saveToLocal);
  };
  const isSuccessColorPaletteChange = useMemo(
    () => !isEqual(successColorPalette, initSuccessColorPalette),
    [successColorPalette, initSuccessColorPalette]
  );
  const isErrorColorPaletteChange = useMemo(
    () => !isEqual(errorColorPalette, initErrorColorPalette),
    [errorColorPalette, initErrorColorPalette]
  );
  const isWarningColorPaletteChange = useMemo(
    () => !isEqual(warningColorPalette, initWarningColorPalette),
    [warningColorPalette, initWarningColorPalette]
  );
  const isGrayColorPaletteChange = useMemo(
    () => !isEqual(grayColorPalette, initGrayColorPalette),
    [grayColorPalette, initGrayColorPalette]
  );

  const themeColorHsv = useMemo(() => {
    return `(${Color.colorTransform(currentThemeColor, "hex", "hsv").join(",")})`;
  }, [currentThemeColor]);

  const themeColorRgb = useMemo(() => {
    return `(${Color.colorTransform(currentThemeColor, "hex", "rgb").join(",")})`;
  }, [currentThemeColor]);

  // const headerHeight = getComputedStyle(document.documentElement).getPropertyValue("--header-height");
  // console.log(headerHeight);
  // if (headerHeight) setTop(() => 56 - window.scrollY);
  // setTop(() => 56 - window.scrollY);
  return (
    <div style={{ width: 268, background: "var(--bg-color-card)", borderRadius: "12px" }}>
      <div
        className="color-content__content"
        style={{ overflowY: "auto", height: window.innerHeight - (56 + 32 - window.scrollY) + "px" }}
      >
        <div className="color-content__main">
          <p className="color-panel__title">主题色</p>
          <div className="color-content__flex">
            {themes.slice(0, 4).map((theme: { value: string; name: string }, index: number) => {
              return (
                <div
                  key={index}
                  className={classNames([
                    "color-content__block",
                    {
                      "is-active": currentThemeColor.toLocaleLowerCase() === theme.value.toLocaleLowerCase()
                    }
                  ])}
                  style={{ paddingBottom: "4px", color: "'var(--text-secondary)'" }}
                >
                  <div
                    className={classNames({
                      "is-active": currentThemeColor.toLocaleLowerCase() === theme.value.toLocaleLowerCase()
                    })}
                    onClick={() => handleNewColorGeneration(theme.value)}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        border: "1px solid var(--theme-component-border)",
                        borderRadius: "6px",
                        backgroundColor: theme.value
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <Popup
            placement="bottom-left"
            showArrow
            trigger="click"
            destroyOnClose={true}
            overlayStyle={{ borderRadius: "9px" }}
            content={
              <ColorPickerPanel defaultValue={currentThemeColor} format="HEX" onChange={changeColor}></ColorPickerPanel>
            }
          >
            <div className="color-content__custom">
              <div className="color-content__custom-inner">
                <div
                  className="color-content__custom-top"
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    backgroundColor: currentThemeColor
                  }}
                >
                  {" "}
                  <p>hsv: {themeColorHsv}</p>
                  <p>rgba: {themeColorRgb}</p>
                </div>
                <div className="color-content__custom-bottom">
                  <div>
                    <p>自定义主题颜色</p>
                    <p style={{ color: "var(--text-secondary)" }}>HEX: {currentThemeColor}</p>
                  </div>
                  <Edit1Icon size="small" style={{ marginRight: "8px", color: "var(--text-primary)" }} />
                </div>
              </div>
            </div>
          </Popup>
          <ColorColumn
            type="brand"
            gradientStep={10}
            colorPalette={
              colorPalette as Array<{ idx: number; name: string; value?: string; type?: string; isModified?: boolean }>
            }
            originColorPalette={
              initColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            onChangeGradation={changeGradation}
            onRecoverGradation={recoverGradation}
          />
        </div>

        <ColorCollapse
          title="成功色"
          type="success"
          colorPalette={successColorPalette}
          disabled={false}
          onChangeMainColor={changeMainColor}
        >
          <ColorColumn
            type="success"
            gradientStep={10}
            colorPalette={
              successColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            originColorPalette={
              initSuccessColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            paletteChange={isSuccessColorPaletteChange}
            onChangeGradation={changeGradation}
            onRecoverGradation={recoverGradation}
          />
        </ColorCollapse>

        <ColorCollapse
          title="错误色"
          type="error"
          colorPalette={errorColorPalette}
          disabled={false}
          onChangeMainColor={changeMainColor}
        >
          <ColorColumn
            type="error"
            gradientStep={10}
            colorPalette={
              errorColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            originColorPalette={
              initErrorColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            paletteChange={isErrorColorPaletteChange}
            onChangeGradation={changeGradation}
            onRecoverGradation={recoverGradation}
          />
        </ColorCollapse>

        <ColorCollapse
          title="警告色"
          type="warning"
          colorPalette={warningColorPalette}
          disabled={false}
          onChangeMainColor={changeMainColor}
        >
          <ColorColumn
            type="warning"
            gradientStep={10}
            colorPalette={
              warningColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            originColorPalette={
              initWarningColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            paletteChange={isWarningColorPaletteChange}
            onChangeGradation={changeGradation}
            onRecoverGradation={recoverGradation}
          />
        </ColorCollapse>

        <ColorCollapse
          title="中性色"
          type="gray"
          colorPalette={grayColorPalette}
          disabled={false}
          onChangeMainColor={changeMainColor}
        >
          <ColorColumn
            type="gray"
            gradientStep={14}
            colorPalette={
              grayColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            originColorPalette={
              initGrayColorPalette as Array<{
                idx: number;
                name: string;
                value?: string;
                type?: string;
                isModified?: boolean;
              }>
            }
            paletteChange={isGrayColorPaletteChange}
            onChangeGradation={changeGradation}
            onRecoverGradation={recoverGradation}
          />
        </ColorCollapse>
      </div>
    </div>
  );
}
