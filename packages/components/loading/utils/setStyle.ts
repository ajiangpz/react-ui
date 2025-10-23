/**
 * 用于为节点增加styles
 * @param el HTMLElement
 * @param style Styles
 */
function setStyle(el: HTMLElement, styles): void {
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    // @ts-expect-error CSS property assignment type inference issue
    el.style[key] = styles[key];
  });
}

export default setStyle;
