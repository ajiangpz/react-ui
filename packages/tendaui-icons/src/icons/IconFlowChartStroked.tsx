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
                d="M7.5 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H13V11h4.5a1 1 0 0 1 1 1v3.5H21a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1-1h2.5V13h-9v2.5H10a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1-1h2.5V12a1 1 0 0 1 1-1H11V8.5H8.5a1 1 0 0 1-1-1zm-1 14.5H4V20h5v-2.5zm11 0H15V20h5v-2.5zM9.5 4v2.5h5V4z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'flow_chart_stroked');
export default IconComponent;
