import { useLayoutEffect, useEffect } from "react";
import { canUseDocument } from "../utils/dom";
// 兼容 SSR 环境
// 在浏览器环境中使用 useLayoutEffect，否则使用 useEffect
const useIsomorphicLayoutEffect = canUseDocument ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
