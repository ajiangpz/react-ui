/**
 * 默认的 Radius Token 值
 */
export const DEFAULT_RADIUS_TOKENS = {
  "--td-radius-small": "2px",
  "--td-radius-default": "3px",
  "--td-radius-medium": "6px",
  "--td-radius-large": "9px",
  "--td-radius-extraLarge": "12px",
  "--td-radius-round": "999px",
  "--td-radius-circle": "50%"
};

/**
 * 默认的 Font Token 值
 */
export const DEFAULT_FONT_TOKENS = {
  "--td-font-family": "pingfang sc, microsoft yahei, arial regular",
  "--td-font-family-medium": "pingfang sc, microsoft yahei, arial medium",
  "--td-font-size-link-small": "12px",
  "--td-font-size-link-medium": "14px",
  "--td-font-size-link-large": "16px",
  "--td-font-size-mark-small": "12px",
  "--td-font-size-mark-medium": "14px",
  "--td-font-size-body-small": "12px",
  "--td-font-size-body-medium": "14px",
  "--td-font-size-body-large": "16px",
  "--td-font-size-title-small": "14px",
  "--td-font-size-title-medium": "16px",
  "--td-font-size-title-large": "18px",
  "--td-font-size-headline-small": "24px",
  "--td-font-size-headline-medium": "28px",
  "--td-font-size-headline-large": "36px",
  "--td-font-size-display-medium": "48px",
  "--td-font-size-display-large": "64px",
  "--td-line-height-link-small": "20px",
  "--td-line-height-link-medium": "22px",
  "--td-line-height-link-large": "24px",
  "--td-line-height-mark-small": "20px",
  "--td-line-height-mark-medium": "22px",
  "--td-line-height-body-small": "20px",
  "--td-line-height-body-medium": "22px",
  "--td-line-height-body-large": "24px",
  "--td-line-height-title-small": "22px",
  "--td-line-height-title-medium": "24px",
  "--td-line-height-title-large": "28px",
  "--td-line-height-headline-small": "32px",
  "--td-line-height-headline-medium": "36px",
  "--td-line-height-headline-large": "44px",
  "--td-line-height-display-medium": "56px",
  "--td-line-height-display-large": "72px"
};

/**
 * 生成默认的 Radius CSS 字符串
 */
export function getDefaultRadiusCss(): string {
  const tokens = Object.entries(DEFAULT_RADIUS_TOKENS)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  return `:root {
${tokens}
}`;
}

/**
 * 生成默认的 Font CSS 字符串
 */
export function getDefaultFontCss(): string {
  const tokens = Object.entries(DEFAULT_FONT_TOKENS)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  return `:root {
${tokens}
}`;
}
