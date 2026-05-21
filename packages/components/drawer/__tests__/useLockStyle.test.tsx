import React from "react";
import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useLockStyle } from "../hooks/useLockStyle";

function LockStyleTest(props: { visible: boolean }) {
  useLockStyle(props);
  return null;
}

describe("useLockStyle", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("does not throw when clearing before a style element exists", () => {
    vi.useFakeTimers();

    render(<LockStyleTest visible={false} />);

    expect(() => {
      vi.runOnlyPendingTimers();
    }).not.toThrow();
  });
});
