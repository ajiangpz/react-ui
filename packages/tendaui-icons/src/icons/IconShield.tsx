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
                d="m2.68 3.8 8.75-2.63a2 2 0 0 1 1.14 0l8.74 2.62c.41.13.7.5.7.93.03 2.63-.03 11.72-2.01 14.28s-6.38 3.66-7.65 3.93q-.35.07-.7 0C10.4 22.65 6.12 21.55 4 19S1.92 7.32 1.98 4.7c0-.42.3-.78.7-.9M12 4v16s3.97-.73 5.6-2.9c1.61-2.2 1.39-11.2 1.39-11.2z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'shield');
export default IconComponent;
