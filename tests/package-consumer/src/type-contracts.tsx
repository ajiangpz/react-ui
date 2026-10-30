import { Button, IPInput } from "@tendaui/react";
import { ThemeGenerator } from "@tendaui/theme-generator";

// @ts-expect-error Invalid public props must not silently become any.
const invalidButton = <Button theme="invalid-theme" />;
// @ts-expect-error IP values are strings.
const invalidIP = <IPInput value={123} />;
// @ts-expect-error Theme generator settings are boolean.
const invalidTheme = <ThemeGenerator showSetting="yes" />;

export { invalidButton, invalidIP, invalidTheme };
