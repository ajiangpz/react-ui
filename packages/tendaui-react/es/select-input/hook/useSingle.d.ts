import React, { MouseEvent } from 'react';
import { SelectInputCommonProperties } from '../interface';
import { TdSelectInputProps } from '../type';
import { InputRef } from '../../input';
export interface RenderSelectSingleInputParams {
    tPlaceholder: string;
}
export default function useSingle(props: TdSelectInputProps): {
    inputRef: React.MutableRefObject<InputRef>;
    commonInputProps: SelectInputCommonProperties;
    singleInputValue: string;
    onInnerClear: (context: {
        e: MouseEvent<SVGSVGElement>;
    }) => void;
    renderSelectSingle: (popupVisible: boolean) => React.JSX.Element;
};
