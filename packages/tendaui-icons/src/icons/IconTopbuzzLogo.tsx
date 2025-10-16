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
                d="M21.5 6.1a.3.3 0 0 0-.22-.34L4 2.01a.3.3 0 0 0-.33.22L2.5 7.8c-.04.16.06.3.21.34L8.1 9.31c.15.03.24.18.21.33L6.05 20.47c-.03.15.06.3.21.34l5.46 1.18c.15.04.3-.06.33-.22l2.26-10.82a.3.3 0 0 1 .33-.22L20 11.89c.15.04.3-.06.33-.22z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'topbuzz_logo');
export default IconComponent;
