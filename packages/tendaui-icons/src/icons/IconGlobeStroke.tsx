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
                d="m9.53 20.14-.23-.38A12 12 0 0 1 7.89 16h-3.4a8.5 8.5 0 0 0 5.04 4.14m-5.9-6.64h3.92a22 22 0 0 1 0-3H3.63a9 9 0 0 0 0 3M4.5 8h3.39a12 12 0 0 1 1.64-4.14A8.5 8.5 0 0 0 4.5 8m9.97-4.14.23.38c.55.93 1.07 2.16 1.41 3.76h3.4a8.5 8.5 0 0 0-5.04-4.14m5.9 6.64h-3.92a22 22 0 0 1 0 3h3.92a9 9 0 0 0 0-3M19.5 16h-3.39a12 12 0 0 1-1.64 4.14A8.5 8.5 0 0 0 19.5 16m3.5-4a11 11 0 1 1-22 0 11 11 0 0 1 22 0M12.55 5.51q-.3-.48-.55-.8-.26.32-.55.8c-.35.6-.72 1.4-1 2.49h3.1a10 10 0 0 0-1-2.49M10 12q0 .8.06 1.5h3.88a19 19 0 0 0 0-3h-3.88Q10 11.2 10 12m.46 4a10 10 0 0 0 1 2.49q.28.48.54.8.26-.32.55-.8a10 10 0 0 0 1-2.49z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'globe_stroke');
export default IconComponent;
