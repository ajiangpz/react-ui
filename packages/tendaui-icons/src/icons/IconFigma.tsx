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
                d="M6.23 15.69a4 4 0 0 1-1.52-3.21c0-1.3.53-2.36 1.5-3.18q-.26-.26-.5-.54a4.1 4.1 0 0 1 3.1-6.8h6.44a4.1 4.1 0 0 1 4.05 3.5 4 4 0 0 1-1.4 3.75l-.07.07a4.1 4.1 0 0 1 .64 5.74 4 4 0 0 1-2.58 1.52 4 4 0 0 1-2.95-.63v2.88q.02 1.22-.62 2.27a4 4 0 0 1-3.14 1.92 4.07 4.07 0 0 1-4.41-3.41 4 4 0 0 1 1.38-3.81zm6.72-7.33h2.21l.33-.01a2.29 2.29 0 0 0-.24-4.56h-2.3zm-1.84 6.4V10.2H8.8a2.29 2.29 0 0 0 .01 4.57h2.29m0-10.97H8.86q-.16 0-.33.02a2.29 2.29 0 0 0 .38 4.56H11l.1-.01zm0 12.81h-.08q-1.11 0-2.24 0a2.3 2.3 0 0 0-2.25 2.12q-.08 1.32 1 2.06 1.1.73 2.28.16a2.2 2.2 0 0 0 1.3-2.14v-2.2m1.83-4.12a2.28 2.28 0 0 0 4.58.03 2.3 2.3 0 0 0-2.26-2.32 2.3 2.3 0 0 0-2.32 2.3"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'figma');
export default IconComponent;
