export function getTokenValue(name: string): string;
export function getThemeMode(): string;
export function setUpModeObserver(handler: (mode: string) => void): MutationObserver;
export function appendStyleSheet(styleId: string): HTMLStyleElement;
export function handleAttach(): HTMLElement;
export function downloadFile(blob: Blob, fileName: string): void;
export function extractRootContent(cssText: string): string;
export function clearLocalItem(storageKey: string, itemKey: string): void;

