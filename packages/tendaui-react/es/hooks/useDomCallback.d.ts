export default function useDomRefCallback<T extends HTMLElement>(): readonly [T, (dom: T | null) => void];
