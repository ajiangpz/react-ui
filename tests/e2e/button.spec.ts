import { test, expect } from "@playwright/test";

test("button page renders primary button", async ({ page }) => {
  await page.goto("/components/button");

  await expect(page.getByText("Button 按钮")).toBeVisible();
  await expect(page.getByRole("heading", { name: "基础按钮" }).first()).toBeVisible();

  const primaryButton = page.getByRole("button", { name: "Primary" });
  await expect(primaryButton).toBeVisible();
  await expect(primaryButton).toBeEnabled();
  await expect(primaryButton).toHaveClass(/t-button/);
  await expect(primaryButton).toHaveClass(/t-button--theme-primary/);
  await expect(primaryButton).toHaveClass(/t-button--variant-base/);
  await expect(primaryButton.locator(".t-button__text")).toHaveText("Primary");
  await primaryButton.click();
  await expect(page).toHaveURL(/\/components\/button/);
});
