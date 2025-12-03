import React, { useRef, useEffect } from "react";
import { throttle } from "lodash-es";
import { Color, getColorFormatInputs, getColorFormatMap } from "../../../utils/color-picker";
import type { TdColorFormatProps } from ".";
import Input from "../../../../input";
import InputNumber from "../../../../input-number";

const FormatInputs = (props: TdColorFormatProps) => {
  const { format, enableAlpha, inputProps, disabled, onInputChange, color } = props;
  const modelValueRef = useRef<Record<string, number | string>>({});
  const lastModelValue = useRef<Record<string, number | string>>({});
  const inputKey = useRef<number>(0);

  const updateModelValue = () => {
    const value = getColorFormatMap(color, "encode")[format];
    if (!value) return;

    if (enableAlpha) {
      value.a = Math.round(color.alpha * 100);
    }

    const changedFormatValue: Record<string, number | string> = {};
    Object.keys(value).forEach((key) => {
      if (value[key] !== modelValueRef.current[key]) {
        changedFormatValue[key] = value[key];
      }
      lastModelValue.current[key] = value[key];
    });

    if (Object.keys(changedFormatValue).length > 0) {
      modelValueRef.current = value;
    }
  };

  const handleInputChange = (key: string, v: number | string, max: number) => {
    inputKey.current = performance.now();

    if (v.toString().trim() === "") {
      const lastValue = lastModelValue.current[key];
      color.update(lastValue as string);
      onInputChange();
      return;
    }

    if (!v || v === lastModelValue.current[key] || Number(v) < 0 || Number(v) > max) return;
    lastModelValue.current[key] = v;

    const newFormatValue = {
      ...modelValueRef.current,
      [key]: v
    };
    modelValueRef.current = newFormatValue;
    if (key === "a") {
      color.alpha = (v as number) / 100;
    } else if (key === "hex" || key === "css") {
      color.update(v as string);
    } else {
      color.update(Color.object2color(newFormatValue, format));
    }
    onInputChange();
  };

  updateModelValue();
  useEffect(() => {
    const throttleUpdate = throttle(updateModelValue, 100);
    throttleUpdate();
    return () => throttleUpdate.cancel();
  }, [color.saturation, color.hue, color.value, color.alpha, format]);

  return (
    <div className="input-group">
      {getColorFormatInputs(format, enableAlpha).map((config) => {
        const currentValue = modelValueRef.current[config.key];
        const commonProps = {
          ...inputProps,
          disabled,
          title: currentValue,
          align: "center" as const,
          size: "small" as const,
          onBlur: (v: string) => handleInputChange(config.key, v, config.max),
          onEnter: (v: string) => handleInputChange(config.key, v, config.max)
        };

        return (
          <div
            className="input-group__item"
            key={config.key}
            style={{
              flex: config.flex || 1
            }}
          >
            {config.type === "input" ? (
              <Input
                {...commonProps}
                defaultValue={currentValue as string}
                key={`${inputKey.current}-${currentValue}`}
                maxlength={format === "HEX" ? 9 : undefined}
              />
            ) : (
              <InputNumber
                {...commonProps}
                min={config.min}
                max={config.max}
                format={config.format as (value: number) => string}
                step={1}
                value={currentValue as number}
                onChange={(v) => handleInputChange(config.key, v ?? (config.min as number), config.max)}
                theme="normal"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(FormatInputs);
