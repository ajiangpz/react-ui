import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlatform() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return 'android';
  }
  if (/iphone|ipad|ipod/i.test(ua)) {
    return 'ios';
  }
  return 'unknown';
} 