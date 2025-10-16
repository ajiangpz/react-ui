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
                d="M12.01 4a10.5 10.5 0 0 1 10.44 11.57v.02l-.05.41v.04q-.1.66-.27 1.3l-.03.12-.09.3-.05.13q-.03.14-.1.27l-.05.14-.1.26-.06.14-.16.35q0 .02-.02.03-.23.48-.5.93c-.12.2-.39.26-.77.01l-2.02-1.35a.4.4 0 0 1-.13-.56l.1-.2c.12-.22.02-.5-.22-.59a17.4 17.4 0 0 0-11.86 0 .4.4 0 0 0-.22.6q.06.08.1.19c.12.18.06.43-.13.56l-2.2 1.47a.43.43 0 0 1-.6-.13l-.5-.93v-.03l-.16-.35-.06-.14-.1-.26-.06-.14-.1-.27-.04-.13-.09-.3q0-.06-.03-.11a13 13 0 0 1-.33-1.76v-.02A10.52 10.52 0 0 1 11.98 4zm-6.07 9.65.2-.03a21 21 0 0 1 11.76 0c.52.15 1.02-.32.88-.85a7 7 0 0 0-13.52 0 .7.7 0 0 0 .68.89z"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'dongchedi_logo');
export default IconComponent;
