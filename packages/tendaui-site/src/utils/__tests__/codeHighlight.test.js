import { describe, expect, it } from "vitest";
import { highlightCode, resolveLanguage } from "../codeHighlight";

describe("codeHighlight", () => {
  it("highlights TSX source with Prism token markup", () => {
    const html = highlightCode("const demo = <Checkbox checked />;", "tsx");

    expect(html).toContain("token");
    expect(html).toContain("Checkbox");
  });

  it("escapes unsupported languages instead of returning raw HTML", () => {
    const html = highlightCode("<script>alert(1)</script>", "unknown-language");

    expect(html).toBe("&lt;script>alert(1)&lt;/script>");
  });

  it("normalizes common language aliases", () => {
    expect(resolveLanguage("ts")).toBe("typescript");
    expect(resolveLanguage("tsx")).toBe("tsx");
  });
});
