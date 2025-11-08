function debounce<T extends unknown[], R>(func: (...args: T) => R, wait: number, immediate: boolean = false) {
  let timeId: ReturnType<typeof setTimeout> | undefined = undefined;
  let result: R | undefined = undefined;
  function debounced(...args: T) {
    const callNow = immediate && timeId === undefined;
    if (timeId !== undefined) {
      clearTimeout(timeId);
    }
    if (callNow) {
      result = func.apply(this, args);
    }
    timeId = setTimeout(() => {
      if (!immediate) {
        result = func.apply(this, args);
      }
      timeId = undefined;
    }, wait);
    return result;
  }
  return debounced;
}

export default debounce;
