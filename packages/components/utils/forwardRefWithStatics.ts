import React, { RefAttributes, forwardRef } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

export default function forwardRefWithStatics<P, T = HTMLElement, S = Record<string, unknown>>(
  component: React.ForwardRefRenderFunction<T, P>,
  statics?: S
): React.FunctionComponent<P & RefAttributes<T>> & S {
  const forwarded = forwardRef(
    component as unknown as React.ForwardRefRenderFunction<T, React.PropsWithoutRef<P>>
  );
  return hoistNonReactStatics(forwarded, statics ?? {}) as React.FunctionComponent<P & RefAttributes<T>> & S;
}
