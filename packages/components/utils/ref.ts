export function getRefDom<T = HTMLElement>(domRef: React.RefObject<T>) {
  if (domRef.current && typeof domRef.current === "object" && "currentElement" in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}
