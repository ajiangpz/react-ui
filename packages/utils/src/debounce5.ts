export function debounce<T extends unknown[], R>(fn: (...args: T) => R, wait: number, immediate: boolean = false) {
  let lastArgs: T | undefined = undefined;
  let lastThis: ReturnType<typeof fn> | undefined = undefined;
  let timeId: ReturnType<typeof setTimeout> | undefined = undefined;
  let result: R | undefined = undefined;
  let lastCallTime = 0;

  function timeExpired() {
    const now = Date.now();
    const remindTime = wait - (now - lastCallTime);
    if (remindTime > 0) {
      timeId = setTimeout(timeExpired, remindTime);
      return;
    }
    result = fn.apply(lastThis, lastArgs);
    timeId = undefined;
    lastArgs = lastThis = undefined;
  }

  function debounced(...args: T) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this as ReturnType<typeof fn>;
    lastCallTime = now;
    if (timeId === undefined) {
      timeId = setTimeout(timeExpired, wait);
      if (immediate) {
        result = fn.apply(lastThis, lastArgs);
        lastArgs = lastThis = undefined;
      }
    }

    return result;
  }
  return debounced;
}
