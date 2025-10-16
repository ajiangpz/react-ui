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
                d="M3 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm1 5V6h16v3zm-1 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm1 5v-3h16v3z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'section_stroked');
export default IconComponent;
