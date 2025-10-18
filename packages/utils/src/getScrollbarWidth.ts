/**
 * @description: Calculate scroll bar width
 * @param container  Container used to calculate scrollbar width
 * @default container: document.body
 */
export function getScrollbarWidth(container: HTMLElement = document.body) {
  if (container === document.body) {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  return container.offsetWidth - container.clientWidth;
}
