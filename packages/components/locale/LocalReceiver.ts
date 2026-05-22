import React from "react";
import { t as commonT } from "../global-config/t";
import { ConfigContext, Locale } from "../config-provider";

export interface Placement {
  [propName: string]: string | number;
}

type LocaleFactory<T extends keyof Locale> = () => Locale[T];
type TransformPatternFn = (placement?: Placement | number | Array<Placement>) => string;

export type TransformPattern = string | TransformPatternFn | Array<string> | object;
export type LocaleTransform = {
  (pattern: Array<string>, placement?: Placement | Array<Placement>): Array<string>;
  (pattern: Exclude<TransformPattern, Array<string>>, placement?: Placement): string;
  (pattern: Exclude<TransformPattern, Array<string>>, placement?: number, data?: Placement): string;
};

export function useLocaleReceiver<T extends keyof Locale>(
  componentName: T,
  defaultLocale?: Locale[T] | LocaleFactory<T>
): [Locale[T], LocaleTransform] {
  const { globalConfig } = React.useContext(ConfigContext);

  function transformLocale(pattern: TransformPattern, placement?: Placement | Array<Placement>): string | Array<string>;
  function transformLocale(pattern: TransformPattern, placement?: number, data?: Placement): string | Array<string>;
  function transformLocale(
    pattern: TransformPattern,
    ...args: [placement?: Placement | Array<Placement>] | [placement?: number, data?: Placement]
  ): string | Array<string> {
    const REGEXP = /\{\s*([\w-]+)\s*\}/g;
    const placement = args[0];

    if (Array.isArray(pattern)) {
      return pattern.map((p, index) =>
        p.replace(REGEXP, (_: string, key: string) => {
          if (Array.isArray(placement)) return String(placement[index]?.[key] ?? "");
          if (placement && typeof placement === "object") return String(placement[key] ?? "");
          return "";
        })
      );
    }
    if (typeof pattern === "function") {
      return pattern(placement);
    }
    if (typeof pattern !== "string") {
      return commonT(pattern);
    }

    // use commonT for plural
    const normalizedPlacement = Array.isArray(placement) ? undefined : placement;
    const data = typeof normalizedPlacement === "number" ? args[1] : undefined;
    if (data && typeof normalizedPlacement === "number") {
      return commonT(pattern, normalizedPlacement, data);
    }
    if (typeof normalizedPlacement === "number") {
      return commonT(pattern, normalizedPlacement);
    }
    if (normalizedPlacement) {
      return commonT(pattern, normalizedPlacement);
    }
    return commonT(pattern);
  }

  const componentLocale = React.useMemo<Locale[T]>(() => {
    const locale = defaultLocale || {};
    const connectLocaleByName = globalConfig[componentName];

    const localeFromContext = componentName && globalConfig ? connectLocaleByName : {};

    return {
      ...(typeof locale === "function" ? locale() : locale),
      ...(localeFromContext || {})
    };
  }, [componentName, defaultLocale, globalConfig]);

  return [componentLocale, transformLocale as LocaleTransform];
}
