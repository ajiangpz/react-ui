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

  function invokeTrailing() {
    timeId = undefined;
    result = fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = undefined;
    // 将 lastCallTime 设置为 0 则不会进入 leading 分支
    lastCallTime = options.leading === false ? 0 : Date.now();
    return result;
  }

  function throttled(...args: T) {
    const now = Date.now();
    lastArgs = args;
    lastThis = this as ThisType<typeof throttled>;
    if (!lastCallTime && options.leading === false) {
      lastCallTime = now;
    }
    const remindTime = wait - (now - lastCallTime);
    // leading 分支
    if (remindTime > wait || remindTime <= 0) {
      // 立即执行时 先判断有没有正在运行的 trailing 定时器
      if (timeId !== undefined) {
        clearTimeout(timeId);
        timeId = undefined;
      }
      lastCallTime = now;
      result = fn.apply(lastThis, lastArgs);
      lastArgs = lastThis = undefined;
    }
    // trailing 分支
    else if (options.trailing !== false && timeId !== undefined) {
      // 重新设置 trailing 定时器
      timeId = setTimeout(invokeTrailing, remindTime);
    }
    return result;
  }

  return throttled;
};
