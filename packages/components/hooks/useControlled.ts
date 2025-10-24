import { upperFirst } from "lodash-es";
import React from "react";
type DefaultOptions<T extends string> = `default${Capitalize<T>}`;
export interface ChangeHander<T, P extends unknown[]> {
  (value: T, ...args: P): void;
}
type ToString<T extends string | number | symbol> = T extends string ? T : `${Extract<T, number>}`;
const useControlled: <P extends unknown[], R extends object, K extends keyof R>(
  props: R,
  valueKey: K,
  onChange: ChangeHander<R[K], P>,
  defaultOptions?: { [key in DefaultOptions<ToString<K>>]: R[K] }
) => [R[K], ChangeHander<R[K], P>] = (
  props,
  valueKey, // 默认受控属性为 value
  onChange,
  defaultOptions = {}
) => {
  const isControlled = Reflect.has(props, valueKey);
  // 受控属性
  const value = props[valueKey];

  // 默认值
  const defaultKey = `default${upperFirst(valueKey as string)}`;
  const defaultValue = defaultOptions[defaultKey as keyof typeof defaultOptions] || props[defaultKey];

  const [internalValue, setInternalValue] = React.useState(defaultValue);

  if (isControlled) return [value, onChange || (() => {})];
  return [
    internalValue,
    (newValue, ...args) => {
      setInternalValue(newValue);
      onChange?.(newValue, ...args);
    }
  ];
};

export default useControlled;
