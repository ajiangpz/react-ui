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
                d="M13.35 1.88a1.5 1.5 0 0 0-2.7 0l-6 12.97a1.5 1.5 0 1 0 2.7 1.3l1.27-2.65h6.76l1.27 2.65a1.5 1.5 0 1 0 2.7-1.3zM12 6l1.94 4.5h-3.88zM3 18a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'font_color');
export default IconComponent;
