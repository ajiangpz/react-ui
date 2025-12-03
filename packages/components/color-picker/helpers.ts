import tinycolor from "tinycolor2";
import { ColorObject, ColorPickerChangeTrigger, TdColorContext } from "./type";

export const DEFAULT_COLOR = "#0052D9";

export const normalizeColorValue = (value?: string | null): string => {
  if (!value) return DEFAULT_COLOR;
  const color = tinycolor(value);
  if (!color.isValid()) {
    return DEFAULT_COLOR;
  }
  return color.toHexString();
};

export const buildColorObject = (value: string): ColorObject => {
  const color = tinycolor(value || DEFAULT_COLOR);
  const rgb = color.toRgb();
  const hsv = color.toHsv();
  const hsl = color.toHsl();

  const rgbString = color.toRgbString();
  const rgbaString = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Number(rgb.a.toFixed(2))})`;
  const hslString = `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%)`;
  const hslaString = `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s * 100)}%, ${Math.round(hsl.l * 100)}%, ${Number(
    rgb.a.toFixed(2)
  )})`;
  const hsvString = `hsv(${Math.round(hsv.h)}, ${Math.round(hsv.s * 100)}%, ${Math.round(hsv.v * 100)}%)`;
  const hsvaString = `hsva(${Math.round(hsv.h)}, ${Math.round(hsv.s * 100)}%, ${Math.round(hsv.v * 100)}%, ${Number(
    rgb.a.toFixed(2)
  )})`;

  return {
    alpha: rgb.a,
    css: rgbString,
    hex: color.toHexString(),
    hex8: color.toHex8String(),
    hsl: hslString,
    hsla: hslaString,
    hsv: hsvString,
    hsva: hsvaString,
    rgb: rgbString,
    rgba: rgbaString,
    saturation: hsv.s,
    value: hsv.v,
    isGradient: false,
    linearGradient: undefined
  };
};

export const buildChangeContext = (value: string, trigger: ColorPickerChangeTrigger): TdColorContext => ({
  color: buildColorObject(value),
  trigger
});
