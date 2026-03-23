import { useEffect, useMemo } from 'react';
import { isNumber } from 'lodash-es';
import { TdInputProps } from './type';

// 计算字符长度，中文算两个字符
function getCharacterLength(str: string): number;
function getCharacterLength(str: string, maxCharacter?: number): { length: number; characters: string }
function getCharacterLength(str: string, maxCharacter?: number) {
  const hasMaxCharacter = isNumber(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str,
      };
    }
    return 0;
  }
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    let currentStringLength = 0;
    if (str.charCodeAt(i) > 127) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i),
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str,
    };
  }
  return len;
}

// 计算 Unicode 长度
function getUnicodeLength(str: string): number {
  return Array.from(str).length;
}

// 限制 Unicode 最大长度
function limitUnicodeMaxLength(str: string, maxLength: number): string {
  return Array.from(str).slice(0, maxLength).join('');
}

export interface UseLengthLimitParams {
  value: string | undefined;
  maxlength: number;
  maxcharacter: number;
  allowInputOverMax: boolean;
  status: TdInputProps['status'];
  onValidate: TdInputProps['onValidate'];
}

export default function useLengthLimit(params: UseLengthLimitParams) {
  // 文本超出数量限制时，是否允许继续输入
  const getValueByLimitNumber = (inputValue: string) => {
    const { allowInputOverMax, maxlength, maxcharacter } = params;
    if (!(maxlength || maxcharacter) || allowInputOverMax || !inputValue) return inputValue;
    if (maxlength) {
      // input value could be unicode 😊
      return limitUnicodeMaxLength(inputValue, maxlength);
    }
    if (maxcharacter) {
      const r = getCharacterLength(inputValue, maxcharacter);
      if (typeof r === 'object') {
        return r.characters;
      }
    }
    return inputValue;
  };

  const limitNumber = useMemo(() => {
    const { maxlength, maxcharacter, value } = params;
    if (typeof value === 'number') return String(value);
    if (maxlength && maxcharacter) {
      console.warn('Input', 'Pick one of maxlength and maxcharacter please.');
    }
    if (maxlength) {
      const length = value?.length ? getUnicodeLength(value) : 0;
      return `${length}/${maxlength}`;
    }
    if (maxcharacter) {
      return `${getCharacterLength(value || '')}/${maxcharacter}`;
    }
    return '';
  }, [params.maxcharacter, params.maxlength, params.value]);

  const innerStatus = useMemo(() => {
    if (limitNumber) {
      const [current, total] = limitNumber.split('/');
      return Number(current) > Number(total) ? 'error' : '';
    }
    return '';
  }, [limitNumber]);

  const tStatus = useMemo(() => params.status || innerStatus, [params.status, innerStatus]);

  const onValidateChange = () => {
    params.onValidate?.({
      error: innerStatus ? 'exceed-maximum' : undefined,
    });
  };

  useEffect(() => {
    onValidateChange();
  }, [innerStatus]);

  return {
    tStatus,
    limitNumber,
    getValueByLimitNumber,
  };
}
