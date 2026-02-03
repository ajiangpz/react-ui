/**
 * 使用 ViewTransition API 实现主题切换过渡效果
 * 支持圆形展开/收缩动画
 */

/**
 * 检查浏览器是否支持 ViewTransition API
 */
export function supportsViewTransition() {
  return typeof document.startViewTransition === "function";
}

/**
 * 获取当前主题模式
 */
export function getThemeMode() {
  return document.documentElement.getAttribute("theme-mode") || "light";
}

/**
 * 使用 ViewTransition API 切换主题
 * @param {MouseEvent} event - 触发事件的鼠标事件对象（可选）
 * @param {Function} callback - 主题切换的回调函数，应该在这个函数中更新状态和 DOM
 * @param {boolean} willBeDark - 切换后是否为暗色主题（用于确定动画方向）
 */
export function toggleThemeWithTransition(event, callback, willBeDark) {
  if (!supportsViewTransition()) {
    // 如果不支持 ViewTransition API，直接执行回调
    if (callback) callback();
    return;
  }

  const transition = document.startViewTransition(() => {
    // 在 ViewTransition 的回调中执行状态和 DOM 更新
    if (callback) callback();
  });

  transition.ready.then(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const slant = Math.max(80, Math.round(height * 0.2));

    const startClip = `polygon(0 0, 0 0, ${slant}px 100%, 0 100%)`;
    const endClip = `polygon(0 0, ${width}px 0, ${width + slant}px 100%, 0 100%)`;

    // 使用传入的 willBeDark 参数来确定动画方向
    const isDark = willBeDark ?? getThemeMode() === "dark";
    const animateOld = isDark;
    const clipPathList = animateOld ? [endClip, startClip] : [startClip, endClip];
    const pseudoElement = `::view-transition-${animateOld ? "old" : "new"}(root)`;

    document.documentElement.animate(
      {
        clipPath: clipPathList
      },
      {
        duration: 1000,
        easing: "linear",
        fill: "both",
        pseudoElement: pseudoElement
      }
    );
  });
}
