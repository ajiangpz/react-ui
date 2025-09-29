import React from 'react';
import { TdSelectProps, SelectOption } from './type';
import { StyledProps } from '../common';
export interface SelectProps<T = SelectOption> extends TdSelectProps<T>, StyledProps {
    children?: React.ReactNode;
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
declare const Select: React.FunctionComponent<SelectProps<SelectOption> & React.RefAttributes<HTMLDivElement>> & {
    Option: React.FC<import("./Option").SelectOptionProps>;
    OptionGroup: React.FC<import("./OptionGroup").SelectGOptionGroupProps>;
};
export default Select;
