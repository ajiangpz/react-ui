/**
 * 检查节点是否溢出
 * @param node 目标节点
 * @returns 是否溢出
 */
export function isNodeOverflow(node: HTMLElement): boolean {
  if (!node) return false;
  return node.scrollWidth > node.clientWidth;
}
