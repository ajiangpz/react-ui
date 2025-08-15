import { canUseDocument } from '@/utils/dom';
export const getCssVarsValue = (name: string, element?: HTMLElement) => {
  if (!canUseDocument) return;

  const el = element || document.documentElement;
  return getComputedStyle(el).getPropertyValue(name);
};
