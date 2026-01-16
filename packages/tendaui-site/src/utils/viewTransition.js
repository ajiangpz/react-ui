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
    // 如果没有提供事件对象，使用屏幕中心作为动画起点
    const clientX = event?.clientX ?? window.innerWidth / 2;
    const clientY = event?.clientY ?? window.innerHeight / 2;

    // 计算半径，以点击位置为圆心，到四个角的距离中最大的那个作为半径
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY)
    );

    const clipPath = [`circle(0% at ${clientX}px ${clientY}px)`, `circle(${radius}px at ${clientX}px ${clientY}px)`];

    // 使用传入的 willBeDark 参数来确定动画方向
    const isDark = willBeDark ?? getThemeMode() === "dark";
    const clipPathList = isDark ? clipPath.reverse() : clipPath;

    // 获取要动画的伪元素
    // 切换到暗色：动画 old root（亮色）收缩消失
    // 切换到亮色：动画 new root（亮色）展开显示
    const pseudoElement = isDark ? "::view-transition-old(root)" : "::view-transition-new(root)";

    document.documentElement.animate(
      {
        clipPath: clipPathList
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: pseudoElement
      }
    );
  });
}
