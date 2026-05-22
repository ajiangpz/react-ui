import { upperFirst } from "lodash-es";
import React from "react";

type DefaultOptions<T extends string> = `default${Capitalize<T>}`;

export interface ChangeHander<T, P extends unknown[]> {
  (value: T, ...args: P): void;
}

type ToString<T extends string | number | symbol> = T extends string ? T : `${Extract<T, number>}`;

export default function useControlled<P extends unknown[], R extends object, K extends keyof R>(
  props: R,
  valueKey: K,
  onChange: ChangeHander<R[K], P>,
  defaultOptions: { [key in DefaultOptions<ToString<K>>]: R[K] } = {} as {
    [key in DefaultOptions<ToString<K>>]: R[K];
  }
): [R[K], ChangeHander<R[K], P>] {
  const isControlled = Reflect.has(props, valueKey);
  const value = props[valueKey];

  const defaultKey = `default${upperFirst(valueKey as string)}` as DefaultOptions<ToString<K>>;
  const defaultValue = defaultOptions[defaultKey] || (props[defaultKey as keyof R] as R[K]);

  const [internalValue, setInternalValue] = React.useState(defaultValue);

  if (isControlled) return [value, onChange || (() => {})];

  return [
    internalValue,
    (newValue: R[K], ...args: P) => {
      setInternalValue(newValue);
      onChange?.(newValue, ...args);
    }
  ];
}
