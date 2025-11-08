export const debounce = <T extends unknown[], R>(
  fn: (...args: T) => R,
  wait: number,
  options: { leading?: boolean; trailing?: boolean } = { leading: false, trailing: true }
) => {
  let timeId: undefined | ReturnType<typeof setTimeout>,
    lastArgs: undefined | T,
    lastThis: undefined | ThisType<typeof fn>,
    result: R | undefined,
    lastCallTime: number = 0;

  function shouldInvoke(time: number) {
    return wait - (time - lastCallTime) <= 0;
  }

  function invokeFunc() {
    result = fn.apply(lastThis, lastArgs);
    lastArgs = lastThis = undefined;
    lastCallTime = 0;
    return result;
  }

  function timeExpired() {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return invokeTrailing();
    }

    timeId = setTimeout(timeExpired, remainWaitTime());
  }

  function remainWaitTime() {
    return wait - (Date.now() - lastCallTime);
  }

  function invokeTrailing() {
    timeId = undefined;
    if (options.trailing && lastArgs) {
      return invokeFunc();
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function invokeLeading() {
    timeId = setTimeout(timeExpired, wait);
    return options.leading ? invokeFunc() : result;
  }

  function debounced(...args: T) {
    lastArgs = args;
    lastThis = this as ThisType<typeof debounced>;
    const isInvoking = shouldInvoke(Date.now());
    lastCallTime = Date.now();
    if (isInvoking && timeId == undefined) {
      return invokeLeading();
    }
    return result;
  }

  return debounced;
};
