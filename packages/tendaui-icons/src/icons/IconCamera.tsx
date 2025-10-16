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
                d="M7.45 3.1A2 2 0 0 1 9.24 2h5.52a2 2 0 0 1 1.8 1.1L17.5 5H20a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h2.5zM9 13a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'camera');
export default IconComponent;
