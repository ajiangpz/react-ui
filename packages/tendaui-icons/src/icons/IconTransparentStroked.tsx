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
                d="M2 2h4v4H2zm8 4H6v4H2v4h4v4H2v4h4v-4h4v4h4v-4h4v4h4v-4h-4v-4h4v-4h-4V6h4V2h-4v4h-4V2h-4zm0 4V6h4v4zm0 4H6v-4h4zm4 0v4h-4v-4zm0 0v-4h4v4z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'transparent_stroked');
export default IconComponent;
