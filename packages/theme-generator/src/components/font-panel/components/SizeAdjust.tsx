import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Popup } from "@tendaui/components";
import { handleAttach } from "../../../common/utils";
import SegmentSelection from "../../../common/segment-selection";
import SizeSlider from "../../../common/size-slider";
import { CUSTOM_THEME_ID, getOptionFromLocal, modifyToken, updateLocalOption } from "../../../common/Themes";
import { fontSizeLabels, fontSizeSteps } from "../built-in/font-size";
import "./SizeAdjust.scss";

const STEP_MAP = [
  { label: "超小号", enLabel: "mini", value: 1 },
  { label: "小号", enLabel: "small", value: 2 },
  { label: "默认", enLabel: "default", value: 3 },
  { label: "大号", enLabel: "large", value: 4 },
  { label: "特大号", enLabel: "max", value: 5 },
  { label: "自定义", enLabel: "customized", value: 6, disabled: true }
];

interface TokenItem {
  label: string;
  value: string | null;
  isBold?: boolean;
}

interface LadderItem {
  value: string;
  tokens: string[];
}

// 固定的 token 标签列表，用于初始化
const INITIAL_TOKEN_LABELS: TokenItem[] = [
  { label: "--td-font-size-link-small", value: null },
  { label: "--td-font-size-link-medium", value: null },
  { label: "--td-font-size-link-large", value: null },
  { label: "--td-font-size-mark-small", value: null, isBold: true },
  { label: "--td-font-size-mark-medium", value: null, isBold: true },
  { label: "--td-font-size-body-small", value: null },
  { label: "--td-font-size-body-medium", value: null },
  { label: "--td-font-size-body-large", value: null },
  { label: "--td-font-size-title-small", value: null, isBold: true },
  { label: "--td-font-size-title-medium", value: null, isBold: true },
  { label: "--td-font-size-title-large", value: null, isBold: true },
  { label: "--td-font-size-headline-small", value: null, isBold: true },
  { label: "--td-font-size-headline-medium", value: null, isBold: true },
  { label: "--td-font-size-headline-large", value: null, isBold: true },
  { label: "--td-font-size-display-medium", value: null, isBold: true },
  { label: "--td-font-size-display-large", value: null, isBold: true }
];

const SizeAdjust: React.FC = () => {
  // 使用惰性初始化，从 localStorage 读取上次选择的字体大小
  const [step, setStep] = useState(() => {
    const fontStep = getOptionFromLocal("font");
    if (fontStep) {
      const stepNum = Number(fontStep);
      // 确保 step 值在有效范围内 (1-6)
      if (!Number.isNaN(stepNum) && stepNum >= 1 && stepNum <= 6) {
        return stepNum;
      }
    }
    return 3; // 默认值
  });
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [tokenType, setTokenType] = useState<"list" | "token">("list");
  const [manuallyEnabled, setManuallyEnabled] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [tokenTypeList, setTokenTypeList] = useState<TokenItem[]>(INITIAL_TOKEN_LABELS);
  const [initTokenList, setInitTokenList] = useState<TokenItem[]>([]);
  const [ladderTypeList, setLadderTypeList] = useState<LadderItem[]>([]);
  const [initLadderList, setInitLadderList] = useState<LadderItem[]>([]);
  // 使用 ref 来跟踪是否是用户主动选择 step（而不是初始化时自动匹配的）
  const userSelectedStepRef = React.useRef(false);

  const fontSizeLabelsMap = useMemo(() => fontSizeLabels, []);

  const handleInitFontSize = useCallback(() => {
    const computedStyle = window.getComputedStyle(document.documentElement);
    const newTokenTypeList = INITIAL_TOKEN_LABELS.map((v) => ({
      ...v,
      value: computedStyle.getPropertyValue(v.label).trim() || null
    }));
    setTokenTypeList(newTokenTypeList);
    setInitTokenList(JSON.parse(JSON.stringify(newTokenTypeList)));

    // 构建阶梯模式列表
    const newLadderList: LadderItem[] = [];
    newTokenTypeList.forEach((token) => {
      if (!token.value) return;
      const listIdx = newLadderList.findIndex((v) => v.value === token.value);
      if (listIdx !== -1) {
        newLadderList[listIdx].tokens.push(token.label);
      } else {
        newLadderList.push({
          value: token.value,
          tokens: [token.label]
        });
      }
    });
    setLadderTypeList(newLadderList);
    setInitLadderList(JSON.parse(JSON.stringify(newLadderList)));

    // 检查当前的字体大小是否与某个预设的 step 匹配
    const fontSizeStepArray = Object.keys(fontSizeSteps).map(
      (v) => fontSizeSteps[Number(v) as keyof typeof fontSizeSteps]
    );
    const matchedStep = fontSizeStepArray.findIndex(
      (array) => array.filter((v, i) => v.value === newTokenTypeList[i]?.value?.trim()).length === array.length
    );

    // 如果找到匹配的预设值，更新 step 显示（但不触发应用预设值的逻辑）
    if (matchedStep !== -1) {
      const matchedStepValue = matchedStep + 1;
      // 使用函数式更新，避免依赖 step
      setStep((currentStep) => {
        // 如果当前 step 与匹配的 step 不同，更新它
        // 这会在初始化完成后触发，但 isInitialized 标志会阻止应用预设值
        return matchedStepValue !== currentStep ? matchedStepValue : currentStep;
      });
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    // 延迟初始化，确保样式表已加载
    setTimeout(() => {
      handleInitFontSize();
    }, 100);
  }, [handleInitFontSize]);

  // 应用预设字体大小值的函数
  const applyFontSizeStep = useCallback(
    (stepValue: number) => {
      if (!isInitialized) return;
      if (!fontSizeSteps[stepValue as keyof typeof fontSizeSteps]) return;

      // 始终保存 step 值，以便下次打开时能恢复上次选择
      updateLocalOption("font", String(stepValue), true);
      const isCustom = stepValue === 6;
      const newSteps = fontSizeSteps[stepValue as keyof typeof fontSizeSteps];

      setTokenTypeList((list) => {
        const updated = list.map((item) => {
          const stepItem = newSteps.find((s) => s.name === item.label);
          if (stepItem) {
            modifyToken(stepItem.name, stepItem.value, isCustom);
            return { ...item, value: stepItem.value };
          }
          return item;
        });
        setInitTokenList(JSON.parse(JSON.stringify(updated)));

        // 更新阶梯列表
        const newLadderList: LadderItem[] = [];
        updated.forEach((token) => {
          if (!token.value) return;
          const listIdx = newLadderList.findIndex((v) => v.value === token.value);
          if (listIdx !== -1) {
            newLadderList[listIdx].tokens.push(token.label);
          } else {
            newLadderList.push({
              value: token.value,
              tokens: [token.label]
            });
          }
        });
        setLadderTypeList(newLadderList);
        setInitLadderList(JSON.parse(JSON.stringify(newLadderList)));

        return updated;
      });
    },
    [isInitialized]
  );

  // 使用 useMemo 计算是否匹配预设值，避免在 useEffect 中调用 setState
  const segmentSelectionDisabled = useMemo(() => {
    const fontSizeStepArray = Object.keys(fontSizeSteps).map(
      (v) => fontSizeSteps[Number(v) as keyof typeof fontSizeSteps]
    );
    const isMatch = fontSizeStepArray.find(
      (array) => array.filter((v, i) => v.value === tokenTypeList[i]?.value?.trim()).length === array.length
    );
    return !isMatch && !manuallyEnabled && isInitialized;
  }, [tokenTypeList, manuallyEnabled, isInitialized]);

  const handleVisibleChange = useCallback(
    (visible: boolean, context: { trigger?: string } | undefined, idx: number) => {
      if (visible) {
        setHoverIdx(idx);
      } else if (context?.trigger === "document" && hoverIdx === idx) {
        setHoverIdx(null);
      }
    },
    [hoverIdx]
  );

  const handleChangeFontSize = useCallback(
    (v: number, type: "list" | "token", tokenName: string | string[], idx: number) => {
      const res = `${v}px`;
      const styleSheet = document.getElementById(CUSTOM_THEME_ID);
      if (!styleSheet) return;

      if (Array.isArray(tokenName)) {
        tokenName.forEach((token) => {
          modifyToken(token, res);
        });
      } else {
        modifyToken(tokenName, res);
      }

      if (type === "list") {
        const fontSizeList = ladderTypeList[idx].tokens;
        setLadderTypeList((list) => {
          const updated = [...list];
          updated[idx] = { ...updated[idx], value: res };
          return updated;
        });
        if (parseInt(initLadderList[idx]?.value || "0", 10) !== parseInt(res, 10)) {
          setManuallyEnabled(false);
        }

        setTokenTypeList((list) => {
          return list.map((item) => {
            if (fontSizeList.includes(item.label)) {
              return { ...item, value: res };
            }
            return item;
          });
        });
      }

      if (type === "token") {
        if (parseInt(initTokenList[idx]?.value || "0", 10) !== parseInt(res, 10)) {
          setManuallyEnabled(false);
        }
        setTokenTypeList((list) => {
          const updated = [...list];
          updated[idx] = { ...updated[idx], value: res };
          return updated;
        });

        const preVal = initTokenList[idx]?.value;
        if (res !== preVal) {
          setLadderTypeList((list) => {
            const updated = [...list];
            const preListIdx = updated.findIndex((v) => v.tokens.includes(tokenName as string));
            if (preListIdx !== -1) {
              const resIdx = updated[preListIdx].tokens.indexOf(tokenName as string);
              if (resIdx !== -1) {
                updated[preListIdx].tokens.splice(resIdx, 1);
              }
            }
            return updated;
          });
        }
      }
    },
    [ladderTypeList, initLadderList, initTokenList]
  );

  const handleStepChange = useCallback(
    (value: string | number) => {
      const numeric = Number(value);
      if (!Number.isNaN(numeric)) {
        userSelectedStepRef.current = true; // 标记为用户主动选择
        setStep(numeric);
        // 如果已初始化，立即应用预设值（在事件处理函数中，而不是 useEffect）
        if (isInitialized) {
          applyFontSizeStep(numeric);
        }
      }
    },
    [isInitialized, applyFontSizeStep]
  );

  return (
    <div>
      <SegmentSelection
        selectOptions={STEP_MAP}
        suspendedLabels={fontSizeLabelsMap}
        value={step}
        disabled={segmentSelectionDisabled}
        onEnable={() => {
          setManuallyEnabled(true);
        }}
        onChange={handleStepChange}
      >
        {{
          left: <div className="font-panel__round-tag-left">Aa</div>,
          right: <div className="font-panel__round-tag-right">Aa</div>
        }}
      </SegmentSelection>
      <div className="font-panel__token-list">
        <div className="font-panel__radio-group">
          <button
            className={`font-panel__radio-button ${tokenType === "list" ? "active" : ""}`}
            onClick={() => setTokenType("list")}
          >
            阶梯模式
          </button>
          <button
            className={`font-panel__radio-button ${tokenType === "token" ? "active" : ""}`}
            onClick={() => setTokenType("token")}
          >
            Token 模式
          </button>
        </div>
        {tokenType === "list" ? (
          <div className="font-panel__list">
            {ladderTypeList.map((item, idx) => (
              <Popup
                key={idx}
                placement="left"
                showArrow
                trigger="click"
                destroyOnClose
                attach={handleAttach}
                onVisibleChange={(visible, context) => handleVisibleChange(visible, context, idx)}
                overlayStyle={{ borderRadius: "9px" }}
                content={
                  <SizeSlider
                    title="font-size"
                    sizeValue={item.value ?? undefined}
                    onChangeFontSize={(value) => handleChangeFontSize(value, "list", item.tokens, idx)}
                  />
                }
              >
                <div
                  className="font-panel__list-item"
                  style={{
                    transition: "border-color .2s",
                    border: hoverIdx === idx ? "1px solid var(--brand-main-hover)" : "1px solid transparent"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>{item.value}</span>
                    <span>{item.value}</span>
                  </div>
                  <div
                    style={{
                      fontSize: item.value || "14px",
                      fontWeight: "normal",
                      lineHeight: `calc(${item.value || "14px"} + 8px)`
                    }}
                  >
                    TDesign
                  </div>
                </div>
              </Popup>
            ))}
          </div>
        ) : (
          <div className="font-panel__list token-type-list">
            {tokenTypeList.map((token, idx) => (
              <Popup
                key={token.label}
                placement="left"
                showArrow
                trigger="click"
                destroyOnClose
                attach={handleAttach}
                overlayStyle={{ borderRadius: "9px" }}
                onVisibleChange={(visible, context) => handleVisibleChange(visible, context, idx)}
                content={
                  <SizeSlider
                    title="font-size"
                    sizeValue={token.value ?? undefined}
                    onChangeFontSize={(value) => handleChangeFontSize(value, "token", token.label, idx)}
                  />
                }
              >
                <div
                  className="font-panel__list-item"
                  style={{
                    transition: "border-color .2s",
                    border: hoverIdx === idx ? "1px solid var(--brand-main-hover)" : "1px solid transparent"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>{token.label.replace("--td-", "")}</span>
                    <span>{token.value}</span>
                  </div>
                  <div
                    style={{
                      fontSize: `var(${token.label})`,
                      fontWeight: token.isBold ? "600" : "normal",
                      lineHeight: token.value ? `calc(${token.value} + 8px)` : "22px"
                    }}
                  >
                    TDesign
                  </div>
                </div>
              </Popup>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SizeAdjust;
