export const BREAKPOINTS = {
  xs: 480,   // 超小屏幕
  sm: 640,   // 小屏幕，如手机横屏
  md: 768,   // 中等屏幕，如平板
  lg: 1024,  // 大屏幕，如笔记本
  xl: 1280,  // 超大屏幕，如桌面显示器
  "2xl": 1536 // 超宽屏幕
} as const;

export const MAX_BREAKPOINTS = {
  xs: 479,    // < 480px
  sm: 639,    // < 640px
  md: 767,    // < 768px
  lg: 1023,   // < 1024px
  xl: 1279,   // < 1280px
  "2xl": 1535 // < 1536px
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
export type MaxBreakpoint = keyof typeof MAX_BREAKPOINTS;

// 断点说明
export const BREAKPOINT_DESCRIPTION = {
  xs: "超小屏幕 - 适用于手机竖屏 (≥480px)",
  sm: "小屏幕 - 适用于手机横屏 (≥640px)",
  md: "中等屏幕 - 适用于平板 (≥768px)",
  lg: "大屏幕 - 适用于笔记本 (≥1024px)",
  xl: "超大屏幕 - 适用于桌面显示器 (≥1280px)",
  "2xl": "超宽屏幕 - 适用于大型显示器 (≥1536px)"
} as const;

// 最大宽度断点说明
export const MAX_BREAKPOINT_DESCRIPTION = {
  xs: "超小屏幕 - 仅在手机竖屏显示 (<480px)",
  sm: "小屏幕 - 仅在超小屏幕显示 (<640px)",
  md: "中等屏幕以下 - 手机和小平板 (<768px)",
  lg: "大屏幕以下 - 移动设备优先 (<1024px)",
  xl: "超大屏幕以下 - 平板和笔记本 (<1280px)",
  "2xl": "超宽屏幕以下 - 常规显示器 (<1536px)"
} as const; 