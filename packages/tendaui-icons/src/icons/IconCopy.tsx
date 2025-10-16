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
            <path d="M7 4c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-1V8q0-3-3-3H7z" fill="currentColor" />
            <path d="M5 7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" fill="currentColor" />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'copy');
export default IconComponent;
