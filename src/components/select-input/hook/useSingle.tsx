import React, { useRef, MouseEvent } from 'react';
import { isObject, pick } from 'lodash-es';
import classNames from 'classnames';
import { SelectInputCommonProperties } from '../interface';
import { TdSelectInputProps } from '../type';
import Input, { InputProps, InputRef, TdInputProps } from '../../input';
import useControlled from '../../hooks/useControlled';

export interface RenderSelectSingleInputParams {
  tPlaceholder: string;
}

// single 和 multiple 共有特性
const COMMON_PROPERTIES = [
  'status',
  'clearable',
  'disabled',
  'label',
  'placeholder',
  'readonly',
  'suffix',
  'suffixIcon',
  'onPaste',
  'onEnter',
  'onMouseenter',
  'onMouseleave',
  'size',
  'prefixIcon',
];

const DEFAULT_KEYS: TdSelectInputProps['keys'] = {
  label: 'label',
  value: 'value',
};

function getInputValue(
  value: TdSelectInputProps['value'],
  keys: TdSelectInputProps['keys'],
) {
  const iKeys = keys || DEFAULT_KEYS;
  return isObject(value) ? value[iKeys.label] : value;
}

export default function useSingle(props: TdSelectInputProps) {
  const { value, keys } = props;
  const inputRef = useRef<InputRef>(null);
  const [inputValue, setInputValue] = useControlled(
    props,
    'inputValue',
    props.onInputChange,
  );
  const commonInputProps: SelectInputCommonProperties = {
    ...pick(props, COMMON_PROPERTIES),
    suffixIcon: props.suffixIcon,
  };

  const onInnerClear = (context: { e: MouseEvent<SVGSVGElement> }) => {
    context?.e?.stopPropagation();
    props.onClear?.(context);
    setInputValue('', { trigger: 'clear' });
  };

  const onInnerInputChange: TdInputProps['onChange'] = (value, context) => {
    if (props.allowInput) {
      setInputValue(value, { ...context, trigger: 'input' });
    }
  };

  const handleEmptyPanelBlur = (
    value: string,
    { e }: { e: React.FocusEvent<HTMLInputElement> },
  ) => {
    props.onBlur?.(value, { e, inputValue: value });
  };

  const renderSelectSingle = (popupVisible: boolean) => {
    const singleValueDisplay = !props.multiple ? props.valueDisplay : null;
    const displayedValue =
      popupVisible && props.allowInput
        ? inputValue
        : getInputValue(value, keys);
    return (
      <Input
        ref={inputRef}
        {...(commonInputProps as InputProps)}
        autoWidth={props.autoWidth}
        placeholder={props.placeholder}
        value={singleValueDisplay ? ' ' : displayedValue}
        label={
          (props.label || singleValueDisplay) && (
            <>
              {props.label}
              {singleValueDisplay as React.ReactNode}
            </>
          )
        }
        onChange={onInnerInputChange}
        onClear={onInnerClear}
        // [Important Info]: SelectInput.blur is not equal to Input, example: click popup panel
        onFocus={(val, context) => {
          props.onFocus?.(value, { ...context, inputValue: val });
          // focus might not need to change input value. it will caught some curious errors in tree-select
          // !popupVisible && setInputValue(getInputValue(value, keys), { ...context, trigger: 'input' });
        }}
        onEnter={(val, context) => {
          props.onEnter?.(value, { ...context, inputValue: val });
        }}
        // onBlur need to triggered by input when popup panel is null
        onBlur={!props.panel ? handleEmptyPanelBlur : null}
        {...props.inputProps}
        inputClass={classNames(props.inputProps?.className, {
          [`t-input--focused`]: popupVisible,
          [`t-is-focused`]: popupVisible,
        })}
      ></Input>
    );
  };
  return {
    inputRef,
    commonInputProps,
    singleInputValue: inputValue,
    onInnerClear,
    renderSelectSingle,
  };
}
