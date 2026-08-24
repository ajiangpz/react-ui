import { act, renderHook } from "@testing-library/react";
import { vi } from "vitest";
import useControlled from "../useControlled";

type BooleanProps = {
  value?: boolean;
  defaultValue?: boolean;
};

describe("useControlled", () => {
  it("preserves falsy values from defaultOptions", () => {
    const props: BooleanProps = { defaultValue: true };

    const { result } = renderHook(() =>
      useControlled<[], BooleanProps, "value">(props, "value", undefined, {
        defaultValue: false
      })
    );

    expect(result.current[0]).toBe(false);
  });

  it("updates internal state and calls onChange in uncontrolled mode", () => {
    const props: BooleanProps = { defaultValue: false };
    const onChange = vi.fn();

    const { result } = renderHook(() => useControlled<[], BooleanProps, "value">(props, "value", onChange));

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("keeps the prop value as the source of truth in controlled mode", () => {
    const props: BooleanProps = { value: false, defaultValue: true };
    const onChange = vi.fn();

    const { result } = renderHook(() => useControlled<[], BooleanProps, "value">(props, "value", onChange));

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toBe(false);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
