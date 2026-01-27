declare module "react-transition-group" {
  import { ReactNode, RefObject } from "react";

  export interface CSSTransitionProps {
    in?: boolean;
    timeout?: number | { appear?: number; enter?: number; exit?: number };
    classNames?: string | {
      appear?: string;
      appearActive?: string;
      appearDone?: string;
      enter?: string;
      enterActive?: string;
      enterDone?: string;
      exit?: string;
      exitActive?: string;
      exitDone?: string;
    };
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    nodeRef?: RefObject<HTMLElement>;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
    onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
    onExit?: (node: HTMLElement) => void;
    onExiting?: (node: HTMLElement) => void;
    onExited?: (node: HTMLElement) => void;
    children?: ReactNode;
  }

  export class CSSTransition extends React.Component<CSSTransitionProps> {}
}

