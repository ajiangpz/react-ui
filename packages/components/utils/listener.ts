import { canUseDocument } from "./dom";

type EventHandler = (element: Node, event: string, handler: EventListenerOrEventListenerObject) => void;

export const on = ((): EventHandler => {
  if (canUseDocument && document.addEventListener) {
    return (element: Node, event: string, handler: EventListenerOrEventListenerObject): void => {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return (element: Node, event: string, handler: EventListenerOrEventListenerObject): void => {
    if (element && event && handler) {
      (
        element as unknown as { attachEvent: (event: string, handler: EventListenerOrEventListenerObject) => void }
      ).attachEvent(`on${event}`, handler);
    }
  };
})();

export const off = ((): EventHandler => {
  if (canUseDocument && document.removeEventListener) {
    return (element: Node, event: string, handler: EventListenerOrEventListenerObject): void => {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return (element: Node, event: string, handler: EventListenerOrEventListenerObject): void => {
    if (element && event) {
      (
        element as unknown as { detachEvent: (event: string, handler: EventListenerOrEventListenerObject) => void }
      ).detachEvent(`on${event}`, handler);
    }
  };
})();
