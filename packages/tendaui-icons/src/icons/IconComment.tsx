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
                d="M23 11.5a10.5 10.5 0 1 0-19.59 5.26L2.1 20.74a1 1 0 0 0 1.2 1.28l4.42-1.18A10.5 10.5 0 0 0 23 11.5M7.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'comment');
export default IconComponent;
