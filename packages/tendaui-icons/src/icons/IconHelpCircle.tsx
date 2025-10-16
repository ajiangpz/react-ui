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
                d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22m-.17-8.4c-.86 0-1.3-.53-1.3-1.23 0-1.05.53-1.72 1.74-2.64l.06-.05c.83-.62 1.4-1.06 1.4-1.85 0-.9-.83-1.4-1.76-1.4q-1.12 0-1.8.87c-.33.34-.6.53-1.05.53C8.38 8.83 8 8.3 8 7.7s.34-1.22.88-1.68A5.2 5.2 0 0 1 12.28 5c2.71 0 4.62 1.34 4.62 3.64 0 1.68-1 2.5-2.2 3.31-.8.59-1.17.93-1.48 1.62-.33.6-.58 1.04-1.4 1.04m-.02 4.17c-.94 0-1.71-.6-1.71-1.54s.77-1.55 1.7-1.55c.95 0 1.7.6 1.7 1.55 0 .93-.75 1.54-1.7 1.54"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'help_circle');
export default IconComponent;
