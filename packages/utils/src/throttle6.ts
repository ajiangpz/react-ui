export function throttle<T extends unknown[], R>(func: (...args: T) => R, wait: number) {
  let lastCallTime = 0;
  function throttled(...args: T) {
    const now = Date.now();
    if (now - lastCallTime >= wait) {
      lastCallTime = now;
      return func.apply(this, args);
    }
  }
  return throttled;
}
