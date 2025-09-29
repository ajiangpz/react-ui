import React from 'react';
import { TdInputProps } from './type';
import { StyledProps } from '../common';
export interface InputProps extends TdInputProps, StyledProps {
    showInput?: boolean;
    keepWrapperWidth?: boolean;
}
export interface InputRef extends React.RefObject<unknown> {
    currentElement: HTMLDivElement;
    inputElement: HTMLInputElement;
    focus: () => void;
    blur: () => void;
    select: () => void;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
