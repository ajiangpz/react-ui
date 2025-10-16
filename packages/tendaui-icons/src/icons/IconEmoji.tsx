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
                d="M12 23a11 11 0 1 1 0-22 11 11 0 0 1 0 22m-6.93-9a7 7 0 0 0 13.86 0zM8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'emoji');
export default IconComponent;
