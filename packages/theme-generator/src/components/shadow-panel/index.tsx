import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SegmentSelection from "../../common/segment-selection";
import { getOptionFromLocal, modifyToken, updateLocalOption } from "../../common/themes";
import { ShadowSelect, ShadowSelectDetail, ShadowSelectType, ShadowTypeDetail, ShadowTypeMap } from "./constants";
import ShadowCard from "./components/shadow-card/index";
import "./index.scss";

interface ShadowPanelProps {
  top?: number;
}

const splitShadowValue = (data: string): string[] => {
  const tempData = `${data},`;
  const shadows = tempData.split("),");
  return shadows
    .filter((shadow) => shadow)
    .map((shadow) => {
      const value = shadow.trim();
      return `${value})`;
    });
};

const ShadowPanel: React.FC<ShadowPanelProps> = ({ top = 0 }) => {
  const isEn = useMemo(() => (typeof window !== "undefined" ? window.location.pathname.endsWith("en") : false), []);
  const [viewportHeight, setViewportHeight] = useState(() => (typeof window !== "undefined" ? window.innerHeight : 0));
  const [step, setStep] = useState<ShadowSelectType>(ShadowSelectType.Default);
  const [shadowPalette, setShadowPalette] = useState<string[][]>([]);
  const initializedRef = useRef(false);

  const displayOptions = useMemo(
    () =>
      ShadowSelect.map((item) => ({
        ...item,
        value: item.value + 1
      })),
    []
  );

  const suspendedLabels = useMemo(() => {
    return displayOptions.reduce<Record<number, string>>((acc, item) => {
      acc[item.value as number] = isEn && item.enLabel ? item.enLabel : item.label;
      return acc;
    }, {});
  }, [displayOptions, isEn]);

  const contentStyle = useMemo(() => {
    const contentHeight = Math.max(0, viewportHeight - top - 96);
    return { overflowY: "scroll", height: `${contentHeight}px` };
  }, [viewportHeight, top]);

  const leftShadow = useMemo(() => ShadowSelectDetail[ShadowSelectType.Super_Light]?.[0] || "", []);
  const rightShadow = useMemo(() => ShadowSelectDetail[ShadowSelectType.Super_Deep]?.[0] || "", []);

  const getCurrentPalette = useCallback((): string[][] => {
    const docStyle = getComputedStyle(document.documentElement);
    return ShadowTypeMap.map(({ from }) => {
      const data = docStyle.getPropertyValue(from).trim();
      return splitShadowValue(data);
    });
  }, []);

  const setCurrentPalette = useCallback(() => {
    const current = getCurrentPalette();
    setShadowPalette(current);
  }, [getCurrentPalette]);

  const applyPresetPalette = useCallback((targetStep: ShadowSelectType) => {
    if (targetStep === ShadowSelectType.Self_Defined) return;
    const shadows = ShadowSelectDetail[targetStep];
    if (!shadows) return;
    setShadowPalette(shadows.map((shadow) => splitShadowValue(shadow)));
  }, []);

  const initStep = useCallback(() => {
    const shadowStep = getOptionFromLocal("shadow");
    if (shadowStep !== null && shadowStep !== undefined) {
      const numeric = Number(shadowStep);
      if (!Number.isNaN(numeric)) {
        setStep(numeric as ShadowSelectType);
        applyPresetPalette(numeric as ShadowSelectType);
      }
    }
  }, [applyPresetPalette]);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      initStep();
      setCurrentPalette();
      initializedRef.current = true;
    }, 0);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [initStep, setCurrentPalette]);

  useEffect(() => {
    if (!shadowPalette.length || !initializedRef.current) return;
    const currentPalette = getCurrentPalette();
    shadowPalette.forEach((shadow, index) => {
      const current = currentPalette[index] || [];
      const newShadow = shadow.join(", ");
      const currentShadow = current.join(", ");
      if (newShadow === currentShadow) return;
      const { name } = ShadowTypeMap[index];
      const isCustom = step === ShadowSelectType.Self_Defined;
      modifyToken(name, newShadow, isCustom);
    });
  }, [shadowPalette, getCurrentPalette, step]);

  const handleShadowChange = (value: string[], index: number) => {
    setStep(ShadowSelectType.Self_Defined);
    setShadowPalette((list) => {
      const next = [...list];
      next[index] = value;
      return next;
    });
  };

  const handleStepChange = (value: string | number) => {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return;
    const actualStep = (numeric - 1) as ShadowSelectType;
    setStep(actualStep);
    applyPresetPalette(actualStep);
    updateLocalOption("shadow", String(actualStep), actualStep !== ShadowSelectType.Default);
  };

  const uiStep = step + 1;

  const titleText = isEn ? "Shadow" : "阴影";

  return (
    <div
      className="shadow-content"
      style={{
        width: "268px",
        background: "var(--bg-color-card)",
        border: "1px solid var(--theme-component-border)",
        borderRadius: "12px"
      }}
    >
      <div className="shadow-content__content" style={contentStyle as React.CSSProperties}>
        <div className="shadow-content__main">
          <p className="shadow-content__title">{titleText}</p>
          <SegmentSelection
            selectOptions={displayOptions}
            suspendedLabels={suspendedLabels}
            value={uiStep}
            disabled={step === ShadowSelectType.Self_Defined}
            onChange={handleStepChange}
          >
            {{
              left: <div className="shadow-panel__round-box" style={{ boxShadow: leftShadow }} />,
              right: <div className="shadow-panel__round-box" style={{ boxShadow: rightShadow }} />
            }}
          </SegmentSelection>
          {shadowPalette.map((shadow, idx) => (
            <ShadowCard
              key={idx}
              shadow={shadow}
              detail={ShadowTypeDetail[idx]}
              isEn={isEn}
              onChange={(value) => handleShadowChange(value, idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShadowPanel;
