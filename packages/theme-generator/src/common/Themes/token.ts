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
