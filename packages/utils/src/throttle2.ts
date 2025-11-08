export const throttle = <T extends unknown[], R>(
  fn: (...args: T) => R,
  wait: number,
  options = { leading: true, trailing: false }
) => {
  let lastArgs: T | undefined;
  let lastThis: ThisType<typeof fn> | undefined;
  let result: R | undefined;
  let lastCallTime = 0;
  let timeId: ReturnType<typeof setTimeout> | undefined;

  function invokeTailingFunc() {
    timeId = undefined;
    lastCallTime = options.leading === false ? 0 : Date.now();
    result = fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = undefined;
  }

  function throttled(...args: T) {
    lastArgs = args;
    lastThis = this as ThisType<typeof throttled>;
    const now = Date.now();
    if (options.leading === false && !lastCallTime) {
      lastCallTime = now;
    }
    const remindTime = wait - (now - lastCallTime);
    // leading
    if (remindTime <= 0 || remindTime > wait) {
      // 如果此时还有定时器 trail模式 则清除
      if (!timeId) {
        clearTimeout(timeId);
        timeId = undefined;
      }
      result = fn.apply(lastThis, lastArgs);
      lastArgs = lastThis = undefined;
      lastCallTime = Date.now();
    } else if (options.trailing === false && timeId === undefined) {
      timeId = setTimeout(invokeTailingFunc, remindTime);
    }

    return result;
  }

  return throttled;
};
