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
                d="M6.7 3.7a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.4-1.4L5.42 7h3.44v5.65c-.23-.26-.54-.5-.96-.61a3 3 0 0 0-1.54-.1c-.55.15-.93.5-1.14.96-.19.4-.22.84-.2 1.19q.01.55.1 1.07c.15.93.64 2.85 4 6.52a1 1 0 0 0 .73.32h11a1 1 0 0 0 1-1v-7.47c0-.96-.33-1.7-.83-2.21a3 3 0 0 0-1.49-.8l-5.67-.87V7H21a1 1 0 1 0 0-2h-7.2a2.5 2.5 0 0 0-4.9 0H5.4zm4.14 1.8a.5.5 0 1 1 1 0v5c0 .5.37.92.86 1q5.99.9 6.47 1 .17 0 .4.22c.12.12.27.35.27.81V20H10.3c-2.9-3.23-3.13-4.72-3.2-5.16A6 6 0 0 1 7 13.9q.12 0 .34.07l.07.1q.12.21.26.6l.05.14c.12.3.29.74.58 1.1.35.43.86.74 1.54.74v-.04c.34-.06.7-.25.82-.38.05-.08.11-.22.13-.27l.04-.15v-.08l.01-.1V5.5m-3.51 8.45"
                fill="currentColor"
            />
        </svg>
    );
}
const IconComponent = convertIcon(SvgComponent, 'finger_left_stroked');
export default IconComponent;
