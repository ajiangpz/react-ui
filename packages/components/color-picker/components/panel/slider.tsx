import React, { CSSProperties, useEffect, useRef } from "react";
import classNames from "classnames";
import { SLIDER_DEFAULT_WIDTH } from "../../utils/color-picker";
import useMouseEvent, { type MouseCoordinate } from "../../../hooks/useMouseEvent";
import useStyles from "../../hooks/useStyles";
import type { TdColorBaseProps } from "../../type";

export interface TdColorSliderProps extends TdColorBaseProps {
  className?: string;
  value?: number;
  maxValue?: number;
  railStyle?: CSSProperties;
  type: "hue" | "alpha";
}

const ColorSlider = (props: TdColorSliderProps) => {
  const {
    color,
    className = "",
    value = 0,
    railStyle = {},
    maxValue = 360,
    baseClassName,
    disabled,
    onChange,
    type
  } = props;
  const panelRef = useRef<HTMLDivElement>(null);
  const panelRectRef = useRef({
    width: SLIDER_DEFAULT_WIDTH
  });
  const { styles } = useStyles({ color, value, maxValue, type }, panelRectRef);

  const handleDrag = (coordinate: MouseCoordinate) => {
    if (disabled) return;
    const { width } = panelRectRef.current;
    const { x } = coordinate;
    const nextValue = Math.round((x / width) * Number(maxValue) * 100) / 100;
    console.log(nextValue);
    onChange?.(nextValue);
  };

  useMouseEvent(panelRef, {
    onDown: (_, ctx) => {
      if (disabled) return;
      panelRectRef.current.width = panelRef.current?.offsetWidth || panelRectRef.current.width;
      handleDrag(ctx.coordinate);
    },
    onMove: (_, ctx) => {
      handleDrag(ctx.coordinate);
    },
    onUp: (_, ctx) => {
      handleDrag(ctx.coordinate);
    }
  });

  useEffect(() => {
    panelRectRef.current.width = panelRef.current?.offsetWidth || SLIDER_DEFAULT_WIDTH;
  }, []);

  const paddingStyle = {
    background: `linear-gradient(90deg, rgba(0,0,0,.0) 0%, rgba(0,0,0,.0) 93%, ${props.color.rgb} 93%, ${props.color.rgb} 100%)`
  };

  return (
    <div className={classNames(`${baseClassName}__slider-wrapper`, `${baseClassName}__slider-wrapper--${type}-type`)}>
      {type === "alpha" && <div className={`${baseClassName}__slider-padding`} style={paddingStyle} />}
      <div className={classNames(`${baseClassName}__slider`, className)} ref={panelRef}>
        <div className={`${baseClassName}__rail`} style={railStyle} />
        <span className={`${baseClassName}__thumb`} role="slider" tabIndex={0} style={styles} />
      </div>
    </div>
  );
};

export default React.memo(ColorSlider);
