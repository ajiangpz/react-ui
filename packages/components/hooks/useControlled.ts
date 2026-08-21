import { upperFirst } from "lodash-es";
import React from "react";

type DefaultOptions<T extends string> = `default${Capitalize<T>}`;

export interface ChangeHandler<T, P extends unknown[]> {
  (value: T, ...args: P): void;
}

type ToString<T extends string | number | symbol> = T extends string ? T : `${Extract<T, number>}`;

export default function useControlled<P extends unknown[], R extends object, K extends keyof R>(
  props: R,
  valueKey: K,
  onChange?: ChangeHandler<R[K], P>,
  defaultOptions: { [key in DefaultOptions<ToString<K>>]: R[K] } = {} as {
    [key in DefaultOptions<ToString<K>>]: R[K];
  }
): [R[K], ChangeHandler<R[K], P>] {
  const isControlled = Reflect.has(props, valueKey);
  const value = props[valueKey];

  const defaultKey = `default${upperFirst(valueKey as string)}` as DefaultOptions<ToString<K>>;
  const defaultValue = defaultOptions[defaultKey] ?? (props[defaultKey as keyof R] as R[K]);
  const [internalValue, setInternalValue] = React.useState<R[K]>(defaultValue);

  const triggerChange = React.useCallback<ChangeHandler<R[K], P>>(
    (newValue, ...args) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue, ...args);
    },
    [isControlled, onChange]
  );

  return [isControlled ? value : internalValue, triggerChange];
}
