import * as React from 'react';
import { convertIcon } from '../components/Icon';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V4h6v16H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2V4h6v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'text_stroked');
export default IconComponent;
