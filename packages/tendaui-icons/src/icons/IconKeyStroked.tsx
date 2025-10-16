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
                d="M15.33 4a4.6 4.6 0 0 0-4.66 4.5q0 .93.36 1.74l.27.62L5 17.4V20h2.12v-2.5H9.7V15h2.57v-2.37h1l.21.01.3.07.06.02.46.1c.4.1.8.17 1.03.17 2.6 0 4.67-2.04 4.67-4.5S17.94 4 15.33 4M8.67 8.5c0-3.62 3.01-6.5 6.66-6.5A6.6 6.6 0 0 1 22 8.5a6.58 6.58 0 0 1-7.73 6.38V17H11.7v2.5H9.12V22H3v-5.4l5.96-6.2a6 6 0 0 1-.3-1.9m8.33 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'key_stroked');
export default IconComponent;
