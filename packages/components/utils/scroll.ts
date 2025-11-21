export function hasBodyScrollbar() {
  return document.body.scrollHeight > document.documentElement.clientHeight;
}
export function getScrollbarWidthWithCSS() {
  const defaultScrollbarWidth = 6;
  if (typeof navigator === "undefined" || !navigator) return defaultScrollbarWidth;
  if (/(Chrome|Safari)/i.test(navigator.userAgent)) return defaultScrollbarWidth;
  const scrollDiv = document.createElement("div");
  scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  // 火狐浏览器需要再减去 4
  if (/Firefox/.test(navigator.userAgent)) {
    scrollbarWidth -= 4;
  }

  return scrollbarWidth;
}

export function getScrollbarWidth(container: HTMLElement = document.body) {
  if (container === document.body) {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  return container.offsetWidth - container.clientWidth;
}
