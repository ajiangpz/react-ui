type DefaultOptions<T extends string> = `default${Capitalize<T>}`;
export interface ChangeHander<T, P extends any[]> {
    (value: T, ...args: P): void;
}
type ToString<T extends string | number | symbol> = T extends string ? T : `${Extract<T, number>}`;
declare const useControlled: <P extends any[], R extends object, K extends keyof R>(props: R, valueKey: K, onChange: ChangeHander<R[K], P>, defaultOptions?: {
    [key in DefaultOptions<ToString<K>>]: R[K];
}) => [R[K], ChangeHander<R[K], P>];
export default useControlled;
