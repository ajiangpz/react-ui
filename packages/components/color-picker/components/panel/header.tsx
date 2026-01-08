import React from "react";
import { COLOR_MODES } from "../../utils/color-picker";
import Radio, { RadioValue } from "../../../radio";
import { TdColorModes, TdColorPickerProps } from "../../type";

export interface ColorPanelHeaderProps extends TdColorPickerProps {
  mode?: TdColorModes;
  colorModes?: Array<TdColorModes>;
  onModeChange?: (value: RadioValue, context: { e: React.ChangeEvent<HTMLInputElement> }) => void;
  baseClassName?: string;
}

const Header = (props: ColorPanelHeaderProps) => {
  const { baseClassName = "", mode = "monochrome", colorModes, onModeChange } = props;

  const isSingleMode = colorModes?.length === 1;

  if (isSingleMode) {
    return null;
  }

  return (
    <div className={`${baseClassName}__head`}>
      <div className={`${baseClassName}__mode`}>
        <Radio.Group variant="default-filled" size="small" value={mode} onChange={onModeChange}>
          {Object.keys(COLOR_MODES).map((key) => (
            <Radio.Button key={key} value={key}>
              {COLOR_MODES[key as keyof typeof COLOR_MODES]}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default React.memo(Header);
