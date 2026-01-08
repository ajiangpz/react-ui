import React, { forwardRef, useImperativeHandle, useRef, ForwardedRef } from "react";
import {
  IconChevronDown as TdChevronDownIcon,
  IconMinusStroked as TdRemoveIcon,
  IconChevronUp as TdChevronUpIcon,
  IconPlus as TdAddIcon
} from "@tendaui/icons";
import classNames from "classnames";
import Input from "../input";
import Button from "../button";
import useInputNumber from "./useInputNumber";
import useGlobalIcon from "../hooks/useGlobalIcon";
import { inputNumberDefaultProps } from "./defaultProps";
import { InputNumberValue, TdInputNumberProps } from "./type";
import { StyledProps } from "../common";
import useDefaultProps from "../hooks/useDefaultProps";

export interface InputNumberProps<T = InputNumberValue> extends TdInputNumberProps<T>, StyledProps {}

export interface InputNumberRef {
  currentElement: ForwardedRef<HTMLDivElement>;
  inputElement: ForwardedRef<HTMLDivElement>;
}

// https://fettblog.eu/typescript-react-generic-forward-refs/
function TdInputNumber<T extends InputNumberValue = InputNumberValue>(
  originalProps: InputNumberProps<T>,
  ref: ForwardedRef<InputNumberRef>
) {
  const { ChevronDownIcon, RemoveIcon, ChevronUpIcon, AddIcon } = useGlobalIcon({
    ChevronDownIcon: TdChevronDownIcon,
    RemoveIcon: TdRemoveIcon,
    ChevronUpIcon: TdChevronUpIcon,
    AddIcon: TdAddIcon
  });
  const props = useDefaultProps<InputNumberProps<T>>(
    originalProps,
    inputNumberDefaultProps as Partial<InputNumberProps<T>>
  );
  const {
    classPrefix,
    wrapClasses,
    addClasses,
    reduceClasses,
    listeners,
    isError,
    inputRef,
    userInput,
    handleAdd,
    handleReduce,
    onInnerInputChange
  } = useInputNumber(props);

  const wrapRef = useRef(null);

  const status = isError ? "error" : props.status;
  const iconSize = props.size === "medium" ? "default" : props.size;
  const addIcon =
    props.theme === "column" ? <ChevronUpIcon size={iconSize as any} /> : <AddIcon size={iconSize as any} />;
  const reduceIcon =
    props.theme === "column" ? <ChevronDownIcon size={iconSize as any} /> : <RemoveIcon size={iconSize as any} />;

  useImperativeHandle(ref, () => ({
    currentElement: wrapRef.current,
    inputElement: inputRef.current
  }));

  return (
    <div className={classNames(wrapClasses, props.className)} style={props.style} ref={wrapRef}>
      {props.theme !== "normal" && (
        <Button
          className={reduceClasses}
          disabled={props.disabled}
          onClick={handleReduce}
          variant="outline"
          shape="square"
          icon={reduceIcon}
        />
      )}
      <Input
        ref={inputRef}
        autocomplete="off"
        disabled={props.disabled}
        readonly={props.readonly}
        placeholder={props.placeholder}
        autoWidth={props.autoWidth}
        align={props.align || (props.theme === "row" ? "center" : undefined)}
        status={status}
        label={props.label}
        suffix={props.suffix}
        value={userInput}
        onChange={onInnerInputChange}
        size={props.size}
        {...listeners}
        {...(props.inputProps || {})}
      />
      {props.theme !== "normal" && (
        <Button
          className={addClasses}
          disabled={props.disabled}
          onClick={handleAdd}
          variant="outline"
          shape="square"
          icon={addIcon}
        />
      )}
      {props.tips && (
        <div className={classNames(`${classPrefix}-input__tips`, `${classPrefix}-input__tips--${status}`)}>
          {props.tips}
        </div>
      )}
    </div>
  );
}

export type InputNumberOuterForwardRef = {
  <T>(props: InputNumberProps<T> & { ref?: ForwardedRef<InputNumberRef> }): ReturnType<typeof TdInputNumber>;
} & React.ForwardRefExoticComponent<InputNumberProps>;

const InputNumber = forwardRef<InputNumberRef, InputNumberProps<InputNumberValue>>(TdInputNumber);

InputNumber.displayName = "InputNumber";

export default InputNumber;
