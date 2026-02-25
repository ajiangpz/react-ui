import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";
import { Color, getColorObject } from "../utils/color-picker/color";
import { initColorFormat } from "../utils/color-picker/format";
import { Input } from "../../input";
import { TdColorPickerProps } from "../type";
import useClassName from "../hooks/useClassNames";
import { TdColorContext } from "../type";
import noop from "../../utils/noop";
import type { ColorFormat } from "../utils/color-picker/types";

export interface ColorTriggerProps
  extends Pick<
    TdColorPickerProps,
    "disabled" | "inputProps" | "borderless" | "clearable" | "onClear" | "format" | "enableAlpha"
  > {
  value?: string;
  onChange?: (v?: string, context?: TdColorContext) => void;
}

const ColorPickerTrigger = (props: ColorTriggerProps) => {
  const baseClassName = useClassName();
  const {
    disabled = false,
    borderless = false,
    inputProps = { autoWidth: true },
    clearable,
    onClear,
    format = "RGB",
    enableAlpha = false
  } = props;

  // 内部输入状态，用于处理用户输入
  const [inputValue, setInputValue] = useState<string>(props.value || "");

  // 同步外部 value 变化
  useEffect(() => {
    setInputValue(props.value || "");
  }, [props.value]);

  // 处理输入变化（实时更新内部状态）
  const handleInputChange = useCallback((input: string) => {
    setInputValue(input);
  }, []);

  // 处理失焦事件 - 验证并格式化颜色值
  const handleBlur = useCallback(() => {
    if (!inputValue) {
      return;
    }

    // 验证颜色是否有效
    if (Color.isValid(inputValue)) {
      const colorInstance = new Color(inputValue);
      const finalFormat = initColorFormat(format as ColorFormat, enableAlpha);
      const formattedValue = colorInstance.getFormattedColor(finalFormat, enableAlpha);

      // 如果格式化后的值与当前值不同，触发 onChange
      if (formattedValue !== props.value) {
        props.onChange?.(formattedValue, {
          color: getColorObject(colorInstance),
          trigger: "input"
        });
      }
      // 更新显示值为格式化后的值
      setInputValue(formattedValue);
    } else {
      // 如果颜色无效，恢复为之前的有效值
      setInputValue(props.value || "");
    }
  }, [inputValue, props.value, props.onChange, format, enableAlpha]);

  // 处理回车确认
  const handleEnter = useCallback(() => {
    handleBlur();
  }, [handleBlur]);

  return (
    <div className={`${baseClassName}__trigger--default`}>
      <Input
        borderless={borderless}
        clearable={clearable}
        {...inputProps}
        value={inputValue}
        disabled={disabled}
        label={
          <div className={classNames(`${baseClassName}__trigger--default__color`, `${baseClassName}--bg-alpha`)}>
            <span className={"color-inner"} style={{ background: props.value }}></span>
          </div>
        }
        onChange={handleInputChange}
        onBlur={handleBlur}
        onEnter={handleEnter}
        onClear={onClear || noop}
      />
    </div>
  );
};

export default React.memo(ColorPickerTrigger);
