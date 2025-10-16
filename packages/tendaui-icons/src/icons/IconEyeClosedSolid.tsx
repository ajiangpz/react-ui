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
                d="M21.7 3.7a1 1 0 0 0-1.4-1.4L17.3 5.26A11.6 11.6 0 0 0 12 4C5 4 1 10 1 12c0 1.18 1.38 3.73 3.94 5.64L2.3 20.3a1 1 0 1 0 1.42 1.42zM7.84 14.77l1.46-1.47Q9 12.7 9 12a3 3 0 0 1 4.3-2.7l1.46-1.47a5 5 0 0 0-6.93 6.93"
                fill="currentColor"
            />
            <path
                d="M12 20q-1.83-.01-3.38-.5l2.57-2.57q.39.07.81.07a5 5 0 0 0 4.93-5.81l3.57-3.57C22.13 9.27 23 11.07 23 12c0 2-4 8-11 8"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'eye_closed_solid');
export default IconComponent;
