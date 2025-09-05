import { camelCase } from 'lodash-es';

export function omit(obj: object, fields: string[]): object {
  const shallowCopy = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

export function removeEmptyAttrs<T>(obj: T): Partial<T> {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] !== 'undefined' || obj[key] === null) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}

export function getTabElementByValue(tabs: [] = [], value: string): object {
  const [result] = tabs.filter((item) => {
    const { id } = item as any;
    return id === value;
  });
  return result || null;
}

export function firstUpperCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/( |^)[a-z]/g, (char: string) => char.toUpperCase());
}

export type Gradients = { [percent: string]: string };
export type FromTo = { from: string; to: string };
export type LinearGradient = { direction?: string } & (Gradients | FromTo);
export function getBackgroundColor(
  color: string | string[] | LinearGradient,
): string {
  if (typeof color === 'string') {
    return color;
  }
  if (Array.isArray(color)) {
    if (color[0] && color[0][0] === '#') {
      color.unshift('90deg');
    }
    return `linear-gradient( ${color.join(',')} )`;
  }
  const { from, to, direction = 'to right', ...rest } = color;
  let keys = Object.keys(rest);
  if (keys.length) {
    keys = keys.sort(
      (a, b) =>
        parseFloat(a.substr(0, a.length - 1)) -
        parseFloat(b.substr(0, b.length - 1)),
    );
    const tempArr = keys.map((key: any) => `${rest[key]} ${key}`);
    return `linear-gradient(${direction}, ${tempArr.join(',')})`;
  }
  return `linear-gradient(${direction}, ${from}, ${to})`;
}

// keyboard-event => onKeyboardEvent
export function getPropsApiByEvent(eventName: string) {
  return camelCase(`on-${eventName}`);
}

/**
 * 兼容样式中支持 number/string 类型的传值 得出最后的结果。
 * @param param number 或 string 类型的可用于样式上的值
 * @returns 可使用的样式值。
 */
export function pxCompat(param: string | number) {
  return typeof param === 'number' ? `${param}px` : param;
}

/**
 * 获取元素相对于容器(祖先)的偏移量
 * @param element 目标元素
 * @param container 容器元素
 * @returns 相对于容器的偏移量
 */
export function getOffsetTopToContainer(
  element: HTMLElement,
  container: HTMLElement,
) {
  let { offsetTop } = element;

  let current = element.offsetParent as HTMLElement;
  while (current && current !== container) {
    offsetTop += current.offsetTop;
    current = current.offsetParent as HTMLElement;
  }
  return offsetTop;
}

export function getIEVersion() {
  if (typeof navigator === 'undefined' || !navigator)
    return Number.MAX_SAFE_INTEGER;

  const { userAgent } = navigator;
  // 判断是否IE<11浏览器
  const isIE =
    userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否IE11浏览器
  const isIE11 =
    userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    const match = userAgent.match(reIE);
    if (!match) return -1;
    const fIEVersion = parseFloat(match[1]);
    return fIEVersion < 7 ? 6 : fIEVersion;
  }
  if (isIE11) {
    // IE11
    return 11;
  }
  // 不是ie浏览器
  return Number.MAX_SAFE_INTEGER;
}
