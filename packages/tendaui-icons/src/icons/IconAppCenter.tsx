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
                d="M4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 11a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm9 2c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm2-13a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2h5v5h-5z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'app_center');
export default IconComponent;
