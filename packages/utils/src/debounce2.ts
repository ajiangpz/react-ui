export const debounce = <T extends unknown[], R>(
  func: (...args: T) => R,
  wait: number,
  leading: boolean = false,
  trailing: boolean = true
) => {
  let timeId: ReturnType<typeof setTimeout> | undefined;
  let lastArgs: T | undefined;
  let lastThis: ThisType<typeof func> | undefined;
  let result: R | undefined;
  let lastCallTime: number = 0;

  function shouldInvoke(now: number) {
    const timeSinceLastCall = now - lastCallTime;
    return timeSinceLastCall >= wait;
  }

  function leadingEdge() {
    timeId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc() : result;
  }

  function timerExpired() {
    const time = Date.now();
    // 如果触发了一次之后,后续又继续触发,则 lastCallTime 更新为当前时间, 所以 shouldInvoke 为 false, 不会执行 trailingEdge
    if (shouldInvoke(time)) {
      return trailingEdge();
    }
    timeId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge() {
    timeId = undefined;
    // 如果leading是true,在第一次点击时,会执行invokeFunc,重置lastArgs lastThis 为 undefined
    // 所以如果只点了一次,这里是不会执行的 这就是这里判断 trailing && lastArgs 的原因
    // 那么如果点了多次,那么lastArgs 不为 undefined, 这里会执行invokeFunc
    if (trailing && lastArgs) {
      return invokeFunc();
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function remainingWait(time: number) {
    const timeSinceLastCall = time - lastCallTime;
    return wait - timeSinceLastCall;
  }

  function invokeFunc() {
    result = func.apply(lastThis, lastArgs);
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timeId !== undefined) {
      clearTimeout(timeId);
    }
    lastArgs = lastThis = undefined;
    lastCallTime = 0;
    result = undefined;
  }

  const debounced = function (...args: T) {
    const time = Date.now();
    // 判断是否间隔了wait时间, 如果间隔了wait时间没有调用, 则说明要执行 leadingEdge 函数
    const isInvoking = shouldInvoke(time);
    lastArgs = args;
    lastThis = this as ThisType<typeof func>;
    lastCallTime = time;

    // 如果 timeId 为 undefined, 则说明当前没有定时器, 则 leadingEdge 函数
    if (isInvoking && timeId === undefined) {
      return leadingEdge();
    }

    return result;
  };
  debounced.cancel = cancel;
  return debounced;
};
