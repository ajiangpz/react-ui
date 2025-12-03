import { CSSProperties, useEffect, useState, MutableRefObject } from "react";
import type { Color } from "../utils/color-picker/color";

export interface TdColorSliderStyleParams {
  color: Color;
  value: number;
  maxValue: number;
  type: "hue" | "alpha";
}

const useStyles = (params: TdColorSliderStyleParams, panelRectRef: MutableRefObject<{ width: number }>) => {
  const { color, value, maxValue, type } = params;
  const [styles, setStyles] = useState<CSSProperties>({ left: "", color: "" });

  useEffect(() => {
    const { width } = panelRectRef.current;
    if (!width) return;

    const left = Math.round((Number(value) / Number(maxValue)) * 100);

    let thumbColor = "";
    if (type === "hue") {
      thumbColor = `hsl(${color.hue}, 100%, 50%)`;
    } else if (type === "alpha") {
      thumbColor = color.rgba;
    }

    setStyles({
      left: `${left}%`,
      color: thumbColor
    });
  }, [color.hue, color.rgba, maxValue, type, value]);

  return {
    styles
  };
};

export default useStyles;
