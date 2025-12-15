import React, { useRef, useState } from "react";
import classNames from "classnames";
import useMouseEvent, { type MouseCallback } from "../hooks/useMouseEvent";

interface SliderHandleButtonProps {
  onChange: (event: MouseCallback) => void;
  classPrefix: string;
  style: React.CSSProperties;
  hideTips: boolean;
}

const SliderHandleButton: React.FC<SliderHandleButtonProps> = ({ onChange, style, classPrefix }) => {
  const sliderNodeRef = useRef<HTMLDivElement>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const { isMoving } = useMouseEvent(sliderNodeRef, {
    onEnter() {
      setPopupVisible(true);
    },
    onDown: () => {
      setPopupVisible(true);
    },
    onMove: (e) => {
      setPopupVisible(true);
      onChange(e);
    },
    onLeave: () => {
      setPopupVisible(false);
    },
    onUp: (e) => {
      setPopupVisible(false);
      onChange(e);
    }
  });

  const handleNode = (
    <div ref={sliderNodeRef} style={style} className={`${classPrefix}-slider__button-wrapper`}>
      <div
        className={classNames(`${classPrefix}-slider__button`, {
          [`${classPrefix}-slider__button--dragging`]: isMoving
        })}
      ></div>
    </div>
  );

  return handleNode;
};

export default SliderHandleButton;
