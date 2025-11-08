function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;

  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  // time 表示调用 debounced 的时间
  function invokeFunc(time) {
    // 记录上一次的参数和this
    var args = lastArgs,
      thisArg = lastThis;
    // 重置参数
    lastArgs = lastThis = undefined;
    // 更新执行时间
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    // 如果是 leading 则重新执行 否则返回上次的结果
    return leading ? invokeFunc(time) : result;
  }

  // 剩余等待时间
  function remainingWait(time) {
    // 调用时间差
    var timeSinceLastCall = time - lastCallTime,
      // // 执行时间差
      // timeSinceLastInvoke = time - lastInvokeTime,
      // 等待时间 和 两次调用时间 差
      timeWaiting = wait - timeSinceLastCall;

    // return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    return timeWaiting;
  }

  // 是否要执行Fn
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime;
    // timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (
      lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0
      //  ||
      // (maxing && timeSinceLastInvoke >= maxWait)
    );
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }

    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);

    // 每次执行都需要更新最新参数和调用时间
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      // if (maxing) {
      //   // Handle invocations in a tight loop.
      //   clearTimeout(timerId);
      //   timerId = setTimeout(timerExpired, wait);
      //   return invokeFunc(lastCallTime);
      // }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
