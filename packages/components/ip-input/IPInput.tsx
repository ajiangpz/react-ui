import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
  KeyboardEvent,
  ClipboardEvent,
  ChangeEvent
} from "react";
import classNames from "classnames";
import { IconClose } from "@tendaui/icons";
import { IPInputProps, IPInputRef } from "./type";
import useDefaultProps from "../hooks/useDefaultProps";
import useControlled from "../hooks/useControlled";
import useConfig from "../hooks/useConfig";
import { ipInputDefaultProps } from "./defaultProps";
import { extractIPFromText, parseIPv4ToSegments, segmentsToIPv4 } from "./utils";
import "./style/index.js";

const IPInput = forwardRef<IPInputRef, IPInputProps>((originalProps, ref) => {
  const props = useDefaultProps<IPInputProps>(originalProps, ipInputDefaultProps as Partial<IPInputProps>);
  const { classPrefix } = useConfig();

  const {
    onChange: onChangeProp,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    allowIPv6 = false,
    allowCIDR = false,
    placeholder,
    disabled,
    readOnly = false,
    showClear = false,
    autoFocus = false,
    showSegmentSeparators = true,
    formatter,
    id,
    name,
    ariaLabel,
    segmentClassName,
    inputStyle,
    separator,
    tips,
    className,
    style
  } = props;

  // 受控/非受控值管理
  const [value, onChange] = useControlled(props, "value", onChangeProp);

  // IPv4 模式：四个输入框的状态
  const [segments, setSegments] = useState<string[]>(() => {
    if (value) {
      const parsed = parseIPv4ToSegments(value.split("/")[0]);
      return parsed;
    }
    return ["", "", "", ""];
  });

  // CIDR 掩码状态
  const [cidrMask, setCidrMask] = useState<string>(() => {
    if (value && value.includes("/")) {
      return value.split("/")[1] || "";
    }
    return "";
  });

  // IPv6 模式：单输入框状态
  const [ipv6Value, setIpv6Value] = useState<string>(() => {
    if (value && allowIPv6 && value.includes(":")) {
      return value.split("/")[0];
    }
    return "";
  });

  // 输入框引用
  const segmentRefs = useRef<(HTMLInputElement | null)[]>([]);
  const cidrRef = useRef<HTMLInputElement | null>(null);
  const ipv6Ref = useRef<HTMLInputElement | null>(null);

  // UI 状态
  const [isFocused, setIsFocused] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [focusedSegmentIndex, setFocusedSegmentIndex] = useState<number>(-1);

  // 判断当前是否为 IPv6 模式
  const isIPv6Mode = allowIPv6 && (ipv6Value || (value && value.includes(":")));

  // 同步外部 value 到内部状态
  useEffect(() => {
    if (value !== undefined) {
      if (isIPv6Mode) {
        const ip = value.split("/")[0];
        setIpv6Value(ip);
        if (value.includes("/")) {
          setCidrMask(value.split("/")[1] || "");
        } else {
          setCidrMask("");
        }
      } else {
        const parsed = parseIPv4ToSegments(value.split("/")[0]);
        setSegments(parsed);
        if (value.includes("/")) {
          setCidrMask(value.split("/")[1] || "");
        } else {
          setCidrMask("");
        }
      }
    }
  }, [value, isIPv6Mode]);

  // 获取当前完整值
  const getCurrentValue = useCallback((): string => {
    if (isIPv6Mode) {
      if (cidrMask) {
        return `${ipv6Value}/${cidrMask}`;
      }
      return ipv6Value;
    } else {
      const ip = segmentsToIPv4(segments);

      if (cidrMask) {
        return `${ip}/${cidrMask}`;
      }
      return ip;
    }
  }, [isIPv6Mode, ipv6Value, segments, cidrMask]);

  // 触发 onChange
  const triggerChange = useCallback(
    (newValue: string) => {
      // 应用格式化函数（如果有）
      const formattedValue = formatter ? formatter(newValue) : newValue;
      onChange?.(formattedValue);
    },
    [formatter, onChange]
  );

  // IPv4 段输入处理
  const handleSegmentChange = useCallback(
    (index: number, newValue: string) => {
      // 只允许数字
      const numericValue = newValue.replace(/[^\d]/g, "");

      // 限制长度
      let finalValue = numericValue;
      if (numericValue.length > 3) {
        finalValue = numericValue.slice(0, 3);
      }

      // 更新段
      const newSegments = [...segments];
      newSegments[index] = finalValue;
      setSegments(newSegments);

      // 自动跳转到下一段
      if (finalValue.length === 3 && index < 3) {
        segmentRefs.current[index + 1]?.focus();
      }

      // 组合完整 IP
      const ip = segmentsToIPv4(newSegments);
      const fullValue = cidrMask ? `${ip}/${cidrMask}` : ip;
      triggerChange(fullValue);
    },
    [segments, cidrMask, triggerChange]
  );

  // IPv4 段键盘事件
  const handleSegmentKeyDown = useCallback((index: number, e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const value = input.value;
    const cursorPos = input.selectionStart || 0;

    // 右箭头：移动到下一段或末尾
    if (e.key === "ArrowRight") {
      if (cursorPos === value.length && index < 3) {
        e.preventDefault();
        segmentRefs.current[index + 1]?.focus();
      }
    }

    // 左箭头：移动到上一段或开头
    if (e.key === "ArrowLeft") {
      if (cursorPos === 0 && index > 0) {
        e.preventDefault();
        segmentRefs.current[index - 1]?.focus();
      }
    }

    // Backspace：在开头时跳转到上一段
    if (e.key === "Backspace") {
      if (cursorPos === 0 && value === "" && index > 0) {
        e.preventDefault();
        const prevInput = segmentRefs.current[index - 1];
        if (prevInput) {
          prevInput.focus();
          prevInput.setSelectionRange(prevInput.value.length, prevInput.value.length);
        }
      }
    }

    // 点号或空格：跳转到下一段
    if ((e.key === "." || e.key === " ") && index < 3) {
      e.preventDefault();
      segmentRefs.current[index + 1]?.focus();
    }

    // Delete：删除当前字符
    if (e.key === "Delete" && cursorPos === value.length && index < 3) {
      // 可以在这里添加特殊处理
    }
  }, []);

  // IPv4 段粘贴处理
  const handleSegmentPaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasteText = e.clipboardData.getData("text/plain");
      const extracted = extractIPFromText(pasteText);

      if (extracted) {
        if (extracted.ip.includes(":")) {
          // IPv6
          if (allowIPv6) {
            setIpv6Value(extracted.ip);
            if (extracted.cidr) {
              setCidrMask(extracted.cidr);
            }
            const fullValue = extracted.cidr ? `${extracted.ip}/${extracted.cidr}` : extracted.ip;
            triggerChange(fullValue);
          }
        } else {
          // IPv4
          const parsed = parseIPv4ToSegments(extracted.ip);
          setSegments(parsed);
          if (extracted.cidr && allowCIDR) {
            setCidrMask(extracted.cidr);
          }
          const fullValue = extracted.cidr && allowCIDR ? `${extracted.ip}/${extracted.cidr}` : extracted.ip;
          triggerChange(fullValue);
        }
      }
    },
    [allowIPv6, allowCIDR, triggerChange]
  );

  // CIDR 掩码输入处理
  const handleCIDRChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newMask = e.target.value.replace(/[^\d]/g, "");
      const maxLength = isIPv6Mode ? 3 : 2;
      const finalMask = newMask.slice(0, maxLength);

      setCidrMask(finalMask);

      const ip = isIPv6Mode ? ipv6Value : segmentsToIPv4(segments);
      const fullValue = finalMask ? `${ip}/${finalMask}` : ip;
      triggerChange(fullValue);
    },
    [isIPv6Mode, ipv6Value, segments, triggerChange]
  );

  // IPv6 输入处理
  const handleIPv6Change = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setIpv6Value(newValue);

      const fullValue = cidrMask ? `${newValue}/${cidrMask}` : newValue;
      triggerChange(fullValue);
    },
    [cidrMask, triggerChange]
  );

  // IPv6 粘贴处理
  const handleIPv6Paste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasteText = e.clipboardData.getData("text/plain");
      const extracted = extractIPFromText(pasteText);

      if (extracted) {
        setIpv6Value(extracted.ip);
        if (extracted.cidr && allowCIDR) {
          setCidrMask(extracted.cidr);
        }
        const fullValue = extracted.cidr && allowCIDR ? `${extracted.ip}/${extracted.cidr}` : extracted.ip;
        triggerChange(fullValue);
      }
    },
    [allowCIDR, triggerChange]
  );

  // 焦点处理
  const handleFocus = useCallback(
    (index?: number) => {
      setIsFocused(true);
      if (index !== undefined) {
        setFocusedSegmentIndex(index);
      }
      onFocusProp?.();
    },
    [onFocusProp]
  );

  // 失焦处理
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setFocusedSegmentIndex(-1);

    const currentValue = getCurrentValue();
    onBlurProp?.(currentValue);
  }, [getCurrentValue, onBlurProp]);

  // 清空处理
  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (disabled || readOnly) return;

      setSegments(["", "", "", ""]);
      setIpv6Value("");
      setCidrMask("");
      onChange?.("");
    },
    [disabled, readOnly, onChange]
  );

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (isIPv6Mode) {
        ipv6Ref.current?.focus();
      } else {
        segmentRefs.current[0]?.focus();
      }
    },
    blur: () => {
      if (isIPv6Mode) {
        ipv6Ref.current?.blur();
      } else {
        segmentRefs.current.forEach((ref) => ref?.blur());
      }
      cidrRef.current?.blur();
    },
    clear: () => {
      setSegments(["", "", "", ""]);
      setIpv6Value("");
      setCidrMask("");
      onChange?.("");
    },
    getValue: () => getCurrentValue()
  }));

  // 自动聚焦
  useEffect(() => {
    if (autoFocus && !disabled && !readOnly) {
      if (isIPv6Mode) {
        ipv6Ref.current?.focus();
      } else {
        segmentRefs.current[0]?.focus();
      }
    }
  }, [autoFocus, disabled, readOnly, isIPv6Mode]);

  const showClearButton = showClear && isHover && getCurrentValue() && !disabled && !readOnly;

  // 分隔符
  const displaySeparator = separator || (isIPv6Mode ? ":" : ".");

  // 渲染 IPv4 模式
  const renderIPv4Input = () => {
    return (
      <div className={`${classPrefix}-ip-input__segments`}>
        {segments.map((segment, index) => {
          return (
            <React.Fragment key={index}>
              <input
                ref={(el) => {
                  segmentRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={3}
                value={segment}
                onChange={(e) => handleSegmentChange(index, e.target.value)}
                onKeyDown={(e) => handleSegmentKeyDown(index, e)}
                onPaste={handleSegmentPaste}
                onFocus={() => handleFocus(index)}
                onBlur={handleBlur}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={placeholder ? placeholder.split(".")[index] : undefined}
                className={classNames(`${classPrefix}-ip-input__segment`, segmentClassName, {
                  [`${classPrefix}-ip-input__segment--focused`]: focusedSegmentIndex === index
                })}
                style={inputStyle}
                id={index === 0 ? id : undefined}
                name={index === 0 ? name : undefined}
                aria-label={ariaLabel ? `${ariaLabel} 第 ${index + 1} 段` : `IP 地址第 ${index + 1} 段`}
              />
              {index < 3 && showSegmentSeparators && (
                <span className={`${classPrefix}-ip-input__separator`}>{displaySeparator}</span>
              )}
            </React.Fragment>
          );
        })}
        {allowCIDR && (
          <>
            <span className={`${classPrefix}-ip-input__separator`}>/</span>
            <input
              ref={cidrRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={2}
              value={cidrMask}
              onChange={handleCIDRChange}
              onFocus={() => handleFocus()}
              onBlur={handleBlur}
              disabled={disabled}
              readOnly={readOnly}
              placeholder="24"
              className={classNames(`${classPrefix}-ip-input__cidr`, segmentClassName, {
                [`${classPrefix}-ip-input__cidr--error`]: cidrMask && !/^(0|[1-9]\d?|3[0-2])$/.test(cidrMask)
              })}
              style={inputStyle}
              aria-label={ariaLabel ? `${ariaLabel} 掩码` : "CIDR 掩码"}
            />
          </>
        )}
      </div>
    );
  };

  // 渲染 IPv6 模式
  const renderIPv6Input = () => {
    return (
      <div className={`${classPrefix}-ip-input__ipv6-wrapper`}>
        <input
          ref={ipv6Ref}
          type="text"
          value={ipv6Value}
          onChange={handleIPv6Change}
          onPaste={handleIPv6Paste}
          onFocus={() => handleFocus()}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder || "2001:db8::1"}
          className={classNames(`${classPrefix}-ip-input__ipv6`, segmentClassName)}
          style={inputStyle}
          id={id}
          name={name}
          aria-label={ariaLabel || "IPv6 地址"}
        />
        {allowCIDR && (
          <>
            <span className={`${classPrefix}-ip-input__separator`}>/</span>
            <input
              ref={cidrRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={3}
              value={cidrMask}
              onChange={handleCIDRChange}
              onFocus={() => handleFocus()}
              onBlur={handleBlur}
              disabled={disabled}
              readOnly={readOnly}
              placeholder="64"
              className={classNames(`${classPrefix}-ip-input__cidr`, segmentClassName)}
              style={inputStyle}
              aria-label={ariaLabel ? `${ariaLabel} 掩码` : "CIDR 掩码"}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div
      className={classNames(`${classPrefix}-ip-input`, className, {
        [`${classPrefix}-is-disabled`]: disabled,
        [`${classPrefix}-is-readonly`]: readOnly,
        [`${classPrefix}-is-focused`]: isFocused
        // 不在这里添加 is-error，因为每个段有自己的错误状态
      })}
      style={style}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={`${classPrefix}-ip-input__wrapper`}>
        {isIPv6Mode ? renderIPv6Input() : renderIPv4Input()}
        {showClearButton && (
          <IconClose
            className={`${classPrefix}-ip-input__clear ${classPrefix}-icon`}
            onClick={handleClear}
            onMouseDown={(e) => e.stopPropagation()}
          />
        )}
      </div>
      {tips && <div className={`${classPrefix}-ip-input__tips`}>{tips}</div>}
    </div>
  );
});

IPInput.displayName = "IPInput";

export default IPInput;
