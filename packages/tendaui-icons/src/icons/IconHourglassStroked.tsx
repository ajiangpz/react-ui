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
        d="M4 1a1 1 0 0 0 0 2h1v5q0 .42.3.7L8.58 12l-3.3 3.3A1 1 0 0 0 5 16v5H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-5a1 1 0 0 0-.3-.7L15.42 12l3.3-3.3A1 1 0 0 0 19 8V3h1a1 1 0 1 0 0-2H4m9.3 10.3L17 7.58V3H7v4.59l3.7 3.7a1 1 0 0 1 0 1.42L7 16.4V21h10v-4.59l-3.7-3.7a1 1 0 0 1 0-1.42M9 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
        fill="currentColor"
      />
    </svg>
  );
}
const IconComponent = convertIcon(SvgComponent, "hourglass_stroked");
export default IconComponent;
