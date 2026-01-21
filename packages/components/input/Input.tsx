import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import classNames from "classnames";
import { IconEyeOpened, IconEyeClosed, IconClose } from "@tendaui/icons";
import { TdInputProps } from "./type";
import useLayoutEffect from "../hooks/useLayoutEffect";
import useControlled from "../hooks/useControlled";
import { inputDefaultProps } from "./defaultProps";
import parseTNode from "../utils/parseTNode";
import useDefaultProps from "../hooks/useDefaultProps";
import { StyledProps, TNode, TElement } from "../common";
import { isFunction } from "lodash-es";
import useConfig from "../hooks/useConfig";
export interface InputProps extends TdInputProps, StyledProps {
  showInput?: boolean; // 控制透传readonly同时是否展示input 默认保留 因为正常Input需要撑开宽度
  keepWrapperWidth?: boolean; // 控制透传autoWidth之后是否容器宽度也自适应 多选等组件需要用到自适应但也需要保留宽度
}

export interface InputRef extends React.RefObject<unknown> {
  currentElement: HTMLDivElement;
  inputElement: HTMLInputElement;
  focus: () => void;
  blur: () => void;
  select: () => void;
}

type InputContextTrigger = "input" | "clear" | "initial";

const renderIcon = (classPrefix: string, type: "prefix" | "suffix", icon: TNode | TElement) => {
  const result = parseTNode(icon);

  const iconClassName = icon ? `${classPrefix}-input__${type}-icon` : "";

  return result ? <span className={`${classPrefix}-input__${type} ${iconClassName}`}>{result}</span> : null;
};

const Input = forwardRef<HTMLInputElement, InputProps>((originalProps, ref) => {
  const props = useDefaultProps<InputProps>(originalProps, inputDefaultProps as Partial<InputProps>);
  const { classPrefix } = useConfig();

  const {
    type,
    autoWidth,
    borderless,
    placeholder = "请输入内容",
    disabled,
    size,
    className,
    inputClass,
    style,
    prefixIcon,
    suffixIcon,
    clearable,
    tips,
    align,
    showClearIconOnEmpty,
    autofocus,
    autocomplete,
    readonly,
    label,
    suffix,
    showInput = true,
    keepWrapperWidth,
    allowInput,
    name,
    format,
    onClick,
    onClear,
    onEnter,
    onKeydown,
    onKeyup,
    onKeypress,
    onFocus,
    onBlur,
    onPaste,
    onMouseenter,
    onMouseleave,
    onWheel,
    onCompositionstart,
    onCompositionend,
    onChange: onChangeFromProps,
    ...restProps
  } = props;
  const composingRef = useRef(false);
  const [value, onChange] = useControlled(props, "value", onChangeFromProps);
  const inputRef: React.RefObject<HTMLInputElement | null> = useRef(null);
  const inputPreRef: React.RefObject<HTMLInputElement | null> = useRef(null);
  const wrapperRef: React.RefObject<HTMLDivElement | null> = useRef(null);

  const [isHover, toggleIsHover] = useState(false);
  const [isFocused, toggleIsFocused] = useState(false);
  const [renderType, setRenderType] = useState(type);

  const [composingValue, setComposingValue] = useState<string>("");
  const isInnerInputReadonly = readonly || !allowInput;
  const isValueEnabled = value && !disabled;
  const isShowClearIcon = ((clearable && isValueEnabled) || showClearIconOnEmpty) && isHover;
  let suffixIconNew = suffixIcon;
  if (isShowClearIcon)
    suffixIconNew = (
      <IconClose
        className={`${classPrefix}-input__suffix-clear ${classPrefix}-icon`}
        onMouseDown={handleMouseDown}
        onClick={handleClear}
      />
    );

  if (type === "password" && typeof suffixIcon === "undefined") {
    if (renderType === "password") {
      suffixIconNew = (
        <IconEyeClosed
          className={`${classPrefix}-input__suffix-clear ${classPrefix}-icon`}
          onClick={togglePasswordVisible}
        />
      );
    } else if (renderType === "text") {
      suffixIconNew = (
        <IconEyeOpened
          className={`${classPrefix}-input__suffix-clear ${classPrefix}-icon`}
          onClick={togglePasswordVisible}
        />
      );
    }
  }
  const prefixIconContent = renderIcon("t", "prefix", parseTNode(prefixIcon));
  const suffixIconContent = renderIcon("t", "suffix", parseTNode(suffixIconNew));
  const labelContent = isFunction(label) ? label() : label;
  const suffixContent = isFunction(suffix) ? suffix() : suffix;

  const updateInputWidth = () => {
    if (!autoWidth || !inputRef.current) return;
    const { offsetWidth } = inputPreRef.current as HTMLInputElement;
    const { width } = inputPreRef.current?.getBoundingClientRect() as DOMRect;
    // 异步渲染场景下 getBoundingClientRect 宽度为 0，需要使用 offsetWidth
    const calcWidth = width < offsetWidth ? offsetWidth + 1 : width;
    inputRef.current.style.width = `${calcWidth}px`;
  };

  useLayoutEffect(() => {
    // 推迟到下一帧处理防止异步渲染 input 场景宽度计算为 0
    requestAnimationFrame(() => {
      updateInputWidth();
    });
    // eslint-disable-next-line
  }, [autoWidth, value, placeholder, inputRef, composingValue]);

  // 当元素默认为 display: none 状态，无法提前准确计算宽度，因此需要监听元素宽度变化。比如：Tabs 场景切换。
  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;
    // IE 11 以下使用设置 minWidth 兼容；IE 11 以上使用 ResizeObserver
    if (typeof window.ResizeObserver === "undefined" || !inputRef.current) return;
    resizeObserver = new window.ResizeObserver(() => {
      updateInputWidth();
    });
    resizeObserver.observe(inputRef.current);
    return () => {
      // resizeObserver.unobserve?.(inputRef.current);
      resizeObserver.disconnect?.();
      resizeObserver = null;
    };
    // eslint-disable-next-line
  }, [inputRef]);

  useEffect(() => {
    setRenderType(type);
  }, [type]);

  const innerValue = composingRef.current ? composingValue : value ?? "";
  const formatDisplayValue = format && !isFocused ? format(innerValue) : innerValue;

  const renderInput = (
    <input
      ref={inputRef}
      placeholder={placeholder}
      type={renderType}
      className={classNames(`${classPrefix}-input__inner`, {
        [`${classPrefix}-input--soft-hidden`]: !showInput
      })}
      value={formatDisplayValue}
      readOnly={isInnerInputReadonly}
      disabled={disabled}
      autoComplete={autocomplete}
      autoFocus={autofocus}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onKeyPress={handleKeyPress}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPaste={handlePaste}
      name={name}
    />
  );
  const renderInputNode = (
    <div
      className={classNames(inputClass, `${classPrefix}-input`, {
        [`${classPrefix}-is-readonly`]: readonly,
        [`${classPrefix}-is-disabled`]: disabled,
        [`${classPrefix}-is-focused`]: isFocused,
        [`${classPrefix}-size-s`]: size === "small",
        [`${classPrefix}-size-l`]: size === "large",
        [`${classPrefix}-align-${align}`]: align,
        [`${classPrefix}-inpu${classPrefix}--prefix`]: prefixIcon || labelContent,
        [`${classPrefix}-inpu${classPrefix}--suffix`]: suffixIconContent || suffixContent,
        [`${classPrefix}-inpu${classPrefix}--borderless`]: borderless,
        [`${classPrefix}-input--focused`]: isFocused
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={(e) => onWheel?.({ e })}
      onClick={(e) => {
        inputRef.current?.focus();
        onClick?.({ e });
      }}
    >
      {prefixIconContent}
      {labelContent ? <div className={`${classPrefix}-input__prefix`}>{labelContent}</div> : null}
      {renderInput}
      {autoWidth && (
        <span ref={inputPreRef} className={`${classPrefix}-input__inpu${classPrefix}-pre`}>
          {innerValue || placeholder}
        </span>
      )}
      {suffixContent ? <div className={`${classPrefix}-input__suffix`}>{suffixContent}</div> : null}
      {suffixIconContent}
    </div>
  );
  useLayoutEffect(() => {
    // 推迟到下一帧处理防止异步渲染 input 场景宽度计算为 0
    requestAnimationFrame(() => {
      updateInputWidth();
    });
    // eslint-disable-next-line
  }, [autoWidth, value, placeholder, inputRef, composingValue]);

  function togglePasswordVisible() {
    if (disabled) return;
    // 保存光标位置
    const inputEl = inputRef.current;
    const cursorPosition = inputRef.current?.selectionStart || 0;

    const toggleType = renderType === "password" ? "text" : "password";
    setRenderType(toggleType);

    requestAnimationFrame(() => {
      inputEl?.setSelectionRange(cursorPosition, cursorPosition);
    });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> | React.CompositionEvent<HTMLInputElement>,
    trigger: InputContextTrigger = "input"
  ) {
    let { value: newStr } = e.currentTarget;
    if (composingRef.current) {
      setComposingValue(newStr);
    } else {
      // 完成中文输入时同步一次 composingValue
      setComposingValue(newStr);
      onChange(newStr, { e, trigger });
    }
  }

  // 添加MouseDown阻止冒泡，防止點擊Clear value會導致彈窗閃爍一下
  // https://github.com/Tencent/tdesign-react/issues/2320
  function handleMouseDown(e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) {
    e.stopPropagation();
    // 兼容React16
    e.nativeEvent.stopImmediatePropagation();
  }

  function handleClear(e: React.MouseEvent<HTMLSpanElement>) {
    onChange?.("", { e, trigger: "clear" });
    onClear?.({ e: e as unknown as React.MouseEvent<SVGElement> });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const {
      key,
      currentTarget: { value }
    } = e;
    if (key === "Enter") {
      onEnter?.(value, { e });
    }
    onKeydown?.(value, { e });
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    const {
      currentTarget: { value }
    } = e;
    onKeyup?.(value, { e });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    const {
      currentTarget: { value }
    } = e;
    onKeypress?.(value, { e });
  }

  function handleCompositionStart(e: React.CompositionEvent<HTMLInputElement>) {
    composingRef.current = true;
    const {
      currentTarget: { value }
    } = e;
    onCompositionstart?.(value, { e });
  }

  function handleCompositionEnd(e: React.CompositionEvent<HTMLInputElement>) {
    const {
      currentTarget: { value }
    } = e;
    if (composingRef.current) {
      composingRef.current = false;
      handleChange(e);
    }
    onCompositionend?.(value, { e });
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    if (isInnerInputReadonly) return;
    const {
      currentTarget: { value }
    } = e;
    onFocus?.(value, { e });
    toggleIsFocused(true);
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    if (isInnerInputReadonly) return;
    const {
      currentTarget: { value }
    } = e;
    onBlur?.(value, { e });
    toggleIsFocused(false);
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const clipData = e.clipboardData;
    const pasteValue = clipData?.getData("text/plain");
    onPaste?.({ e, pasteValue });
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    if (!readonly) {
      toggleIsHover(true);
    }
    onMouseenter?.({ e });
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    if (!readonly) {
      toggleIsHover(false);
    }
    onMouseleave?.({ e });
  }

  useImperativeHandle(ref as InputRef, () => ({
    currentElement: wrapperRef.current,
    inputElement: inputRef.current,
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    select: () => inputRef.current?.select()
  }));

  return (
    <div
      ref={wrapperRef}
      style={style}
      className={classNames(`${classPrefix}-input__wrap`, className, {
        [`${classPrefix}-input--auto-width`]: autoWidth && !keepWrapperWidth
      })}
      {...restProps}
    >
      {renderInputNode}
      {tips && <div className={classNames(`${classPrefix}-input__tips`)}>{tips}</div>}
    </div>
  );
});
Input.displayName = "Input";
export default Input;
