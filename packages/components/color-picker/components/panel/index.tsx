import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import {
  Color,
  DEFAULT_COLOR,
  DEFAULT_SYSTEM_SWATCH_COLORS,
  getColorObject,
  initColorFormat,
  type ColorFormat
} from "../../utils/color-picker/index";
import useCommonClassName from "../../../hooks/useCommonClassName";
import useControlled from "../../../hooks/useControlled";
import useDefaultProps from "../../../hooks/useDefaultProps";
import { useLocaleReceiver } from "../../../locale/LocalReceiver";
import { colorPickerDefaultProps } from "../../defaultProps";
import useClassName from "../../hooks/useClassNames";
import type { ColorPickerProps, TdColorSaturationData } from "../../type";
import type { ColorPickerChangeTrigger } from "../../type";
import AlphaSlider from "./alpha";
import HueSlider from "./hue";
import SaturationPanel from "./saturation";
import SwatchesPanel from "./swatches";
import FormatPanel from "./format";

const Panel = forwardRef<HTMLDivElement, ColorPickerProps>((props, ref) => {
  const baseClassName = useClassName();
  const { STATUS } = useCommonClassName();
  const [local, t] = useLocaleReceiver("colorPicker");
  const {
    className,
    disabled,
    enableAlpha,
    format,
    style,
    swatchColors,
    showPrimaryColorPreview,
    inputProps,
    selectInputProps,
    onChange,
    onPaletteBarChange
  } = useDefaultProps(props, colorPickerDefaultProps);
  const [innerValue, setInnerValue] = useControlled(props, "value", onChange);

  const [, setUpdateId] = useState(0); // 确保 UI 同步更新

  const defaultEmptyColor = DEFAULT_COLOR;

  const colorInstanceRef = useRef<Color>(new Color(innerValue || defaultEmptyColor));
  const formatRef = useRef<ColorFormat>(initColorFormat(format, enableAlpha));

  const baseProps = {
    color: colorInstanceRef.current,
    disabled,
    baseClassName
  };

  const updateColor = (value: string) => {
    colorInstanceRef.current.update(value);
    setUpdateId(window.performance.now());
  };

  const emitColorChange = useCallback(
    (trigger?: ColorPickerChangeTrigger) => {
      const value = colorInstanceRef.current.getFormattedColor(formatRef.current, enableAlpha);
      setInnerValue(value, {
        color: getColorObject(colorInstanceRef.current),
        trigger: trigger || "palette-saturation-brightness"
      });
      setUpdateId(window.performance.now());
    },
    [enableAlpha, setInnerValue]
  );

  useEffect(() => {
    const currentColor = colorInstanceRef.current.getFormattedColor(formatRef.current, enableAlpha);
    if (innerValue === currentColor) return;
    // 根据颜色自动切换模式
    updateColor(innerValue);
  }, [innerValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const [previewBackground, setPreviewBackground] = useState("");

  useEffect(() => {
    const inst = colorInstanceRef.current;
    const next = inst.rgba;
    setPreviewBackground(next);
  }, [innerValue]);

  /**
   * 饱和度亮度变化
   */
  const handleSatAndValueChange = ({ saturation, value }: TdColorSaturationData) => {
    const { saturation: sat, value: val } = colorInstanceRef.current;
    let changeTrigger: ColorPickerChangeTrigger = "palette-saturation-brightness";
    if (value !== val && saturation !== sat) {
      changeTrigger = "palette-saturation-brightness";
      colorInstanceRef.current.saturation = saturation;
      colorInstanceRef.current.value = value;
    } else if (saturation !== sat) {
      changeTrigger = "palette-saturation";
      colorInstanceRef.current.saturation = saturation;
    } else if (value !== val) {
      changeTrigger = "palette-brightness";
      colorInstanceRef.current.value = value;
    } else {
      return;
    }

    emitColorChange(changeTrigger);
  };

  /**
   * 色相变化
   */
  const handleHueChange = (hue: number) => {
    colorInstanceRef.current.hue = hue;
    emitColorChange("palette-hue-bar");
    onPaletteBarChange?.({
      color: getColorObject(colorInstanceRef.current)
    });
  };

  /**
   * 透明度变化
   */
  const handleAlphaChange = (alpha: number) => {
    colorInstanceRef.current.alpha = alpha;
    emitColorChange("palette-alpha-bar");
    onPaletteBarChange?.({
      color: getColorObject(colorInstanceRef.current)
    });
  };

  // 渐变与色块区域的派生数据（不直接访问 ref）

  // 系统预设颜色
  let systemColorsDerived = swatchColors;
  if (systemColorsDerived === undefined) {
    systemColorsDerived = [...DEFAULT_SYSTEM_SWATCH_COLORS];
  }

  const showSystemColors = Array.isArray(systemColorsDerived);

  const handleSwatchSetColor = (value: string, trigger: ColorPickerChangeTrigger) => {
    // 确保在渐变模式下选择纯色块，能切换回单色模式
    updateColor(value);
    emitColorChange(trigger);
  };

  return (
    <div
      className={classNames(`${baseClassName}__panel`, disabled ? STATUS.disabled : false, className)}
      onClick={(e) => e.stopPropagation()}
      style={{ ...style }}
      ref={ref}
    >
      <div className={`${baseClassName}__body`}>
        <SaturationPanel {...baseProps} onChange={handleSatAndValueChange} />
        <div className={`${baseClassName}__sliders-wrapper`}>
          <div className={`${baseClassName}__sliders`}>
            <HueSlider {...baseProps} onChange={handleHueChange} />
            {enableAlpha && <AlphaSlider {...baseProps} onChange={handleAlphaChange} />}
          </div>
          {showPrimaryColorPreview ? (
            <div className={classNames([`${baseClassName}__sliders-preview`, `${baseClassName}--bg-alpha`])}>
              <span
                className={`${baseClassName}__sliders-preview-inner`}
                style={{
                  background: previewBackground
                }}
              />
            </div>
          ) : null}
        </div>

        {/* 颜色格式输入区域 */}
        <FormatPanel
          {...baseProps}
          format={format}
          enableAlpha={enableAlpha}
          inputProps={inputProps}
          selectInputProps={selectInputProps}
          onInputChange={() => emitColorChange("input")}
        />

        {showSystemColors && (
          <div className={`${baseClassName}__swatches-wrap`}>
            {showSystemColors && (
              <SwatchesPanel
                {...baseProps}
                title={t(local.swatchColorTitle)}
                colors={systemColorsDerived}
                onSetColor={(color: string) => handleSwatchSetColor(color, "preset")}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
});

Panel.displayName = "Panel";
export default React.memo(Panel);
