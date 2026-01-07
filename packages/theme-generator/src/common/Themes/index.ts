/* eslint-env browser */
import { Color } from "tvision-color";
import cssbeautify from "cssbeautify";
import { getDefaultRadiusCss, getDefaultFontCss } from "./token";

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
  value: "#0052d9",
  name: "TDesign",
  enName: "TDesign"
};

// 功能色（浅色主题）
export const LIGHT_FUNCTION_COLOR = `
  --td-warning-color-1: #fff1e9;
  --td-warning-color-2: #ffd9c2;
  --td-warning-color-3: #ffb98c;
  --td-warning-color-4: #fa9550;
  --td-warning-color-5: #e37318;
  --td-warning-color-6: #be5a00;
  --td-warning-color-7: #954500;
  --td-warning-color-8: #713300;
  --td-warning-color-9: #532300;
  --td-warning-color-10: #3b1700;
  --td-error-color-1: #fff0ed;
  --td-error-color-2: #ffd8d2;
  --td-error-color-3: #ffb9b0;
  --td-error-color-4: #ff9285;
  --td-error-color-5: #f6685d;
  --td-error-color-6: #d54941;
  --td-error-color-7: #ad352f;
  --td-error-color-8: #881f1c;
  --td-error-color-9: #68070a;
  --td-error-color-10: #490002;
  --td-success-color-1: #e3f9e9;
  --td-success-color-2: #c6f3d7;
  --td-success-color-3: #92dab2;
  --td-success-color-4: #56c08d;
  --td-success-color-5: #2ba471;
  --td-success-color-6: #008858;
  --td-success-color-7: #006c45;
  --td-success-color-8: #005334;
  --td-success-color-9: #003b23;
  --td-success-color-10: #002515;
`;

// 功能色（深色主题）
export const DARK_FUNCTION_COLOR = `
  --td-warning-color-1: #4f2a1d;
  --td-warning-color-2: #582f21;
  --td-warning-color-3: #733c23;
  --td-warning-color-4: #a75d2b;
  --td-warning-color-5: #cf6e2d;
  --td-warning-color-6: #dc7633;
  --td-warning-color-7: #e8935c;
  --td-warning-color-8: #ecbf91;
  --td-warning-color-9: #eed7bf;
  --td-warning-color-10: #f3e9dc;
  --td-error-color-1: #472324;
  --td-error-color-2: #5e2a2d;
  --td-error-color-3: #703439;
  --td-error-color-4: #83383e;
  --td-error-color-5: #a03f46;
  --td-error-color-6: #c64751;
  --td-error-color-7: #de6670;
  --td-error-color-8: #ec888e;
  --td-error-color-9: #edb1b6;
  --td-error-color-10: #eeced0;
  --td-success-color-1: #193a2a;
  --td-success-color-2: #1a4230;
  --td-success-color-3: #17533d;
  --td-success-color-4: #0d7a55;
  --td-success-color-5: #059465;
  --td-success-color-6: #43af8a;
  --td-success-color-7: #46bf96;
  --td-success-color-8: #80d2b6;
  --td-success-color-9: #b4e1d3;
  --td-success-color-10: #deede8;
`;

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

  let colorPalette: string[];
  let brandColorIdx: number;

  const [{ colors, primary }] = Color.getColorGradations({
    colors: [lowCaseHex],
    step: step,
    remainInput
  });

  colorPalette = colors;
  brandColorIdx = primary;

  if (lowCaseHex === DEFAULT_THEME.value.toLowerCase()) {
    brandColorIdx = 8;
  }

  if (isDark) {
    if (lowCaseHex === DEFAULT_THEME.value.toLowerCase()) {
      colorPalette = [
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
      brandColorIdx = 8;
    } else {
      colorPalette = colorPalette.reverse().map((color) => {
        const [h, s, l] = Color.colorTransform(color, "hex", "hsl");
        return Color.colorTransform([h, Number(s) - 4, l], "hsl", "hex");
      });
      brandColorIdx = 5;
    }
    colorPalette[0] = `${colorPalette[brandColorIdx]}20`;
  }

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
    --td-brand-color-hover: var(--td-brand-color-${brandColorIdx > 0 ? brandColorIdx : brandColorIdx + 1});
    --td-brand-color: var(--td-brand-color-${brandColorIdx + 1});
    --td-brand-color-active:var(--td-brand-color-${brandColorIdx > 8 ? brandColorIdx + 1 : brandColorIdx + 2});
    ${isDark ? DARK_FUNCTION_COLOR : LIGHT_FUNCTION_COLOR}
  }`;

  return { styleSheetString, brandColorIdx, colorPalette };
}

/**
 * 生成新主题
 */
export function generateNewTheme(hex: string, remainInput = true, _device = "web") {
  updateLocalOption("color", hex, hex !== DEFAULT_THEME.value);

  const styleSheet = appendStyleSheet(CUSTOM_THEME_ID);
  const darkStyleSheet = appendStyleSheet(CUSTOM_DARK_ID);

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

  const cssString = extractRootContent(styleSheet?.textContent || "");
  const darkCssString = extractRootContent(darkStyleSheet?.textContent || "");

  const finalCssString = `
    :root, :root[theme-mode="light"] {
      ${cssString}
    }
    :root[theme-mode="dark"] {
      ${darkCssString}
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
    const match = (styleSheet as HTMLStyleElement).textContent?.match(reg);

    if (!match) return;
    if (match[1].trim() === newVal.trim()) {
      tokenFound = true;
      return;
    }

    const currentVal = match[1];
    (styleSheet as HTMLStyleElement).textContent = (styleSheet as HTMLStyleElement).textContent?.replace(
      `${tokenName}: ${currentVal}`,
      `${tokenName}: ${newVal}`
    );
    tokenFound = true;

    if (saveToLocal) {
      storeTokenToLocal(tokenName, newVal);
    }
  });

  // 如果 token 不存在且是 radius token，创建 radius 样式表
  if (!tokenFound && tokenName.startsWith("--td-radius-")) {
    const radiusStyleId = `${CUSTOM_COMMON_ID_PREFIX}-radius`;
    let radiusStyleSheet = document.getElementById(radiusStyleId) as HTMLStyleElement;

    if (!radiusStyleSheet) {
      radiusStyleSheet = appendStyleSheet(radiusStyleId);
      // 初始化默认的 radius 值
      radiusStyleSheet.textContent = getDefaultRadiusCss();
    }

    // 现在再次尝试修改 token
    const reg = new RegExp(`${tokenName}:\\s*(.*?);`);
    const match = radiusStyleSheet.textContent?.match(reg);

    if (match) {
      const currentVal = match[1];
      radiusStyleSheet.textContent = radiusStyleSheet.textContent.replace(
        `${tokenName}: ${currentVal}`,
        `${tokenName}: ${newVal}`
      );
      tokenFound = true;

      if (saveToLocal) {
        storeTokenToLocal(tokenName, newVal);
      }
    }
  }

  // 如果 token 不存在且是 font token，创建 font 样式表
  if (
    !tokenFound &&
    (tokenName.startsWith("--td-font-size-") ||
      tokenName.startsWith("--td-line-height-") ||
      tokenName.startsWith("--td-font-family"))
  ) {
    const fontStyleId = `${CUSTOM_COMMON_ID_PREFIX}-font`;
    let fontStyleSheet = document.getElementById(fontStyleId) as HTMLStyleElement;

    if (!fontStyleSheet) {
      fontStyleSheet = appendStyleSheet(fontStyleId);
      // 初始化默认的 font 值
      fontStyleSheet.textContent = getDefaultFontCss();
    }

    // 现在再次尝试修改 token
    const reg = new RegExp(`${tokenName}:\\s*(.*?);`);
    const match = fontStyleSheet.textContent?.match(reg);

    if (match) {
      const currentVal = match[1];
      fontStyleSheet.textContent = fontStyleSheet.textContent.replace(
        `${tokenName}: ${currentVal}`,
        `${tokenName}: ${newVal}`
      );
      tokenFound = true;

      if (saveToLocal) {
        storeTokenToLocal(tokenName, newVal);
      }
    } else {
      // 如果 token 不在默认列表中，直接添加
      const currentContent = fontStyleSheet.textContent || "";
      const newContent = currentContent.replace(/:root\s*\{/, `:root {\n  ${tokenName}: ${newVal};`);
      fontStyleSheet.textContent = newContent;
      tokenFound = true;

      if (saveToLocal) {
        storeTokenToLocal(tokenName, newVal);
      }
    }
  }

  // 如果 token 不存在且是 size token，创建 size 样式表
  if (
    !tokenFound &&
    (tokenName.startsWith("--td-comp-size-") ||
      tokenName.startsWith("--td-comp-paddingLR-") ||
      tokenName.startsWith("--td-comp-paddingTB-") ||
      tokenName.startsWith("--td-comp-margin-") ||
      tokenName.startsWith("--td-pop-padding-"))
  ) {
    const sizeStyleId = `${CUSTOM_COMMON_ID_PREFIX}-size`;
    let sizeStyleSheet = document.getElementById(sizeStyleId) as HTMLStyleElement;

    if (!sizeStyleSheet) {
      sizeStyleSheet = appendStyleSheet(sizeStyleId);
      // 初始化一个基本的 size 样式表
      sizeStyleSheet.textContent = `:root {\n  ${tokenName}: ${newVal};\n}`;
      tokenFound = true;
    } else {
      // 检查 token 是否已存在
      const reg = new RegExp(`${tokenName}:\\s*(.*?);`);
      const match = sizeStyleSheet.textContent?.match(reg);

      if (match) {
        // 如果存在，更新它
        const currentVal = match[1];
        sizeStyleSheet.textContent = sizeStyleSheet.textContent.replace(
          `${tokenName}: ${currentVal}`,
          `${tokenName}: ${newVal}`
        );
        tokenFound = true;
      } else {
        // 如果不存在，添加到样式表中
        const currentContent = sizeStyleSheet.textContent || "";
        // 在最后一个 } 之前添加 token
        const lastBraceIndex = currentContent.lastIndexOf("}");
        if (lastBraceIndex !== -1) {
          const beforeBrace = currentContent.substring(0, lastBraceIndex);
          const afterBrace = currentContent.substring(lastBraceIndex);
          sizeStyleSheet.textContent = `${beforeBrace}\n  ${tokenName}: ${newVal};${afterBrace}`;
        } else {
          // 如果没有找到 }，直接在末尾添加
          sizeStyleSheet.textContent = `${currentContent}\n  ${tokenName}: ${newVal};`;
        }
        tokenFound = true;
      }
    }

    if (tokenFound && saveToLocal) {
      storeTokenToLocal(tokenName, newVal);
    }
  }

  // 如果 token 不存在且是 text-color token，在主题样式表中创建
  if (!tokenFound && tokenName.startsWith("--td-text-color-")) {
    const isDarkMode = document.documentElement.getAttribute("theme-mode") === "dark";
    const themeStyleId = isDarkMode ? CUSTOM_DARK_ID : CUSTOM_THEME_ID;
    let themeStyleSheet = document.getElementById(themeStyleId) as HTMLStyleElement;

    if (!themeStyleSheet) {
      themeStyleSheet = appendStyleSheet(themeStyleId);
      // 如果主题样式表不存在，创建一个基本的
      const root = isDarkMode ? `:root[theme-mode="dark"]` : `:root,:root[theme-mode="light"]`;
      themeStyleSheet.textContent = `${root}{\n  ${tokenName}: ${newVal};\n}`;
      tokenFound = true;
    } else {
      // 检查 token 是否已存在
      const reg = new RegExp(`${tokenName}:\\s*(.*?);`);
      const match = themeStyleSheet.textContent?.match(reg);

      if (match) {
        // 如果存在，更新它
        const currentVal = match[1];
        themeStyleSheet.textContent = themeStyleSheet.textContent.replace(
          `${tokenName}: ${currentVal}`,
          `${tokenName}: ${newVal}`
        );
        tokenFound = true;
      } else {
        // 如果不存在，添加到样式表中
        const currentContent = themeStyleSheet.textContent || "";
        // 在最后一个 } 之前添加 token
        const lastBraceIndex = currentContent.lastIndexOf("}");
        if (lastBraceIndex !== -1) {
          const beforeBrace = currentContent.substring(0, lastBraceIndex);
          const afterBrace = currentContent.substring(lastBraceIndex);
          themeStyleSheet.textContent = `${beforeBrace}\n  ${tokenName}: ${newVal};${afterBrace}`;
        } else {
          // 如果没有找到 }，直接在末尾添加
          themeStyleSheet.textContent = `${currentContent}\n  ${tokenName}: ${newVal};`;
        }
        tokenFound = true;
      }
    }

    if (tokenFound && saveToLocal) {
      storeTokenToLocal(tokenName, newVal);
    }
  }

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
    modifyToken(key, value as string, false);
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
 */
export function clearLocalTheme() {
  localStorage.removeItem(CUSTOM_OPTIONS_ID);
  localStorage.removeItem(CUSTOM_TOKEN_ID);
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
