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
                d="M3.5 12a8 8 0 0 1 13.66-5.66c.28.28.68.71 1.09 1.16H16a1 1 0 1 0 0 2h4.5a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v1.9l-.93-.97a10 10 0 1 0 0 14.14 1 1 0 1 0-1.41-1.41A8 8 0 0 1 3.5 12"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'redo_stroked');
export default IconComponent;
