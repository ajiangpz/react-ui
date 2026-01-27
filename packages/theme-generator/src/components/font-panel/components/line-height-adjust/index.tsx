import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Popup, List, RadioGroup, Radio } from "@tendaui/components";
import { handleAttach } from "../../../../common/utils";
import SegmentSelection from "../../../../common/segment-selection";
import SizeSlider from "../../../../common/size-slider";
import { getOptionFromLocal, updateLocalOption } from "../../../../common/themes";
import { LINE_HEIGHT_OPTIONS, LINE_HEIGHT_STEPS, updateLineHeightTokens } from "../../built-in/line-height";
import "./index.scss";
import { IconShrinkScreenStroked, IconFullScreenStroked } from "@tendaui/icons";

const LineHeightAdjust: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  const [tokenType, setTokenType] = useState<"plus" | "time">("plus");
  const [step, setStep] = useState(3);
  const [lineHeightValue, setLineHeightValue] = useState(LINE_HEIGHT_STEPS[3]);
  const [segmentSelectionDisabled, setSegmentSelectionDisabled] = useState(false);

  const lineHeightLabels = useMemo(() => {
    return Object.fromEntries(LINE_HEIGHT_OPTIONS.map((item, index) => [index + 1, item.label]));
  }, []);

  const initStep = useCallback(() => {
    const localLineHeight = getOptionFromLocal("line-height");
    if (!localLineHeight) {
      // 如果没有本地存储的值，使用默认值并更新 tokens
      updateLineHeightTokens(LINE_HEIGHT_STEPS[3], "plus");
      return;
    }
    const lineHeightParts = localLineHeight.split("_");
    if (lineHeightParts[0].startsWith("time")) {
      const value = parseFloat(lineHeightParts[1]);
      setTokenType("time");
      setLineHeightValue(value);
      updateLineHeightTokens(value, "time");
      return;
    }

    const suffixVal = lineHeightParts[1];
    const stepKey = Number(
      Object.keys(LINE_HEIGHT_STEPS).find((key) => LINE_HEIGHT_STEPS[Number(key)] === Number(suffixVal))
    );

    if (stepKey >= 0) {
      setStep(stepKey);
      const value = LINE_HEIGHT_STEPS[stepKey as keyof typeof LINE_HEIGHT_STEPS];
      setLineHeightValue(value);
      updateLineHeightTokens(value, "plus");
    } else {
      const value = Number(suffixVal);
      setLineHeightValue(value);
      updateLineHeightTokens(value, "plus");
    }
  }, []);

  useEffect(() => {
    // 延迟初始化，确保样式表已加载
    const timer = setTimeout(() => {
      initStep();
    }, 100);
    return () => clearTimeout(timer);
  }, [initStep]);

  useEffect(() => {
    // 只在 plus 模式下处理 step 变化（当 tokenType 改变时）
    // step 变化由 handleStepChange 处理，这里只处理 tokenType 变化导致的同步
    if (tokenType !== "plus") return;
    if (!LINE_HEIGHT_STEPS[step as keyof typeof LINE_HEIGHT_STEPS]) return;
    const newValue = LINE_HEIGHT_STEPS[step as keyof typeof LINE_HEIGHT_STEPS];
    // 只更新外部系统，状态更新由 handleStepChange 处理
    updateLocalOption("line-height", `plus_${newValue}`, step !== 3);
    updateLineHeightTokens(newValue, "plus");
  }, [step, tokenType]);

  useEffect(() => {
    // 当 tokenType 改变时，需要重新计算并更新行高
    // 跳过初始化阶段，避免与 initStep 冲突
    const timer = setTimeout(() => {
      const defaultVal = tokenType === "time" ? 1.5 : 8;
      const localLineHeight = getOptionFromLocal("line-height");
      const lineHeightParts = localLineHeight?.split("_");

      let newValue: number;
      if (tokenType === lineHeightParts?.[0]) {
        newValue = Number(lineHeightParts[1]);
      } else {
        newValue = defaultVal;
      }

      setLineHeightValue(newValue);
      updateLocalOption("line-height", `${tokenType}_${newValue}`, step === 3);
      updateLineHeightTokens(newValue, tokenType);
    }, 0);
    return () => clearTimeout(timer);
  }, [tokenType, step]);

  const handleChangeFontSize = useCallback(
    (v: number) => {
      setLineHeightValue(v);
      const isTimeCalc = tokenType === "time";
      updateLineHeightTokens(v, tokenType);
      updateLocalOption("line-height", `${isTimeCalc ? "time" : "plus"}_${v}`);

      if (!isTimeCalc && !Object.values(LINE_HEIGHT_STEPS).includes(v)) {
        setSegmentSelectionDisabled(true);
      }
    },
    [tokenType]
  );

  const handleStepChange = useCallback(
    (value: string | number) => {
      const numeric = Number(value);
      if (!Number.isNaN(numeric)) {
        setStep(numeric);
        // 立即更新行高，避免等待 effect
        if (tokenType === "plus" && LINE_HEIGHT_STEPS[numeric as keyof typeof LINE_HEIGHT_STEPS]) {
          const newValue = LINE_HEIGHT_STEPS[numeric as keyof typeof LINE_HEIGHT_STEPS];
          setLineHeightValue(newValue);
          updateLocalOption("line-height", `plus_${newValue}`, numeric !== 3);
          updateLineHeightTokens(newValue, "plus");
        }
      }
    },
    [tokenType]
  );

  return (
    <div>
      {tokenType === "plus" && (
        <div style={{ margin: "8px 0" }}>
          <SegmentSelection
            selectOptions={LINE_HEIGHT_OPTIONS}
            suspendedLabels={lineHeightLabels}
            value={step}
            disabled={segmentSelectionDisabled}
            onEnable={() => setSegmentSelectionDisabled(false)}
            onChange={handleStepChange}
          >
            {{
              left: (
                <p>
                  <IconShrinkScreenStroked></IconShrinkScreenStroked>
                </p>
              ),
              right: (
                <p>
                  <IconFullScreenStroked></IconFullScreenStroked>
                </p>
              )
            }}
          </SegmentSelection>
        </div>
      )}
      <div className="font-panel__token-list">
        <RadioGroup
          theme="button"
          variant="default-filled"
          value={tokenType}
          onChange={(val) => setTokenType(val as "plus" | "time")}
        >
          <Radio.Button value="plus">固定模式</Radio.Button>
          <Radio.Button value="time">阶梯模式</Radio.Button>
        </RadioGroup>
        {tokenType === "plus" ? (
          <List>
            <List.ListItem
              style={{
                transition: "border-color .2s",
                border: isHover ? "1px solid var(--brand-main-hover)" : "1px solid transparent"
              }}
            >
              <Popup
                placement="left"
                showArrow
                trigger="click"
                destroyOnClose
                attach={handleAttach}
                overlayStyle={{ borderRadius: "9px" }}
                onVisibleChange={(visible) => {
                  setIsHover(visible);
                }}
                content={
                  <SizeSlider
                    title="line-height"
                    min={1}
                    max={99}
                    step={1}
                    sizeValue={lineHeightValue}
                    onChangeFontSize={handleChangeFontSize}
                  />
                }
              >
                <div>
                  <div className="code">line-height = font size + {lineHeightValue}</div>
                  <div>固定模式：行高 = 字体大小 + 固定值</div>
                </div>
              </Popup>
            </List.ListItem>
          </List>
        ) : (
          <List>
            <List.ListItem>
              <Popup
                placement="left"
                showArrow
                trigger="click"
                destroyOnClose
                attach={handleAttach}
                overlayStyle={{ borderRadius: "9px" }}
                onVisibleChange={(visible) => setIsHover(visible)}
                content={
                  <SizeSlider
                    title="line-height"
                    sizeValue={lineHeightValue}
                    min={1}
                    max={5}
                    step={0.5}
                    needInteger={false}
                    onChangeFontSize={handleChangeFontSize}
                  />
                }
              >
                <div onClick={() => console.log("onClick")}>
                  <div className="code">line-height = font size * {lineHeightValue}</div>
                  <div>阶梯模式：行高 = 字体大小 * 倍数</div>
                </div>
              </Popup>
            </List.ListItem>
          </List>
        )}
      </div>
    </div>
  );
};

export default LineHeightAdjust;
