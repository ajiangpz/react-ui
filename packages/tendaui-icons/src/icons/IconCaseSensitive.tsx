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
                d="M8.92 4.01a1.5 1.5 0 0 0-2.84 0l-5 14.5a1.5 1.5 0 0 0 2.84.98l1.03-2.99h5.1l1.03 2.99a1.5 1.5 0 1 0 2.84-.98zm.1 9.49H5.98L7.5 9.1zm6.98 1c0-2.03 1.22-3 2-3s2 .97 2 3-1.22 3-2 3-2-.97-2-3m2-6q1.28.02 2.28.63A1.5 1.5 0 0 1 23 10v9a1.5 1.5 0 0 1-2.72.87q-1 .61-2.28.63c-3.1 0-5-3.06-5-6s1.9-6 5-6"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'case_sensitive');
export default IconComponent;
