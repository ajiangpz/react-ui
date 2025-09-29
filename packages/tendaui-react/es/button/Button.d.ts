import React from "react";
import { TdButtonProps } from "./type";
export interface ButtonProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'content' | 'shape' | 'size' | 'type' | 'children'>, TdButtonProps {
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>;
export default Button;
