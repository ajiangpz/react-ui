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
                d="M12 4.16a5.5 5.5 0 0 0-3.82-2.08 6.4 6.4 0 0 0-5.13 1.87A7 7 0 0 0 1 9.03a10.3 10.3 0 0 0 2.04 5.62c2.01 2.9 6.22 6.38 7.73 7.6.72.58 1.74.58 2.46 0 1.51-1.22 5.72-4.7 7.73-7.6A10.3 10.3 0 0 0 23 9.03a7 7 0 0 0-2.05-5.08 6.4 6.4 0 0 0-5.13-1.87c-1.44.14-2.83.8-3.82 2.08m-4.02-.09a4.4 4.4 0 0 0-3.5 1.27A5 5 0 0 0 3 9a8.3 8.3 0 0 0 1.68 4.52c1.81 2.6 5.75 5.9 7.32 7.16 1.57-1.26 5.5-4.55 7.32-7.16A8.3 8.3 0 0 0 21 8.99a5 5 0 0 0-1.48-3.65 4.4 4.4 0 0 0-3.5-1.27c-1.23.12-2.38.8-3 2.28-.38.9-1.66.9-2.04 0a3.5 3.5 0 0 0-3-2.28"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'heart_stroked');
export default IconComponent;
