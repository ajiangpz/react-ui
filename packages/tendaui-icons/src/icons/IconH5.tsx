import * as React from "react";
import { convertIcon } from "../components/Icon";
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
        d="M3.5 2.5C4.33 2.5 5 3.17 5 4v6.5h6V4a1.5 1.5 0 0 1 3 0v16a1.5 1.5 0 0 1-3 0v-6.5H5V20a1.5 1.5 0 0 1-3 0V4c0-.83.67-1.5 1.5-1.5"
        fill="currentColor"
      />
      <path
        d="M15.16 19.06c0 1.18 1.6 2.15 3.52 2.15 2.45 0 3.98-1.34 3.98-3.48 0-1.86-1.21-3.07-3.06-3.07-.81 0-1.52.25-1.86.66h-.15l.1-1.44h3.29c.8 0 1.24-.39 1.24-1.09s-.44-1.12-1.24-1.12h-3.92q-1.51 0-1.6 1.3L15.28 16c-.05.78.61 1.35 1.45 1.35q.46 0 .85-.23c.42-.26.86-.41 1.22-.41.67 0 1.16.43 1.16 1.1 0 .69-.51 1.15-1.22 1.15-.5 0-.92-.22-1.45-.7q-.43-.43-1-.41c-.7 0-1.13.56-1.13 1.2"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "h5");
export default IconComponent;
