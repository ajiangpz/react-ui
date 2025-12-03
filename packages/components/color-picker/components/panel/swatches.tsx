import React from "react";
import classNames from "classnames";
import { IconDelete as TdDeleteIcon, IconPlus as TdAddIcon } from "@tendaui/icons";
import Color from "../../utils/color-picker/color";
import useGlobalIcon from "../../../hooks/useGlobalIcon";
import { TdColorBaseProps } from "../../type";
import useCommonClassName from "../../../hooks/useCommonClassName";

export interface TdColorSwatchesProps extends TdColorBaseProps {
  colors?: string[];
  title?: string;
  editable?: boolean;
  onSetColor?: (color: string) => void;
  handleAddColor?: () => void;
}

const Swatches = (props: TdColorSwatchesProps) => {
  const { baseClassName, colors = [], editable = false, title, onChange, disabled, onSetColor, handleAddColor } = props;
  const { DeleteIcon, AddIcon } = useGlobalIcon({ DeleteIcon: TdDeleteIcon, AddIcon: TdAddIcon });
  const swatchesClass = `${baseClassName}__swatches`;
  const { STATUS: statusClassNames } = useCommonClassName();
  const isEqualCurrentColor = (color: string) => Color.compare(color, props.color.css);

  const selectedColorIndex = () => colors.findIndex((color) => isEqualCurrentColor(color));
  const handleRemoveColor = () => {
    const selectedIndex = selectedColorIndex();
    if (selectedIndex > -1) {
      const newColors = colors.filter((_, index) => index !== selectedIndex);
      onChange?.(newColors);
    }
  };

  const handleClick = (color: string) => onSetColor?.(color);

  return (
    <div className={swatchesClass}>
      {title ? (
        <h3 className={`${swatchesClass}--title`}>
          <span>{title}</span>
          {editable && (
            <div className={`${swatchesClass}--actions`}>
              <span role="button" className={`${baseClassName}__icon`} onClick={() => handleAddColor?.()}>
                <AddIcon />
              </span>
              {colors.length > 0 ? (
                <span role="button" className={`${baseClassName}__icon`} onClick={() => handleRemoveColor()}>
                  <DeleteIcon />
                </span>
              ) : null}
            </div>
          )}
        </h3>
      ) : null}
      <ul className={classNames(`${swatchesClass}--items`, "narrow-scrollbar")}>
        {colors.map((color) => (
          <li
            className={classNames(
              `${swatchesClass}--item`,
              isEqualCurrentColor(color) && editable ? statusClassNames.active : ""
            )}
            key={color}
            onClick={() => {
              if (disabled) {
                return;
              }
              handleClick(color);
            }}
          >
            <div className={classNames(`${swatchesClass}--item__color`, `${baseClassName}--bg-alpha`)}>
              <span
                className={`${swatchesClass}--item__inner`}
                style={{
                  background: color
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Swatches);
