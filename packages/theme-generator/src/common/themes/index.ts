/* eslint-env browser */
import { Color } from "tvision-color";
import cssbeautify from "cssbeautify";
import { DARK_FUNCTION_COLOR, LIGHT_FUNCTION_COLOR } from "./token";
import { clearLocalItem } from "../utils/index";
import { BUILT_IN_THEMES } from "./preset";
// 样式表 ID
export const CUSTOM_THEME_ID = "custom-theme";
export const CUSTOM_DARK_ID = `${CUSTOM_THEME_ID}-dark`;
export const CUSTOM_EXTRA_ID = `${CUSTOM_THEME_ID}-extra`;
export const CUSTOM_COMMON_ID_PREFIX = `${CUSTOM_THEME_ID}-common`;

// localStorage key
export const CUSTOM_OPTIONS_ID = `${CUSTOM_THEME_ID}-options`;
export const CUSTOM_TOKEN_ID = `${CUSTOM_THEME_ID}-tokens`;

// 默认主题
export const DEFAULT_THEME = {
  value: "#262626",
  name: "中性黑",
  enName: "Neutral Black"
};

// 腾讯蓝颜色值
const TENCENT_BLUE = "#0052D9";

/**
 * 腾讯蓝的 `--td-brand-color-x` 系列 Token 深色数值
 */
const TENCENT_BLUE_DARK_PALETTE = [
  "#1b2f51",
  "#173463",
  "#143975",
  "#103d88",
  "#0d429a",
  "#054bbe",
  "#2667d4",
  "#4582e6",
  "#699ef5",
  "#96bbf8"
];

// 默认样式获取方法
const getDefaultFontCss = () => BUILT_IN_THEMES.web.common.font;
const getDefaultRadiusCss = () => BUILT_IN_THEMES.web.common.radius;

/**
 * 创建或获取样式表
 */
export function appendStyleSheet(styleId: string): HTMLStyleElement {
  let styleSheet = document.getElementById(styleId) as HTMLStyleElement;
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = styleId;
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);
  }
  return styleSheet;
}

/**
 * 生成主题 Token
 */
export function generateTokenList(
  hex: string,
  isDark = false,
  step = 10,
  remainInput = true
): { styleSheetString: string; brandColorIdx: number; colorPalette: string[] } {
  const lowCaseHex = hex.toLowerCase();
  const root = isDark ? `:root[theme-mode="dark"]` : `:root,:root[theme-mode="light"]`;

  const [{ colors, primary }] = Color.getColorGradations({
    colors: [lowCaseHex],
    step: step,
    remainInput
  });

  const isTencentBlue = lowCaseHex === TENCENT_BLUE.toLowerCase();
  const validPrimary = typeof primary === "number" && !isNaN(primary) ? primary : 6;

  let colorPalette: string[];
  let brandColorIdx: number;

  if (isDark) {
    colorPalette = isTencentBlue ? TENCENT_BLUE_DARK_PALETTE : [...colors].reverse();
    brandColorIdx = isTencentBlue ? 8 : 6;
  } else {
    colorPalette = [...colors];
    brandColorIdx = isTencentBlue ? 7 : validPrimary + 1;
  }
  // 为什么黑夜模式下生成的颜色和Tdesign的不一样
  // if (isDark) {
  //   if (lowCaseHex === DEFAULT_THEME.value.toLowerCase()) {
  //     colorPalette = [
  //       "#1b2f51",
  //       "#173463",
  //       "#143975",
  //       "#103d88",
  //       "#0d429a",
  //       "#054bbe",
  //       "#2667d4",
  //       "#4582e6",
  //       "#699ef5",
  //       "#96bbf8"
  //     ];
  //     brandColorIdx = 8;
  //   } else {
  //     colorPalette = colorPalette.reverse().map((color) => {
  //       const [h, s, l] = Color.colorTransform(color, "hex", "hsl");
  //       return Color.colorTransform([h, Number(s) - 4, l], "hsl", "hex");
  //     });
  //     brandColorIdx = 5;
  //   }
  //   colorPalette[0] = `${colorPalette[brandColorIdx]}20`;
  // }
  const styleSheetString = `${root}{
    --td-brand-color-1: ${colorPalette[0]};
    --td-brand-color-2: ${colorPalette[1]};
    --td-brand-color-3: ${colorPalette[2]};
    --td-brand-color-4: ${colorPalette[3]};
    --td-brand-color-5: ${colorPalette[4]};
    --td-brand-color-6: ${colorPalette[5]};
    --td-brand-color-7: ${colorPalette[6]};
    --td-brand-color-8: ${colorPalette[7]};
    --td-brand-color-9: ${colorPalette[8]};
    --td-brand-color-10: ${colorPalette[9]};
    --td-brand-color-light: var(--td-brand-color-1);
    --td-brand-color-focus: var(--td-brand-color-2);
    --td-brand-color-disabled: var(--td-brand-color-3);
    --td-brand-color-hover: var(--td-brand-color-${brandColorIdx > 1 ? brandColorIdx - 1 : brandColorIdx});
    --td-brand-color: var(--td-brand-color-${brandColorIdx});
    --td-brand-color-active: var(--td-brand-color-${brandColorIdx < 10 ? brandColorIdx + 1 : brandColorIdx});
    ${isDark ? DARK_FUNCTION_COLOR : LIGHT_FUNCTION_COLOR}
  }`;

  return { styleSheetString, brandColorIdx, colorPalette };
}
export const isMobile = (device: string) => device === "mobile";
export function normalizeDeviceType(device: string) {
  return isMobile(device) ? "mobile" : "web";
}
export const generateCommonTheme = (() => {
  let previousDevice = "web"; // 闭包保存

  return function (device = "web", forceRefresh = false) {
    const deviceType = normalizeDeviceType(device);
    const commonThemes = BUILT_IN_THEMES[deviceType as keyof typeof BUILT_IN_THEMES]?.common;
    if (!commonThemes) return;

    // device 变化时，清除之前的样式
    if (previousDevice !== deviceType) {
      const existingStyles = Array.from(document.querySelectorAll(`[id^="${CUSTOM_COMMON_ID_PREFIX}-"]`));
      existingStyles.forEach((style) => {
        style.parentNode?.removeChild(style);
      });
    }

    Object.entries(commonThemes).forEach(([key, theme]) => {
      const commonId = `${CUSTOM_COMMON_ID_PREFIX}-${key}`;
      if (document.getElementById(commonId) && !forceRefresh) return; // 不覆盖之前的内容
      const commonStyleSheet = appendStyleSheet(commonId);
      commonStyleSheet.textContent = theme;
    });

    previousDevice = deviceType;
  };
})();
/**
 * 生成新主题
 */
export function generateNewTheme(hex: string, remainInput = true, _device = "web") {
  updateLocalOption("color", hex, hex !== DEFAULT_THEME.value);
  generateCommonTheme(_device, true);
  document.getElementById(CUSTOM_EXTRA_ID)?.remove();

  // 动态生成
  const styleSheet = appendStyleSheet(CUSTOM_THEME_ID);
  const darkStyleSheet = appendStyleSheet(CUSTOM_DARK_ID);
  // const extraStyleSheet = appendStyleSheet(CUSTOM_EXTRA_ID);
  const { brandColorIdx, colorPalette, styleSheetString } = generateTokenList(hex, false, 10, remainInput);
  const darkCssTokenString = generateTokenList(hex, true).styleSheetString;
  styleSheet.textContent = styleSheetString;
  darkStyleSheet.textContent = darkCssTokenString;
  document.documentElement.setAttribute("theme-color", CUSTOM_THEME_ID);
  document.documentElement.style.setProperty("--brand-main", hex);

  return { brandColorIdx, colorPalette };
}

/**
 * 导出主题为 CSS
 */
export function exportCustomTheme(_device = "web") {
  const styleSheet = document.getElementById(CUSTOM_THEME_ID);
  const darkStyleSheet = document.getElementById(CUSTOM_DARK_ID);
  const extraStyleSheet = Array.from(document.querySelectorAll(`[id^="${CUSTOM_COMMON_ID_PREFIX}-"]`));
  const cssString = extractRootContent(styleSheet?.textContent || "");
  const darkCssString = extractRootContent(darkStyleSheet?.textContent || "");
  const extraCssString = extraStyleSheet.map((style) => extractRootContent(style.textContent || "")).join("\n");
  const finalCssString = `
    :root, :root[theme-mode="light"] {
      ${cssString}
    }
    :root[theme-mode="dark"] {
      ${darkCssString}
    }
    :root {
      ${extraCssString}
    }
  `;

  const beautifyCssString = cssbeautify(finalCssString.trim());
  const blob = new window.Blob([beautifyCssString], { type: "text/css" });
  downloadFile(blob, "theme.css");
}

/**
 * 从 CSS 文本中提取 :root 中的内容
 */
export function extractRootContent(cssText: string): string {
  const match = cssText.match(/{([^}]*)}/);
  return match ? match[1].trim() : "";
}

/**
 * 下载文件
 */
export function downloadFile(blob: globalThis.Blob, fileName: string) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}

/**
 * 修改 Token
 */
export function modifyToken(tokenName: string, newVal: string, saveToLocal = true) {
  // 获取所有可能包含 token 的样式表
  const styleSheets = document.querySelectorAll(
    `#${CUSTOM_THEME_ID}, #${CUSTOM_DARK_ID}, #${CUSTOM_EXTRA_ID}, [id^="${CUSTOM_COMMON_ID_PREFIX}-"]`
  );

  let tokenFound = false;

  styleSheets.forEach((styleSheet) => {
    const reg = new RegExp(`${tokenName}:\\s*(.*?);`);
    const content = styleSheet.textContent ?? "";
    const match = content.match(reg);

    if (!match) return;
    if (match[1] === newVal) {
      tokenFound = true;
      return;
    }

    const currentVal = match[1];
    styleSheet.textContent = content.replace(`${tokenName}: ${currentVal}`, `${tokenName}: ${newVal}`);
    tokenFound = true;
    if (saveToLocal) {
      storeTokenToLocal(tokenName, newVal);
    } else {
      // 确保没有遗留的 Token
      clearLocalItem(CUSTOM_TOKEN_ID, tokenName);
    }
  });

  if (!tokenFound) {
    console.warn(`CSS variable: ${tokenName} is not exist`);
  }
}

/**
 * 更新本地选项
 */
export function updateLocalOption(optionName: string, value: string, storeToLocal = true) {
  if (storeToLocal) {
    const options = localStorage.getItem(CUSTOM_OPTIONS_ID) || "{}";
    const optionObj = JSON.parse(options);
    optionObj[optionName] = value;
    localStorage.setItem(CUSTOM_OPTIONS_ID, JSON.stringify(optionObj));
  }
}

/**
 * 从本地获取选项
 */
export function getOptionFromLocal(optionName: string): string | null {
  const options = localStorage.getItem(CUSTOM_OPTIONS_ID);
  if (!options) return null;
  const optionObj = JSON.parse(options);
  return optionObj[optionName] || null;
}

/**
 * 存储 Token 到本地
 */
export function storeTokenToLocal(tokenName: string, newVal: string) {
  const tokens = localStorage.getItem(CUSTOM_TOKEN_ID) || "{}";
  const tokenObj = JSON.parse(tokens);
  tokenObj[tokenName] = newVal;
  localStorage.setItem(CUSTOM_TOKEN_ID, JSON.stringify(tokenObj));
}

/**
 * 从本地应用 Token
 */
export function applyTokenFromLocal() {
  const token = localStorage.getItem(CUSTOM_TOKEN_ID);
  if (!token) return;

  const tokenObj = JSON.parse(token);
  Object.entries(tokenObj).forEach(([key, value]) => {
    modifyToken(key, value as string);
  });
}

/**
 * 从本地应用主题
 */
export function applyMainColorFromLocal(device: string) {
  const options = localStorage.getItem(CUSTOM_OPTIONS_ID);
  if (!options) return;
  const typeObj = JSON.parse(options);
  const hex = typeObj.color;
  if (!hex) return;
  generateNewTheme(hex, false, device);
}

/**
 * 从本地应用完整主题
 */
export function applyThemeFromLocal(device: string) {
  applyMainColorFromLocal(device);
  applyTokenFromLocal();
}

/**
 * 清除本地主题
 * @param resetToDefault 是否重置为默认值（字体、圆角等）
 */
export function clearLocalTheme(resetToDefault = false) {
  localStorage.removeItem(CUSTOM_OPTIONS_ID);
  localStorage.removeItem(CUSTOM_TOKEN_ID);

  // 移除所有自定义样式表（字体、圆角、尺寸等）
  const styleSheetsToRemove = document.querySelectorAll(`[id^="${CUSTOM_COMMON_ID_PREFIX}-"], #${CUSTOM_EXTRA_ID}`);
  styleSheetsToRemove.forEach((styleSheet) => {
    styleSheet.remove();
  });

  // 清空主题样式表的内容（但保留样式表元素，因为 generateNewTheme 会重新填充）
  const themeStyleSheet = document.getElementById(CUSTOM_THEME_ID);
  const darkStyleSheet = document.getElementById(CUSTOM_DARK_ID);
  if (themeStyleSheet) {
    themeStyleSheet.textContent = "";
  }
  if (darkStyleSheet) {
    darkStyleSheet.textContent = "";
  }

  // 如果需要重置为默认值，重新应用默认的字体和圆角值
  if (resetToDefault) {
    // 应用默认字体值
    const fontStyleId = `${CUSTOM_COMMON_ID_PREFIX}-font`;
    const fontStyleSheet = appendStyleSheet(fontStyleId);
    fontStyleSheet.textContent = getDefaultFontCss();

    // 应用默认圆角值
    const radiusStyleId = `${CUSTOM_COMMON_ID_PREFIX}-radius`;
    const radiusStyleSheet = appendStyleSheet(radiusStyleId);
    radiusStyleSheet.textContent = getDefaultRadiusCss();
  }
}

/**
 * 如果不传入 `tokenName`，则返回所有的 `token` 对象
 */
export function getTokenFromLocal(tokenName?: string) {
  const tokens = localStorage.getItem(CUSTOM_TOKEN_ID);
  if (!tokens) return;
  const tokenObj = JSON.parse(tokens);
  if (!tokenName) return tokenObj;
  return tokenObj[tokenName];
}

type TokenIndex = { name: string; idx: number };

export function collectTokenIndexes(tokenArr: string[]): TokenIndex[] {
  const isDarkMode = document.documentElement.getAttribute("theme-mode") === "dark";
  const targetCss = document.querySelector(isDarkMode ? `#${CUSTOM_DARK_ID}` : `#${CUSTOM_THEME_ID}`);
  const result = tokenArr.reduce<TokenIndex[]>((acc, token) => {
    const reg = new RegExp(`${token}:\\s*var\\((--td-[\\w-]+)\\)`, "i");
    const match = targetCss?.textContent?.match(reg);
    if (match && match[1]) {
      const idxMatch = match[1].match(/(\d+)$/);
      if (idxMatch && idxMatch[1]) {
        acc.push({
          name: token,
          idx: parseInt(idxMatch[1], 10)
        });
      }
    }
    return acc;
  }, []);
  return result.sort((a, b) => a.idx - b.idx);
}
