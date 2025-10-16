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
                d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-11 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-5-9a1 1 0 0 1 1-1h3V8a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 0 1-1-1"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'plus_circle_stroked');
export default IconComponent;
