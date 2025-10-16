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
                d="M4.5 3c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2zm13 0h-11v18h11zM10 18a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm4.77-8.36a1 1 0 1 0-1.54-1.28l-1.8 2.16-.72-.73a1 1 0 1 0-1.42 1.42l1.5 1.5a1 1 0 0 0 1.48-.07z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'smartphone_check_stroked');
export default IconComponent;
