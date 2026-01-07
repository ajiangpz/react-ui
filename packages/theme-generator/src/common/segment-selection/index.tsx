import React, { useState, useEffect, useMemo } from "react";
import { Select, Slider } from "@tendaui/components";
import { handleAttach } from "../utils";
import type { SelectValue, SelectOption as TSelectOption } from "@tendaui/components/select/type";
import "./index.scss";

interface SelectOption {
  value: string | number;
  label?: string;
  enLabel?: string;
  disabled?: boolean;
}

interface SegmentSelectionProps {
  selectOptions: SelectOption[];
  suspendedLabels?: Record<string | number, string>;
  value?: string | number;
  disabled?: boolean;
  onChange?: (value: string | number) => void;
  onEnable?: () => void;
  children?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
}

const SegmentSelection: React.FC<SegmentSelectionProps> = ({
  selectOptions,
  suspendedLabels = {},
  value,
  disabled = false,
  onChange,
  onEnable,
  children
}) => {
  const isEn = useMemo(() => {
    return window.location.pathname.endsWith("en");
  }, []);

  const [step, setStep] = useState<string | number | undefined>(value);
  const [innerSelectOptions, setInnerSelectOptions] = useState<SelectOption[]>(selectOptions);

  useEffect(() => {
    setStep(value);
  }, [value]);

  useEffect(() => {
    if (disabled) {
      const disabledOption = selectOptions.find((v) => v.disabled);
      if (disabledOption) {
        console.log("setStep2", Number(disabledOption.value));
        setStep(Number(disabledOption.value));
      }
    }
  }, [disabled, selectOptions]);

  const handleVisibleChange = (val: boolean) => {
    if (val && disabled) {
      setInnerSelectOptions(selectOptions);
    }
  };

  const handleSliderChange = (v: number) => {
    if (disabled) return;
    setStep(v);
    onChange?.(v);
  };

  const renderLabel = () => {
    if (step !== undefined && step !== null) {
      return suspendedLabels[step];
    }
    return undefined;
  };

  const handleStepChange = (newStep: SelectValue<TSelectOption>) => {
    if (typeof newStep === "string" || typeof newStep === "number") {
      setStep(newStep);
      onChange?.(newStep);
      onEnable?.();
    }
  };

  const selectKeys = isEn ? { label: "enLabel" } : undefined;

  return (
    <div style={{ display: "flex" }}>
      <div className={`segment-panel__round ${disabled ? "disabled" : ""}`}>
        <div className="segment-panel__round-tag">{children?.left}</div>
        <div className="segment-panel__round-slider">
          {selectOptions.slice(0, 5).map((_, i) => (
            <div
              key={i}
              className="slider-split"
              style={{
                opacity: i === 0 || i === selectOptions.length - 1 ? 0 : 1
              }}
            />
          ))}
          <Slider
            min={1}
            disabled={disabled}
            max={5}
            value={step as number}
            onChange={handleSliderChange}
            label={renderLabel}
            tooltipProps={{ attach: handleAttach }}
          />
        </div>
        <div className="segment-panel__round-tag">{children?.right}</div>
      </div>
      <div className="segment-panel__select">
        <Select
          options={innerSelectOptions}
          onChange={handleStepChange}
          onPopupVisibleChange={handleVisibleChange}
          keys={selectKeys}
          value={step}
          popupProps={{ attach: handleAttach }}
        />
      </div>
    </div>
  );
};

export default SegmentSelection;
