import * as React from 'react';
import { convertIcon } from '../components/Icon';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path d="m6 4 5-4 5 4-5 5.5z" fill="currentColor" />
            <path d="m18 6 4 5-4 5-5.5-5z" fill="currentColor" />
            <path d="m4 16-4-5 4-5 5.5 5z" fill="currentColor" />
            <path d="m16 18-5 4-5-4 5-5.5z" fill="currentColor" />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'component');
export default IconComponent;
