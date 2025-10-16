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
                d="M2 3a1 1 0 0 1 2 0v18a1 1 0 1 1-2 0zm4 3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 1v2h11V7zm-1 6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 4v-2h6v2z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'align_h_left_stroked');
export default IconComponent;
