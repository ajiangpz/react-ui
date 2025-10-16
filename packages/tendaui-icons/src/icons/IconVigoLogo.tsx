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
                d="M10.76 1a6 6 0 0 1-3.84 5.23A6 6 0 0 1 6.7 4.4a13.6 13.6 0 0 0-4.2 9.33A9.3 9.3 0 0 0 11.85 23a9.3 9.3 0 0 0 9.35-9.26c0-3.1-1.53-6.69-3.9-9.04a6 6 0 0 1-2.43 4q.34-.91.34-1.96A5.95 5.95 0 0 0 10.76 1M9.28 9.45l-.1-.03q.06 0 .1.03m-.3 1.65v6.23c0 .65.7 1.05 1.26.72l5.35-3.12a.83.83 0 0 0 0-1.43l-5.35-3.12a.84.84 0 0 0-1.27.72"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'vigo_logo');
export default IconComponent;
