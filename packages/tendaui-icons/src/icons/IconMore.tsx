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
            <path d="M7 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" fill="currentColor" />
            <path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" fill="currentColor" />
            <path d="M19.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" fill="currentColor" />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'more');
export default IconComponent;
