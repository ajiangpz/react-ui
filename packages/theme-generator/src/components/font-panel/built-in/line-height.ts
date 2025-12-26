import { modifyToken } from "../../../common/Themes";

export const LINE_HEIGHT_STEPS: Record<number, number> = {
  1: 2,
  2: 4,
  3: 8,
  4: 12,
  5: 16
};

export const LINE_HEIGHT_OPTIONS = [
  { label: "超小", enLabel: "mini", value: 1 },
  { label: "小", enLabel: "small", value: 2 },
  { label: "默认", enLabel: "default", value: 3 },
  { label: "大", enLabel: "large", value: 4 },
  { label: "特大", enLabel: "max", value: 5 },
  { label: "自定义", enLabel: "customized", value: 6, disabled: true }
];

export function updateLineHeightTokens(commonVal: number | string, type: "plus" | "time" = "plus") {
  const LINE_HEIGHT_VAR = [
    "link-small",
    "link-medium",
    "link-large",
    "mark-small",
    "mark-medium",
    "body-small",
    "body-medium",
    "body-large",
    "title-small",
    "title-medium",
    "title-large",
    "headline-small",
    "headline-medium",
    "headline-large",
    "display-medium",
    "display-large"
  ];

  const commonValNum = parseFloat(String(commonVal));
  if (isNaN(commonValNum)) {
    console.warn("updateLineHeightTokens: invalid commonVal", commonVal);
    return;
  }

  LINE_HEIGHT_VAR.forEach((size) => {
    const fontSizeToken = `--td-font-size-${size}`;
    const lineHeightToken = `--td-line-height-${size}`;

    // 基于字体大小计算行高
    const fontSize = getComputedStyle(document.documentElement).getPropertyValue(fontSizeToken);
    const fontSizeNum = parseFloat(fontSize);

    if (!fontSize || isNaN(fontSizeNum)) {
      // 如果字体大小不可用，尝试从样式表中直接读取
      const styleSheets = document.querySelectorAll(
        "style[id^='custom-theme'], style[id^='custom-dark'], style[id^='custom-extra']"
      );
      let foundFontSize = false;

      styleSheets.forEach((styleSheet) => {
        const reg = new RegExp(`${fontSizeToken}:\\s*(.*?);`);
        const match = (styleSheet as HTMLStyleElement).textContent?.match(reg);
        if (match && match[1]) {
          const parsedSize = parseFloat(match[1]);
          if (!isNaN(parsedSize)) {
            foundFontSize = true;
            const result = type === "plus" ? parsedSize + commonValNum : parsedSize * commonValNum;
            modifyToken(lineHeightToken, result + "px", false);
          }
        }
      });

      if (!foundFontSize) {
        return;
      }
    } else {
      let result: number;
      if (type === "plus") {
        result = fontSizeNum + commonValNum;
      } else if (type === "time") {
        result = fontSizeNum * commonValNum;
      } else {
        return;
      }

      modifyToken(lineHeightToken, result + "px", false);
    }
  });
}
