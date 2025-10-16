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
                d="M4 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm15 3a1 1 0 0 1 1 1v5.5h-6.5V4zm-8.5 0H5a1 1 0 0 0-1 1v5.5h6.5zM4 13.5V19a1 1 0 0 0 1 1h5.5v-6.5zm9.5 6.5H19a1 1 0 0 0 1-1v-5.5h-6.5z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'grid-square');
export default IconComponent;
