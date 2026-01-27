import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Popup } from "@tendaui/components";
import { handleAttach } from "../../../../common/utils";
import SegmentSelection from "../../../../common/segment-selection";
import SizeSlider from "../../../../common/size-slider";
import { CUSTOM_THEME_ID, getOptionFromLocal, modifyToken, updateLocalOption } from "../../../../common/themes";
import { fontSizeLabels, fontSizeSteps } from "../../built-in/font-size";
import "./index.scss";

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
  const [step, setStep] = useState(3);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [tokenType, setTokenType] = useState<"list" | "token">("list");
  const [segmentSelectionDisabled, setSegmentSelectionDisabled] = useState(false);
  const [tokenTypeList, setTokenTypeList] = useState<TokenItem[]>(INITIAL_TOKEN_LABELS);
  const [initTokenList, setInitTokenList] = useState<TokenItem[]>([]);
  const [ladderTypeList, setLadderTypeList] = useState<LadderItem[]>([]);
  const [initLadderList, setInitLadderList] = useState<LadderItem[]>([]);
  const isInitializingRef = React.useRef(true);

  const fontSizeLabelsMap = useMemo(() => fontSizeLabels, []);

  // 初始化 step：从 localStorage 读取
  const initStep = useCallback(() => {
    const fontStep = getOptionFromLocal("font");
    if (fontStep !== null && fontStep !== undefined) {
      const stepNum = Number(fontStep);
      if (!Number.isNaN(stepNum) && stepNum >= 1 && stepNum <= 6) {
        setStep(stepNum);
      }
    }
  }, []);

  // 初始化字体大小：读取当前样式
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
  }, []);

  // 监听 step 变化，应用预设值（类似 Vue 的 watch step）
  useEffect(() => {
    if (isInitializingRef.current) return;

    // 保存 step 到 localStorage（默认值 step=3 的时候不保存）
    updateLocalOption("font", String(step), step !== 3);
    updateLocalOption("font", "", step === 3);

    // 如果 step === 6（自定义），不需要应用预设值，直接返回
    if (step === 6 || !fontSizeSteps[step as keyof typeof fontSizeSteps]) return;

    const isCustom = step === 6;
    const newSteps = fontSizeSteps[step as keyof typeof fontSizeSteps];
    // 更新 tokenTypeList
    requestAnimationFrame(() => {
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
    });
  }, [step]);

  // 监听 tokenTypeList 变化，检查是否匹配预设值（类似 Vue 的 watch tokenTypeList）
  useEffect(() => {
    if (isInitializingRef.current || tokenTypeList.length === 0 || tokenTypeList[0].value === null) return;

    const fontSizeStepArray = Object.keys(fontSizeSteps).map(
      (v) => fontSizeSteps[Number(v) as keyof typeof fontSizeSteps]
    );

    const isMatch = fontSizeStepArray.find(
      (array) => array.filter((v, i) => v.value === (tokenTypeList[i]?.value?.trim() || "")).length === array.length
    );

    requestAnimationFrame(() => {
      if (!isMatch) {
        setSegmentSelectionDisabled(true);
      } else {
        setSegmentSelectionDisabled(false);
      }
    });
  }, [tokenTypeList]);

  // 组件挂载时初始化
  useEffect(() => {
    const init = () => {
      // 先读取当前样式
      handleInitFontSize();
      // 标记初始化完成，允许后续的 watch 逻辑执行
      isInitializingRef.current = false;
      // 然后从 localStorage 读取 step 并应用（如果有的话）
      // 注意：必须在初始化标记完成后，这样 step 的 watch 才能执行
      initStep();
    };
    // 使用 requestAnimationFrame 确保 DOM 已渲染
    const rafId = requestAnimationFrame(init);
    return () => cancelAnimationFrame(rafId);
  }, [initStep, handleInitFontSize]);

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
        // 阶梯模式传进来的是数组
        tokenName.forEach((token) => {
          modifyToken(token, res);
        });
      } else {
        // Token 模式传进来的是单个
        modifyToken(tokenName, res);
      }

      if (type === "list") {
        // 阶梯模式需要修改所有对应该梯度的值
        const fontSizeList = ladderTypeList[idx].tokens;
        // 修改 state
        setLadderTypeList((list) => {
          const updated = [...list];
          updated[idx] = { ...updated[idx], value: res };
          // 检查是否与初始值不同
          if (parseInt(initLadderList[idx]?.value || "0", 10) !== parseInt(res, 10)) {
            setSegmentSelectionDisabled(true);
            setStep(6);
          }
          return updated;
        });

        // 更新对应的 tokenTypeList
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
        // token 模式需要修改单个 token 的值
        const preVal = initTokenList[idx]?.value;
        // 检查是否与初始值不同
        if (parseInt(preVal || "0", 10) !== parseInt(res, 10)) {
          setSegmentSelectionDisabled(true);
          setStep(6);
        }
        // 修改 state
        setTokenTypeList((list) => {
          const updated = [...list];
          updated[idx] = { ...updated[idx], value: res };
          return updated;
        });

        // 同时将它从阶梯中移除
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
    [ladderTypeList, initTokenList, initLadderList]
  );

  const handleStepChange = useCallback((value: string | number) => {
    const numeric = Number(value);
    if (!Number.isNaN(numeric)) {
      setStep(numeric);
    }
  }, []);

  return (
    <div>
      <SegmentSelection
        selectOptions={STEP_MAP}
        suspendedLabels={fontSizeLabelsMap}
        value={step}
        disabled={segmentSelectionDisabled}
        onEnable={() => {
          setSegmentSelectionDisabled(false);
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
