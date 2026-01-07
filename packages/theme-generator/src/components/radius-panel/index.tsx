import React, { useCallback, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { Popup } from "@tendaui/components";
import { handleAttach } from "../../common/utils";
import SegmentSelection from "../../common/segment-selection";
import SizeSlider from "../../common/size-slider";
import {
  CUSTOM_COMMON_ID_PREFIX,
  CUSTOM_EXTRA_ID,
  getOptionFromLocal,
  modifyToken,
  updateLocalOption
} from "../../common/Themes";
import { RADIUS_OPTIONS, RADIUS_STEP_ARRAY } from "./built-in/border-radius";
import "./index.css";
interface RadiusPanelProps {
  isRefresh?: boolean;
  top?: number;
}

interface RadiusTokenItem {
  token: string;
  value: number | string | null;
  enDesc: string;
  desc: string;
}

const INITIAL_RADIUS_TYPE_LIST: RadiusTokenItem[] = [
  {
    token: "--td-radius-small",
    value: null,
    enDesc: "internal scenes of basic components.",
    desc: "适用于基础组件内部场景"
  },
  {
    token: "--td-radius-default",
    value: null,
    enDesc: "basic components",
    desc: "适用于所有基础组件"
  },
  {
    token: "--td-radius-medium",
    value: null,
    enDesc: "popup and card-type components",
    desc: "适用于弹出类型和卡片类型组件"
  },
  {
    token: "--td-radius-large",
    value: null,
    enDesc: "dialog-type components",
    desc: "适用于对话框类型组件"
  },
  {
    token: "--td-radius-extraLarge",
    value: null,
    enDesc: "extra-large display-type components",
    desc: "适用于超大型展示型组件"
  },
  {
    token: "--td-radius-circle",
    value: null,
    enDesc: "Circular Components",
    desc: "适用于圆形组件"
  }
];

const RadiusPanel: React.FC<RadiusPanelProps> = ({ top = 0, isRefresh }) => {
  const isEn = useMemo(() => (typeof window !== "undefined" ? window.location.pathname.endsWith("en") : false), []);
  console.log("init");
  const [viewportHeight, setViewportHeight] = useState(() => (typeof window !== "undefined" ? window.innerHeight : 0));
  const [step, setStep] = useState(3);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [segmentSelectionDisabled, setSegmentSelectionDisabled] = useState(false);
  const [radiusTypeList, setRadiusTypeList] = useState<RadiusTokenItem[]>(INITIAL_RADIUS_TYPE_LIST);

  const radiusLabels = useMemo(() => {
    return RADIUS_OPTIONS.reduce<Record<number, string>>((acc, item) => {
      acc[item.value] = item.label;
      return acc;
    }, {});
  }, []);

  const contentStyle = useMemo(() => {
    const contentHeight = Math.max(0, viewportHeight - top - 96);
    return { overflowY: "scroll", height: `${contentHeight}px` };
  }, [viewportHeight, top]);

  const checkIfMatchesPreset = useCallback((list: RadiusTokenItem[]) => {
    if (!list.length) return false;
    const currentValues = list.map((item) => item.value);
    const existStep = RADIUS_STEP_ARRAY.find((steps) =>
      steps.every((stepValue, idx) => {
        const current = currentValues[idx];
        if (current === null || typeof current === "undefined") return false;
        const normalizedStep = typeof stepValue === "number" ? `${stepValue}px` : stepValue;
        const normalizedCurrent = typeof current === "number" ? `${current}px` : String(current).trim();
        return normalizedStep === normalizedCurrent;
      })
    );
    return !!existStep;
  }, []);

  const applyPresetValues = useCallback(
    (stepValue: number) => {
      const presetValues = RADIUS_STEP_ARRAY[stepValue - 1];
      if (!presetValues) return;
      updateLocalOption("radius", String(stepValue));
      const isCustom = stepValue === 6;
      setRadiusTypeList((list) => {
        const updated = list.map((item, idx) => {
          const preset = presetValues[idx];
          if (typeof preset === "undefined") return item;
          const formattedPreset = typeof preset === "number" ? `${preset}px` : preset;
          modifyToken(item.token, formattedPreset, isCustom);
          return {
            ...item,
            value: preset
          };
        });
        // 应用预设值后，检查是否匹配，如果不匹配则禁用
        const matches = checkIfMatchesPreset(updated);
        setSegmentSelectionDisabled(!matches);
        return updated;
      });
    },
    [checkIfMatchesPreset]
  );

  const initStep = useCallback(() => {
    const stored = getOptionFromLocal("radius");
    const numericVal = stored !== null && stored !== undefined ? Number(stored) : null;
    // 如果 localStorage 中没有值，使用默认值 3
    const stepValue = numericVal !== null && !Number.isNaN(numericVal) && numericVal >= 0 ? numericVal : 3;
    setStep(stepValue);
    // 如果是预设值（1-5），直接应用预设值
    if (stepValue >= 1 && stepValue <= 5) {
      applyPresetValues(stepValue);
    }
  }, [applyPresetValues]);

  const initRadiusToken = useCallback(() => {
    // 优先从 style 元素中读取
    const radiusStyle =
      document.getElementById(`${CUSTOM_COMMON_ID_PREFIX}-radius`) || document.getElementById(CUSTOM_EXTRA_ID);
    if (radiusStyle && radiusStyle.textContent) {
      const styleText = radiusStyle.textContent;
      setRadiusTypeList((list) => {
        const updated = list
          .map((item) => {
            const regex = new RegExp(`${item.token}\\s*:\\s*([^;]+);`);
            const match = styleText.match(regex);
            if (match) {
              const valueStr = match[1].trim();
              // 解析值：如果是数字+px，转换为数字；如果是50%，保持字符串
              const value = valueStr.endsWith("px") ? parseInt(valueStr, 10) : valueStr === "50%" ? "50%" : valueStr;
              return { ...item, value };
            }
            return item;
          })
          .filter((item) => item.value !== null);
        // 检查是否匹配预设值
        const matches = checkIfMatchesPreset(updated);
        setSegmentSelectionDisabled(!matches);
        return updated;
      });
      return;
    }
    // 如果 style 元素不存在，从实际应用的 CSS 变量中读取
    const docStyle = getComputedStyle(document.documentElement);
    setRadiusTypeList((list) => {
      const updated = list
        .map((item) => {
          const cssValue = docStyle.getPropertyValue(item.token).trim();
          if (cssValue) {
            // 移除可能的 px 单位，保留原始格式
            const value = cssValue.endsWith("px") ? parseInt(cssValue, 10) : cssValue === "50%" ? "50%" : cssValue;
            return { ...item, value };
          }
          return item;
        })
        .filter((item) => item.value !== null && item.value !== "");
      // 检查是否匹配预设值
      const matches = checkIfMatchesPreset(updated);
      setSegmentSelectionDisabled(!matches);
      return updated;
    });
  }, [checkIfMatchesPreset]);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // 确保 custom-theme 被 append 后再同步，类似 FontPanel 的处理方式
    setTimeout(() => {
      const stored = getOptionFromLocal("radius");
      const numericVal = stored !== null && stored !== undefined ? Number(stored) : null;
      const stepValue = numericVal !== null && !Number.isNaN(numericVal) && numericVal >= 0 ? numericVal : 3;

      // 先初始化 step
      initStep();

      // 只有当 step 是自定义（6）时，才需要从 style 元素读取实际值
      // 如果是预设值（1-5），applyPresetValues 已经设置了正确的值
      if (stepValue === 6) {
        initRadiusToken();
      }
    }, 100);
  }, [initStep, initRadiusToken, isRefresh]);

  const formatRadiusValue = (radius: RadiusTokenItem["value"]) => {
    if (radius === "50%") return "50%";
    if (typeof radius === "number") return `${radius}px`;
    if (typeof radius === "string") return radius;
    return undefined;
  };

  const handleVisibleChange = (visible: boolean, context: { trigger?: string } | undefined, idx: number) => {
    if (visible) {
      setHoverIdx(idx);
    } else if (context?.trigger === "document" && hoverIdx === idx) {
      setHoverIdx(null);
    }
  };

  const handleChangeRadius = (val: number, idx: number) => {
    const target = radiusTypeList[idx];
    if (!target) return;
    const normalizedValue = `${val}px`;
    modifyToken(target.token, normalizedValue);
    setRadiusTypeList((list) => {
      if (!list[idx]) return list;
      const next = [...list];
      next[idx] = { ...next[idx], value: val };
      // 检查更新后的列表是否匹配预设值
      const matches = checkIfMatchesPreset(next);
      setSegmentSelectionDisabled(!matches);
      return next;
    });
  };

  const handleStepChange = (value: string | number) => {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return;
    setStep(numeric);
    // 直接应用预设值，而不是通过 effect 响应
    applyPresetValues(numeric);
  };

  const titleText = isEn ? "Border Radius" : "圆角大小";

  return (
    <div
      className="radius-content"
      style={{
        width: "268px",
        background: "var(--bg-color-card)",
        border: "1px solid var(--theme-component-border)",
        borderRadius: "12px"
      }}
    >
      <div className="radius-content__content" style={contentStyle as React.CSSProperties}>
        <div className="radius-content__main">
          <p className="radius-content__title">{titleText}</p>
          <SegmentSelection
            selectOptions={RADIUS_OPTIONS}
            suspendedLabels={radiusLabels}
            value={step}
            disabled={segmentSelectionDisabled}
            onEnable={() => setSegmentSelectionDisabled(false)}
            onChange={handleStepChange}
          >
            {{
              left: (
                <div
                  className={classNames("radius-content__round-tag-left", {
                    disabled: segmentSelectionDisabled
                  })}
                ></div>
              ),
              right: (
                <div
                  className={classNames("radius-content__round-tag-right", {
                    disabled: segmentSelectionDisabled
                  })}
                ></div>
              )
            }}
          </SegmentSelection>
          <div className="radius-content__list">
            {radiusTypeList.map((token, idx) => (
              <Popup
                key={token.token}
                placement="left"
                showArrow
                trigger="click"
                destroyOnClose
                hideEmptyPopup
                overlayStyle={{ borderRadius: "9px" }}
                content={
                  <SizeSlider
                    title="border-radius"
                    sizeValue={token.value ?? undefined}
                    disabled={token.token === "--td-radius-circle"}
                    onChangeFontSize={(value) => handleChangeRadius(value, idx)}
                  />
                }
                attach={handleAttach}
                onVisibleChange={(visible, context) => handleVisibleChange(visible, context, idx)}
              >
                <div
                  className="radius-content__list-item-wrapper"
                  style={{
                    border: hoverIdx === idx ? "1px solid var(--brand-main)" : "1px solid transparent",
                    transition: "border-color .2s"
                  }}
                >
                  <div className="radius-content__list-item">
                    <div
                      className="radius-content__list-item-round-tag"
                      style={{ borderRadius: formatRadiusValue(token.value) }}
                    ></div>
                    <div className="radius-content__list-item-text">
                      <div className="radius-content__list-item-title">
                        {`${token.token.replace("--td-", "")}：${formatRadiusValue(token.value) ?? "--"}`}
                      </div>
                      <div className="radius-content__list-item-title bottom">{isEn ? token.enDesc : token.desc}</div>
                    </div>
                  </div>
                </div>
              </Popup>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiusPanel;
