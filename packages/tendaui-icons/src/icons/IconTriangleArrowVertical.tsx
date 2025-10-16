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
            <path d="M9 0h1c0 4 1 5.5 3 7.5s3 2.5 3 4.5-1 2.5-3 4.5-3 3.5-3 7.5H9z" fill="currentColor" />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'triangle_arrow_vertical');
export default IconComponent;
