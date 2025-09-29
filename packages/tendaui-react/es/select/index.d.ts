import './style/index.js';
export type { SelectProps } from './Select';
export * from './type';
export declare const Select: import("react").FunctionComponent<import("./Select").SelectProps<import("./type").SelectOption> & import("react").RefAttributes<HTMLDivElement>> & {
    Option: import("react").FC<import("./Option").SelectOptionProps>;
    OptionGroup: import("react").FC<import("./OptionGroup").SelectGOptionGroupProps>;
};
export default Select;
