export interface ColorTheme {
  name: string;
  subtitle: string;
  value: string;
}

export interface ColorMapItem {
  name: string;
  type: string;
  idx: number;
}

export const DEFAULT_COLOR: ColorTheme[];
export const RECOMMEND_COLOR: ColorTheme[];
export const SCENE_COLOR: ColorTheme[];
export const BRAND_COLOR_MAP: ColorMapItem[];
export const ERROR_COLOR_MAP: ColorMapItem[];
export const WARNING_COLOR_MAP: ColorMapItem[];
export const SUCCESS_COLOR_MAP: ColorMapItem[];
export const GRAY_COLOR_MAP: ColorMapItem[];
export const FONT_COLOR_MAP: Array<{ name: string; from?: string; value?: string }>;
export const LIGHT_FUNCTION_COLOR: string;
export const DARK_FUNCTION_COLOR: string;

