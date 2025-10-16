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
                d="M7.5 5.5a4.5 4.5 0 0 1 9 0v.59l3.8-3.8a1 1 0 1 1 1.4 1.42l-18 18a1 1 0 0 1-1.4-1.42l3.6-3.6A8 8 0 0 1 4 11.5a1 1 0 1 1 2 0c0 1.42.5 2.73 1.32 3.76L8.4 14.2a4.5 4.5 0 0 1-.89-2.69z"
                fill="currentColor"
            />
            <path d="m12 16 4.5-4.5A4.5 4.5 0 0 1 12 16" fill="currentColor" />
            <path
                d="m10.65 17.35-1.6 1.6q1.38.54 2.95.55a8 8 0 0 0 8-8 1 1 0 1 0-2 0 6 6 0 0 1-7.35 5.85"
                fill="currentColor"
            />
            <path d="M8 21a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" fill="currentColor" />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'microphone_off');
export default IconComponent;
