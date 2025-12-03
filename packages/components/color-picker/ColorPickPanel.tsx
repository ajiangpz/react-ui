import React from "react";
import ColorPanel from "./components/panel";
import { ColorPickerProps } from "./type";

const ColorPickerPanel: React.FC<ColorPickerProps> = (props) => <ColorPanel {...props} popupProps={null} />;

ColorPickerPanel.displayName = "ColorPickerPanel";

export default React.memo(ColorPickerPanel);
