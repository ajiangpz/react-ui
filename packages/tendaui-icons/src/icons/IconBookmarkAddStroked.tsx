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
                d="M6 3v16.72l4.63-2.39a3 3 0 0 1 2.74 0L18 19.72V3zM5 1a1 1 0 0 0-1 1v19.36a1 1 0 0 0 1.46.89l6.08-3.14a1 1 0 0 1 .92 0l6.08 3.14a1 1 0 0 0 1.46-.9V2a1 1 0 0 0-1-1zm3 9a1 1 0 0 1 1-1h2V7a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 0 1-1-1"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'bookmark_add_stroked');
export default IconComponent;
