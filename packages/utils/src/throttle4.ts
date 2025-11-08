export function throttle<T extends unknown[], R>(
  func: (...args: T) => R,
  wait: number,
  options: { leading: boolean; trailing: boolean } = { leading: false, trailing: true }
) {
  let lastArgs: T | undefined;
  let lastThis: ThisType<typeof func> | undefined;
  let result: R | undefined;
  let lastCallTime = 0;
  let timeId: ReturnType<typeof setTimeout> | undefined = undefined;

  function timeExpired() {
    lastCallTime = options.leading === false ? 0 : Date.now();
    timeId = undefined;
    result = func.apply(lastThis, lastArgs);
    lastArgs = lastThis = undefined;
  }

  function throttled(...args: T) {
    lastArgs = args;
    lastThis = this as ThisType<typeof func> | undefined;
    if (options.leading === false && lastCallTime === 0) {
      lastCallTime = Date.now();
    }

    const now = Date.now();
    const remindTime = wait - (now - lastCallTime);
    // remindTime > wait 是为了处理系统时间异常的情况 正常情况下不会发生
    // leading 情况
    if (remindTime <= 0 || remindTime > wait) {
      if (timeId) {
        clearTimeout(timeId);
        timeId = undefined;
      }
      result = func.apply(lastThis, lastArgs);
      lastArgs = lastThis = undefined;
      lastCallTime = now;
    }
    // trailing 情况
    else if (!timeId && options.trailing !== false) {
      timeId = setTimeout(timeExpired, remindTime);
    }

    return result;
  }

  throttled.cancel = () => {
    clearTimeout(timeId);
    lastArgs = lastThis = timeId = undefined;
    lastCallTime = 0;
  };

  return throttled;
}
